"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import {
  Upload,
  X,
  Plus,
  Save,
  Eye,
  Palette,
  FileText,
  Type,
  Smartphone,
  GripVertical,
  Trash2,
  ImagePlus,
  CheckCircle,
  Download,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { DashboardLayout } from "@/components/dashboard/layout";
import { Spinner } from "@/components/ui/spinner";
import { Checkbox } from "@/components/ui/checkbox";
import axiosClient from "@/lib/axiosClient";
import axios from "axios";

type Nullable<T> = T | null;

interface ImageFile {
  id: string;
  url: string;
  file?: File;
}

interface PdfFile {
  id: string;
  name: string;
  file?: File;
}

type FieldType = "text" | "number" | "select" | "date" | "textarea" | "checkbox";

interface CustomField {
  id: string;
  name: string;
  type: FieldType;
  required: boolean;
}

interface FormDataType {
  name: string;
  sku: string;
  category: string;
  price: string;
  description: string;
  videoUrl: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  urlSlug: string;
  isActive: boolean;
}

interface AlertType {
  type: "success" | "error" | "";
  message: string;
}

export default function NewProductPage(): React.ReactElement {
  const [formData, setFormData] = React.useState<FormDataType>({
    name: "",
    sku: "",
    category: "",
    price: "",
    description: "",
    videoUrl: "",
    metaTitle: "",
    metaDescription: "",
    keywords: "",
    urlSlug: "",
    isActive: true,
  });

  const [selectedImages, setSelectedImages] = React.useState<ImageFile[]>([]);
  const [pdfFiles, setPdfFiles] = React.useState<PdfFile[]>([]);
  const [galleryImages, setGalleryImages] = React.useState<ImageFile[]>([]);
  const [tags, setTags] = React.useState<string[]>([]);
  const [newTag, setNewTag] = React.useState<string>("");

  // Master + selected custom fields
  const [masterCustomFields, setMasterCustomFields] = React.useState<CustomField[]>([]);
  const [customFieldsLoading, setCustomFieldsLoading] = React.useState<boolean>(true);
  const [selectedCustomFieldIds, setSelectedCustomFieldIds] = React.useState<string[]>([]);
  const [customFieldValues, setCustomFieldValues] = React.useState<Record<string, string>>({});

  const [isCustomFieldModalOpen, setIsCustomFieldModalOpen] = React.useState(false);
// Landing page style settings
const [landingPageStyle, setLandingPageStyle] = React.useState({
  background: "#ffffff",
  headingSize: 24,
  paragraphSize: 14,
  buttonColor: "#0000ff",   // NEW
  textColor: "#000000",     // NEW
});


  const [landingPages] = React.useState([
    {
      id: 1,
      name: "Pro Landing Page",
      url: "https://cdn0070.qrcodechimp.com/images/templates/product-qr-code-for-fashion.png",
      views: 2543,
      conversions: 187,
      status: "published",
      lastModified: "2024-01-15",
      template: "modern"
    },
    {
      id: 2,
      name: "Premium Headphones Store",
      url: "https://cdn0070.qrcodechimp.com/images/templates/product-qr-code-for-wine.png",
      views: 1823,
      conversions: 142,
      status: "published",
      lastModified: "2024-01-18",
      template: "ecommerce"
    },
     {
      id: 3,
      name: "Pro Tempalte Landing Page",
      url: "https://cdn0070.qrcodechimp.com/images/templates/product-qr-code-for-watch.png",
      views: 1823,
      conversions: 142,
      status: "published",
      lastModified: "2024-01-18",
      template: "protemplete"
    },
    {
      id: 4,
      name: "Pro Template 2 Landing Page",
      url: "https://cdn0070.qrcodechimp.com/images/digitalCard/dbcv2/digital-business-cards-template-event.webp",
      views: 1823,
      conversions: 142,
      status: "published",
      lastModified: "2024-01-18",
      template: "protemplete2"
    }
  ]);

  const [activeTab, setActiveTab] = React.useState<string>("basic");
  const [showPreview, setShowPreview] = React.useState<boolean>(false);
  const [isSaving, setIsSaving] = React.useState<boolean>(false);
  const [isPublishing, setIsPublishing] = React.useState<boolean>(false);
  const [draftId, setDraftId] = React.useState<Nullable<string>>(null);
  const [alertMessage, setAlertMessage] = React.useState<AlertType>({ type: "", message: "" });
  const [loading, setLoading] = React.useState<boolean>(false);
  const [selectedLandingPage, setSelectedLandingPage] = React.useState<string>("");
  const [showLandingPagePreview, setShowLandingPagePreview] = React.useState(false);
  const [showResetDialog, setShowResetDialog] = React.useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = React.useState(false);
  const [successDialogMessage, setSuccessDialogMessage] = React.useState("");
  const [resetting, setResetting] = React.useState(false);
  const [previewLoading, setPreviewLoading] = React.useState(false);
  const [selectedCustomFields, setSelectedCustomFields] = React.useState<string[]>([]);
  const [selectedCustomFieldValues, setSelectedCustomFieldValues] = React.useState<Record<string, string>>({});

  const autosaveTimerRef = React.useRef<Nullable<ReturnType<typeof setTimeout>>>(null);
  const alertTimeoutRef = React.useRef<Nullable<ReturnType<typeof setTimeout>>>(null);
  const mountedRef = React.useRef<boolean>(true);

  React.useEffect(() => {
    mountedRef.current = true;
    loadDraft();
    loadMasterCustomFields();
    return () => {
      mountedRef.current = false;
      revokeAllObjectURLs();
      if (alertTimeoutRef.current) clearTimeout(alertTimeoutRef.current);
      if (autosaveTimerRef.current) clearTimeout(autosaveTimerRef.current as any);
    };
  }, []);

  const loadMasterCustomFields = async () => {
    try {
      setCustomFieldsLoading(true);
      const res = await axiosClient.get("/manageapi/customFieldshowinProduct");
      const data = res.data;
      if (data?.success && Array.isArray(data.fields)) {
        setMasterCustomFields(data.fields);

        // Default: no fields selected
        setSelectedCustomFieldIds([]);
        setCustomFieldValues({});
      } else {
        setMasterCustomFields([]);
      }
    } catch (err) {
      console.error("Error loading custom fields:", err);
      setMasterCustomFields([]);
    } finally {
      setCustomFieldsLoading(false);
    }
  };

  const showAlert = (type: AlertType["type"], message: string, duration = 5000) => {
    setAlertMessage({ type, message });
    if (alertTimeoutRef.current) clearTimeout(alertTimeoutRef.current);
    alertTimeoutRef.current = setTimeout(() => {
      setAlertMessage({ type: "", message: "" });
    }, duration);
  };

  const handleInputChange = <K extends keyof FormDataType>(field: K, value: FormDataType[K]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    queueAutoSave();
  };

  const fileToBase64 = (file: File): Promise<string | ArrayBuffer | null> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const prepareProductData = async () => {
    const imagesData = await Promise.all(
      selectedImages.map(async (img) => ({
        id: img.id,
        url: img.url,
        base64: img.file ? await fileToBase64(img.file) : img.url,
        name: img.file?.name || `image-${img.id}`,
      }))
    );

    const pdfsData = await Promise.all(
      pdfFiles.map(async (pdf) => ({
        id: pdf.id,
        name: pdf.name,
        base64: pdf.file ? await fileToBase64(pdf.file) : null,
        size: pdf.file?.size || 0,
      }))
    );

    const galleryData = await Promise.all(
      galleryImages.map(async (img) => ({
        id: img.id,
        url: img.url,
        base64: img.file ? await fileToBase64(img.file) : img.url,
        name: img.file?.name || `gallery-${img.id}`,
      }))
    );

    const customFieldsMap: Record<string, string> = {};
    const customFieldsMeta: Array<{ id: string; name: string; type: FieldType; required: boolean; value: string }> = [];

    selectedCustomFieldIds.forEach((fid) => {
      const field = masterCustomFields.find((f) => f.id === fid);
      const value = customFieldValues[fid] ?? "";
      if (field) {
        customFieldsMap[fid] = value;
        customFieldsMeta.push({
          id: field.id,
          name: field.name,
          type: field.type,
          required: field.required,
          value,
        });
      }
    });

    return {
      id: draftId || `product-${Date.now()}`,
      formData,
      images: imagesData,
      pdfs: pdfsData,
      gallery: galleryData,
      tags,
      custom_fields: customFieldsMap,
      custom_fields_meta: customFieldsMeta,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      version: "1.0",
      
    };
  };

  /* File handlers */
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    const newImages: ImageFile[] = Array.from(files).map((file, idx) => ({
      id: `img-${Date.now()}-${idx}`,
      url: URL.createObjectURL(file),
      file,
    }));
    setSelectedImages((prev) => [...prev, ...newImages]);
    showAlert("success", `${files.length} image(s) uploaded`);
    queueAutoSave();
    e.currentTarget.value = "";
  };

  const removeImage = (id: string) => {
    setSelectedImages((prev) => {
      const removed = prev.find((p) => p.id === id);
      if (removed?.url && removed.file) URL.revokeObjectURL(removed.url);
      return prev.filter((img) => img.id !== id);
    });
    queueAutoSave();
  };

  const handlePdfUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    const newPdfs: PdfFile[] = Array.from(files).map((file, idx) => ({
      id: `pdf-${Date.now()}-${idx}`,
      name: file.name,
      file,
    }));
    setPdfFiles((prev) => [...prev, ...newPdfs]);
    showAlert("success", `${files.length} PDF(s) uploaded`);
    queueAutoSave();
    e.currentTarget.value = "";
  };

  const removePdf = (id: string) => {
    setPdfFiles((prev) => prev.filter((pdf) => pdf.id !== id));
    queueAutoSave();
  };

  const handleGalleryUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    const newImages: ImageFile[] = Array.from(files).map((file, idx) => ({
      id: `gallery-${Date.now()}-${idx}`,
      url: URL.createObjectURL(file),
      file,
    }));
    setGalleryImages((prev) => [...prev, ...newImages]);
    showAlert("success", `${files.length} gallery image(s) uploaded`);
    queueAutoSave();
    e.currentTarget.value = "";
  };

  const removeGalleryImage = (id: string) => {
    setGalleryImages((prev) => {
      const removed = prev.find((p) => p.id === id);
      if (removed?.url && removed.file) URL.revokeObjectURL(removed.url);
      return prev.filter((img) => img.id !== id);
    });
    queueAutoSave();
  };

  const revokeAllObjectURLs = () => {
    [...selectedImages, ...galleryImages].forEach((i) => {
      if (i.url && i.file) try { URL.revokeObjectURL(i.url); } catch (e) {}
    });
  };

  /* Tags */
  const handleAddTag = () => {
    const tag = newTag.trim();
    if (!tag) return;
    if (!tags.includes(tag)) {
      setTags((prev) => [...prev, tag]);
      setNewTag("");
      showAlert("success", "Tag added");
      queueAutoSave();
    } else {
      showAlert("error", "Tag already exists");
    }
  };

  const removeTag = (index: number) => {
    setTags((prev) => prev.filter((_, i) => i !== index));
    queueAutoSave();
  };

  /* Custom Fields Modal Logic */
  const toggleCustomFieldSelection = (fieldId: string) => {
    setSelectedCustomFieldIds((prev) =>
      prev.includes(fieldId)
        ? prev.filter((id) => id !== fieldId)
        : [...prev, fieldId]
    );
    // Remove value if deselected
    if (customFieldValues[fieldId]) {
      setCustomFieldValues((prev) => {
        const { [fieldId]: _, ...rest } = prev;
        return rest;
      });
    }
    queueAutoSave();
  };

  const setCustomFieldValue = (fieldId: string, value: string) => {
    setCustomFieldValues((prev) => ({ ...prev, [fieldId]: value }));
    queueAutoSave();
  };

  /* Save / Publish / Preview */
  /* ---------- Save / Publish / Preview ---------- */
  const handleSaveDraft = async () => {
    setIsSaving(true);
    try {
      const productData = await prepareProductData();
      const jsonData = JSON.stringify(productData, null, 2);

      console.debug("📦 Draft JSON Data:", productData);

      localStorage.setItem("product_draft", jsonData);
      localStorage.setItem("product_draft_timestamp", new Date().toISOString());
      setDraftId(productData.id);

      const blob = new Blob([jsonData], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `product-draft-${Date.now()}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      showAlert("success", "✅ Draft saved successfully! JSON downloaded and saved locally.");
    } catch (error: any) {
      console.error("Error saving draft:", error);
      showAlert("error", "❌ Failed to save draft: " + (error?.message || error));
    } finally {
      if (mountedRef.current) setIsSaving(false);
    }
  };

  const handlePreview = async () => {
    try {
      setLoading(true);

      const productData = await prepareProductData();
      console.log("👁️ Preview Data:", productData);

      setTimeout(() => {
        setLoading(false);
        setShowPreview(true);
      }, 500);
    } catch (error) {
      setLoading(false);
      console.error("Error preparing preview:", error);
      showAlert("error", "Failed to prepare preview");
    }
  };

  const handlePublish = async () => {
    if (!formData.name || !formData.category || !formData.price) {
      showAlert("error", "❌ Please fill in all required fields (Name, Category, Price)");
      return;
    }
  
    setIsPublishing(true);
  
    try {
      const productData = await prepareProductData();
      console.log("🚀 Publishing product data:", productData);
  
      // Step 1: Upload images and PDFs to server if present
      let uploadedImages = productData.images;
      let uploadedGallery = productData.gallery;
      let uploadedPdfs = productData.pdfs;
  
      if (productData.images.length > 0 || productData.gallery.length > 0 || productData.pdfs.length > 0) {
        const totalFiles = productData.images.length + productData.gallery.length + productData.pdfs.length;
        showAlert("success", `📤 Uploading ${totalFiles} file(s)...`);
  
        // 🔥 Using AXIOS instead of fetch (upload)
        const uploadResponse = await axios.post("/api/upload-images", {
          images: productData.images,
          gallery: productData.gallery,
          pdfs: productData.pdfs,
        });
  
        console.log("✅ Files uploaded:", uploadResponse.data);
  
        // Update URLs
        uploadedImages = uploadResponse.data.data.images;
        uploadedGallery = uploadResponse.data.data.gallery;
        uploadedPdfs = uploadResponse.data.data.pdfs;
  
        const successMsg: string[] = [];
        if (uploadedImages.length > 0) successMsg.push(`${uploadedImages.length} image(s)`);
        if (uploadedGallery.length > 0) successMsg.push(`${uploadedGallery.length} gallery image(s)`);
        if (uploadedPdfs.length > 0) successMsg.push(`${uploadedPdfs.length} PDF(s)`);
  
        showAlert("success", `✅ Uploaded: ${successMsg.join(", ")}`);
      }
  
      // Step 2: Publish product with uploaded file URLs
      const finalProductData = {
        ...productData,
        images: uploadedImages,
        gallery: uploadedGallery,
        pdfs: uploadedPdfs,
        status: "published",
        landing_page_id: selectedLandingPage,
        landing_page_style: landingPageStyle
      };
  
      console.log("📦 Final product data being sent:", finalProductData);
  
      // 🔥 Proper AXIOS POST for publishing product
      const response = await axiosClient.post("/manageapi/addPrduct", finalProductData);
  
      console.log("✅ Product published successfully:", response.data);
  
      showAlert("success", "✅ Product published successfully!");
  
      // Clear local draft
      localStorage.removeItem("product_draft");
      localStorage.removeItem("product_draft_timestamp");
  
    } catch (error: any) {
      console.error("❌ Error publishing product:", error);
  
      const data = await prepareProductData();
      console.log("📊 Product data prepared (API failed):", data);
  
      showAlert("error", "❌ Failed to publish: " + (error?.message || "Unknown error"));
    } finally {
      clearForm();
      setSuccessDialogMessage("Product published successfully!");
      setShowSuccessDialog(true);
    }
  };
  

  /* ---------- Draft load / clear ---------- */
  const loadDraft = () => {
    const savedDraft = localStorage.getItem("product_draft");
    const timestamp = localStorage.getItem("product_draft_timestamp");

    if (savedDraft) {
      try {
        const data = JSON.parse(savedDraft);
        const draftDate = timestamp ? new Date(timestamp).toLocaleString() : "Unknown";
        if (data.landing_page_style) {
          setLandingPageStyle(data.landing_page_style);
        }
        if (data.landing_page_id) {
          setSelectedLandingPage(String(data.landing_page_id));
        }
        if (data.landing_page_style) {
          setLandingPageStyle(data.landing_page_style);
        }
        
        if (confirm(`Found a saved draft from ${draftDate}. Would you like to load it?`)) {
          setFormData(data.formData || formData);
          setTags(data.tags || []);
          // If draft had custom_fields (map) and custom_fields_meta, restore selections and values
          if (data.custom_fields_meta && Array.isArray(data.custom_fields_meta)) {
            setSelectedCustomFields(data.custom_fields_meta.map((m: any) => String(m.id)));
            const values: Record<string, string> = {};
            data.custom_fields_meta.forEach((m: any) => {
              values[m.id] = m.value ?? "";
            });
            setSelectedCustomFieldValues(values);
          } else if (data.custom_fields && typeof data.custom_fields === "object") {
            setSelectedCustomFields(Object.keys(data.custom_fields));
            setSelectedCustomFieldValues(data.custom_fields);
          }
          setDraftId(data.id || null);
          showAlert("success", "Draft loaded successfully!");
        }
      } catch (e) {
        console.error("Error loading draft:", e);
        showAlert("error", "Failed to load draft");
      }
    }
  };

const clearForm = () => {
  setResetting(true);

  // Stop autosave completely
  if (autosaveTimerRef.current) clearTimeout(autosaveTimerRef.current);

  revokeAllObjectURLs();

  // Clear local storage
  localStorage.removeItem("product_draft");
  localStorage.removeItem("product_draft_timestamp");

  // Reset state
  setFormData({
    name: "",
    sku: "",
    category: "",
    price: "",
    description: "",
    videoUrl: "",
    metaTitle: "",
    metaDescription: "",
    keywords: "",
    urlSlug: "",
    isActive: true,
  });

  setSelectedImages([]);
  setPdfFiles([]);
  setGalleryImages([]);
  setTags([]);

  // Reset all custom fields ON
  const allIds = masterCustomFields.map((f) => f.id);
  setSelectedCustomFields(allIds);

  const initialValues: Record<string, string> = {};
  allIds.forEach((id) => (initialValues[id] = ""));
  setSelectedCustomFieldValues(initialValues);

  setDraftId(null);
  setSelectedLandingPage("");

  setResetting(false);
  setShowResetDialog(true); // 🎉 Dialog instead of page alert
};

  /* ---------- Auto-save (debounced) ---------- */
  const queueAutoSave = () => {
    if (autosaveTimerRef.current) clearTimeout(autosaveTimerRef.current);
    autosaveTimerRef.current = setTimeout(async () => {
      try {
        const data = await prepareProductData();
        localStorage.setItem("product_draft", JSON.stringify(data, null, 2));
        localStorage.setItem("product_draft_timestamp", new Date().toISOString());
        setDraftId(data.id);
        console.debug("Auto-saved draft:", data.id);
      } catch (err) {
        console.warn("Autosave failed:", err);
      }
    }, 2500) as unknown as ReturnType<typeof setTimeout>;
  };

  /* ---------- Helpers ---------- */
  const formatPrice = (price: string) => {
    if (!price) return "0.00";
    const n = Number(price);
    if (Number.isNaN(n)) return price;
    return n.toFixed(2);
  };

  const cleanId = Number(String(selectedLandingPage || "").trim());

  const selectedPage = landingPages.find((p) => p.id === cleanId);
  
  const params = new URLSearchParams({
    template: selectedPage?.template ?? "",
    // bg: landingPageStyle.background.replace("#", ""),
    // hSize: String(landingPageStyle.headingSize),
    // pSize: String(landingPageStyle.paragraphSize),
  
    // // NEW
    // bColor: landingPageStyle.buttonColor.replace("#", ""),
    // tColor: landingPageStyle.textColor.replace("#", ""),
  });
  
  
  const cleanUrl = `http://localhost:3000/api/landing-html/${cleanId}?${params.toString()}`;
  
  
  return (
    <DashboardLayout>
      <div className="min-h-screen bg-slate-50 p-6">
        <div className="max-w-7xl mx-auto space-y-6">
          {alertMessage.message && (
            <Alert className={alertMessage.type === "error" ? "border-red-500 bg-red-50" : "border-green-500 bg-green-50"}>
              <AlertDescription className={alertMessage.type === "error" ? "text-red-800" : "text-green-800"}>
                {alertMessage.message}
              </AlertDescription>
            </Alert>
          )}

          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Add New Product</h1>
              <p className="text-sm text-slate-600 mt-1">Create a new product with QR code and landing page</p>
              {draftId && <p className="text-xs text-blue-600 mt-1">Draft ID: {draftId}</p>}
            </div>

            <div className="flex gap-2">
              <Button variant="outline" onClick={clearForm} disabled={isSaving || isPublishing} className="text-red-600 hover:text-red-700">
                Reset Form
              </Button>
              <Button variant="outline" onClick={handleSaveDraft} disabled={isSaving || isPublishing}>
                {isSaving ? <Spinner className="size-4 mr-2" /> : <Save className="h-4 w-4 mr-2" />}
                {isSaving ? "Saving..." : "Save Draft"}
              </Button>
              <Button variant="outline" className="gap-2" onClick={handlePreview} disabled={previewLoading}>
                {previewLoading ? <Spinner className="size-4" /> : <Eye className="h-4 w-4" />}
                Preview
              </Button>
              <Button className="gap-2 bg-green-600 hover:bg-gray-700" onClick={handlePublish} disabled={isSaving || isPublishing}>
                <CheckCircle className="h-4 w-4" />
                {isPublishing ? "Publishing..." : "Publish"}
              </Button>
            </div>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="basic">Product Specificaton</TabsTrigger>
              <TabsTrigger value="media">Media</TabsTrigger>
              <TabsTrigger value="seo">SEO</TabsTrigger>
            </TabsList>

            {/* BASIC INFO */}
            <TabsContent value="basic" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Product Details</CardTitle>
                  <CardDescription>Enter the basic information about your product</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Existing fields */}
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Product Name *</Label>
                      <Input id="name" placeholder="e.g., MacBook Pro 16 inch" value={formData.name} onChange={(e) => handleInputChange("name", e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="sku">SKU</Label>
                      <Input id="sku" placeholder="e.g., MBP-16-2024" value={formData.sku} onChange={(e) => handleInputChange("sku", e.target.value)} />
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="category">Category *</Label>
                      <Select value={formData.category} onValueChange={(val) => handleInputChange("category", val)}>
                        <SelectTrigger><SelectValue placeholder="Select category" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="electronics">Electronics</SelectItem>
                          <SelectItem value="audio">Audio</SelectItem>
                          <SelectItem value="wearables">Wearables</SelectItem>
                          <SelectItem value="accessories">Accessories</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="price">Price *</Label>
                      <Input id="price" type="number" placeholder="0.00" value={formData.price} onChange={(e) => handleInputChange("price", e.target.value)} min="0" step="0.01" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea id="description" placeholder="Write a detailed product description..." rows={5} value={formData.description} onChange={(e) => handleInputChange("description", e.target.value)} />
                  </div>

                  {/* Product Images */}
                  <div className="space-y-2">
                    <Label>Product Images</Label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      {selectedImages.map((img, idx) => (
                        <div key={img.id} className="relative group aspect-square">
                          <img src={img.url} alt={`Product ${idx + 1}`} className="w-full h-full rounded-lg object-cover" />
                          <button onClick={() => removeImage(img.id)} className="absolute top-2 right-2 rounded-full bg-red-500 p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            <X className="h-3 w-3 text-white" />
                          </button>
                          {idx === 0 && <Badge className="absolute bottom-2 left-2">Primary</Badge>}
                        </div>
                      ))}
                      <label className="flex aspect-square items-center justify-center rounded-lg border-2 border-dashed border-slate-300 hover:border-blue-500 transition-colors cursor-pointer">
                        <input type="file" accept="image/*" multiple onChange={handleImageUpload} className="hidden" />
                        <div className="text-center">
                          <Upload className="mx-auto h-8 w-8 text-slate-400" />
                          <p className="mt-2 text-xs text-slate-500">Upload</p>
                        </div>
                      </label>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="space-y-2">
                    <Label>Tags</Label>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {tags.map((tag, idx) => (
                        <Badge key={idx} variant="secondary" className="gap-1 flex items-center">
                          {tag}
                          <button onClick={() => removeTag(idx)} className="ml-1 rounded hover:bg-red-100 p-0.5">
                            <X className="h-3 w-3 text-red-600" />
                          </button>
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Input placeholder="Add a tag..." value={newTag} onChange={(e) => setNewTag(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); handleAddTag(); }}} />
                      <Button onClick={handleAddTag} size="sm"><Plus className="h-4 w-4 mr-1" />Add</Button>
                    </div>
                  </div>

                  {/* === NEW: Select Custom Fields Button === */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label>Product Specification Fields</Label>
                      <Button onClick={() => setIsCustomFieldModalOpen(true)} variant="outline" size="sm">
                        <Plus className="h-4 w-4 mr-2" />
                        Select Product Specification
                      </Button>
                    </div>
                   
                    {/* Selected Custom Fields Inputs */}
                    {selectedCustomFieldIds.length > 0 && (
                      <div className="space-y-4 border-t pt-4">
                        {selectedCustomFieldIds.map((fieldId) => {
                          const field = masterCustomFields.find(f => f.id === fieldId);
                          if (!field) return null;

                          return (
                            <div key={fieldId} className="space-y-2">
                              <Label className="flex items-center justify-between">
                                <span>{field.name} {field.required && <span className="text-red-500 ml-1">*</span>}</span>
                                <button
                                  onClick={() => toggleCustomFieldSelection(fieldId)}
                                  className="text-red-500 hover:text-red-700 text-sm"
                                >
                                  Remove
                                </button>
                              </Label>

                              {field.type === "textarea" ? (
                                <Textarea
                                  placeholder={`Enter ${field.name}`}
                                  value={customFieldValues[fieldId] || ""}
                                  onChange={(e) => setCustomFieldValue(fieldId, e.target.value)}
                                />
                              ) : field.type === "checkbox" ? (
                                <div className="flex items-center gap-3">
                                  <Checkbox
                                    checked={customFieldValues[fieldId] === "true"}
                                    onCheckedChange={(c) => setCustomFieldValue(fieldId, c ? "true" : "false")}
                                  />
                                  <span className="text-sm">{field.name}</span>
                                </div>
                              ) : (
                                <Input
                                  type={field.type === "number" ? "number" : field.type === "date" ? "date" : "text"}
                                  placeholder={`Enter ${field.name}`}
                                  value={customFieldValues[fieldId] || ""}
                                  onChange={(e) => setCustomFieldValue(fieldId, e.target.value)}
                                />
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}
                     <div className="flex gap-2">
                                                                  <Select
                                                                    value={selectedLandingPage}
                                                                    onValueChange={(value) => {
                                                                      const cleanId = value.trim();      // remove unwanted spaces
                                                                      setSelectedLandingPage(cleanId);   // store clean ID
                                                                      setShowLandingPagePreview(true);
                                                                    }}
                                                                  >
                                                                    <SelectTrigger id="landing-page" className="flex-1">
                                                                      <SelectValue placeholder="Select landing page" />
                                                                    </SelectTrigger>

                                                                    <SelectContent>
                                                                      {landingPages.map((page) => (
                                                                        <SelectItem key={page.id} value={String(page.id)}>
                                                                          {page.name}
                                                                        </SelectItem>
                                                                      ))}
                                                                    </SelectContent>
                                                                  </Select>

                                                   {selectedLandingPage && selectedPage && (
  <Dialog open={showLandingPagePreview} onOpenChange={setShowLandingPagePreview}>
    <DialogTrigger asChild>
      <Button variant="outline" size="icon" title="Preview & Customize">
        <Eye className="h-4 w-4" />
      </Button>
    </DialogTrigger>

    {/* FULL LARGE DIALOG */}
    <DialogContent
  className="
    !max-w-4xl 
    w-full 
    max-h-[85vh]
    !rounded-xl
    overflow-hidden
    p-0
  "
>


      {/* Header */}
      <DialogHeader className="px-8 py-6 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <DialogTitle className="text-2xl font-bold flex items-center gap-3">
          <Smartphone className="w-8 h-8" />
          Mobile Landing Page Customizer
        </DialogTitle>
        <DialogDescription className="text-lg text-blue-100 mt-1">
          {selectedPage.name} – Real-time styling & preview
        </DialogDescription>
      </DialogHeader>

      {/* Main Content: Side-by-side layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 h-[calc(92vh-120px)] bg-gray-50">
        {/* Left Sidebar: Style Controls (25%) */}
        <div className="lg:col-span-1 bg-white border-r border-gray-200 p-6 overflow-y-auto">
          <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            Styling Controls
          </h3>

          <div className="space-y-7">
            {/* Background */}
            <div>
              <label className="text-sm font-semibold text-gray-700">Background Color</label>
              <div className="flex items-center gap-4 mt-2">
                <input
                  type="color"
                  value={landingPageStyle.background}
                  onChange={(e) => setLandingPageStyle({ ...landingPageStyle, background: e.target.value })}
                  className="w-20 h-14 rounded-lg cursor-pointer border-4 border-gray-300 shadow-md"
                />
                <code className="text-xs bg-gray-100 px-3 py-2 rounded font-mono">
                  {landingPageStyle.background}
                </code>
              </div>
            </div>

            {/* Text Color */}
            <div>
              <label className="text-sm font-semibold text-gray-700">Text Color</label>
              <div className="flex items-center gap-4 mt-2">
                <input
                  type="color"
                  value={landingPageStyle.textColor}
                  onChange={(e) => setLandingPageStyle({ ...landingPageStyle, textColor: e.target.value })}
                  className="w-20 h-14 rounded-lg cursor-pointer border-4 border-gray-300 shadow-md"
                />
                <code className="text-xs bg-gray-100 px-3 py-2 rounded font-mono">
                  {landingPageStyle.textColor}
                </code>
              </div>
            </div>

            {/* Button Color */}
            <div>
              <label className="text-sm font-semibold text-gray-700">Button Color</label>
              <div className="flex items-center gap-4 mt-2">
                <input
                  type="color"
                  value={landingPageStyle.buttonColor}
                  onChange={(e) => setLandingPageStyle({ ...landingPageStyle, buttonColor: e.target.value })}
                  className="w-20 h-14 rounded-lg cursor-pointer border-4 border-gray-300 shadow-md"
                />
                <code className="text-xs bg-gray-100 px-3 py-2 rounded font-mono">
                  {landingPageStyle.buttonColor}
                </code>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-300">
              <h4 className="font-bold text-gray-800 mb-5">Typography</h4>

              {/* Heading Size */}
              <div className="mb-6">
                <div className="flex justify-between text-sm font-medium mb-2">
                  <span>Heading Size</span>
                  <span className="text-indigo-600">{landingPageStyle.headingSize}px</span>
                </div>
                <input
                  type="range"
                  min="24"
                  max="60"
                  step="2"
                  value={landingPageStyle.headingSize}
                  onChange={(e) => setLandingPageStyle({ ...landingPageStyle, headingSize: Number(e.target.value) })}
                  className="w-full h-3 bg-gray-200 rounded-full appearance-none cursor-pointer accent-indigo-600"
                />
              </div>

              {/* Paragraph Size */}
              <div>
                <div className="flex justify-between text-sm font-medium mb-2">
                  <span>Paragraph Size</span>
                  <span className="text-indigo-600">{landingPageStyle.paragraphSize}px</span>
                </div>
                <input
                  type="range"
                  min="12"
                  max="28"
                  step="1"
                  value={landingPageStyle.paragraphSize}
                  onChange={(e) => setLandingPageStyle({ ...landingPageStyle, paragraphSize: Number(e.target.value) })}
                  className="w-full h-3 bg-gray-200 rounded-full appearance-none cursor-pointer accent-indigo-600"
                />
              </div>
            </div>

            {/* Save Button */}
            <Button 
              size="lg" 
              className="w-full mt-8 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-semibold py-6 text-lg"
              onClick={() => alert("Styles saved successfully!")}
            >
              <Save className="w-5 h-5 mr-3" />
              Save All Styles
            </Button>
          </div>
        </div>

        {/* Right Side: Large Mobile Preview (75%) */}
        <div className="lg:col-span-3 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex justify-center no-scrollbar">
          <div className="text-center">
            {/* Super Realistic iPhone 15 Pro Mockup */}
            <div className="relative inline-block">
              <div className="bg-gradient-to-b from-gray-900 to-black rounded-[60px] shadow-2xl border-14 border-gray-900  h-[602px]">
                {/* Notch */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-52 h-10 bg-black rounded-full z-10 shadow-inner"></div>

                {/* Screen */}
                <div className="relative bg-gray-100 h-full rounded-[48px] overflow-hidden shadow-2xl">
                  <iframe
                    src={cleanUrl}
                    className="w-full h-full"
                    title="Live Mobile Preview"
                    sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
                    style={{
                      background: landingPageStyle.background,
                      color: landingPageStyle.textColor,
                    }}
                  />

                  {/* Optional placeholder overlay */}
                  {!cleanUrl || cleanUrl.includes("about:blank") ? (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50/90 backdrop-blur-sm">
                      <Smartphone className="w-24 h-24 text-gray-300 mb-4" />
                      <p className="text-xl font-medium text-gray-500">Your beautiful page will appear here</p>
                      <p className="text-sm text-gray-400 mt-2">Live preview updates instantly</p>
                    </div>
                  ) : null}
                </div>
              </div>

              {/* Label */}
              
            </div>
          </div>
        </div>
      </div>
    </DialogContent>
  </Dialog>
)}

                      </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
 <TabsContent value="media" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Demo Media</CardTitle>
                  <CardDescription>Add videos, PDFs, and image galleries</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="video">Video URL</Label>
                    <Input id="video" placeholder="https://youtube.com/watch?v=..." value={formData.videoUrl} onChange={(e) => handleInputChange("videoUrl", e.target.value)} />
                    <p className="text-xs text-slate-500">Supports YouTube and Vimeo embeds</p>
                  </div>

                  <div className="space-y-2">
                    <Label>PDF Documents</Label>
                    {pdfFiles.length > 0 && (
                      <div className="space-y-2 mb-4">
                        {pdfFiles.map((pdf) => (
                          <div key={pdf.id} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                            <div className="flex items-center gap-2">
                              <FileText className="h-5 w-5 text-red-500" />
                              <span className="text-sm">{pdf.name}</span>
                            </div>
                            <Button variant="ghost" size="sm" onClick={() => removePdf(pdf.id)}>
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    )}

                    <label className="flex w-full items-center justify-center rounded-lg border-2 border-dashed border-slate-300 p-8 hover:border-blue-500 transition-colors cursor-pointer">
                      <input type="file" accept=".pdf" multiple onChange={handlePdfUpload} className="hidden" />
                      <div className="text-center">
                        <FileText className="mx-auto h-12 w-12 text-slate-400" />
                        <p className="mt-2 text-sm font-medium">Upload PDF</p>
                        <p className="text-xs text-slate-500">Product specs, catalog, brochure</p>
                      </div>
                    </label>
                  </div>

                  <div className="space-y-2">
                    <Label>Image Gallery</Label>
                    <div className="grid grid-cols-3 gap-4">
                      {galleryImages.map((img) => (
                        <div key={img.id} className="relative group aspect-square">
                          <img src={img.url} alt="Gallery" className="w-full h-full rounded-lg object-cover" />
                          <button onClick={() => removeGalleryImage(img.id)} className="absolute top-2 right-2 rounded-full bg-red-500 p-1 opacity-0 group-hover:opacity-100 transition-opacity" aria-label="Remove gallery image">
                            <X className="h-3 w-3 text-white" />
                          </button>
                        </div>
                      ))}

                      <label className="flex aspect-square items-center justify-center rounded-lg border-2 border-dashed border-slate-300 hover:border-blue-500 transition-colors cursor-pointer">
                        <input type="file" accept="image/*" multiple onChange={handleGalleryUpload} className="hidden" />
                        <ImagePlus className="h-8 w-8 text-slate-400" />
                      </label>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
  {/* SEO */}
            <TabsContent value="seo" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>SEO & Settings</CardTitle>
                  <CardDescription>Optimize your product page for search engines</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="meta-title">Meta Title</Label>
                    <Input id="meta-title" placeholder="Product name - EngageIQ" value={formData.metaTitle} onChange={(e) => handleInputChange("metaTitle", e.target.value)} />
                    <p className="text-xs text-slate-500">{formData.metaTitle.length}/60 characters</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="meta-description">Meta Description</Label>
                    <Textarea id="meta-description" placeholder="Brief description for search results..." rows={3} value={formData.metaDescription} onChange={(e) => handleInputChange("metaDescription", e.target.value)} />
                    <p className="text-xs text-slate-500">{formData.metaDescription.length}/160 characters</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="keywords">Keywords</Label>
                    <Input id="keywords" placeholder="keyword1, keyword2, keyword3" value={formData.keywords} onChange={(e) => handleInputChange("keywords", e.target.value)} />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="url-slug">URL Slug</Label>
                    <Input id="url-slug" placeholder="product-name" value={formData.urlSlug} onChange={(e) => handleInputChange("urlSlug", e.target.value)} />
                  </div>
                 
                  <div className="flex items-center justify-between rounded-lg border border-slate-200 p-4">
                    <div>
                      <p className="font-medium">Product Status</p>
                      <p className="text-sm text-slate-500">Make product visible to customers</p>
                    </div>
                    <Switch checked={formData.isActive} onCheckedChange={(checked) => handleInputChange("isActive", checked)} />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            {/* === Custom Fields Selection Modal === */}
            <Dialog open={isCustomFieldModalOpen} onOpenChange={setIsCustomFieldModalOpen}>
              <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Select Custom Fields</DialogTitle>
                  <DialogDescription>
                    Choose which custom fields you want to include for this product
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-3 py-4">
                  {customFieldsLoading ? (
                    <p className="text-sm text-slate-500">Loading custom fields...</p>
                  ) : masterCustomFields.length === 0 ? (
                    <p className="text-sm text-slate-500">No custom fields available.</p>
                  ) : (
                    masterCustomFields.map((field) => (
                      <div key={field.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-slate-50">
                        <div className="flex items-center gap-3">
                          <Checkbox
                            checked={selectedCustomFieldIds.includes(field.id)}
                            onCheckedChange={() => toggleCustomFieldSelection(field.id)}
                          />
                          <div>
                            <p className="font-medium">{field.name}</p>
                            <p className="text-xs text-slate-500">Type: {field.type}</p>
                          </div>
                        </div>
                        {field.required && <span className="text-red-500 text-sm font-medium">Required</span>}
                      </div>
                    ))
                  )}
                </div>

                <div className="flex justify-end gap-2 mt-4">
                  <Button variant="outline" onClick={() => setIsCustomFieldModalOpen(false)}>Cancel</Button>
                  <Button onClick={() => setIsCustomFieldModalOpen(false)}>Done</Button>
                </div>
              </DialogContent>
            </Dialog>

            {/* Media & SEO tabs unchanged */}
            <TabsContent value="media" className="space-y-6">{/* ... same as before */}</TabsContent>
            <TabsContent value="seo" className="space-y-6">{/* ... same as before */}</TabsContent>
          </Tabs>
        </div>

        {/* Preview & Success Dialogs unchanged */}
         <Dialog open={showPreview} onOpenChange={setShowPreview}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Product Preview</DialogTitle>
              <DialogDescription>Review your product before publishing</DialogDescription>
            </DialogHeader>

            <div className="space-y-6 mt-4">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold border-b pb-2">Basic Information</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-slate-500">Product Name</p>
                    <p className="font-medium">{formData.name || "Not set"}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">SKU</p>
                    <p className="font-medium">{formData.sku || "Not set"}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Category</p>
                    <p className="font-medium capitalize">{formData.category || "Not set"}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Price</p>
                    <p className="font-medium">${formatPrice(formData.price)}</p>
                  </div>
                </div>

                {formData.description && (
                  <div>
                    <p className="text-sm text-slate-500">Description</p>
                    <p className="text-sm mt-1">{formData.description}</p>
                  </div>
                )}
              </div>

              {selectedImages.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold border-b pb-2">Product Images ({selectedImages.length})</h3>
                  <div className="grid grid-cols-4 gap-2">
                    {selectedImages.map((img, idx) => (
                      <div key={img.id} className="relative">
                        <img src={img.url} alt={`Product ${idx}`} className="rounded-lg w-full aspect-square object-cover" />
                        {idx === 0 && <Badge className="absolute top-1 left-1 text-xs">Primary</Badge>}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {tags.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold border-b pb-2">Tags ({tags.length})</h3>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag, idx) => (
                      <Badge key={idx} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </div>
              )}

              {(formData.videoUrl || pdfFiles.length > 0 || galleryImages.length > 0) && (
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold border-b pb-2">Media</h3>
                  {formData.videoUrl && (
                    <div>
                      <p className="text-sm text-slate-500">Video URL</p>
                      <p className="text-sm font-medium break-all">{formData.videoUrl}</p>
                    </div>
                  )}

                  {pdfFiles.length > 0 && (
                    <div>
                      <p className="text-sm text-slate-500 mb-2">PDF Documents ({pdfFiles.length})</p>
                      <div className="space-y-1">
                        {pdfFiles.map((pdf) => (
                          <div key={pdf.id} className="flex items-center gap-2 p-2 bg-slate-50 rounded">
                            <FileText className="h-4 w-4 text-red-500" />
                            <p className="text-sm">{pdf.name}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {galleryImages.length > 0 && (
                    <div>
                      <p className="text-sm text-slate-500 mb-2">Gallery Images ({galleryImages.length})</p>
                      <div className="grid grid-cols-4 gap-2">
                        {galleryImages.map((img) => (
                          <img key={img.id} src={img.url} alt="Gallery" className="rounded-lg w-full aspect-square object-cover" />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

             <div className="space-y-6">
                  {/* ... other preview content ... */}

                 {selectedCustomFieldIds.length > 0 && (
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold border-b pb-2">Product Specification Fields</h3>
                      {selectedCustomFieldIds.map((id) => {
                        const field = masterCustomFields.find(f => f.id === id);
                        const value = customFieldValues[id] || "";
                        return (
                          <div key={id} className="flex justify-between p-3 bg-slate-50 rounded">
                            <div>
                              <p className="font-medium">{field?.name}</p>
                              <p className="text-xs text-slate-500">Type: {field?.type}</p>
                            </div>
                            <p className="text-sm font-medium">{value || "-"}</p>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

              {(formData.metaTitle || formData.metaDescription || formData.keywords || formData.urlSlug) && (
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold border-b pb-2">SEO Settings</h3>
                  {formData.metaTitle && (
                    <div>
                      <p className="text-sm text-slate-500">Meta Title</p>
                      <p className="text-sm font-medium">{formData.metaTitle}</p>
                    </div>
                  )}
                  {formData.metaDescription && (
                    <div>
                      <p className="text-sm text-slate-500">Meta Description</p>
                      <p className="text-sm">{formData.metaDescription}</p>
                    </div>
                  )}
                  {formData.keywords && (
                    <div>
                      <p className="text-sm text-slate-500">Keywords</p>
                      <p className="text-sm">{formData.keywords}</p>
                    </div>
                  )}
                  {formData.urlSlug && (
                    <div>
                      <p className="text-sm text-slate-500">URL Slug</p>
                      <p className="text-sm font-mono bg-slate-100 px-2 py-1 rounded">{formData.urlSlug}</p>
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <p className="text-sm text-slate-500">Status:</p>
                    <Badge variant={formData.isActive ? "default" : "secondary"}>{formData.isActive ? "Active" : "Inactive"}</Badge>
                  </div>
                </div>
              )}

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-800">
                  <strong>Summary:</strong> {selectedImages.length} product images, {pdfFiles.length} PDFs, {galleryImages.length} gallery images, {tags.length} tags, {selectedCustomFields.length} custom fields
                </p>
              </div>
            </div>

            <div className="flex justify-end gap-2 mt-6 pt-4 border-t">
              <Button variant="outline" onClick={() => setShowPreview(false)}>Close</Button>

              <Button onClick={async () => {
                setShowPreview(false);
                const data = await prepareProductData();
                const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `product-preview-${Date.now()}.json`;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
              }} variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Download JSON
              </Button>

              <Button onClick={() => { setShowPreview(false); handlePublish(); }}>
                <CheckCircle className="h-4 w-4 mr-2" />
                Publish Now
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </DashboardLayout>
  );
}