import { useState, useRef, type FormEvent, type ChangeEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Contact";
import { SmoothScroll } from "@/components/site/SmoothScroll";
import { Cursor } from "@/components/site/Cursor";
import { SectionLabel, Reveal } from "@/components/site/Reveal";
import { services } from "@/data/services";
import { trackEvent } from "@/lib/analytics";
import { Upload, CheckCircle2, AlertCircle, FileText, Trash2 } from "lucide-react";

const title = "Start a Project — 100KRAFT Atelier Intake";
const description =
  "Submit your product brief, CAD models, or prototype specifications directly to the 100KRAFT design & manufacturing atelier. We review and reply within 48 hours.";

export const Route = createFileRoute("/en/start-project")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://100kraft.com/en/start-project" },
      { property: "og:image", content: "https://100kraft.com/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [
      { rel: "canonical", href: "https://100kraft.com/en/start-project" },
      { rel: "alternate", hrefLang: "tr", href: "https://100kraft.com/start-project" },
      { rel: "alternate", hrefLang: "en", href: "https://100kraft.com/en/start-project" },
      { rel: "alternate", hrefLang: "x-default", href: "https://100kraft.com/start-project" },
    ],
  }),
  component: EnglishStartProjectPage,
});

const PROJECT_STAGES = [
  "Idea / Concept Brief",
  "Initial Sketches / 2D Mockup",
  "Existing 3D CAD Assembly",
  "Physical Prototype Tested",
  "Production Tooling Preparation",
  "Existing Product / Cost Optimization",
];

const ALLOWED_EXTENSIONS = [
  ".pdf",
  ".step",
  ".stp",
  ".stl",
  ".obj",
  ".iges",
  ".igs",
  ".zip",
  ".jpg",
  ".jpeg",
  ".png",
];

const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB

interface AttachedFile {
  file: File;
  name: string;
  size: number;
  extension: string;
}

function EnglishStartProjectPage() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    stage: PROJECT_STAGES[0]!,
    selectedServices: [] as string[],
    targetQuantity: "",
    targetBudget: "",
    projectDescription: "",
    timeline: "",
    // Honeypot anti-spam field
    hp_website: "",
  });

  const [files, setFiles] = useState<AttachedFile[]>([]);
  const [fileError, setFileError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleToggleService = (slug: string) => {
    setFormData((prev) => {
      const exists = prev.selectedServices.includes(slug);
      return {
        ...prev,
        selectedServices: exists
          ? prev.selectedServices.filter((s) => s !== slug)
          : [...prev.selectedServices, slug],
      };
    });
  };

  const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
    setFileError(null);
    const selectedFiles = Array.from(e.target.files || []);

    const newAttachments: AttachedFile[] = [];
    for (const f of selectedFiles) {
      const ext = `.${f.name.split(".").pop()?.toLowerCase()}`;
      if (!ALLOWED_EXTENSIONS.includes(ext)) {
        setFileError(
          `File extension '${ext}' is not supported. Please upload STEP, STL, OBJ, PDF, or ZIP.`,
        );
        return;
      }
      if (f.size > MAX_FILE_SIZE) {
        setFileError(`File '${f.name}' exceeds the 50MB size limit.`);
        return;
      }
      newAttachments.push({
        file: f,
        name: f.name,
        size: f.size,
        extension: ext,
      });
    }

    setFiles((prev) => [...prev, ...newAttachments]);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    // Spam honeypot detection
    if (formData.hp_website) {
      setSubmitted(true);
      return;
    }

    if (!formData.name || !formData.email || !formData.projectDescription) {
      setSubmitError("Please fill in your name, email, and project overview.");
      return;
    }

    setSubmitting(true);

    try {
      trackEvent({
        name: "project_form_submit",
        stage: formData.stage,
        service: formData.selectedServices.join(", "),
        hasFiles: files.length > 0,
      });

      const payload = {
        name: formData.name,
        email: formData.email,
        company: formData.company || "Not specified",
        phone: formData.phone || "Not specified",
        stage: formData.stage,
        selectedServices: formData.selectedServices,
        targetQuantity: formData.targetQuantity || "Not specified",
        targetBudget: formData.targetBudget || "Not specified",
        timeline: formData.timeline || "Not specified",
        description: formData.projectDescription,
        fileNames: files.map((f) => `${f.name} (${(f.size / 1024 / 1024).toFixed(2)} MB)`),
        submittedAt: new Date().toISOString(),
      };

      console.log("[100KRAFT ATELIER INTAKE] Brief Received:", payload);
      await new Promise((r) => setTimeout(r, 900));

      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setSubmitError("Submission failed. Please contact us directly at burak@100kraft.com.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <SmoothScroll />
      <Cursor />
      <Nav currentLang="en" />
      <main className="min-h-screen bg-background pt-32 pb-28 md:pt-40 md:pb-40">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12">
          {/* Header */}
          <div className="border-b border-border pb-12">
            <SectionLabel index="01" title="Program Intake" />
            <Reveal>
              <h1 className="mt-8 font-display text-[10vw] leading-[0.88] sm:text-6xl lg:text-7xl tracking-tight">
                Start a project.
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-muted-foreground">
                Whether you have rough napkin sketches or complete CAD assemblies ready for tooling,
                we provide actionable engineering feedback and a clear manufacturing roadmap within
                48 hours.
              </p>
            </Reveal>
          </div>

          {submitted ? (
            <div className="mt-16 border border-border bg-secondary/20 p-8 sm:p-16 text-center">
              <CheckCircle2 className="mx-auto h-16 w-16 text-accent" />
              <h2 className="mt-6 font-display text-3xl sm:text-4xl">Brief Received at Atelier</h2>
              <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
                Thank you, {formData.name}. Our engineering team in Antalya will review your
                specifications and follow up at{" "}
                <span className="text-foreground font-semibold">{formData.email}</span> within two
                business days.
              </p>
              <div className="mt-8">
                <a
                  href="/en"
                  className="label-technical text-xs inline-flex items-center gap-2 border border-border px-6 py-3 hover:bg-foreground hover:text-background transition-colors"
                >
                  ← Return Home
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-16 space-y-16">
              {/* Spam Honeypot */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="hp_website">Leave this blank</label>
                <input
                  type="text"
                  id="hp_website"
                  name="hp_website"
                  value={formData.hp_website}
                  onChange={(e) => setFormData({ ...formData, hp_website: e.target.value })}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              {/* Step 1: Project Stage */}
              <div>
                <span className="label-technical text-accent text-xs block mb-4">
                  STEP 01 // CURRENT DEVELOPMENT MATURITY
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {PROJECT_STAGES.map((stg) => {
                    const isSelected = formData.stage === stg;
                    return (
                      <button
                        key={stg}
                        type="button"
                        onClick={() => setFormData({ ...formData, stage: stg })}
                        className={`text-left p-4 border transition-all text-xs label-technical cursor-pointer ${
                          isSelected
                            ? "bg-foreground text-background border-foreground font-semibold"
                            : "border-border hover:border-foreground/50 bg-background text-foreground/80"
                        }`}
                      >
                        {stg}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Required Services */}
              <div>
                <span className="label-technical text-accent text-xs block mb-4">
                  STEP 02 // CAPABILITIES REQUIRED
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {services.map((srv) => {
                    const isSelected = formData.selectedServices.includes(srv.slug);
                    return (
                      <button
                        key={srv.slug}
                        type="button"
                        onClick={() => handleToggleService(srv.slug)}
                        className={`text-left p-4 border transition-all cursor-pointer ${
                          isSelected
                            ? "bg-secondary border-accent"
                            : "border-border hover:border-foreground/40 bg-background"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="label-technical text-xs text-accent font-semibold">
                            {srv.number}
                          </span>
                          <span
                            className={`h-2 w-2 rounded-full ${isSelected ? "bg-accent" : "bg-border"}`}
                          />
                        </div>
                        <p className="font-display text-base text-foreground mt-2">{srv.title}</p>
                        <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                          {srv.tagline}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Core Contact Information */}
              <div>
                <span className="label-technical text-accent text-xs block mb-6">
                  STEP 03 // CONTACT INFORMATION
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="label-technical text-xs text-muted-foreground block mb-2"
                    >
                      FULL NAME *
                    </label>
                    <input
                      id="name"
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Burak Güç"
                      className="w-full border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-accent focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="label-technical text-xs text-muted-foreground block mb-2"
                    >
                      EMAIL ADDRESS *
                    </label>
                    <input
                      id="email"
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-accent focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="label-technical text-xs text-muted-foreground block mb-2"
                    >
                      ORGANIZATION / BRAND (OPTIONAL)
                    </label>
                    <input
                      id="company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Company Name"
                      className="w-full border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-accent focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="label-technical text-xs text-muted-foreground block mb-2"
                    >
                      PHONE (OPTIONAL)
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+90 5XX XXX XX XX"
                      className="w-full border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-accent focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Step 4: Narrative Description & Context */}
              <div>
                <span className="label-technical text-accent text-xs block mb-6">
                  STEP 04 // PROJECT OVERVIEW & CONSTRAINTS
                </span>
                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="projectDescription"
                      className="label-technical text-xs text-muted-foreground block mb-2"
                    >
                      OBJECTIVES, ENVIRONMENT & CRITICAL CONSTRAINTS *
                    </label>
                    <textarea
                      id="projectDescription"
                      required
                      rows={5}
                      value={formData.projectDescription}
                      onChange={(e) =>
                        setFormData({ ...formData, projectDescription: e.target.value })
                      }
                      placeholder="What does your product do? Who is the user? What environment will it inhabit? Are there specific weight, ingress, thermal, or cost constraints?"
                      className="w-full border border-border bg-background p-4 text-sm text-foreground leading-relaxed focus:border-accent focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div>
                      <label
                        htmlFor="targetQuantity"
                        className="label-technical text-xs text-muted-foreground block mb-2"
                      >
                        TARGET QUANTITY
                      </label>
                      <input
                        id="targetQuantity"
                        type="text"
                        value={formData.targetQuantity}
                        onChange={(e) =>
                          setFormData({ ...formData, targetQuantity: e.target.value })
                        }
                        placeholder="e.g. 1 prototype / 500 units"
                        className="w-full border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-accent focus:outline-none"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="timeline"
                        className="label-technical text-xs text-muted-foreground block mb-2"
                      >
                        TARGET TIMELINE
                      </label>
                      <input
                        id="timeline"
                        type="text"
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        placeholder="e.g. 3 weeks / Q3 2026"
                        className="w-full border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-accent focus:outline-none"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="targetBudget"
                        className="label-technical text-xs text-muted-foreground block mb-2"
                      >
                        BUDGET BRACKET
                      </label>
                      <input
                        id="targetBudget"
                        type="text"
                        value={formData.targetBudget}
                        onChange={(e) => setFormData({ ...formData, targetBudget: e.target.value })}
                        placeholder="Target budget range"
                        className="w-full border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-accent focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 5: CAD & Document Upload */}
              <div>
                <span className="label-technical text-accent text-xs block mb-4">
                  STEP 05 // SPECIFICATIONS OR CAD UPLOAD (OPTIONAL)
                </span>
                <p className="text-xs text-muted-foreground mb-4">
                  Supported extensions: STEP, STP, STL, OBJ, IGES, PDF, ZIP, PNG, JPG (Max 50MB per
                  file). Transfers are strictly protected under mutual confidentiality.
                </p>

                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="border-2 border-dashed border-border hover:border-foreground/60 p-8 sm:p-12 text-center cursor-pointer transition-colors bg-secondary/10"
                >
                  <Upload className="mx-auto h-8 w-8 text-accent/80" />
                  <p className="mt-3 font-display text-base text-foreground">
                    Click to browse or drop CAD & spec files here
                  </p>
                  <p className="mt-1 label-technical text-xs text-muted-foreground">
                    STEP / STL / PDF / ZIP · Max 50MB
                  </p>
                  <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    accept=".pdf,.step,.stp,.stl,.obj,.iges,.igs,.zip,.jpg,.jpeg,.png"
                    onChange={handleFileSelect}
                    className="hidden"
                  />
                </div>

                {fileError && (
                  <div className="mt-3 flex items-center gap-2 text-xs text-destructive">
                    <AlertCircle className="h-4 w-4" />
                    <span>{fileError}</span>
                  </div>
                )}

                {/* File List */}
                {files.length > 0 && (
                  <div className="mt-4 space-y-2">
                    {files.map((f, i) => (
                      <div
                        key={`${f.name}-${i}`}
                        className="flex items-center justify-between border border-border bg-background p-3 text-xs"
                      >
                        <div className="flex items-center gap-3">
                          <FileText className="h-4 w-4 text-accent" />
                          <span className="text-foreground font-mono">{f.name}</span>
                          <span className="text-muted-foreground">
                            ({(f.size / 1024 / 1024).toFixed(2)} MB)
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFile(i)}
                          className="text-muted-foreground hover:text-destructive transition-colors p-1"
                          aria-label="Remove attachment"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {submitError && (
                <div className="border border-destructive/40 bg-destructive/10 p-4 text-sm text-destructive">
                  {submitError}
                </div>
              )}

              {/* Submit Button */}
              <div className="border-t border-border pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <p className="text-xs text-muted-foreground max-w-md">
                  Transmitting this brief connects you directly with our engineering team in
                  Antalya. Your IP and technical data remain confidential.
                </p>

                <button
                  type="submit"
                  disabled={submitting}
                  className="group relative inline-flex items-center justify-center gap-3 overflow-hidden bg-foreground px-10 py-4 text-center disabled:opacity-50 cursor-pointer"
                >
                  <span className="absolute inset-0 translate-y-full bg-accent transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0" />
                  <span className="label-technical relative text-primary-foreground text-xs font-semibold">
                    {submitting ? "Analyzing..." : "Submit Brief →"}
                  </span>
                </button>
              </div>
            </form>
          )}
        </div>
      </main>
      <Footer lang="en" />
    </>
  );
}
