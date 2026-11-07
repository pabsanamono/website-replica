import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EUKAL — Detergente biodegradable B2B Costa Rica" },
      { name: "description", content: "Detergente líquido ultra-concentrado biodegradable para hoteles, distribuidoras y lavanderías. Ahorra hasta 60% en costo operativo." },
      { property: "og:title", content: "EUKAL — Detergente biodegradable B2B Costa Rica" },
      { property: "og:description", content: "Detergente líquido ultra-concentrado biodegradable para hoteles, distribuidoras y lavanderías. Ahorra hasta 60% en costo operativo." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    const rangeInput = document.getElementById("volume-range") as HTMLInputElement | null;
    const volumeLabel = document.getElementById("volume-label")!;
    const resultEukal = document.getElementById("result-eukal-gallons")!;
    const resultSaved = document.getElementById("result-money-saved")!;
    const resultPlastic = document.getElementById("result-plastic-saved")!;
    const sectorButtons = document.querySelectorAll<HTMLButtonElement>("#sector-toggle-group button");
    let mult = 12;
    const update = () => {
      if (!rangeInput) return;
      const count = parseInt(rangeInput.value, 10);
      volumeLabel.textContent = count + " bidones";
      const req = Math.max(1, Math.ceil(count / mult));
      resultEukal.textContent = req + (req === 1 ? " Garrafa" : " Garrafas");
      resultSaved.textContent = "₡" + Math.max(0, count * 6000 - count * 2400).toLocaleString("es-CR");
      resultPlastic.textContent = Math.max(0, count - req) + " recipientes plásticos";
    };
    const mults: Record<string, number> = { hotel: 12, lavanderia: 15, restaurante: 10, distribuidora: 14 };
    rangeInput?.addEventListener("input", update);
    sectorButtons.forEach((b) =>
      b.addEventListener("click", () => {
        sectorButtons.forEach((x) => {
          x.classList.remove("bg-primary", "text-on-primary");
          x.classList.add("bg-surface-container-high", "text-on-surface-variant");
        });
        b.classList.remove("bg-surface-container-high", "text-on-surface-variant");
        b.classList.add("bg-primary", "text-on-primary");
        mult = mults[b.dataset.sector ?? "hotel"] ?? 12;
        update();
      }),
    );
    const form = document.getElementById("sample-request-form") as HTMLFormElement | null;
    const fb = document.getElementById("sample-feedback");
    const btn = document.getElementById("sample-submit-btn") as HTMLButtonElement | null;
    form?.addEventListener("submit", (e) => {
      e.preventDefault();
      if (btn) { btn.disabled = true; btn.classList.add("opacity-50"); }
      fb?.classList.remove("hidden");
      form.reset();
    });
    update();
  }, []);

  return (
    <div className="bg-surface font-body-md text-body-md text-on-surface antialiased flex flex-col min-h-screen">
<header className="fixed top-0 w-full z-50 bg-surface/85 backdrop-blur-xl pt-safe shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="h-16 px-margin flex items-center justify-between gap-space-sm"><div className="flex items-center gap-space-sm"><div className="flex items-center gap-2"><img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlJl9YKzIxtu4jdQKWed1q9EuWelFmgzd8GuymRHOI__f0XOm8wwKloKd8cQ1OvLKBnYDSl7DSLeL-vElM031OIGpoqodgf8cjvKnO1YvTpRyZI2KVlEHTCpR4PPl8jfEO-lNOH607ZOy4KM02QcMvVbD91cOvf1Hd-1KJ706lIc3If8rkA0_Vs4gCD9plw-sVwey8VbnPRpodld7aqn1tJmIr5UDm52A-U1cZeTWHCbiQcVPKy3sr" alt="EUKAL Poder Natural" className="h-10 w-auto object-contain shrink-0" /><div className="flex flex-col"><span className="font-label-sm text-[10px] text-secondary font-bold uppercase tracking-wider leading-none">B2B Costa Rica</span></div></div><div className="hidden sm:flex items-center gap-1 bg-secondary-container/40 px-2 py-0.5 rounded-full text-secondary shrink-0"><span className="material-symbols-outlined text-[13px]">verified</span><span className="font-label-sm text-[10px] tracking-wide">Certificado UNA</span></div></div><div className="flex items-center gap-space-xs"><div className="flex sm:hidden items-center gap-1 bg-secondary-container/40 px-2 py-1 rounded-full text-secondary"><span className="material-symbols-outlined text-[12px]">verified</span><span className="font-label-sm text-[10px] tracking-tight">UNA</span></div><a className="h-11 px-3 bg-primary text-on-primary flex items-center gap-1 rounded-lg hover:bg-primary-container transition-colors" href="/#lead-sample"><span className="material-symbols-outlined text-[18px]">request_quote</span><span className="font-label-sm text-label-sm hidden xs:inline">Cotizar</span></a><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><span className="material-symbols-outlined text-on-primary text-[18px]">person</span></div></div></div></header><main className="flex-1 flex flex-col relative w-full pt-16 pb-28 bg-surface"><div className="flex flex-col w-full">
{/* Top Trust Ribbon */}
<section className="w-full bg-secondary-container/30 px-margin py-2.5 flex items-center justify-between">
<div className="flex items-center gap-space-xs min-w-0">
<img src="https://lh3.googleusercontent.com/aida-public/AB6AXuChE1b2UZNSpUfAn8EdCU_WO9Gidq0HPVhlncjvDFUJvGwilps_5nic3PEmFGPJnTdBLhrFIDAVEHcaRYHR4bq93jNT1BgyrNzLWPvxk8vU49JnA7dA-XivhUX32k5ZbrIIEA7ta9Uc221jyqom19mi9etGn79Q7D67PFNU0U7AFeiYZn84qhJX8tloSN25DRHJvSC3lhPduXl9RKWAtU2N3Y-Zl5OUUy7SopYbMI0sJybYxZ-WO4mR" alt="EUKAL Sello" className="w-5 h-5 object-contain shrink-0" />
<p className="font-label-sm text-label-sm text-on-secondary-container truncate font-semibold">
        Certificado Biodegradable • Validación Científica UNA Costa Rica
      </p>
</div>
<span className="inline-flex items-center gap-1 bg-surface-container-lowest px-2 py-0.5 rounded-full text-secondary font-code-metric text-[11px] shadow-sm shrink-0">
<span className="material-symbols-outlined text-[13px] text-tertiary-container">verified</span>
      Lab UNA #CR-884
    </span>
</section>
{/* Hero Section */}
<section className="relative px-margin pt-space-lg pb-space-xl flex flex-col gap-space-md overflow-hidden bg-gradient-to-b from-surface via-surface-container-low to-surface">
{/* Ambient eucalyptus botanical badge */}
<div className="inline-flex items-center gap-2 self-start bg-surface-container-highest/60 backdrop-blur-sm px-3 py-1.5 rounded-full text-primary">
<span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim animate-pulse"></span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-medium">B2B Suministros Industriales Costa Rica</span>
</div>
<div className="flex flex-col gap-space-xs">
<h1 className="font-display-hero-mobile text-display-hero-mobile text-primary tracking-tight">
        Limpieza real. <br /><span className="text-secondary">Poder Natural.</span>
</h1>
<p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
        Detergente líquido ultra-concentrado biodegradable formulado para hoteles, distribuidoras y lavanderías comerciales. Reduce hasta un <span className="font-semibold text-primary">60% en costo operativo</span> y volumen de plástico.
      </p>
</div>
{/* Hero Image / Visual Frame */}
<div className="relative w-full rounded-xl overflow-hidden shadow-md bg-surface-container h-52">
<img className="w-full h-full object-cover object-center" data-alt="Modern commercial laundry facility in Costa Rica with eco-friendly cleaning detergents, gleaming stainless steel washing drums, pristine white hospitality linens, ambient natural sunlight and subtle eucalyptus botanical accents in warm green and clean white palette." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdjihp6GPzHJB4pA56SmKAPZ5uk6uVgsQBWOfwkbtfojAtHPT0AC-Kwlgjxef8xo2dGuV8F-hyHUvf-nT3B_w2ShVU97sOJgozwF8T1nJoZa5U5F7u7514v6kuz9uLideTuLmCQ9HuFdrLv_BA8Cynpiw0CTHCKUdA7x9TyWIK3vta5YcuhtCbPUk6s1U1Gdf406DirdbGAZqjMiND-_h5NS0yr2ahjverpO-70uo" />
<div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent flex items-end p-4">
<div className="flex items-center justify-between w-full text-on-primary">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-secondary-fixed">Concentrado Activo 1:20</span>
<span className="font-headline-sm text-headline-sm font-bold">Rendimiento Institucional</span>
</div>
<span className="bg-surface/20 backdrop-blur-md px-2.5 py-1 rounded text-[12px] font-label-sm font-semibold">
            pH Neutro 7.0
          </span>
</div>
</div>
</div>
{/* Dual CTAs */}
<div className="flex flex-col sm:flex-row gap-space-sm pt-1">
<a className="w-full sm:w-auto h-12 px-6 bg-primary text-on-primary rounded-lg font-label-md text-label-md flex items-center justify-center gap-2 shadow-md hover:bg-primary-container transition-all active:scale-[0.99]" href="#lead-sample">
<span className="material-symbols-outlined text-[20px]">storefront</span>
<span className="">Quiero ser Distribuidor</span>
</a>
<a className="w-full sm:w-auto h-12 px-6 bg-tertiary-fixed text-on-tertiary-fixed-variant rounded-lg font-label-md text-label-md flex items-center justify-center gap-2 shadow-sm hover:brightness-105 transition-all" href="#calculadora-dilucion">
<span className="material-symbols-outlined text-[20px]" style={{"fontVariationSettings": '"FILL" 1'}}>calculate</span>
<span className="">Calcular Dilución y Ahorro</span>
</a>
</div>
</section>
{/* KPI Metrics Grid */}
<section className="px-margin py-space-md">
<div className="grid grid-cols-2 gap-space-sm">
{/* Metric 1 */}
<div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm flex flex-col justify-between">
<div className="w-8 h-8 rounded-lg bg-secondary-container/50 flex items-center justify-center text-secondary mb-2">
<span className="material-symbols-outlined text-[20px]">layers</span>
</div>
<div>
<span className="font-headline-xl-mobile text-headline-xl-mobile text-primary font-bold">5–10x</span>
<p className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">Mayor rendimiento por galón diluido</p>
</div>
</div>
{/* Metric 2 */}
<div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm flex flex-col justify-between">
<div className="w-8 h-8 rounded-lg bg-tertiary-fixed/60 flex items-center justify-center text-tertiary-container mb-2">
<span className="material-symbols-outlined text-[20px]">savings</span>
</div>
<div>
<span className="font-headline-xl-mobile text-headline-xl-mobile text-secondary font-bold">60%</span>
<p className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">Ahorro en costos directos de compra</p>
</div>
</div>
{/* Metric 3 */}
<div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm flex flex-col justify-between">
<div className="w-8 h-8 rounded-lg bg-secondary-container/50 flex items-center justify-center text-secondary mb-2">
<span className="material-symbols-outlined text-[20px]">nest_eco_leaf</span>
</div>
<div>
<span className="font-headline-xl-mobile text-headline-xl-mobile text-primary font-bold">100%</span>
<p className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">Biodegradable verificado en laboratorio</p>
</div>
</div>
{/* Metric 4 */}
<div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm flex flex-col justify-between">
<div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-primary mb-2">
<span className="material-symbols-outlined text-[20px]">block</span>
</div>
<div>
<span className="font-headline-xl-mobile text-headline-xl-mobile text-primary font-bold">0%</span>
<p className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">Fosfatos, sulfatos corrosivos ni sales</p>
</div>
</div>
</div>
</section>
{/* Section: Explora EUKAL */}
<section className="px-margin py-space-lg flex flex-col gap-space-md">
<div className="flex flex-col gap-1">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">Soluciones B2B Integradas</span>
<h2 className="font-headline-md text-headline-md text-primary">Explora la Plataforma EUKAL</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">Arquitectura química adaptada a la escala de la industria costarricense.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
{/* Card 1: Productos */}
<div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm flex items-start gap-space-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 rounded-lg bg-secondary-container flex items-center justify-center text-on-secondary-container shrink-0">
<span className="material-symbols-outlined text-[26px]">science</span>
</div>
<div className="flex flex-col">
<h3 className="font-headline-sm text-headline-sm text-primary">Neutro &amp; Citrus Fresh</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Dosificación activa para sábanas de alta rotación, mantelería, vajillas y pisos duros industriales.</p>
<span className="font-label-sm text-label-sm text-secondary font-semibold mt-2 inline-flex items-center gap-1">
            Ver catálogo químico <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
</span>
</div>
</div>
{/* Card 2: Beneficios Comprobados */}
<div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm flex items-start gap-space-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 rounded-lg bg-tertiary-fixed flex items-center justify-center text-tertiary-container shrink-0">
<span className="material-symbols-outlined text-[26px]">verified_user</span>
</div>
<div className="flex flex-col">
<h3 className="font-headline-sm text-headline-sm text-primary">Cero Daño a Trampas Sépticas</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Preserva bacterias anaeróbicas activas en plantas de tratamiento y alarga vida de cañerías.</p>
<span className="font-label-sm text-label-sm text-secondary font-semibold mt-2 inline-flex items-center gap-1">
            Informe técnico <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
</span>
</div>
</div>
{/* Card 3: Para Quién */}
<div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm flex items-start gap-space-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-primary shrink-0">
<span className="material-symbols-outlined text-[26px]">apartment</span>
</div>
<div className="flex flex-col">
<h3 className="font-headline-sm text-headline-sm text-primary">Hoteles, Clínicas y Distribuidores</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Cumple requerimientos de Bandera Azul Ecológica y estándares de auditoría sanitaria internacional.</p>
<span className="font-label-sm text-label-sm text-secondary font-semibold mt-2 inline-flex items-center gap-1">
            Planes por sector <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
</span>
</div>
</div>
{/* Card 4: Maquila B2B */}
<div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm flex items-start gap-space-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 rounded-lg bg-primary-fixed flex items-center justify-center text-primary shrink-0">
<span className="material-symbols-outlined text-[26px]">precision_manufacturing</span>
</div>
<div className="flex flex-col">
<h3 className="font-headline-sm text-headline-sm text-primary">Maquila &amp; Marca Privada</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Capacidad productiva en planta AMSA para formular bajo tu propia marca con registro sanitario.</p>
<span className="font-label-sm text-label-sm text-secondary font-semibold mt-2 inline-flex items-center gap-1">
            Consultar capacidad <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
</span>
</div>
</div>
</div>
</section>
{/* Interactive ROI & Dilution Calculator */}
<section className="px-margin py-space-xl bg-surface-container-low flex flex-col gap-space-md" id="calculadora-dilucion">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[22px]">calculate</span>
<span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">Simulador de Abastecimiento B2B</span>
</div>
<h2 className="font-headline-md text-headline-md text-primary">Calculadora de Dilución y Ahorro</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">Estima el impacto financiero de sustituir bidones convencionales de agua con concentrado EUKAL.</p>
</div>
{/* Interactive Card */}
<div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm flex flex-col gap-space-md">
{/* Sector selector */}
<div className="flex flex-col gap-2">
<label className="font-label-md text-label-md text-primary font-semibold" htmlFor="calc-sector">1. Tipo de Operación</label>
<div className="grid grid-cols-2 gap-2" id="sector-toggle-group">
<button className="calc-btn h-11 px-3 rounded-lg bg-primary text-on-primary font-label-sm text-label-sm flex items-center justify-center gap-1.5 transition-all text-center" data-sector="hotel" type="button">
<span className="material-symbols-outlined text-[18px]">bed</span>
<span className="">Hotel / Resort</span>
</button>
<button className="calc-btn h-11 px-3 rounded-lg bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm flex items-center justify-center gap-1.5 transition-all text-center" data-sector="lavanderia" type="button">
<span className="material-symbols-outlined text-[18px]">local_laundry_service</span>
<span className="">Lavandería</span>
</button>
<button className="calc-btn h-11 px-3 rounded-lg bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm flex items-center justify-center gap-1.5 transition-all text-center" data-sector="restaurante" type="button">
<span className="material-symbols-outlined text-[18px]">restaurant</span>
<span className="">Restaurante</span>
</button>
<button className="calc-btn h-11 px-3 rounded-lg bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm flex items-center justify-center gap-1.5 transition-all text-center" data-sector="distribuidora" type="button">
<span className="material-symbols-outlined text-[18px]">pallet</span>
<span className="">Distribuidora</span>
</button>
</div>
</div>
{/* Volume Slider */}
<div className="flex flex-col gap-2 pt-2">
<div className="flex justify-between items-baseline">
<label className="font-label-md text-label-md text-primary font-semibold" htmlFor="volume-range">2. Consumo Mensual (Bidones convencionales)</label>
<span className="font-headline-sm text-headline-sm text-secondary font-bold" id="volume-label">120 bidones</span>
</div>
<input className="w-full accent-secondary h-2 bg-surface-container-high rounded-lg cursor-pointer appearance-none" id="volume-range" max="600" min="20" step="10" type="range" defaultValue="120" />
<div className="flex justify-between text-[11px] font-code-metric text-on-surface-variant">
<span className="">20 bidones/mes</span>
<span className="">300</span>
<span className="">600+ bidones/mes</span>
</div>
</div>
{/* Results Display Panel */}
<div className="bg-primary text-on-primary p-space-md rounded-xl flex flex-col gap-space-sm shadow-md">
<div className="flex items-center justify-between pb-2 border-none">
<span className="font-label-sm text-label-sm text-primary-fixed uppercase tracking-wider">Equivalencia Técnica EUKAL</span>
<span className="inline-flex items-center gap-1 text-[11px] font-code-metric bg-primary-container px-2 py-0.5 rounded text-on-primary-container">
<span className="material-symbols-outlined text-[12px]">water_drop</span> Ratio 1:12
          </span>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="bg-primary-container/70 p-3 rounded-lg flex flex-col">
<span className="font-body-sm text-body-sm text-on-primary-container">Necesitas en EUKAL</span>
<span className="font-headline-lg text-headline-lg font-bold text-white tracking-tight" id="result-eukal-gallons">10 Garrafas</span>
<span className="text-[11px] font-label-sm text-secondary-fixed mt-0.5">Industrial 20L concentrado</span>
</div>
<div className="bg-primary-container/70 p-3 rounded-lg flex flex-col">
<span className="font-body-sm text-body-sm text-on-primary-container">Ahorro Estimado</span>
<span className="font-headline-lg text-headline-lg font-bold text-tertiary-fixed tracking-tight" id="result-money-saved">₡432 000</span>
<span className="text-[11px] font-label-sm text-tertiary-fixed mt-0.5">Por mes en compras</span>
</div>
</div>
{/* Plastic & Freight Savings */}
<div className="flex items-center justify-between pt-2 px-1 text-on-primary-container">
<span className="font-body-sm text-body-sm flex items-center gap-1.5 text-surface-container-low">
<span className="material-symbols-outlined text-[18px] text-tertiary-fixed">delete_sweep</span>
<span id="result-plastic-saved" className="">110 recipientes plásticos</span> evitados
          </span>
<span className="font-code-metric text-[12px] text-primary-fixed font-bold">-78% Flete</span>
</div>
</div>
</div>
</section>
{/* Presentaciones de Producto Industrial */}
<section className="px-margin py-space-xl flex flex-col gap-space-lg">
<div className="flex flex-col gap-1">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">Formatos de Gran Escala</span>
<h2 className="font-headline-md text-headline-md text-primary">Presentaciones Profesionales</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">Empacados en envases de polietileno de alta densidad (HDPE) 100% reutilizables con precinto de inviolabilidad.</p>
</div>
{/* Product Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
{/* Garrafa 20L */}
<div className="bg-surface-container-lowest rounded-xl p-4 shadow-sm flex flex-col justify-between">
<div className="flex flex-col gap-3">
<div className="relative w-full h-44 rounded-lg overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover" data-alt="Heavy-duty 20 liter industrial cleaning jug with ergonomic handle, matte clean finish, branded EUKAL botanical label, surrounded by freshly laundered white cotton textiles and eucalyptus leaves in commercial setting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3v3l-OSUfKx_MGAq78Mwkea-lu38E5VlYMsrmlA2OOhcyEAdCrSUqTiQAbVnlxDHnTiURBp1ddYyFkpy_C-7k1BvO_rsAJAPbXK08d7s3KMzcB0BUPR5QtAHT8h4nFR6EHo6gIyTVmgkfkz-FIVwB7AMIQ05vIfPG5H-H2Irh383oRKj8sWneNHVyJ1nXS0rR33mgMR1qLdZDnUGB26K3hnZKMbsDJnhgsckJxeQ" />
<div className="absolute top-2 left-2 bg-primary text-on-primary px-2 py-0.5 rounded text-[11px] font-label-sm font-semibold">
              Mayor Rentabilidad
            </div>
<div className="absolute bottom-2 right-2 bg-surface-container-lowest/90 backdrop-blur-xs px-2 py-0.5 rounded text-[11px] font-code-metric text-primary font-bold">
              20 Litros / 5.28 Gal
            </div>
</div>
<div className="flex flex-col">
<h3 className="font-headline-sm text-headline-sm text-primary">Garrafa Industrial 20L</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Ideal para dosificadores automáticos en lavanderías hospitalarias y hoteles de más de 30 habitaciones.</p>
</div>
{/* Feature Tags */}
<div className="flex flex-wrap gap-1.5 pt-1">
<span className="bg-surface-container-high text-primary px-2 py-0.5 rounded-full text-[11px] font-label-sm">Neutro Hipoalergénico</span>
<span className="bg-secondary-container/40 text-secondary px-2 py-0.5 rounded-full text-[11px] font-label-sm">Citrus Fresh Activo</span>
<span className="bg-surface-container text-on-surface-variant px-2 py-0.5 rounded-full text-[11px] font-code-metric">Hasta 400 lavados</span>
</div>
</div>
<div className="pt-4 flex items-center justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-[11px] text-on-surface-variant">Tarifa Distribuidor</span>
<span className="font-headline-sm text-headline-sm text-primary font-bold">Consulte Escalas</span>
</div>
<a className="h-10 px-4 bg-primary text-on-primary rounded-lg font-label-sm text-label-sm flex items-center gap-1 shadow-sm" href="#lead-sample">
<span className="">Ficha &amp; Pedido</span>
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
</a>
</div>
</div>
{/* Pichinga 5L */}
<div className="bg-surface-container-lowest rounded-xl p-4 shadow-sm flex flex-col justify-between">
<div className="flex flex-col gap-3">
<div className="relative w-full h-44 rounded-lg overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover" data-alt="Compact 5 liter commercial detergent container labeled EUKAL Citrus Fresh on a clean kitchen prep surface, glistening clean tile background, eco-industrial aesthetic in mint green and white lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_ClYEnJw9jvVyC-Gq84NmJLHB1MIkW3PZWa99_DMIqIKM0BF1YUXFwQ9k5BYOBcR3QPiDx7eAwUgKzSf6f7BukRKzt3cnfPNxMsuK-8IYpYrYgFRo97dyroljsjUWTdC34Jkn84m2WOthHzZ6F_QTjjMlWNK-XYKuG0CjmI4YRcl473eUPOi4R72NOjwCC4xM4UyBaCkYam_mzeHC0B7yUM19MX7zIEuwwX3m0Jk" />
<div className="absolute top-2 left-2 bg-secondary text-on-secondary px-2 py-0.5 rounded text-[11px] font-label-sm font-semibold">
              Uso Liviano / Cocina
            </div>
<div className="absolute bottom-2 right-2 bg-surface-container-lowest/90 backdrop-blur-xs px-2 py-0.5 rounded text-[11px] font-code-metric text-primary font-bold">
              5 Litros / 1.32 Gal
            </div>
</div>
<div className="flex flex-col">
<h3 className="font-headline-sm text-headline-sm text-primary">Pichinga Comercial 5L</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Formato de fácil manipulación para amas de llaves, cafeterías, spas y desinfección de pisos en clínicas dentales.</p>
</div>
{/* Feature Tags */}
<div className="flex flex-wrap gap-1.5 pt-1">
<span className="bg-surface-container-high text-primary px-2 py-0.5 rounded-full text-[11px] font-label-sm">Vertedor Antiderrame</span>
<span className="bg-secondary-container/40 text-secondary px-2 py-0.5 rounded-full text-[11px] font-label-sm">Aroma Botánico Sutil</span>
<span className="bg-surface-container text-on-surface-variant px-2 py-0.5 rounded-full text-[11px] font-code-metric">Hasta 100 lavados</span>
</div>
</div>
<div className="pt-4 flex items-center justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-[11px] text-on-surface-variant">Caja Master</span>
<span className="font-headline-sm text-headline-sm text-primary font-bold">4 Unidades x Caja</span>
</div>
<a className="h-10 px-4 bg-primary text-on-primary rounded-lg font-label-sm text-label-sm flex items-center gap-1 shadow-sm" href="#lead-sample">
<span className="">Ficha &amp; Pedido</span>
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
</a>
</div>
</div>
</div>
</section>
{/* Casos de Éxito & Cumplimiento Normativo (MSDS) */}
<section className="px-margin py-space-xl bg-surface-container-low flex flex-col gap-space-lg">
<div className="flex flex-col gap-1">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">Garantía Operativa</span>
<h2 className="font-headline-md text-headline-md text-primary">Seguridad y Documentación Oficial</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">Acceso directo a las fichas técnicas para su departamento de salud ocupacional o auditorías turísticas.</p>
</div>
{/* Case Study Card */}
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-3">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-secondary font-bold font-headline-sm shrink-0">
          PG
        </div>
<div className="flex flex-col min-w-0">
<span className="font-headline-sm text-headline-sm text-primary truncate">Resort Eco-Lodge Papagayo</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Guanacaste, Costa Rica • 84 Habitaciones</span>
</div>
</div>
<p className="font-body-sm text-body-sm text-on-surface italic">
        “Sustituir el detergente clorado tradicional por EUKAL Neutro nos permitió renovar las 5 Estrellas de Bandera Azul Ecológica y reducir las limpiezas de la trampa de grasa a la mitad sin perder blancura en la lencería de cama.”
      </p>
<div className="flex items-center justify-between pt-1">
<span className="font-label-sm text-label-sm text-secondary font-semibold">Reducción de residuos: -64%</span>
<span className="font-code-metric text-[12px] text-on-surface-variant">Auditoría 2025</span>
</div>
</div>
{/* MSDS & Fichas Download Bar */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
<div className="bg-surface-container-lowest p-3.5 rounded-lg shadow-sm flex items-center justify-between">
<div className="flex items-center gap-3 min-w-0">
<span className="material-symbols-outlined text-secondary text-[24px]">picture_as_pdf</span>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md text-primary font-semibold truncate">Hoja de Seguridad MSDS</span>
<span className="font-label-sm text-[11px] text-on-surface-variant">Reglamento RTCA Costa Rica (PDF)</span>
</div>
</div>
<button className="w-9 h-9 rounded bg-surface-container-high text-primary flex items-center justify-center shrink-0" type="button">
<span className="material-symbols-outlined text-[18px]">download</span>
</button>
</div>
<div className="bg-surface-container-lowest p-3.5 rounded-lg shadow-sm flex items-center justify-between">
<div className="flex items-center gap-3 min-w-0">
<span className="material-symbols-outlined text-secondary text-[24px]">fact_check</span>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md text-primary font-semibold truncate">Dictamen UNA Biodegradable</span>
<span className="font-label-sm text-[11px] text-on-surface-variant">Ensayos Universidad Nacional (PDF)</span>
</div>
</div>
<button className="w-9 h-9 rounded bg-surface-container-high text-primary flex items-center justify-center shrink-0" type="button">
<span className="material-symbols-outlined text-[18px]">download</span>
</button>
</div>
</div>
</section>
{/* Lead Magnet Form (Muestra Gratuita Industrial) */}
<section className="px-margin py-space-xl flex flex-col gap-space-md" id="lead-sample">
<div className="bg-gradient-to-br from-primary to-primary-container text-on-primary p-space-md rounded-2xl shadow-xl flex flex-col gap-space-md">
<div className="flex flex-col gap-1.5">
<div className="inline-flex items-center gap-1.5 bg-tertiary-fixed text-on-tertiary-fixed-variant self-start px-2.5 py-0.5 rounded-full text-label-sm font-bold"><img src="https://lh3.googleusercontent.com/aida-public/AB6AXuChE1b2UZNSpUfAn8EdCU_WO9Gidq0HPVhlncjvDFUJvGwilps_5nic3PEmFGPJnTdBLhrFIDAVEHcaRYHR4bq93jNT1BgyrNzLWPvxk8vU49JnA7dA-XivhUX32k5ZbrIIEA7ta9Uc221jyqom19mi9etGn79Q7D67PFNU0U7AFeiYZn84qhJX8tloSN25DRHJvSC3lhPduXl9RKWAtU2N3Y-Zl5OUUy7SopYbMI0sJybYxZ-WO4mR" alt="EUKAL" className="w-4 h-4 object-contain" /><span className="">Muestra Oficial EUKAL • Prueba sin compromiso</span></div>
<h2 className="font-headline-lg text-headline-lg font-bold text-white tracking-tight">
          Solicitar Muestra Gratuita para tu Empresa
        </h2>
<p className="font-body-sm text-body-sm text-primary-fixed">
          Enviamos 1 litro de concentrado EUKAL a cualquier parte de Costa Rica (GAM y zonas costeras) para que tu equipo de lavandería compruebe el rendimiento real.
        </p>
</div>
{/* Quick 2-field form */}
<form className="flex flex-col gap-3" id="sample-request-form">
<div className="flex flex-col gap-1">
<label className="font-label-sm text-label-sm text-primary-fixed font-semibold" htmlFor="lead-whatsapp">Número de WhatsApp Corporativo</label>
<div className="relative flex items-center">
<span className="absolute left-3 text-on-surface-variant font-code-metric text-[14px]">+506</span>
<input className="w-full h-12 pl-14 pr-3 rounded-lg bg-surface text-on-surface font-body-md focus:outline-none focus:ring-2 focus:ring-tertiary-fixed" id="lead-whatsapp" placeholder="8888 8888" required type="tel" />
</div>
</div>
<div className="flex flex-col gap-1">
<label className="font-label-sm text-label-sm text-primary-fixed font-semibold" htmlFor="lead-type">Giro de Negocio / Actividad</label>
<select className="w-full h-12 px-3 rounded-lg bg-surface text-on-surface font-body-md focus:outline-none focus:ring-2 focus:ring-tertiary-fixed" id="lead-type" required>
<option disabled  value="">Selecciona tu categoría</option>
<option value="hotel">Hotel, Hospedaje o Eco-Lodge</option>
<option value="lavanderia">Lavandería Comercial / Tintorería</option>
<option value="restaurante">Restaurante / Servicio de Alimentos</option>
<option value="distribuidora">Distribuidora de Insumos de Limpieza</option>
<option value="maquila">Interés en Marca Privada (Maquila)</option>
</select>
</div>
<button className="w-full h-12 mt-2 bg-tertiary-fixed text-on-tertiary-fixed-variant rounded-lg font-label-md text-label-md font-bold flex items-center justify-center gap-2 shadow-md hover:brightness-105 active:scale-[0.99] transition-all" id="sample-submit-btn" type="submit">
<span className="material-symbols-outlined text-[20px]">send</span>
<span className="">Despachar Muestra a mi Negocio</span>
</button>
</form>
{/* Feedback container */}
<div className="hidden bg-secondary-container text-on-secondary-container p-3 rounded-lg flex items-center gap-2 text-label-sm" id="sample-feedback">
<span className="material-symbols-outlined text-[20px]">task_alt</span>
<span className="">¡Solicitud recibida! Un asesor de EUKAL coordinará el envío por WhatsApp hoy mismo.</span>
</div>
<div className="flex items-center justify-center gap-4 text-[11px] font-label-sm text-primary-fixed">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[13px]">lock</span> Sin spam comercial</span>
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[13px]">local_shipping</span> Envío a todo el país</span>
</div>
</div>
</section>
{/* Footer Corporativo */}
<footer className="w-full bg-surface-container-high px-margin pt-space-lg pb-space-xl flex flex-col gap-space-md">
<div className="flex flex-col gap-2">
<div className="flex items-center gap-2"><img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCngxKmYXlbuAcid-C5ORWA853E9jlm2voCvVyKVLSSMwB-egWilmodikp0rKplRUi7-crmYnp4wwSc4WPqJhahfCMMvaMIG1iKCffSLXE9_aDo-jBTakDauuHns8CH9iZ_ioYeUhFW8VjQZDtX1lfFalhez4XC2yhL9Puy9mnonuPvYsYW47plhHtIVxE2xhFw3pfFBADx8D6EB8W18xY5TAvX_2BBSXTb5_UpSwUGxBCjwM4Y70H" alt="EUKAL Poder Natural" className="h-8 w-auto object-contain" /><span className="font-label-sm text-[11px] bg-secondary-container/60 text-secondary px-2 py-0.5 rounded font-semibold">AMSA Costa Rica</span></div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
        © 2026 Detergentes Naturales S.A. — San José, Costa Rica. Formulaciones industriales biodegradables con estándares internacionales de manufactura química.
      </p>
</div>
{/* SEO Keywords & Highlights */}
<div className="flex flex-wrap gap-x-3 gap-y-1.5 pt-2 text-[11px] font-label-sm text-on-surface-variant">
<span className="hover:text-primary">• Detergente biodegradable Costa Rica</span>
<span className="hover:text-primary">• Insumos de limpieza para hoteles</span>
<span className="hover:text-primary">• Maquila de productos de limpieza</span>
<span className="hover:text-primary">• Químicos sostenibles Bandera Azul</span>
</div>
{/* Legal & Production Notice */}
<div className="pt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] font-code-metric text-on-surface-variant">
<span className="">Maquilado con altos estándares por AMSA • Certificado Biodegradable — Universidad Nacional (UNA)</span>
<span className="">Reg. Sanitario MS: CR-Q-2024-9912</span>
</div>
</footer>
</div>
</main><aside className="fixed bottom-24 right-4 z-50"><a aria-label="Contacto WhatsApp B2B" className="w-14 h-14 bg-secondary text-on-secondary rounded-full flex items-center justify-center shadow-[0_4px_12px_rgba(23,107,75,0.35)] hover:scale-105 active:scale-95 transition-all" href="https://wa.me/50688888888" rel="noopener noreferrer" target="_blank"><span className="material-symbols-outlined text-[28px]">chat</span></a></aside><nav className="fixed bottom-0 w-full z-50 pb-safe bg-surface/90 backdrop-blur-xl shadow-[0_-2px_12px_rgba(0,0,0,0.05)]" data-active-classes="text-primary font-bold"><div className="flex justify-around items-center h-16 px-space-sm"><a aria-current="page" className="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] gap-0.5 transition-colors text-primary font-bold" href="/"><span className="material-symbols-outlined text-[22px]">home_work</span><span className="font-label-sm text-[11px]">Inicio</span></a><a className="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] gap-0.5 text-on-surface-variant hover:text-primary transition-colors" href="/#calculadora-dilucion"><span className="material-symbols-outlined text-[22px]">science</span><span className="font-label-sm text-[11px]">Productos</span></a><a className="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] gap-0.5 text-on-surface-variant hover:text-primary transition-colors" href="/maquila"><span className="material-symbols-outlined text-[22px]">precision_manufacturing</span><span className="font-label-sm text-[11px]">Maquila</span></a><a className="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] gap-0.5 text-on-surface-variant hover:text-primary transition-colors" href="/#lead-sample"><span className="material-symbols-outlined text-[22px]">receipt_long</span><span className="font-label-sm text-[11px]">Cotizar</span></a></div></nav>


    </div>
  );
}
