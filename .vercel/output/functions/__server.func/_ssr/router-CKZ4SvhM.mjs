import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CKZ4SvhM.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var styles_default = "/assets/styles-DSZVH1hS.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
var translations = {
	en: {
		nav: {
			about: "Atelier",
			services: "Services",
			projects: "Work",
			store: "STORE",
			contact: "Start a Project",
			langSwitchAria: "Switch language"
		},
		hero: {
			tag: "Design & Manufacturing Atelier",
			titleLine1: "From Idea",
			titleLine2: "to Production.",
			titleLine2Accent: "Production.",
			description: "Product Design, 3D Printing, Mold Design & Manufacturing Consulting.",
			startProject: "Start a Project",
			viewWork: "View selected work",
			imageAlt: "3D printed prototype parts and machined components produced by 100KRAFT"
		},
		about: {
			sectionIndex: "02",
			sectionTitle: "The Atelier",
			headline: "A design and manufacturing atelier — not a print shop.",
			p1: "100KRAFT sits between the drawing board and the production line. We shape products with the discipline of industrial design and the constraints of real manufacturing held in the same hand — geometry, material, tooling and cost resolved together rather than in sequence.",
			p2: "Every concept that leaves the atelier is manufacturable. We prove it in resin, filament and metal before a single mold is cut.",
			stats: [
				{
					value: "120+",
					label: "Products developed"
				},
				{
					value: "14",
					label: "Industries served"
				},
				{
					value: "48h",
					label: "Prototype turnaround"
				},
				{
					value: "0.05mm",
					label: "Typical tolerance"
				}
			]
		},
		services: {
			sectionIndex: "03",
			sectionTitle: "Capabilities",
			subtitle: "Six disciplines, one continuous workflow. A project can enter at any point and leave as a manufacturable product.",
			items: [
				{
					id: "01",
					title: "Product Design",
					description: "Concept direction, form language, ergonomics and material strategy — resolved into a product with a point of view.",
					meta: "Concept · CMF · Ergonomics"
				},
				{
					id: "02",
					title: "3D Design",
					description: "Parametric CAD and surface modelling built to be edited, tolerance-checked and handed to production.",
					meta: "CAD · Surfacing · Assemblies"
				},
				{
					id: "03",
					title: "3D Printing",
					description: "FDM, SLA and SLS in engineering-grade materials, printed and finished in our own workshop.",
					meta: "FDM · SLA · SLS"
				},
				{
					id: "04",
					title: "Rapid Prototyping",
					description: "Fast iteration loops — looks-like, works-like and pre-production samples in days, not quarters.",
					meta: "Iteration · Fit · Function"
				},
				{
					id: "05",
					title: "Mold Design",
					description: "Injection mold design with draft, gating, cooling and ejection engineered around the part.",
					meta: "Tooling · DFM · Gating"
				},
				{
					id: "06",
					title: "Manufacturing Consulting",
					description: "Process selection, supplier evaluation and cost engineering to bring a product to volume.",
					meta: "Process · Cost · Supply"
				}
			]
		},
		projects: {
			sectionIndex: "04",
			sectionTitle: "Selected Work",
			stages: {
				sketch: "Sketch",
				cad: "CAD",
				final: "Product"
			},
			items: [
				{
					id: "01",
					name: "PX-1 Handheld",
					sector: "Consumer Appliance",
					year: "2025",
					scope: "Product design · Prototyping · Mold design",
					story: "A cordless handheld built around a single-piece housing. We cut part count from 22 to 11, then engineered the tooling so the transparent chamber could be molded without a secondary operation."
				},
				{
					id: "02",
					name: "Aluminium Series",
					sector: "Professional Tools",
					year: "2024",
					scope: "Industrial design · CNC · Surface finishing",
					story: "A machined instrument body developed from clay study to anodised production part, with the grip geometry validated across nine printed iterations."
				},
				{
					id: "03",
					name: "Velora Diffuser",
					sector: "Home Product",
					year: "2024",
					scope: "3D design · Rapid prototyping · Manufacturing consulting",
					story: "Soft-touch beige housing with a copper control detail. Process selection and supplier qualification brought unit cost down 31% before the first production run."
				}
			]
		},
		process: {
			sectionIndex: "05",
			sectionTitle: "Process",
			subtitle: "Five stages · one continuous line",
			deliverablesLabel: "Deliverables",
			steps: [
				{
					id: "01",
					title: "Discover",
					body: "Brief, users, constraints, target cost. We define what the product must survive before we draw it.",
					output: "Design brief · Benchmark · Cost target"
				},
				{
					id: "02",
					title: "Design",
					body: "Form exploration in sketch and clay logic, then resolved surfaces and a full CAD assembly.",
					output: "Concepts · CMF · CAD assembly"
				},
				{
					id: "03",
					title: "Prototype",
					body: "Printed in the workshop within days — looks-like and works-like samples in engineering materials.",
					output: "SLA / FDM / SLS parts"
				},
				{
					id: "04",
					title: "Validate",
					body: "Fit, tolerance, drop, thermal and assembly checks. Iterations continue until the part behaves.",
					output: "Test report · Revision set"
				},
				{
					id: "05",
					title: "Manufacture",
					body: "Tooling design, supplier qualification and pilot run supervision through to steady production.",
					output: "Mold design · DFM · Pilot run"
				}
			]
		},
		workshop: {
			sectionIndex: "06",
			sectionTitle: "The Workshop",
			headline: "A fabrication laboratory, three metres from the drawing board.",
			p1: "Design and production share one roof in Antalya. A geometry change in the morning is a part in hand by afternoon — which is why our iterations are measured in hours instead of weeks.",
			equipment: [
				["Additive", "FDM · SLA · SLS printers"],
				["Materials", "PA12, ASA, PC, TPU, resin, carbon-filled"],
				["Metrology", "Calipers, gauges, 3D scanning"],
				["Finishing", "Sanding, vapour smoothing, painting, anodising"]
			]
		},
		expertise: {
			sectionIndex: "07",
			sectionTitle: "Manufacturing Expertise",
			headline: "Design decisions that survive the production line.",
			items: [
				{
					title: "Injection Molding",
					body: "Tool layout, gating and cooling designed with the part, plus draft, shrinkage and wall-thickness resolved before steel is cut."
				},
				{
					title: "Manufacturing Optimization",
					body: "Cycle-time, part consolidation and process selection reviewed against volume so unit cost falls without touching perceived quality."
				},
				{
					title: "Product Development",
					body: "End-to-end ownership from brief to pilot run, including supplier qualification, sample approval and production documentation."
				}
			]
		},
		contact: {
			sectionIndex: "08",
			sectionTitle: "Contact",
			headlinePrefix: "Tell us what you want to ",
			headlineAccent: "build.",
			contactLabel: "Contact",
			startProject: "Start a Project",
			atelierLabel: "Atelier",
			city: "Antalya, Turkey",
			description: "Working with clients across Europe and the Middle East. Send a brief, a sketch or a CAD file — we reply within two working days."
		},
		footer: {
			tagline: "Product Design · 3D Printing · Mold Design · Manufacturing",
			backToTop: "Back to Top ↑",
			location: "Antalya, Turkey"
		}
	},
	tr: {
		nav: {
			about: "Atölye",
			services: "Hizmetler",
			projects: "Projeler",
			store: "STORE",
			contact: "Proje Başlat",
			langSwitchAria: "Dili değiştir"
		},
		hero: {
			tag: "Tasarım & Dijital Üretim Atölyesi",
			titleLine1: "Fikirden",
			titleLine2: "Üretime.",
			titleLine2Accent: "Üretime.",
			description: "Ürün Tasarımı, 3D Baskı, Kalıp Tasarımı & Üretim Danışmanlığı.",
			startProject: "Proje Başlat",
			viewWork: "Seçilmiş işleri incele",
			imageAlt: "100KRAFT tarafından üretilen 3D baskı prototip parçalar ve hassas bileşenler"
		},
		about: {
			sectionIndex: "02",
			sectionTitle: "Atölye",
			headline: "Bir tasarım ve üretim atölyesi — sıradan bir baskı merkezi değil.",
			p1: "100KRAFT, çizim masası ile üretim hattı arasında konumlanır. Ürünleri endüstriyel tasarım disiplini ve gerçek üretimin gerekliliklerini bir arada tutarak şekillendiriyoruz — geometri, malzeme, kalıplama ve maliyet sırayla değil, eş zamanlı olarak çözümlenir.",
			p2: "Atölyeden çıkan her konsept üretilebilirdir. Tek bir kalıp kesilmeden önce reçine, filament ve metal ile bunu kanıtlıyoruz.",
			stats: [
				{
					value: "120+",
					label: "Geliştirilen ürün"
				},
				{
					value: "14",
					label: "Hizmet verilen sektör"
				},
				{
					value: "48s",
					label: "Prototip teslim süresi"
				},
				{
					value: "0.05mm",
					label: "Tipik tolerans"
				}
			]
		},
		services: {
			sectionIndex: "03",
			sectionTitle: "Yetenekler",
			subtitle: "Altı uzmanlık alanı, kesintisiz tek bir iş akışı. Bir proje herhangi bir aşamada dahil olup üretilebilir bir ürün olarak çıkabilir.",
			items: [
				{
					id: "01",
					title: "Ürün Tasarımı",
					description: "Konsept yönlendirmesi, form dili, ergonomi ve malzeme stratejisi — net bir vizyona sahip bir ürüne dönüştürülür.",
					meta: "Konsept · CMF · Ergonomi"
				},
				{
					id: "02",
					title: "3D Tasarım",
					description: "Düzenlenebilir, toleransları kontrol edilmiş ve üretime hazır parametrik CAD ve yüzey modelleme.",
					meta: "CAD · Yüzey Modelleme · Montaj"
				},
				{
					id: "03",
					title: "3D Baskı",
					description: "Kendi atölyemizde basılan ve yüzey işlemleri tamamlanan mühendislik sınıfı FDM, SLA ve SLS üretimleri.",
					meta: "FDM · SLA · SLS"
				},
				{
					id: "04",
					title: "Hızlı Prototipleme",
					description: "Hızlı iterasyon döngüleri — aylar yerine günler içinde görsel, fonksiyonel ve seri üretim öncesi numuneler.",
					meta: "İterasyon · Uyum · Fonksiyon"
				},
				{
					id: "05",
					title: "Kalıp Tasarımı",
					description: "Açı, yolluk, soğutma ve itici sistemleri parçaya özel olarak mühendisliği yapılmış enjeksiyon kalıp tasarımı.",
					meta: "Kalıplama · DFM · Yolluk"
				},
				{
					id: "06",
					title: "Üretim Danışmanlığı",
					description: "Ürünü seri üretime taşımak için süreç seçimi, tedarikçi değerlendirmesi ve maliyet mühendisliği.",
					meta: "Süreç · Maliyet · Tedarik"
				}
			]
		},
		projects: {
			sectionIndex: "04",
			sectionTitle: "Seçilmiş İşler",
			stages: {
				sketch: "Eskiz",
				cad: "CAD",
				final: "Ürün"
			},
			items: [
				{
					id: "01",
					name: "PX-1 Handheld",
					sector: "Tüketici Cihazı",
					year: "2025",
					scope: "Ürün tasarımı · Prototipleme · Kalıp tasarımı",
					story: "Tek parça gövde etrafında inşa edilmiş kablosuz el cihazı. Parça sayısını 22'den 11'e düşürdük ve şeffaf haznenin ikincil bir işleme gerek kalmadan kalıplanabilmesi için kalıp mühendisliğini gerçekleştirdik."
				},
				{
					id: "02",
					name: "Aluminium Series",
					sector: "Profesyonel El Aletleri",
					year: "2024",
					scope: "Endüstriyel tasarım · CNC · Yüzey işlemleri",
					story: "Kil model çalışmasından eloksallı üretim parçasına kadar geliştirilen, tutuş ergonomisi dokuz farklı 3D baskı iterasyonuyla doğrulanan işlenmiş enstrüman gövdesi."
				},
				{
					id: "03",
					name: "Velora Diffuser",
					sector: "Ev Ürünleri",
					year: "2024",
					scope: "3D tasarım · Hızlı prototipleme · Üretim danışmanlığı",
					story: "Bakır kontrol detayına sahip soft-touch bej gövde. Süreç seçimi ve tedarikçi yeterliliği sayesinde ilk seri üretim öncesinde birim maliyet %31 oranında düşürüldü."
				}
			]
		},
		process: {
			sectionIndex: "05",
			sectionTitle: "Süreç",
			subtitle: "Beş aşama · kesintisiz tek bir çizgi",
			deliverablesLabel: "Çıktılar",
			steps: [
				{
					id: "01",
					title: "Keşif",
					body: "Brief, kullanıcılar, kısıtlamalar, hedef maliyet. Çizime başlamadan önce ürünün hangi koşullara dayanması gerektiğini belirliyoruz.",
					output: "Tasarım brief'i · Kıyaslama · Hedef maliyet"
				},
				{
					id: "02",
					title: "Tasarım",
					body: "Eskiz ve form keşifleri, ardından netleştirilmiş yüzeyler ve eksiksiz bir CAD montaj modeli.",
					output: "Konseptler · CMF · CAD montajı"
				},
				{
					id: "03",
					title: "Prototip",
					body: "Günler içinde atölyemizde üretilir — mühendislik malzemeleriyle görsel ve fonksiyonel numuneler.",
					output: "SLA / FDM / SLS parçalar"
				},
				{
					id: "04",
					title: "Doğrulama",
					body: "Uyum, tolerans, düşme, termal ve montaj kontrolleri. Parça kusursuz çalışana kadar iterasyonlar devam eder.",
					output: "Test raporu · Revizyon paketi"
				},
				{
					id: "05",
					title: "Üretim",
					body: "Kalıp tasarımı, tedarikçi yeterliliği ve seri üretime kadar pilot üretim gözetimi.",
					output: "Kalıp tasarımı · DFM · Pilot üretim"
				}
			]
		},
		workshop: {
			sectionIndex: "06",
			sectionTitle: "Atölye",
			headline: "Çizim masasından üç metre mesafede bir üretim laboratuvarı.",
			p1: "Tasarım ve üretim Antalya'da aynı çatıyı paylaşıyor. Sabah yapılan bir geometri değişikliği öğleden sonra elde tutulan bir parçaya dönüşüyor — bu yüzden iterasyonlarımız haftalarla değil, saatlerle ölçülür.",
			equipment: [
				["Katmanlı Üretim", "FDM · SLA · SLS yazıcılar"],
				["Malzemeler", "PA12, ASA, PC, TPU, reçine, karbon takviyeli"],
				["Metroloji", "Kumpaslar, mastarlar, 3D tarama"],
				["Yüzey İşlemleri", "Zımparalama, buharla pürüzsüzleştirme, boyama, eloksal"]
			]
		},
		expertise: {
			sectionIndex: "07",
			sectionTitle: "Üretim Uzmanlığı",
			headline: "Üretim hattında ayakta kalan tasarım kararları.",
			items: [
				{
					title: "Enjeksiyon Kalıplama",
					body: "Çelik işlenmeden önce çekme, et kalınlığı, kalıp açısı, yolluk ve soğutma kanalları parçayla birlikte tasarlanır."
				},
				{
					title: "Üretim Optimizasyonu",
					body: "Algılanan kaliteden ödün vermeden birim maliyeti düşürmek için döngü süresi, parça birleştirme ve süreç seçimi hacme göre optimize edilir."
				},
				{
					title: "Ürün Geliştirme",
					body: "Brief'ten pilot üretime kadar tedarikçi kalifikasyonu, numune onayı ve üretim dokümantasyonu dahil uçtan uca yönetim."
				}
			]
		},
		contact: {
			sectionIndex: "08",
			sectionTitle: "İletişim",
			headlinePrefix: "Ne inşa etmek istediğinizi ",
			headlineAccent: "anlatın.",
			contactLabel: "İletişim",
			startProject: "Proje Başlat",
			atelierLabel: "Atölye",
			city: "Antalya, Türkiye",
			description: "Avrupa ve Orta Doğu'daki müşterilerle çalışıyoruz. Bir brief, eskiz veya CAD dosyası gönderin — iki iş günü içinde dönüş yapalım."
		},
		footer: {
			tagline: "Ürün Tasarımı · 3D Baskı · Kalıp Tasarımı · Üretim",
			backToTop: "Başa Dön ↑",
			location: "Antalya, Türkiye"
		}
	}
};
var LanguageContext = (0, import_react.createContext)(null);
function LanguageProvider({ children }) {
	const [language, setLanguageState] = (0, import_react.useState)("en");
	(0, import_react.useEffect)(() => {
		try {
			const savedLang = localStorage.getItem("100kraft_lang");
			if (savedLang === "en" || savedLang === "tr") setLanguageState(savedLang);
			else if (navigator.language.slice(0, 2) === "tr") setLanguageState("tr");
		} catch {}
	}, []);
	const setLanguage = (lang) => {
		setLanguageState(lang);
		try {
			localStorage.setItem("100kraft_lang", lang);
		} catch {}
	};
	const t = translations[language] || translations.en;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageContext.Provider, {
		value: {
			language,
			setLanguage,
			t
		},
		children
	});
}
function useLanguage() {
	const context = (0, import_react.useContext)(LanguageContext);
	if (!context) throw new Error("useLanguage must be used within a LanguageProvider");
	return context;
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$2 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "100KRAFT — Design & Manufacturing Atelier" },
			{
				name: "description",
				content: "100KRAFT is a product design and digital manufacturing atelier in Antalya, Turkey."
			},
			{
				name: "author",
				content: "100KRAFT"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:site",
				content: "@Lovable"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.svg",
				type: "image/svg+xml"
			},
			{
				rel: "preconnect",
				href: "https://api.fontshare.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600&f[]=satoshi@400,500,700&f[]=general-sans@400,500&display=swap"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$2.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) })
	});
}
var $$splitComponentImporter$1 = () => import("./routes-BL7tijKX.mjs");
var title$1 = "100KRAFT — Product Design & Digital Manufacturing Atelier";
var description$1 = "From idea to production. Product design, 3D printing, rapid prototyping, mold design and manufacturing consulting from our atelier in Antalya, Turkey.";
var Route$1 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: title$1 },
		{
			name: "description",
			content: description$1
		},
		{
			property: "og:title",
			content: title$1
		},
		{
			property: "og:description",
			content: description$1
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./store-X3e-Ng1S.mjs");
var title = "100KRAFT STORE — Premium Industrial Design Products";
var description = "Discover premium industrial design products, CNC prototypes, and precision 3D printed objects from our atelier.";
var Route = createFileRoute("/store")({
	head: () => ({ meta: [
		{ title },
		{
			name: "description",
			content: description
		},
		{
			property: "og:title",
			content: title
		},
		{
			property: "og:description",
			content: description
		},
		{
			property: "og:type",
			content: "website"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$1.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$2
	}),
	StoreRoute: Route.update({
		id: "/store",
		path: "/store",
		getParentRoute: () => Route$2
	})
};
var routeTree = Route$2._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { useLanguage as n, router_exports as t };
