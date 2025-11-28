"use client";

import * as React from "react";
import { DashboardLayout } from "@/components/dashboard/layout";
import { Button } from "@/components/ui/button";
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

// --------------------------------------------
// SORTABLE ITEM
// --------------------------------------------
function SortableItem({ id, enabled, toggle }: { id: string; enabled: boolean; toggle: any }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
  const style = { transform: CSS.Transform.toString(transform), transition };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="flex items-center justify-between rounded-lg border border-slate-200 p-3 bg-white"
    >
      <div className="flex items-center gap-3">
        <GripVertical className="h-4 w-4 text-muted-foreground cursor-grab" {...attributes} {...listeners} />
        <span className="text-sm font-medium">{id}</span>
      </div>
      <Switch checked={enabled} onCheckedChange={() => toggle(id)} />
    </div>
  );
}

// --------------------------------------------
// MOBILE PREVIEW FRAME
// --------------------------------------------
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

// --------------------------------------------
// MAIN PAGE
// --------------------------------------------
export default function NewLandingPagePage() {
  const params = useParams();
  const slug = params?.slug;

  // Detect Mode
  const isNew = slug === "new";
  const isEdit = !isNew;

  // Dummy EDIT DATA (id=10)
  const dummyEdit = {
    id: 10,
    userId: 2,
    templateName: "modern",
    sections: [
      { "section": "Hero Banner", "enabled": true },
    { "section": "Featured Products", "enabled": true },
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
    { "section": "Header Logo 2", "enabled": false },
    { "section": "Global CSS", "enabled": true }
    ],
    styles: {
      primaryColor: "#ff0000",
      backgroundColor: "#f7f7f7",
      textColor: "#222222",
      headlineSize: 32,
      paragraphSize: 18,
    }
  };
  
  // Default NEW data
  const defaultSections = [
    { "section": "Hero Banner", "enabled": true },
    { "section": "Featured Products", "enabled": true },
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
    { "section": "Header Logo 2", "enabled": false },
    { "section": "Global CSS", "enabled": true }
   
  ];

  // -------------------------------------------
  // STATES
  // -------------------------------------------
  const [sections, setSections] = React.useState<any[]>([]);
  const [styles, setStyles] = React.useState<any>({});
  const [templateName, setTemplateName] = React.useState<string>("modern");
  const baseUrl = typeof window !== "undefined" ? window.location.origin : "";
  // Toggle Section Enable/Disable
  const toggleEnabled = (sectionName: string) => {
    setSections((prev) =>
      prev.map((s) =>
        s.section === sectionName ? { ...s, enabled: !s.enabled } : s
      )
    );
  };

  // Load Data on mount
  React.useEffect(() => {
    if (isEdit) {
      setSections(dummyEdit.sections);
      setStyles(dummyEdit.styles);
      setTemplateName(dummyEdit.templateName);
    } else {
      setSections(defaultSections.map((s) => ({ section: s, enabled: true })));
      setStyles({
        primaryColor: "#6366f1",
        backgroundColor: "#ffffff",
        textColor: "#000000",
        headlineSize: 28,
        paragraphSize: 16,
      });
      setTemplateName("modern");
    }
  }, [slug]);

  // DND
  const sensors = useSensors(useSensor(PointerSensor));

  const onDragEnd = (event: any) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      setSections((prev) => {
        const oldIndex = prev.findIndex((s) => s.section === active.id);
        const newIndex = prev.findIndex((s) => s.section === over.id);
        return arrayMove(prev, oldIndex, newIndex);
      });
    }
  };

  const userId = isEdit ? dummyEdit.userId : 2;

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto space-y-6">

        <h1 className="text-3xl font-bold mt-4">
          {isNew ? "Add New Landing Page" : "Edit Landing Page"}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4">

          {/* LEFT SIDE */}
          <Card>
            <CardHeader>
              <CardTitle>Sections</CardTitle>
              <CardDescription>Drag to reorder and enable/disable</CardDescription>
            </CardHeader>

            <CardContent>
              <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={onDragEnd}>
                <SortableContext items={sections.map(s => s.section)} strategy={verticalListSortingStrategy}>
                  <div className="space-y-2">
                    {sections.map((sec) => (
                      <SortableItem
                        key={sec.section}
                        id={sec.section}
                        enabled={sec.enabled}
                        toggle={toggleEnabled}
                      />
                    ))}
                  </div>
                </SortableContext>
              </DndContext>

              {/* Styling */}
              <Card className="mt-6">
  <CardHeader className="pb-4">
    <CardTitle className="text-lg font-semibold">Styling Controls</CardTitle>
    <CardDescription>Customize your landing page design</CardDescription>
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

          {/* RIGHT SIDE */}
          <Card>
            <CardHeader>
              <CardTitle>Live Preview</CardTitle>
            </CardHeader>

            <CardContent className="flex justify-center py-6">
            <MobileFrame url={`${baseUrl}/api/landing-html/${userId}?template=${templateName}&data=${btoa(JSON.stringify({userId, templateName, sections, styles }))
  }`}
/>


            </CardContent>
          </Card>
        </div>

        {/* JSON RESULT */}
        <pre className="bg-slate-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
{JSON.stringify({
  mode: isNew ? "new" : "edit",
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
