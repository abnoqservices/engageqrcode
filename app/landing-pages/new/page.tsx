"use client";

import * as React from "react";
import { DashboardLayout } from "@/components/dashboard/layout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { GripVertical } from "lucide-react";
import { useParams } from "next/navigation";

import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

// -----------------------------
// Sortable Item Component
// -----------------------------
function SortableItem({ item, toggle }: { item: any; toggle: any }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: item.section });

  const style = { transform: CSS.Transform.toString(transform), transition };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="flex items-center justify-between rounded-lg border border-slate-200 p-3 bg-white"
    >
      <div className="flex items-center gap-3">
        <GripVertical
          className="h-4 w-4 text-muted-foreground cursor-grab"
          {...attributes}
          {...listeners}
        />
        <span className="text-sm font-medium">{item.section}</span>
      </div>
      <Switch checked={item.enabled} onCheckedChange={() => toggle(item.section)} />
    </div>
  );
}

// -----------------------------
// Mobile Frame
// -----------------------------
const MobileFrame = ({ url }: { url: string }) => {
  return (
    <div className="w-[330px] h-[650px] mx-auto rounded-[45px] bg-black shadow-xl relative border-[10px] border-black overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-3xl z-20"></div>

      <div className="w-[105%] h-full overflow-scroll no-scrollbar">
        <iframe src={url} className="w-full h-full" style={{ border: "none" }} />
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

// -----------------------------
// Main Component
// -----------------------------
export default function NewLandingPagePage() {
  const params = useParams();
  const id = params?.id;
  const isEditMode = Boolean(id);

  // Dummy data for EDIT mode
  const dummySaved = {
    userId: 10,
    templateName: "corporate",
    sections: [
      { "section": "Hero Banner", "enabled": true },
  

    // Customer Reviews (NOT in SECTION_MAP → removed)

    // Product Highlights (NOT in SECTION_MAP → removed)

    { "section": "Featured Products", "enabled": true },

    // Special Offers (NOT in SECTION_MAP → removed)

    { "section": "About Brand", "enabled": true },
    { "section": "Product Spotlight", "enabled": true },
    { "section": "Our Collection", "enabled": true },
    { "section": "Video Demo", "enabled": true },
    { "section": "Join Club", "enabled": true },
    { "section": "Natural Ingredients", "enabled": true },
    { "section": "Social Media", "enabled": true },
    { "section": "Contact Form", "enabled": true },
    { "section": "Rate Experience", "enabled": true },
    { "section": "Header Logo", "enabled": true },
 
   
    ],
    styles: {
      primaryColor: "#ff0000",
      backgroundColor: "#f7f7f7",
      textColor: "#a97d38",
      headlineSize: 32,
      paragraphSize: 18,
    },
  };

  // Default for NEW mode
  const defaultSections = [
    { "section": "Hero Banner", "enabled": true },
  

    // Customer Reviews (NOT in SECTION_MAP → removed)

    // Product Highlights (NOT in SECTION_MAP → removed)

    { "section": "Featured Products", "enabled": true },

    // Special Offers (NOT in SECTION_MAP → removed)

    { "section": "About Brand", "enabled": true },
    { "section": "Product Spotlight", "enabled": true },
    { "section": "Our Collection", "enabled": true },
    { "section": "Video Demo", "enabled": true },
    { "section": "Join Club", "enabled": true },
    { "section": "Natural Ingredients", "enabled": true },
    { "section": "Social Media", "enabled": true },
    { "section": "Contact Form", "enabled": true },
    { "section": "Rate Experience", "enabled": true },
    { "section": "Header Logo", "enabled": true },

  
  ];

  const defaultStyles = {
    primaryColor: "#091144",
    backgroundColor: "#000000",
    textColor: "#a97d38",
    headlineSize: 28,
    paragraphSize: 16,
  };

  const [sections, setSections] = React.useState<any[]>([]);
  const [styles, setStyles] = React.useState<any>({});
  const [templateName, setTemplateName] = React.useState("modern");
  const [ready, setReady] = React.useState(false);

  // Load initial data
  React.useEffect(() => {
    if (isEditMode) {
      setSections(dummySaved.sections);
      setStyles(dummySaved.styles);
      setTemplateName(dummySaved.templateName);
    } else {
      setSections(defaultSections);
      setStyles(defaultStyles);
      setTemplateName("modern");
    }
    setReady(true);
  }, [isEditMode]);

  // Toggle enabled
  const toggleEnabled = (name: string) => {
    setSections((prev) =>
      prev.map((s) => (s.section === name ? { ...s, enabled: !s.enabled } : s))
    );
  };

  // Sorting
  const sensors = useSensors(useSensor(PointerSensor));

  const onDragEnd = (event: any) => {
    const { active, over } = event;
    if (!over) return;

    if (active.id !== over.id) {
      setSections((prev) => {
        const oldIndex = prev.findIndex((s) => s.section === active.id);
        const newIndex = prev.findIndex((s) => s.section === over.id);
        return arrayMove(prev, oldIndex, newIndex);
      });
    }
  };

  // Prepare Preview Data
  const userId = isEditMode ? dummySaved.userId : 1;
  const baseUrl = typeof window !== "undefined" ? window.location.origin : "";

  const previewPayload = ready
    ? btoa(
        JSON.stringify({
          userId,
          templateName,
          sections,
          styles,
        })
      )
    : "";

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold mt-4">
          {isEditMode ? "Edit Landing Page" : "Create Landing Page"}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4">
          {/* LEFT */}
          <Card>
            <CardHeader>
              <CardTitle>Sections</CardTitle>
              <CardDescription>Enable, disable, reorder sections</CardDescription>
            </CardHeader>

            <CardContent>
              <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={onDragEnd}>
                <SortableContext items={sections.map((s) => s.section)} strategy={verticalListSortingStrategy}>
                  <div className="space-y-2">
                    {sections.map((s) => (
                      <SortableItem key={s.section} item={s} toggle={toggleEnabled} />
                    ))}
                  </div>
                </SortableContext>
              </DndContext>

              {/* Styling */}
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Styling</CardTitle>
                </CardHeader>

                <CardContent className="space-y-8 px-4 py-2">

{/* Primary + Background */}
<div className="grid sm:grid-cols-2 gap-8">

  {/* Primary Color */}
  <div className="space-y-2">
    <Label className="text-sm font-medium">Primary Button Color</Label>

    <div className="flex items-center gap-3">
      <Input
        type="color"
        className="w-12 h-10 p-1 rounded-md border"
        value={styles.primaryColor}
        onChange={(e) =>
          setStyles({ ...styles, primaryColor: e.target.value })
        }
      />

      <Input
        type="text"
        className="flex-1"
        value={styles.primaryColor}
        onChange={(e) =>
          setStyles({ ...styles, primaryColor: e.target.value })
        }
      />
    </div>
  </div>

  {/* Background Color */}
  <div className="space-y-2">
    <Label className="text-sm font-medium">Background Color</Label>

    <div className="flex items-center gap-3">
      <Input
        type="color"
        className="w-12 h-10 p-1 rounded-md border"
        value={styles.backgroundColor}
        onChange={(e) =>
          setStyles({ ...styles, backgroundColor: e.target.value })
        }
      />

      <Input
        type="text"
        className="flex-1"
        value={styles.backgroundColor}
        onChange={(e) =>
          setStyles({ ...styles, backgroundColor: e.target.value })
        }
      />
    </div>
  </div>

</div>

{/* Text Color */}
<div className="space-y-2">
  <Label className="text-sm font-medium">Text Color</Label>

  <div className="flex items-center gap-3">
    <Input
      type="color"
      className="w-12 h-10 p-1 rounded-md border"
      value={styles.textColor}
      onChange={(e) =>
        setStyles({ ...styles, textColor: e.target.value })
      }
    />

    <Input
      type="text"
      className="flex-1"
      value={styles.textColor}
      onChange={(e) =>
        setStyles({ ...styles, textColor: e.target.value })
      }
    />
  </div>
</div>

{/* Font Sizes */}
<div className="grid sm:grid-cols-2 gap-8">
  <div className="space-y-2">
    <Label className="text-sm font-medium">Headline Size (px)</Label>
    <Input
      type="number"
      min="16"
      max="72"
      className="rounded-md"
      value={styles.headlineSize}
      onChange={(e) =>
        setStyles({ ...styles, headlineSize: Number(e.target.value) })
      }
    />
  </div>

  <div className="space-y-2">
    <Label className="text-sm font-medium">Paragraph Size (px)</Label>
    <Input
      type="number"
      min="12"
      max="40"
      className="rounded-md"
      value={styles.paragraphSize}
      onChange={(e) =>
        setStyles({ ...styles, paragraphSize: Number(e.target.value) })
      }
    />
  </div>
</div>

</CardContent>
              </Card>
            </CardContent>
          </Card>

          {/* RIGHT */}
          <Card>
            <CardHeader>
              <CardTitle>Mobile Preview</CardTitle>
            </CardHeader>

            <CardContent className="flex justify-center py-6">
              {ready && (
                <MobileFrame
                  key={previewPayload}
                  url={`${baseUrl}/api/landing-html/${userId}?template=${templateName}&data=${previewPayload}`}
                />
              )}
            </CardContent>
          </Card>
        </div>
        
        {/* JSON RESULT */}
        <pre className="bg-slate-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
            {JSON.stringify({
              userId,
              templateName,
              sections,
              styles
            }, null, 2)}
        </pre>
      </div>
    </DashboardLayout>
  );
}
