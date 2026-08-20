import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as useLanguage } from "./router-CKZ4SvhM.mjs";
import { a as useScroll, i as useMotionValue, n as useSpring, r as useTransform, s as AnimatePresence, t as useInView } from "../_libs/framer-motion+[...].mjs";
import { t as motion } from "../_libs/motion.mjs";
import { a as SectionLabel, i as Reveal, n as Footer, r as Nav, t as Contact } from "./Contact-qUPcZcU0.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BL7tijKX.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var hero_prototypes_default = "/assets/hero-prototypes-ck2egspz.jpg";
function Hero() {
	const ref = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"]
	});
	const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
	const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
	const fade = useTransform(scrollYProgress, [0, .8], [1, 0]);
	const { t, language } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref,
		id: "top",
		className: "relative min-h-[100svh] overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "blueprint-grid absolute inset-0 opacity-70" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				"aria-hidden": true,
				className: "absolute inset-0 h-full w-full text-foreground/25",
				preserveAspectRatio: "none",
				viewBox: "0 0 100 100",
				children: [[
					18,
					50,
					82
				].map((v, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.line, {
					x1: v,
					y1: "0",
					x2: v,
					y2: "100",
					stroke: "currentColor",
					strokeWidth: "0.08",
					strokeDasharray: "1.4 1.2",
					initial: {
						pathLength: 0,
						opacity: 0
					},
					animate: {
						pathLength: 1,
						opacity: 1
					},
					transition: {
						duration: 2.2,
						delay: .2 + i * .18,
						ease: "easeInOut"
					}
				}, v)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.circle, {
					cx: "82",
					cy: "34",
					r: "9",
					fill: "none",
					stroke: "currentColor",
					strokeWidth: "0.08",
					initial: { pathLength: 0 },
					animate: { pathLength: 1 },
					transition: {
						duration: 2.6,
						delay: .6,
						ease: "easeInOut"
					}
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto flex min-h-[100svh] max-w-[1600px] flex-col justify-end px-6 pt-32 pb-14 md:px-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					style: { y: imgY },
					className: "pointer-events-none absolute inset-y-0 right-0 hidden w-[54%] items-start justify-end pt-24 lg:flex",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
						src: hero_prototypes_default,
						alt: t.hero.imageAlt,
						width: 1600,
						height: 1200,
						className: "h-[64vh] w-full object-cover object-center mix-blend-multiply",
						initial: {
							opacity: 0,
							scale: 1.06
						},
						animate: {
							opacity: 1,
							scale: 1
						},
						transition: {
							duration: 1.6,
							ease: [
								.16,
								1,
								.3,
								1
							]
						}
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					style: {
						y: textY,
						opacity: fade
					},
					className: "relative max-w-4xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							className: "label-technical mb-8 flex flex-wrap items-center gap-x-6 gap-y-2",
							initial: { opacity: 0 },
							animate: { opacity: 1 },
							transition: {
								duration: 1,
								delay: .3
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.hero.tag })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "font-display text-[13vw] leading-[0.86] tracking-[-0.045em] sm:text-[9vw] lg:text-[7.4vw]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block overflow-hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
									className: "block",
									initial: { y: "110%" },
									animate: { y: 0 },
									transition: {
										duration: 1.15,
										delay: .15,
										ease: [
											.16,
											1,
											.3,
											1
										]
									},
									children: t.hero.titleLine1
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block overflow-hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
									className: "block",
									initial: { y: "110%" },
									animate: { y: 0 },
									transition: {
										duration: 1.15,
										delay: .27,
										ease: [
											.16,
											1,
											.3,
											1
										]
									},
									children: language === "en" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["to ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "italic text-accent",
										children: t.hero.titleLine2Accent
									})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "italic text-accent",
										children: t.hero.titleLine2
									})
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							className: "mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg",
							initial: {
								opacity: 0,
								y: 20
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: 1,
								delay: .6
							},
							children: t.hero.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							className: "mt-12 flex flex-wrap items-center gap-8",
							initial: {
								opacity: 0,
								y: 20
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: 1,
								delay: .75
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#contact",
								className: "group relative inline-flex items-center gap-4 overflow-hidden bg-foreground px-8 py-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 translate-y-full bg-accent transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "label-technical relative text-primary-foreground",
										children: t.hero.startProject
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "relative text-primary-foreground transition-transform duration-500 group-hover:translate-x-1",
										children: "→"
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#projects",
								className: "label-technical underline-offset-8 hover:underline",
								children: t.hero.viewWork
							})]
						})
					]
				})]
			})
		]
	});
}
function About() {
	const { t } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "relative border-t border-border py-28 md:py-40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1600px] px-6 md:px-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
				index: t.about.sectionIndex,
				title: t.about.sectionTitle
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 grid gap-14 lg:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-[8vw] leading-[0.95] sm:text-5xl lg:text-[3.6rem]",
							children: t.about.headline
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .1,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-10 max-w-2xl text-lg leading-relaxed text-muted-foreground",
								children: t.about.p1
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .15,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground",
								children: t.about.p2
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-5 lg:pl-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 gap-px bg-border",
						children: t.about.stats.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .05 * i,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-background p-8",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-display text-3xl tracking-[-0.04em]",
									children: s.value
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "label-technical mt-3",
									children: s.label
								})]
							})
						}, s.label))
					})
				})]
			})]
		})
	});
}
var visualMap = {
	"01": "form",
	"02": "cad",
	"03": "print",
	"04": "proto",
	"05": "mold",
	"06": "consult"
};
function ProcessVisual({ kind, active }) {
	const stroke = {
		fill: "none",
		stroke: "currentColor",
		strokeWidth: .7
	};
	const draw = (delay) => ({
		initial: {
			pathLength: 0,
			opacity: 0
		},
		animate: active ? {
			pathLength: 1,
			opacity: 1
		} : {
			pathLength: 0,
			opacity: 0
		},
		transition: {
			duration: .9,
			delay,
			ease: "easeInOut"
		}
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 100 60",
		className: "h-full w-full text-accent",
		children: [
			kind === "form" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
				d: "M18 44 C18 20 42 12 58 20 C72 27 78 40 70 46 C60 52 30 54 18 44 Z",
				...stroke,
				...draw(0)
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
				d: "M26 44 C30 30 44 24 56 28",
				...stroke,
				...draw(.2)
			})] }),
			kind === "cad" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
					d: "M28 18 H68 V44 H28 Z",
					...stroke,
					...draw(0)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
					d: "M28 18 L40 10 H80 L68 18",
					...stroke,
					...draw(.15)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
					d: "M68 44 L80 36 V10",
					...stroke,
					...draw(.3)
				})
			] }),
			kind === "print" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
					d: "M24 46 H76",
					...stroke,
					...draw(0)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
					d: "M34 46 V34 H66 V46",
					...stroke,
					...draw(.15)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
					d: "M42 34 V24 H58 V34",
					...stroke,
					...draw(.3)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
					d: "M50 8 V20",
					...stroke,
					...draw(.45)
				})
			] }),
			kind === "proto" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
					d: "M22 40 H44 V16 H22 Z",
					...stroke,
					...draw(0)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
					d: "M52 46 H78 V22 H52 Z",
					...stroke,
					...draw(.2)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
					d: "M44 28 H52",
					...stroke,
					...draw(.4)
				})
			] }),
			kind === "mold" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
					d: "M20 12 H80 V28 H20 Z",
					...stroke,
					...draw(0)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
					d: "M20 32 H80 V48 H20 Z",
					...stroke,
					...draw(.15)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
					d: "M44 28 H56 V32 H44 Z",
					...stroke,
					...draw(.3)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
					d: "M50 4 V12",
					...stroke,
					...draw(.45)
				})
			] }),
			kind === "consult" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
					d: "M18 46 H82",
					...stroke,
					...draw(0)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
					d: "M18 46 L36 32 L52 38 L70 14",
					...stroke,
					...draw(.2)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.circle, {
					cx: "70",
					cy: "14",
					r: "3",
					...stroke,
					...draw(.5)
				})
			] })
		]
	});
}
function ServiceCard({ s, i }) {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		margin: "-20% 0px",
		once: false
	});
	const visual = visualMap[s.id] || "form";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
		delay: .04 * i,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			ref,
			className: "group relative flex h-full min-h-[22rem] flex-col justify-between bg-background p-8 transition-colors duration-500 hover:bg-secondary/60 md:p-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "label-technical",
						children: s.id
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "label-technical opacity-0 transition-opacity duration-500 group-hover:opacity-100",
						children: s.meta
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pointer-events-none absolute inset-x-8 top-1/2 -translate-y-1/2 md:inset-x-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-32",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProcessVisual, {
							kind: visual,
							active: inView
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-2xl transition-transform duration-500 group-hover:-translate-y-1 md:text-[1.75rem]",
					children: s.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground transition-opacity duration-500 group-hover:opacity-40",
					children: s.description
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute bottom-0 left-0 h-px w-0 bg-accent transition-[width] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full" })
			]
		})
	});
}
function Services() {
	const { t } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "services",
		className: "relative border-t border-border py-28 md:py-40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1600px] px-6 md:px-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
					index: t.services.sectionIndex,
					title: t.services.sectionTitle
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-md text-sm leading-relaxed text-muted-foreground",
					children: t.services.subtitle
				}) })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3",
				children: t.services.items.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceCard, {
					s,
					i
				}, s.id))
			})]
		})
	});
}
var stageImages = {
	sketch: "/assets/case-sketch-Cd66DhCc.jpg",
	cad: "/assets/case-cad-BM1adsDZ.jpg",
	final: "/assets/case-final-cAShqnt0.jpg"
};
function Projects() {
	const [stage, setStage] = (0, import_react.useState)("sketch");
	const [openIndex, setOpenIndex] = (0, import_react.useState)(0);
	const { t } = useLanguage();
	const stages = [
		{
			key: "sketch",
			label: t.projects.stages.sketch,
			image: stageImages.sketch
		},
		{
			key: "cad",
			label: t.projects.stages.cad,
			image: stageImages.cad
		},
		{
			key: "final",
			label: t.projects.stages.final,
			image: stageImages.final
		}
	];
	const activeStage = stages.find((s) => s.key === stage);
	const project = t.projects.items[openIndex] || t.projects.items[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "projects",
		className: "relative border-t border-border py-28 md:py-40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1600px] px-6 md:px-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
				index: t.projects.sectionIndex,
				title: t.projects.sectionTitle
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 grid gap-16 lg:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative aspect-[4/5] overflow-hidden bg-secondary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
							mode: "wait",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
								src: activeStage.image,
								alt: `${project.name} — ${activeStage.label}`,
								loading: "lazy",
								width: 1200,
								height: 1504,
								className: "absolute inset-0 h-full w-full object-cover",
								initial: {
									opacity: 0,
									scale: 1.04
								},
								animate: {
									opacity: 1,
									scale: 1
								},
								exit: { opacity: 0 },
								transition: {
									duration: .7,
									ease: [
										.16,
										1,
										.3,
										1
									]
								}
							}, `${openIndex}-${stage}`)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 border border-foreground/10" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 flex gap-px bg-border",
						children: stages.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setStage(s.key),
							className: `flex-1 bg-background px-4 py-3 transition-colors ${stage === s.key ? "bg-foreground" : "hover:bg-secondary"}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `label-technical ${stage === s.key ? "text-primary-foreground" : ""}`,
								children: s.label
							})
						}, s.key))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-6 lg:pl-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "divide-y divide-border",
						children: t.projects.items.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .05 * i,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setOpenIndex(i),
								className: "group w-full py-8 text-left",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-baseline justify-between gap-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-baseline gap-5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `label-technical ${openIndex === i ? "text-accent" : ""}`,
											children: p.id
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: `font-display text-3xl transition-colors md:text-[2.4rem] ${openIndex === i ? "" : "text-muted-foreground"} group-hover:text-foreground`,
											children: p.name
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "label-technical shrink-0",
										children: p.year
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
									initial: false,
									children: openIndex === i && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
										initial: {
											height: 0,
											opacity: 0
										},
										animate: {
											height: "auto",
											opacity: 1
										},
										exit: {
											height: 0,
											opacity: 0
										},
										transition: {
											duration: .6,
											ease: [
												.16,
												1,
												.3,
												1
											]
										},
										className: "overflow-hidden",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-6 max-w-xl text-base leading-relaxed text-muted-foreground",
											children: p.story
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "label-technical mt-6 flex flex-wrap gap-x-6 gap-y-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: p.sector }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-accent",
												children: p.scope
											})]
										})]
									})
								})]
							})
						}, p.id))
					})
				})]
			})]
		})
	});
}
function Process() {
	const [active, setActive] = (0, import_react.useState)(0);
	const { t } = useLanguage();
	const steps = t.process.steps;
	const currentStep = steps[active] || steps[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "process",
		className: "relative border-t border-border py-28 md:py-40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1600px] px-6 md:px-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-end justify-between gap-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
						index: t.process.sectionIndex,
						title: t.process.sectionTitle
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "label-technical",
						children: t.process.subtitle
					}) })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mt-20",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-3 right-0 left-0 h-px bg-border" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							className: "absolute top-3 left-0 h-px bg-accent",
							animate: { width: `${(active + 1) / steps.length * 100}%` },
							transition: {
								duration: .8,
								ease: [
									.16,
									1,
									.3,
									1
								]
							}
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-2 gap-y-12 md:grid-cols-5 md:gap-0",
							children: steps.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onMouseEnter: () => setActive(i),
								onClick: () => setActive(i),
								className: "group relative pt-0 pr-6 text-left",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `block h-[26px] w-[26px] -translate-x-[1px] rounded-full border transition-colors duration-500 ${i <= active ? "border-accent bg-accent" : "border-border bg-background group-hover:border-foreground"}`,
									style: { marginTop: "-9px" }
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-7",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "label-technical",
										children: s.id
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: `mt-2 font-display text-2xl transition-colors duration-500 md:text-[1.7rem] ${i === active ? "" : "text-muted-foreground"}`,
										children: s.title
									})]
								})]
							}, s.id))
						})
					]
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-16 grid gap-10 border-t border-border pt-10 lg:grid-cols-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: {
							opacity: 0,
							y: 14
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: { duration: .6 },
						className: "font-display text-2xl leading-snug lg:col-span-7 lg:text-[2rem]",
						children: currentStep.body
					}, currentStep.id), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-5 lg:pl-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "label-technical",
							children: t.process.deliverablesLabel
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-base text-muted-foreground",
							children: currentStep.output
						})]
					})]
				})
			]
		})
	});
}
var workshop_default = "/assets/workshop-B6ukch8d.jpg";
function Workshop() {
	const ref = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"]
	});
	const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
	const { t } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "workshop",
		ref,
		className: "relative overflow-hidden border-t border-border bg-ink py-28 text-background md:py-40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1600px] px-6 md:px-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-baseline gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "label-technical text-accent",
					children: t.workshop.sectionIndex
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "label-technical text-background/50",
					children: t.workshop.sectionTitle
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 grid gap-14 lg:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-[8vw] leading-[0.95] sm:text-5xl lg:text-[3.4rem]",
							children: t.workshop.headline
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .1,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-10 text-lg leading-relaxed text-background/60",
								children: t.workshop.p1
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-12 divide-y divide-background/15 border-y border-background/15",
							children: t.workshop.equipment.map(([k, v], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: .05 * i,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-baseline justify-between gap-4 py-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "label-technical text-background/45",
										children: k
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm text-background/80",
										children: v
									})]
								})
							}, k))
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-7",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative aspect-[16/11] overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
							style: { y },
							src: workshop_default,
							alt: "100KRAFT fabrication laboratory with 3D printers, materials and engineering tools",
							loading: "lazy",
							width: 1600,
							height: 1008,
							className: "absolute inset-0 h-[116%] w-full object-cover"
						})
					})
				})]
			})]
		})
	});
}
var mold_default = "/assets/mold-_ewUWjHa.jpg";
function Expertise() {
	const { t } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative border-t border-border py-28 md:py-40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1600px] px-6 md:px-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
				index: t.expertise.sectionIndex,
				title: t.expertise.sectionTitle
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 grid gap-16 lg:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative aspect-[4/3] overflow-hidden bg-secondary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: mold_default,
							alt: "Precision injection mold insert machined for production tooling",
							loading: "lazy",
							width: 1408,
							height: 1008,
							className: "h-full w-full object-cover"
						})
					}) })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-7 lg:pl-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-[8vw] leading-[0.95] sm:text-5xl lg:text-[3.2rem]",
						children: t.expertise.headline
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 divide-y divide-border border-y border-border",
						children: t.expertise.items.map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .06 * i,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "group grid gap-4 py-8 md:grid-cols-12",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-xl md:col-span-4",
									children: it.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-base leading-relaxed text-muted-foreground md:col-span-8",
									children: it.body
								})]
							})
						}, it.title))
					})]
				})]
			})]
		})
	});
}
function SmoothScroll() {
	(0, import_react.useEffect)(() => {
		let raf = 0;
		let lenis = null;
		const loop = (time) => {
			lenis?.raf(time);
			raf = requestAnimationFrame(loop);
		};
		import("../_libs/lenis.mjs").then((n) => n.t).then(({ default: Lenis }) => {
			lenis = new Lenis({
				duration: 1.15,
				lerp: .1,
				smoothWheel: true
			});
			raf = requestAnimationFrame(loop);
		});
		return () => {
			cancelAnimationFrame(raf);
			lenis?.destroy();
		};
	}, []);
	return null;
}
function Cursor() {
	const x = useMotionValue(-100);
	const y = useMotionValue(-100);
	const sx = useSpring(x, {
		stiffness: 400,
		damping: 40,
		mass: .4
	});
	const sy = useSpring(y, {
		stiffness: 400,
		damping: 40,
		mass: .4
	});
	const [active, setActive] = (0, import_react.useState)(false);
	const [enabled, setEnabled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!window.matchMedia("(pointer: fine)").matches) return;
		setEnabled(true);
		const move = (e) => {
			x.set(e.clientX);
			y.set(e.clientY);
			const el = e.target;
			setActive(Boolean(el?.closest("a, button, [data-cursor]")));
		};
		window.addEventListener("pointermove", move);
		return () => window.removeEventListener("pointermove", move);
	}, [x, y]);
	if (!enabled) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		"aria-hidden": true,
		className: "pointer-events-none fixed top-0 left-0 z-[100] hidden md:block",
		style: {
			x: sx,
			y: sy
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			className: "relative -translate-x-1/2 -translate-y-1/2",
			animate: { scale: active ? 1.9 : 1 },
			transition: {
				type: "spring",
				stiffness: 300,
				damping: 25
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-3 w-3 rounded-full bg-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-1/2 left-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-foreground/25" })]
		})
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmoothScroll, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cursor, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Projects, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Process, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Workshop, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Expertise, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
	] });
}
//#endregion
export { Index as component };
