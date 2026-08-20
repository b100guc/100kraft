import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as Eye, r as ArrowDown } from "../_libs/lucide-react.mjs";
import { n as Footer, r as Nav } from "./Contact-qUPcZcU0.mjs";
import { n as animate, t as stagger } from "../_libs/animejs.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/store-X3e-Ng1S.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var MOCK_PRODUCTS = [
	{
		id: "prod_1",
		title: "Precision Aluminum Chassis",
		handle: "precision-aluminum-chassis",
		thumbnail: "/store-image-1.png",
		description: "CNC machined from aerospace-grade aluminum, designed for optimal thermal dissipation and structural integrity.",
		collection: { title: "CNC Prototyping" },
		price: "$450.00",
		colors: [
			"#8B8C89",
			"#1E1E1E",
			"#D4D4D4"
		],
		sizes: [
			"Proto 1",
			"Proto 2",
			"Final"
		]
	},
	{
		id: "prod_2",
		title: "Modular Sensor Housing",
		handle: "modular-sensor-housing",
		thumbnail: "/store-image-2.png",
		description: "High-resolution 3D printed housing using industrial resins, featuring an interlocking mechanism for easy assembly.",
		collection: { title: "3D Printing" },
		price: "$120.00",
		colors: ["#1E1E1E", "#E6E6E6"],
		sizes: [
			"V1.0",
			"V1.1",
			"V2.0"
		]
	},
	{
		id: "prod_3",
		title: "Ergonomic Handheld Controller",
		handle: "ergonomic-handheld-controller",
		thumbnail: "/store-image-3.png",
		description: "Iterative prototype exploring organic forms and ergonomics for industrial handheld equipment control.",
		collection: { title: "Industrial Design" },
		price: "$280.00",
		colors: [
			"#D4D4D4",
			"#C65A2C",
			"#1E1E1E"
		],
		sizes: ["Alpha", "Beta"]
	}
];
function MinimalProductCard({ product }) {
	const fullImageUrl = product.thumbnail ?? "";
	const cardRef = (0, import_react.useRef)(null);
	const [active, setActive] = (0, import_react.useState)(false);
	const handleTouchStart = (e) => {
		const card = cardRef.current;
		if (!card) return;
		const touch = e.touches[0];
		const rect = card.getBoundingClientRect();
		const x = (touch.clientX - rect.left) / rect.width * 100;
		const y = (touch.clientY - rect.top) / rect.height * 100;
		card.style.setProperty("--reveal-x", `${String(x)}%`);
		card.style.setProperty("--reveal-y", `${String(y)}%`);
		setActive(true);
	};
	const handleMouseEnter = (e) => {
		const card = cardRef.current;
		if (!card) return;
		const rect = card.getBoundingClientRect();
		const x = (e.clientX - rect.left) / rect.width * 100;
		const y = (e.clientY - rect.top) / rect.height * 100;
		card.style.setProperty("--reveal-x", `${String(x)}%`);
		card.style.setProperty("--reveal-y", `${String(y)}%`);
		setActive(true);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: cardRef,
		onMouseEnter: handleMouseEnter,
		onTouchStart: handleTouchStart,
		onMouseLeave: () => setActive(false),
		className: "group relative block w-full h-full bg-transparent overflow-hidden border border-border/30 hover:border-primary/50 transition-colors duration-700",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative aspect-[3/4] w-full overflow-hidden bg-muted",
				children: [
					fullImageUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: fullImageUrl,
						alt: product.title,
						className: "absolute inset-0 w-full h-full object-cover grayscale opacity-90 transition-all duration-1000 ease-out"
					}),
					fullImageUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 w-full h-full transition-all duration-1000 ease-out",
						style: {
							clipPath: `circle(${active ? "150%" : "0%"} at var(--reveal-x, 50%) var(--reveal-y, 50%))`,
							transition: "clip-path 2.8s cubic-bezier(0.15, 0.85, 0.35, 1)"
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: fullImageUrl,
							alt: product.title,
							className: "absolute inset-0 w-full h-full object-cover"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `absolute bottom-6 left-1/2 -translate-x-1/2 transition-all duration-700 z-30 w-fit ${active ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"}`,
						style: { transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/store",
							className: "block bg-background/80 backdrop-blur-md text-foreground text-[8px] sm:text-[10px] uppercase tracking-normal font-medium py-1.5 px-3 sm:py-3 sm:px-8 rounded-full border border-border whitespace-nowrap shadow-xl hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-pointer",
							children: "View Details"
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-center justify-center text-center p-3 sm:p-6 md:p-8 bg-transparent relative z-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[8px] sm:text-[9px] text-muted-foreground uppercase tracking-[0.4em] mb-1 sm:mb-3 font-light",
						children: product.collection?.title ?? "CLOSET STUDIO"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "text-xs sm:text-sm md:text-base uppercase font-normal text-foreground mb-2 sm:mb-4 w-full line-clamp-2 transition-colors duration-500 tracking-widest",
						children: product.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] sm:text-xs font-light tracking-[0.15em] text-foreground/80 group-hover:text-foreground transition-colors duration-500",
							children: product.price
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 left-0 w-8 h-[1px] bg-foreground/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 left-0 w-[1px] h-8 bg-foreground/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 right-0 w-8 h-[1px] bg-foreground/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 right-0 w-[1px] h-8 bg-foreground/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100" })
		]
	});
}
function ProductHero({ product, reversed = false }) {
	const sectionRef = (0, import_react.useRef)(null);
	const fullImageUrl = product.thumbnail ?? "";
	(0, import_react.useEffect)(() => {
		const section = sectionRef.current;
		if (!section) return;
		const handleScroll = () => {
			const rect = section.getBoundingClientRect();
			const windowHeight = window.innerHeight;
			const mask = section.querySelector(".color-mask");
			let progress = 0;
			if (window.innerWidth < 768) {
				const elementTop = rect.top;
				const startReveal = windowHeight;
				const totalDistance = startReveal - windowHeight * .25;
				progress = (startReveal - elementTop) / totalDistance;
			} else if (rect.top <= 0) {
				const totalScrollableDistance = rect.height - windowHeight;
				if (totalScrollableDistance > 0) progress = Math.abs(rect.top) / totalScrollableDistance;
			}
			progress = Math.min(Math.max(progress, 0), 1);
			if (mask) {
				if (window.innerWidth < 768) mask.style.clipPath = `inset(0 ${100 - progress * 100}% 0 0)`;
				else mask.style.clipPath = `inset(0 0 ${100 - progress * 100}% 0)`;
			}
			section.querySelectorAll(".reveal-step").forEach((step) => {
				const startProgress = parseFloat(step.getAttribute("data-progress") || "0");
				if (progress > startProgress) step.classList.add("active");
				else step.classList.remove("active");
			});
		};
		handleScroll();
		window.addEventListener("resize", handleScroll);
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => {
			window.removeEventListener("resize", handleScroll);
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: sectionRef,
		className: "scroll-section relative h-auto md:h-[250vh] w-full group",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative md:sticky md:top-0 md:left-0 w-full h-auto md:h-screen overflow-hidden bg-transparent",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "w-full h-auto md:h-full grid grid-cols-1 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `relative w-full flex items-center justify-center p-3 sm:p-8 md:p-0 max-w-[400px] sm:max-w-[480px] md:max-w-none mx-auto ${reversed ? "md:order-2" : ""}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative w-full aspect-[4/5] md:aspect-auto md:h-full overflow-hidden rounded-2xl md:rounded-none",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-0 w-full h-full flex justify-center bg-transparent",
							children: fullImageUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: fullImageUrl,
								alt: product.title,
								className: "absolute inset-0 w-full h-full object-contain grayscale brightness-110"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "color-mask absolute inset-0 w-full h-full flex justify-center will-change-[clip-path]",
							style: { clipPath: "inset(0 0 100% 0)" },
							children: fullImageUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: fullImageUrl,
								alt: product.title,
								className: "absolute inset-0 w-full h-full object-contain"
							})
						})]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `flex items-center justify-center py-5 px-6 md:p-12 relative z-20 ${reversed ? "md:order-1" : ""}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-sm md:max-w-md w-full flex flex-col gap-6 md:gap-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "reveal-step transition-all duration-1000 ease-out opacity-0 translate-y-12 [&.active]:opacity-100 [&.active]:translate-y-0",
								"data-progress": "0.2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-lg sm:text-xl md:text-4xl font-semibold tracking-tight text-foreground mb-3 font-display",
									children: product.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-center gap-3",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-base sm:text-xl font-medium text-foreground",
										children: product.price
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "reveal-step transition-all duration-1000 ease-out opacity-0 translate-y-12 [&.active]:opacity-100 [&.active]:translate-y-0",
								"data-progress": "0.4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm md:text-base leading-relaxed text-muted-foreground font-light text-justify pt-6 border-t border-border/50",
									children: product.description
								})
							}),
							(product.colors.length > 0 || product.sizes.length > 0) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "reveal-step grid grid-cols-2 gap-4 sm:gap-8 transition-all duration-1000 ease-out opacity-0 translate-y-12 [&.active]:opacity-100 [&.active]:translate-y-0",
								"data-progress": "0.6",
								children: [product.colors.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-[10px] text-muted-foreground uppercase mb-3 tracking-widest label-technical",
									children: "MATERIAL"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex gap-2.5 flex-wrap",
									children: product.colors.map((color, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-6 h-6 rounded-full border border-border shadow-inner cursor-pointer hover:scale-110 transition-transform",
										style: { backgroundColor: color }
									}, i))
								})] }), product.sizes.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-[10px] text-muted-foreground uppercase mb-3 tracking-widest label-technical",
									children: "VERSION"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex gap-4 text-xs font-medium text-foreground",
									children: product.sizes.map((size, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "cursor-default label-technical",
										children: size
									}, i))
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "reveal-step pt-8 transition-all duration-1000 ease-out opacity-0 translate-y-12 [&.active]:opacity-100 [&.active]:translate-y-0",
								"data-progress": "0.8",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/store",
									className: "w-full block group",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										className: "w-full h-14 bg-foreground text-background hover:bg-foreground/90 text-xs font-medium uppercase flex items-center justify-center gap-3 rounded-none transition-colors duration-300",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "tracking-widest label-technical",
											children: "QUICK VIEW"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { width: 16 })]
									})
								})
							})
						]
					})
				})]
			})
		})
	});
}
function CinematicProductScrollSection() {
	const finalTitle = "100KRAFT STORE";
	const finalSubtitle = "EST. 2024";
	const finalDescription = "We design a timeless lifestyle beyond objects. Where minimalism meets manufacturing.";
	const finalButtonText = "View Collection";
	const containerRef = (0, import_react.useRef)(null);
	const scrollContainerRef = (0, import_react.useRef)(null);
	const scrollIndicatorRef = (0, import_react.useRef)(null);
	const finalCollectionRef = (0, import_react.useRef)(null);
	const animeTriggered = (0, import_react.useRef)(false);
	(0, import_react.useEffect)(() => {
		if (!finalCollectionRef.current) return;
		const observer = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting && !animeTriggered.current) {
				if (!finalCollectionRef.current) return;
				animeTriggered.current = true;
				animate(finalCollectionRef.current.querySelectorAll(".anime-card"), {
					translateY: [-200, 0],
					opacity: [0, 1],
					delay: stagger(150),
					duration: 1e3,
					easing: "easeOutElastic(1, .6)"
				});
			}
		}, { threshold: .2 });
		observer.observe(finalCollectionRef.current);
		return () => observer.disconnect();
	}, []);
	(0, import_react.useEffect)(() => {
		const container = scrollContainerRef.current;
		if (!container) return;
		const handleContainerScroll = () => {
			const indicator = scrollIndicatorRef.current;
			const track = indicator?.parentElement;
			if (!indicator || !track) return;
			const maxScroll = container.scrollWidth - container.clientWidth;
			if (maxScroll <= 0) {
				track.style.display = "none";
				return;
			} else track.style.display = "block";
			const scrollPercentage = Math.abs(container.scrollLeft) / maxScroll * 100;
			indicator.style.left = `${scrollPercentage * .666}%`;
		};
		container.addEventListener("scroll", handleContainerScroll, { passive: true });
		const timeoutId = setTimeout(handleContainerScroll, 100);
		window.addEventListener("resize", handleContainerScroll);
		return () => {
			container.removeEventListener("scroll", handleContainerScroll);
			window.removeEventListener("resize", handleContainerScroll);
			clearTimeout(timeoutId);
		};
	}, []);
	(0, import_react.useEffect)(() => {
		if (!containerRef.current) return;
		const gridItems = containerRef.current.querySelectorAll(".grid-item, .reveal");
		const gridObserver = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) entry.target.classList.add("show", "active");
			});
		}, {
			threshold: .1,
			rootMargin: "0px"
		});
		gridItems.forEach((item) => {
			gridObserver.observe(item);
		});
		return () => {
			gridObserver.disconnect();
		};
	}, []);
	const mainTitleParts = finalTitle.split(" ");
	const mainTitleFirst = mainTitleParts[0];
	const mainTitleRest = mainTitleParts.slice(1).join(" ");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: containerRef,
		className: "bg-transparent text-foreground antialiased selection:bg-accent selection:text-accent-foreground w-full animate-in fade-in duration-1000",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative h-[100dvh] w-full flex flex-col justify-center items-center overflow-hidden bg-transparent",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent/5 blur-[120px] rounded-full animate-pulse" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-muted-foreground/10 blur-[150px] rounded-full" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative z-10 text-center px-6 -mt-16 md:-mt-32 w-full flex flex-col items-center justify-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "overflow-hidden mb-4 md:mb-6 w-full flex justify-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block font-black text-muted-foreground uppercase reveal text-center label-technical",
									style: { animationDelay: "0.2s" },
									children: finalSubtitle
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "text-4xl sm:text-6xl md:text-[8rem] lg:text-[10rem] font-display font-medium leading-[0.85] text-foreground w-full flex flex-col items-center justify-center text-center tracking-tighter",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "overflow-hidden w-full flex justify-center",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block reveal text-center",
										style: { animationDelay: "0.4s" },
										children: mainTitleFirst
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "overflow-hidden mt-2 w-full flex justify-center",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block font-light text-muted-foreground reveal text-center",
										style: { animationDelay: "0.6s" },
										children: mainTitleRest
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 md:mt-12 overflow-hidden w-full flex justify-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground text-center text-sm md:text-base max-w-lg font-light leading-relaxed tracking-wide reveal",
									style: { animationDelay: "0.8s" },
									children: finalDescription
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute bottom-8 md:bottom-12 flex flex-col items-center gap-4 reveal",
						style: { animationDelay: "1.2s" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-[1px] h-12 md:h-20 bg-foreground/10 relative overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-transparent via-foreground/50 to-transparent animate-in slide-in-from-top-full duration-1000 repeat-infinite" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "label-technical text-[9px] text-foreground/40",
							children: "SCROLL DOWN"
						})]
					})
				]
			}),
			MOCK_PRODUCTS.map((product, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductHero, {
				product,
				reversed: index % 2 !== 0
			}, product.id)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: finalCollectionRef,
				id: "final-collection",
				className: "bg-transparent w-full pt-12 pb-4 md:pt-16 md:pb-6 border-t border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full max-w-7xl mx-auto px-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-end justify-between border-b border-border pb-4 mb-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "label-technical text-muted-foreground block",
								children: "OVERVIEW"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/store",
								className: "group inline-flex items-center gap-1.5 label-technical font-bold text-foreground hover:text-muted-foreground transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "tracking-[0.2em]",
									children: finalButtonText
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, { className: "w-3.5 h-3.5 transition-transform -rotate-90 group-hover:translate-x-0.5" })]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							ref: scrollContainerRef,
							className: "flex overflow-x-auto gap-4 md:gap-8 pb-8 scrollbar-hide snap-x snap-mandatory justify-start md:justify-center",
							children: MOCK_PRODUCTS.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "anime-card grid-item group cursor-pointer w-[calc(50%-8px)] min-w-[calc(50%-8px)] max-w-[calc(50%-8px)] sm:w-[calc(33.333%-11px)] sm:min-w-[calc(33.333%-11px)] sm:max-w-[calc(33.333%-11px)] md:w-[300px] md:min-w-[300px] md:max-w-[320px] snap-center flex-shrink-0 opacity-0",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MinimalProductCard, { product })
							}, product.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-24 h-[2px] bg-foreground/10 mx-auto mt-2 rounded-full overflow-hidden relative",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								ref: scrollIndicatorRef,
								className: "h-full bg-foreground w-8 rounded-full absolute left-0 transition-all duration-75",
								style: { left: "0%" }
							})
						})
					]
				})
			})
		]
	});
}
function StorePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
			className: "min-h-screen bg-background pt-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CinematicProductScrollSection, {})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
	] });
}
//#endregion
export { StorePage as component };
