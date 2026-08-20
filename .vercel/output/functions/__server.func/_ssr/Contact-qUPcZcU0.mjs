import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as useLanguage } from "./router-CKZ4SvhM.mjs";
import { t as Instagram } from "../_libs/lucide-react.mjs";
import { a as Trigger, i as Root3, n as Portal, r as Provider, t as Content2 } from "../_libs/@radix-ui/react-tooltip+[...].mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as motion } from "../_libs/motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Contact-qUPcZcU0.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var TooltipProvider = Provider;
var Tooltip = Root3;
var TooltipTrigger = Trigger;
var TooltipContent = import_react.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	sideOffset,
	className: cn("z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-tooltip-content-transform-origin)", className),
	...props
}) }));
TooltipContent.displayName = Content2.displayName;
function Nav() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const { language, setLanguage, t } = useLanguage();
	const links = [
		{
			href: "/#about",
			label: t.nav.about
		},
		{
			href: "/#services",
			label: t.nav.services
		},
		{
			href: "/#projects",
			label: t.nav.projects
		}
	];
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: `fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "border-b border-border/70 bg-background/80 backdrop-blur-xl" : "border-b border-transparent"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-20 max-w-[1600px] items-center justify-between px-6 md:px-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "/#top",
					className: "flex items-baseline gap-2 z-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-xl sm:text-2xl tracking-[-0.04em]",
						children: "100KRAFT"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-9 md:flex",
					children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: l.href,
						className: "label-technical transition-colors hover:text-foreground",
						children: l.label
					}, l.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 sm:gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center border border-foreground/20 bg-background overflow-hidden",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setLanguage("en"),
									className: `px-2.5 py-1.5 label-technical text-[10px] sm:text-xs transition-colors cursor-pointer ${language === "en" ? "bg-foreground text-background font-semibold" : "text-foreground/70 hover:text-foreground"}`,
									"aria-label": "Switch to English",
									children: "EN"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-4 w-px bg-foreground/20" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setLanguage("tr"),
									className: `px-2.5 py-1.5 label-technical text-[10px] sm:text-xs transition-colors cursor-pointer ${language === "tr" ? "bg-foreground text-background font-semibold" : "text-foreground/70 hover:text-foreground"}`,
									"aria-label": "Türkçe'ye geç",
									children: "TR"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipProvider, {
							delayDuration: 100,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "hidden sm:flex items-center gap-3 border-r border-foreground/20 pr-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "https://www.instagram.com/100kraft/",
										target: "_blank",
										rel: "noopener noreferrer",
										className: "group text-foreground/70 transition-colors hover:text-foreground",
										"aria-label": "100KRAFT Instagram",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-4 w-4 transition-transform duration-300 group-hover:scale-110" })
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Visit 100KRAFT Instagram" }) })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "https://www.instagram.com/grainzstudio/",
										target: "_blank",
										rel: "noopener noreferrer",
										className: "group text-foreground/70 transition-colors hover:text-foreground",
										"aria-label": "GRAINZ STUDIO Instagram",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-4 w-4 transition-transform duration-300 group-hover:scale-110" })
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Visit GRAINZ STUDIO Instagram" }) })] })]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "https://store.100kraft.com",
							className: "group relative inline-flex items-center gap-3 overflow-hidden border border-foreground/20 px-4 sm:px-5 py-2.5 bg-background",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 translate-y-full bg-accent transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "label-technical relative text-foreground font-semibold transition-colors duration-500 group-hover:text-primary-foreground",
								children: t.nav.store
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "/#contact",
							className: "hidden sm:inline-flex group relative items-center gap-3 overflow-hidden border border-foreground/20 px-5 py-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 -translate-y-full bg-foreground transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "label-technical relative text-foreground transition-colors duration-500 group-hover:text-primary-foreground",
								children: t.nav.contact
							})]
						})
					]
				})
			]
		})
	});
}
function Reveal({ children, delay = 0, y = 28, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className,
		initial: {
			opacity: 0,
			y
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-80px"
		},
		transition: {
			duration: .9,
			delay,
			ease: [
				.16,
				1,
				.3,
				1
			]
		},
		children
	});
}
function SectionLabel({ index, title }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-baseline gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "label-technical text-accent",
			children: index
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "label-technical",
			children: title
		})]
	}) });
}
function Contact() {
	const { t } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "contact",
		className: "relative border-t border-border py-28 md:py-40",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "blueprint-grid pointer-events-none absolute inset-0 opacity-60" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-[1600px] px-6 md:px-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-baseline gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "label-technical text-accent",
						children: t.contact.sectionIndex
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "label-technical",
						children: t.contact.sectionTitle
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-14 max-w-4xl font-display text-[11vw] leading-[0.9] sm:text-[7vw] lg:text-[5.4rem]",
					children: [t.contact.headlinePrefix, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "italic text-accent",
						children: t.contact.headlineAccent
					})]
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-20 grid gap-14 lg:grid-cols-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-7",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "border-y border-border",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "mailto:burak@100kraft.com",
								className: "group flex flex-wrap items-baseline justify-between gap-4 py-7",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "label-technical",
									children: t.contact.contactLabel
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-xl transition-colors group-hover:text-accent md:text-2xl",
									children: "burak@100kraft.com"
								})]
							}) })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .1,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "mailto:burak@100kraft.com",
								className: "group relative mt-12 inline-flex items-center gap-4 overflow-hidden bg-foreground px-8 py-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 translate-y-full bg-accent transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "label-technical relative text-primary-foreground",
										children: t.contact.startProject
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "relative text-primary-foreground transition-transform duration-500 group-hover:translate-x-1",
										children: "→"
									})
								]
							})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-5 lg:pl-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "label-technical",
								children: t.contact.atelierLabel
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-4 font-display text-2xl leading-snug",
								children: [
									t.contact.city,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: "36.8969° N, 30.7133° E"
									})
								]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: .1,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-10 max-w-sm text-base leading-relaxed text-muted-foreground",
									children: t.contact.description
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: .2,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-8 w-full overflow-hidden rounded-md border border-border",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
										width: "100%",
										height: "250",
										frameBorder: "0",
										scrolling: "no",
										marginHeight: 0,
										marginWidth: 0,
										src: "https://www.openstreetmap.org/export/embed.html?bbox=30.6933%2C36.8769%2C30.7333%2C36.9169&layer=mapnik&marker=36.8969%2C30.7133",
										className: "filter grayscale contrast-125 opacity-80",
										title: "Map of Antalya, Turkey"
									})
								})
							})
						]
					})]
				})
			]
		})]
	});
}
function Footer() {
	const { t } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border py-14",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-[1600px] flex-col gap-10 px-6 md:px-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col justify-between gap-8 md:flex-row md:items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-2xl tracking-[-0.04em]",
						children: "100KRAFT"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "label-technical text-muted-foreground",
						children: t.footer.tagline
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-6 md:items-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipProvider, {
						delayDuration: 100,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "https://www.instagram.com/100kraft/",
									target: "_blank",
									rel: "noopener noreferrer",
									className: "group flex items-center gap-2 text-foreground/70 transition-colors hover:text-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-4 w-4 transition-transform duration-300 group-hover:scale-110" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "label-technical",
										children: "100KRAFT"
									})]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Visit 100KRAFT Instagram" }) })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "https://www.instagram.com/grainzstudio/",
									target: "_blank",
									rel: "noopener noreferrer",
									className: "group flex items-center gap-2 text-foreground/70 transition-colors hover:text-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-4 w-4 transition-transform duration-300 group-hover:scale-110" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "label-technical",
										children: "GRAINZ STUDIO"
									})]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Visit GRAINZ STUDIO Instagram" }) })] })]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "https://grainz.site",
						target: "_blank",
						rel: "noopener noreferrer",
						className: "group flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "label-technical text-muted-foreground transition-colors group-hover:text-foreground",
							children: "A COMPANY BY"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-lg tracking-wide transition-colors group-hover:text-accent",
							children: "GRAINZ"
						})]
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-t border-border/50 pt-8 flex justify-between items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "label-technical text-muted-foreground",
					children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" ",
						t.footer.location
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#top",
					className: "label-technical text-muted-foreground hover:text-foreground transition-colors",
					children: t.footer.backToTop
				})]
			})]
		})
	});
}
//#endregion
export { SectionLabel as a, Reveal as i, Footer as n, Nav as r, Contact as t };
