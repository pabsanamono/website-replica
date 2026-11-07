import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import neutroAsset from "@/assets/galon_neutro_frente.jpg.asset.json";
import citrusAsset from "@/assets/galon_citrus_frente.jpg.asset.json";
import dorsoAsset from "@/assets/galon_dorso.jpg.asset.json";

export const Route = createFileRoute("/maquila")({
  head: () => ({
    meta: [
      { title: "Maquila y Marca Blanca B2B — EUKAL por AMSA" },
      { name: "description", content: "Maquila de detergentes biodegradables en Costa Rica: lance su propia marca con fórmulas ecológicas y registro sanitario." },
      { property: "og:title", content: "Maquila y Marca Blanca B2B — EUKAL por AMSA" },
      { property: "og:description", content: "Maquila de detergentes biodegradables en Costa Rica: lance su propia marca con fórmulas ecológicas y registro sanitario." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Maquila,
});

function Maquila() {
  useEffect(() => {
    const aromas = document.querySelectorAll<HTMLElement>(".aroma-chip");
    aromas.forEach((b) => b.addEventListener("click", () => {
      aromas.forEach((x) => {
        x.classList.remove("bg-secondary-container", "text-on-secondary-container");
        x.classList.add("bg-surface-container-lowest", "text-on-surface");
        x.querySelector(".check-icon")?.classList.replace("opacity-100", "opacity-0");
      });
      b.classList.remove("bg-surface-container-lowest", "text-on-surface");
      b.classList.add("bg-secondary-container", "text-on-secondary-container");
      b.querySelector(".check-icon")?.classList.replace("opacity-0", "opacity-100");
    }));
    const packs = document.querySelectorAll<HTMLElement>(".pack-chip");
    packs.forEach((b) => b.addEventListener("click", () => {
      packs.forEach((x) => { x.classList.remove("bg-primary", "text-on-primary"); x.classList.add("bg-surface-container-lowest", "text-on-surface"); });
      b.classList.remove("bg-surface-container-lowest", "text-on-surface");
      b.classList.add("bg-primary", "text-on-primary");
    }));
    document.querySelectorAll<HTMLElement>(".faq-toggle").forEach((b) => b.addEventListener("click", () => {
      const content = b.nextElementSibling!;
      const hidden = content.classList.contains("hidden");
      document.querySelectorAll(".faq-content").forEach((c) => c.classList.add("hidden"));
      document.querySelectorAll(".faq-icon").forEach((i) => i.classList.remove("rotate-180"));
      if (hidden) { content.classList.remove("hidden"); b.querySelector(".faq-icon")?.classList.add("rotate-180"); }
    }));
    const form = document.getElementById("maquilaLeadForm") as HTMLFormElement | null;
    form?.addEventListener("submit", (e) => {
      e.preventDefault();
      const btn = document.getElementById("submitBtn") as HTMLButtonElement;
      btn.disabled = true;
      btn.innerHTML = '<span class="material-symbols-outlined animate-spin text-[20px]">sync</span><span>Procesando Solicitud...</span>';
      setTimeout(() => { form.classList.add("hidden"); document.getElementById("formSuccessMessage")?.classList.remove("hidden"); }, 900);
    });
  }, []);

  return (
    <div className="bg-surface font-body-md text-body-md text-on-surface antialiased flex flex-col min-h-screen">
<header className="fixed top-0 w-full z-50 bg-surface/85 backdrop-blur-xl pt-safe shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="h-16 px-margin flex items-center justify-between gap-space-sm"><div className="flex items-center gap-space-sm"><a href="#" className="flex items-center gap-2"><img alt="EUKAL PODER NATURAL" className="h-9 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAa-TyMn9wrl43tFlK6QmQn1LYcN3dWJtxAJfgaHLuHmszVgDZD5Np7hMJ2oezzL5hsnDE22SeZ1mwO2nP94enmRBrAhA1wH5-Bzi6_iQwwl4Orh4P2fKdXW70T6M6nzBihGmEF8D_g6XeH9L7HHTyslhfo0cF0qwzAEgTvk8xQ4qSmp3xg4HlKc22aCAPMaXVmZcNhGN9K_3t5miuSh4mUdJFWun3dw5l0WzbMkIUMvDcCCjBrKOUP" /><div className="flex flex-col border-l border-outline-variant pl-2"><span className="font-label-sm text-[10px] text-secondary font-bold uppercase tracking-wider leading-none">B2B</span><span className="font-label-sm text-[9px] text-on-surface-variant leading-tight">Costa Rica</span></div></a><div className="hidden sm:flex items-center gap-1 bg-secondary-container/40 px-2 py-0.5 rounded-full text-secondary"><span className="material-symbols-outlined text-[13px]">verified</span><span className="font-label-sm text-[10px] tracking-wide">Certificado UNA</span></div></div><div className="flex items-center gap-space-xs"><div className="flex sm:hidden items-center gap-1 bg-secondary-container/40 px-2 py-1 rounded-full text-secondary"><span className="material-symbols-outlined text-[12px]">verified</span><span className="font-label-sm text-[10px] tracking-tight">UNA</span></div><a className="h-11 px-3 bg-primary text-on-primary flex items-center gap-1 rounded-lg hover:bg-primary-container transition-colors" href="/#lead-sample"><span className="material-symbols-outlined text-[18px]">request_quote</span><span className="font-label-sm text-label-sm hidden xs:inline">Cotizar</span></a><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><span className="material-symbols-outlined text-on-primary text-[18px]">person</span></div></div></div></header><main className="flex-1 flex flex-col relative w-full pt-16 pb-28 bg-surface"><div className="flex flex-col w-full">
{/* Value Ribbon Notice */}
<div className="bg-secondary-container text-on-secondary-container px-margin py-2.5 flex items-center justify-between gap-space-xs">
<div className="flex items-center gap-space-xs min-w-0">
<span className="material-symbols-outlined text-[18px] shrink-0 text-secondary" style={{"fontVariationSettings": '"FILL" 1'}}>eco</span>
<span className="font-label-sm text-label-sm truncate font-semibold">Alianza Industrial: Detergentes Naturales S.A. &amp; AMSA</span>
</div>
<span className="bg-surface/80 text-secondary font-label-sm text-[11px] px-2 py-0.5 rounded-full shrink-0">GAM &amp; Exportación</span>
</div>
{/* Hero & Context Section */}
<section className="px-margin pt-space-md pb-space-lg flex flex-col gap-space-md">
<div className="flex flex-wrap items-center gap-space-xs">
<span className="bg-surface-container-high text-primary px-2.5 py-1 rounded-full font-label-sm text-[11px] font-semibold flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">factory</span>
        Maquila de Detergentes Costa Rica
      </span>
<span className="bg-secondary/10 text-secondary px-2.5 py-1 rounded-full font-label-sm text-[11px] font-semibold flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">verified</span>
        Aval UNA &amp; Registro Sanitario
      </span>
</div>
<div className="flex flex-col gap-space-xs">
<h1 className="font-headline-xl-mobile text-headline-xl-mobile text-primary tracking-tight font-bold">
        Maquila &amp; Marca Blanca de Detergentes Biodegradables
      </h1>
<p className="font-body-md text-body-md text-on-surface-variant">
        Impulse su propia línea institucional o de retail con fórmulas ecológicas listas para comercializar, respaldadas por la capacidad fabril de AMSA en Costa Rica.
      </p>
</div>
{/* Hero Visual Bento Feature */}
<div className="relative rounded-xl overflow-hidden shadow-md bg-surface-container-low min-h-[220px] flex flex-col justify-end p-space-md">
<img className="absolute inset-0 w-full h-full object-cover" data-alt="High tech clean chemical production plant in Costa Rica, automated bottling line for eco-friendly eucalyptus cleaners in industrial amber and recycled plastic jugs, clinical hygiene standards, laboratory workers in cleanroom coats inspecting batch numbers, soft morning light filtered through glass windows, emerald green hues and stainless steel machines." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKi1ORqpylpCPUJCabSu0q24im13fa6EwO3Pltr0jRpeZjsNTR8Xx57QTcMm6sny__ypw8ghGRLIMXFrMoEox0czy5YtXrkWOESdy7brYcWN_PSrEOSirOIn935H6gwiLdM5v9c6tEoL1QTrweUqNjWgDbcj0rGIUZSGafplQwlcJDrxYWhxx7gW1xDajjD4CqcvH-WplhC50xNiqet9sSUP7ahA83ItOBo6s5FAk" />
<div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent"></div>
<div className="relative z-10 flex flex-col gap-space-xs text-on-primary">
<div className="flex items-center gap-space-xs">
<span className="bg-tertiary-fixed text-on-tertiary-fixed px-2 py-0.5 rounded font-label-sm text-[11px] font-bold">
            Capacidad +120,000 L / mes
          </span>
<span className="font-label-sm text-label-sm text-surface-container-high">Lotes escalables B2B</span>
</div>
<p className="font-headline-sm text-headline-sm font-semibold leading-snug">
          Producción llave en mano para distribuidores mayoristas y cadenas
        </p>
</div>
</div>
</section>
{/* 3 Strategic Value Pillars */}
<section className="px-margin pb-space-lg flex flex-col gap-space-sm">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-semibold">Ventaja Competitiva</span>
<h2 className="font-headline-md text-headline-md text-primary font-bold">Respaldo Técnico &amp; Regulatorio</h2>
</div>
<div className="grid grid-cols-1 gap-space-sm">
{/* Pillar 1 */}
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex gap-space-sm items-start">
<div className="w-10 h-10 rounded-lg bg-secondary-container/50 text-secondary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[24px]">verified_user</span>
</div>
<div className="flex flex-col gap-1 min-w-0">
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Registros y Aval UNA Aprobados</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            Ahorre hasta 10 meses en trámites. Nuestras fórmulas cuentan con trazabilidad analítica de la Universidad Nacional y registros vigentes ante el Ministerio de Salud.
          </p>
</div>
</div>
{/* Pillar 2 */}
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex gap-space-sm items-start">
<div className="w-10 h-10 rounded-lg bg-primary-container text-on-primary-container flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[24px]">auto_graph</span>
</div>
<div className="flex flex-col gap-1 min-w-0">
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Escalabilidad de Lotes Flexible</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            Desde lotes piloto de validación comercial para distribuidores emergentes hasta canecas de 20L, tanques IBC Tote y granel para grandes superficies.
          </p>
</div>
</div>
{/* Pillar 3 */}
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex gap-space-sm items-start">
<div className="w-10 h-10 rounded-lg bg-surface-container-high text-primary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[24px]">tune</span>
</div>
<div className="flex flex-col gap-1 min-w-0">
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Personalización de Marca Propia</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            Ajuste viscosidad, pigmentación de base botánica y perfiles olfativos premium: Eucalipto Puro, Citrus Limonene, Pino de Montaña y Neutro Hospitalario.
          </p>
</div>
</div>
</div>
</section>
{/* Interactive Lab Customizer Preview */}
<section className="px-margin pb-space-lg flex flex-col gap-space-sm">
<div className="bg-surface-container-low rounded-xl p-space-md flex flex-col gap-space-md shadow-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2"><img alt="EUKAL Emblem" className="h-7 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuChE1b2UZNSpUfAn8EdCU_WO9Gidq0HPVhlncjvDFUJvGwilps_5nic3PEmFGPJnTdBLhrFIDAVEHcaRYHR4bq93jNT1BgyrNzLWPvxk8vU49JnA7dA-XivhUX32k5ZbrIIEA7ta9Uc221jyqom19mi9etGn79Q7D67PFNU0U7AFeiYZn84qhJX8tloSN25DRHJvSC3lhPduXl9RKWAtU2N3Y-Zl5OUUy7SopYbMI0sJybYxZ-WO4mR" /><span className="font-headline-sm text-headline-sm text-primary font-bold">Simulador de Formulación Maquila</span></div>
<span className="text-secondary font-label-sm text-[11px] bg-secondary-container/40 px-2 py-0.5 rounded-full font-semibold">Lab AMSA</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
        Seleccione los atributos clave para generar su solicitud de muestra técnica sin costo:
      </p>
{/* Selection chips */}
<div className="flex flex-col gap-space-xs">
<span className="font-label-sm text-label-sm text-on-surface font-semibold">1. Aroma Botánico Base</span>
<div className="grid grid-cols-2 gap-space-xs" id="aroma-selector">
<button className="aroma-chip py-2 px-3 text-left rounded-lg bg-surface-container-lowest font-body-sm text-body-sm text-on-surface flex items-center justify-between transition-all shadow-sm" data-val="eucalipto" type="button">
<span className="">Eucalipto Silvestre</span>
<span className="material-symbols-outlined text-[16px] text-secondary check-icon opacity-100">check_circle</span>
</button>
<button className="aroma-chip py-2 px-3 text-left rounded-lg bg-surface-container-lowest font-body-sm text-body-sm text-on-surface flex items-center justify-between transition-all shadow-sm" data-val="citrus" type="button">
<span className="">Citrus Limonene</span>
<span className="material-symbols-outlined text-[16px] text-secondary check-icon opacity-0">check_circle</span>
</button>
<button className="aroma-chip py-2 px-3 text-left rounded-lg bg-surface-container-lowest font-body-sm text-body-sm text-on-surface flex items-center justify-between transition-all shadow-sm" data-val="pino" type="button">
<span className="">Pino Orgánico</span>
<span className="material-symbols-outlined text-[16px] text-secondary check-icon opacity-0">check_circle</span>
</button>
<button className="aroma-chip py-2 px-3 text-left rounded-lg bg-surface-container-lowest font-body-sm text-body-sm text-on-surface flex items-center justify-between transition-all shadow-sm" data-val="neutro" type="button">
<span className="">Neutro Hipoalergénico</span>
<span className="material-symbols-outlined text-[16px] text-secondary check-icon opacity-0">check_circle</span>
</button>
</div>
</div>
{/* Packaging Selector */}
<div className="flex flex-col gap-space-xs">
<span className="font-label-sm text-label-sm text-on-surface font-semibold">2. Presentación Objetivo</span>
<div className="grid grid-cols-3 gap-space-xs" id="pack-selector">
<button className="pack-chip bg-primary text-on-primary py-2 px-1 text-center rounded-lg font-label-sm text-label-sm shadow-sm transition-all" type="button">
            Galón 3.785 L
          </button>
<button className="pack-chip bg-surface-container-lowest text-on-surface py-2 px-1 text-center rounded-lg font-label-sm text-label-sm shadow-sm transition-all" type="button">
            Caneca 20 L
          </button>
<button className="pack-chip bg-surface-container-lowest text-on-surface py-2 px-1 text-center rounded-lg font-label-sm text-label-sm shadow-sm transition-all" type="button">
            IBC 1,000 L
          </button>
</div>
</div>
{/* Real product line preview */}
<div className="flex flex-col gap-2">
<span className="font-label-sm text-label-sm text-on-surface font-semibold">Línea actual en galón 3.785 ml</span>
<div className="grid grid-cols-3 gap-space-xs">
<div className="rounded-lg bg-surface-container overflow-hidden flex flex-col">
<img className="w-full h-24 object-contain p-1" src={neutroAsset.url} alt="Galón EUKAL Aroma Neutro, etiqueta frontal" />
<span className="block text-center font-label-sm text-[11px] text-on-surface-variant pb-1">Aroma Neutro</span>
</div>
<div className="rounded-lg bg-surface-container overflow-hidden flex flex-col">
<img className="w-full h-24 object-contain p-1" src={citrusAsset.url} alt="Galón EUKAL Aroma Citrus, etiqueta frontal" />
<span className="block text-center font-label-sm text-[11px] text-on-surface-variant pb-1">Aroma Citrus</span>
</div>
<div className="rounded-lg bg-surface-container overflow-hidden flex flex-col">
<img className="w-full h-24 object-contain p-1" src={dorsoAsset.url} alt="Etiqueta trasera del galón EUKAL con modo de empleo y tabla de dilución" />
<span className="block text-center font-label-sm text-[11px] text-on-surface-variant pb-1">Etiqueta trasera</span>
</div>
</div>
</div>
{/* Live Benefit summary card */}
<div className="bg-primary text-on-primary p-space-sm rounded-lg flex items-center justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-[11px] text-secondary-fixed">Margen Comercial Estimado</span>
<span className="font-headline-sm text-headline-sm text-tertiary-fixed font-bold">Hasta 45% Bruto</span>
</div>
<div className="text-right">
<span className="font-label-sm text-[11px] text-surface-container-high block">Muestra de Planta</span>
<span className="font-label-md text-label-md text-on-primary font-semibold">Disponible 48h</span>
</div>
</div>
</div>
</section>
{/* Lead Capture Specialist Form (High Conversion) */}
<section className="px-margin pb-space-lg flex flex-col gap-space-md" id="formulario-maquila">
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-md flex flex-col gap-space-md">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-space-xs text-secondary">
<span className="material-symbols-outlined text-[20px]">assignment_turned_in</span>
<span className="font-label-sm text-label-sm uppercase font-bold tracking-wider">Convocatoria B2B 2025</span>
</div>
<h2 className="font-headline-md text-headline-md text-primary font-bold">Solicitar Asesoría de Maquila y Muestras</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">
          Complete los requerimientos de su marca. Un ingeniero de formulación de AMSA le contactará en menos de 4 horas hábiles.
        </p>
</div>
<form className="flex flex-col gap-space-sm" id="maquilaLeadForm">
{/* Empresa / Distribuidora */}
<div className="flex flex-col gap-1">
<label className="font-label-sm text-label-sm text-on-surface-variant font-medium" htmlFor="empresa">
            Nombre de Empresa o Distribuidora <span className="text-error">*</span>
</label>
<input className="w-full h-12 px-3 bg-surface rounded-lg font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest transition-all" id="empresa" placeholder="Ej: Comercializadora San José S.A." required type="text" />
</div>
{/* Contacto & WhatsApp */}
<div className="grid grid-cols-1 gap-space-sm">
<div className="flex flex-col gap-1">
<label className="font-label-sm text-label-sm text-on-surface-variant font-medium" htmlFor="contacto">
              Nombre de Persona de Contacto <span className="text-error">*</span>
</label>
<input className="w-full h-12 px-3 bg-surface rounded-lg font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest transition-all" id="contacto" placeholder="Ej: Ing. Carlos Montero" required type="text" />
</div>
<div className="flex flex-col gap-1">
<label className="font-label-sm text-label-sm text-on-surface-variant font-medium" htmlFor="whatsapp">
              WhatsApp Comercial B2B <span className="text-error">*</span>
</label>
<div className="flex items-center gap-2">
<span className="h-12 px-3 bg-surface-container text-on-surface flex items-center font-label-md text-label-md rounded-lg font-semibold shrink-0">
                🇨🇷 +506
              </span>
<input className="flex-1 h-12 px-3 bg-surface rounded-lg font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest transition-all" id="whatsapp" placeholder="8888-0000" required type="tel" />
</div>
</div>
</div>
{/* Tipo de Producto Requerido */}
<div className="flex flex-col gap-1">
<label className="font-label-sm text-label-sm text-on-surface-variant font-medium" htmlFor="tipoProducto">
            Línea de Limpieza Requerida <span className="text-error">*</span>
</label>
<select className="w-full h-12 px-3 bg-surface rounded-lg font-body-sm text-body-sm text-on-surface focus:outline-none focus:bg-surface-container-lowest transition-all" id="tipoProducto" required>
<option value="">Seleccione una línea de producción...</option>
<option value="lavanderia">Detergente Líquido de Lavandería Biodegradable</option>
<option value="multiusos">Limpiador y Desinfectante Multiusos Ecológico</option>
<option value="desengrasante">Desengrasante Vegetal Pesado (Industrial / Cocinas)</option>
<option value="institucional">Paquete Completo Línea Institucional / HoReCa</option>
<option value="otra">Formulación Personalizada a la Medida</option>
</select>
</div>
{/* Volumen mensual estimado */}
<div className="flex flex-col gap-1">
<label className="font-label-sm text-label-sm text-on-surface-variant font-medium">
            Volumen Mensual Estimado <span className="text-error">*</span>
</label>
<div className="grid grid-cols-1 gap-2 pt-1">
<label className="flex items-center gap-3 p-3 rounded-lg bg-surface hover:bg-surface-container transition-colors cursor-pointer">
<input defaultChecked className="w-4 h-4 accent-primary" name="volumen" type="radio" defaultValue="500-2000" />
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md text-on-surface font-semibold">500 L a 2,000 L / mes</span>
<span className="font-body-sm text-[12px] text-on-surface-variant">Lote inicial de introducción y distribución regional</span>
</div>
</label>
<label className="flex items-center gap-3 p-3 rounded-lg bg-surface hover:bg-surface-container transition-colors cursor-pointer">
<input className="w-4 h-4 accent-primary" name="volumen" type="radio" defaultValue="2000-10000" />
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md text-on-surface font-semibold">2,000 L a 10,000 L / mes</span>
<span className="font-label-sm text-[12px] text-secondary font-medium">Recomendado para distribuidores establecidos</span>
</div>
</label>
<label className="flex items-center gap-3 p-3 rounded-lg bg-surface hover:bg-surface-container transition-colors cursor-pointer">
<input className="w-4 h-4 accent-primary" name="volumen" type="radio" defaultValue="+10000" />
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md text-on-surface font-semibold">Más de 10,000 L / mes</span>
<span className="font-body-sm text-[12px] text-on-surface-variant">Grandes cadenas de retail, licitaciones y exportación</span>
</div>
</label>
</div>
</div>
{/* Comentario Adicional */}
<div className="flex flex-col gap-1">
<label className="font-label-sm text-label-sm text-on-surface-variant font-medium" htmlFor="detalles">
            Detalles Específicos o Requisitos de Envase
          </label>
<textarea className="w-full p-3 bg-surface rounded-lg font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest transition-all" id="detalles" placeholder="Indique si requiere envases propios, etiquetas o apoyo regulatorio adicional..." rows={2}></textarea>
</div>
{/* Submit Button */}
<button className="mt-2 w-full min-h-[50px] bg-primary text-on-primary rounded-lg font-label-md text-label-md flex items-center justify-center gap-2 shadow-md hover:bg-primary-container active:scale-[0.99] transition-all" id="submitBtn" type="submit">
<span className="material-symbols-outlined text-[20px]">science</span>
<span className="">Solicitar Asesoría de Maquila y Muestras</span>
</button>
{/* Guarantee Note */}
<div className="flex items-center justify-center gap-2 pt-1 text-center">
<span className="material-symbols-outlined text-secondary text-[16px]">lock</span>
<span className="font-label-sm text-[11px] text-on-surface-variant">Acuerdo de Confidencialidad (NDA) garantizado</span>
</div>
</form>
{/* Feedback Success Message (Hidden by default) */}
<div className="hidden bg-secondary-container text-on-secondary-container p-space-md rounded-lg flex flex-col gap-2" id="formSuccessMessage">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[24px]">task_alt</span>
<span className="font-headline-sm text-headline-sm font-bold">¡Solicitud de Maquila Recibida!</span>
</div>
<p className="font-body-sm text-body-sm">
          Hemos asignado su proyecto al equipo de formulación de Detergentes Naturales S.A. &amp; AMSA. Le enviaremos la ficha preliminar y coordinaremos la entrega de muestras a su WhatsApp.
        </p>
</div>
</div>
</section>
{/* Commercial Advantage Metrics (B2B Distributor ROI) */}
<section className="px-margin pb-space-lg flex flex-col gap-space-md">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-semibold">Rentabilidad Comprobada</span>
<h2 className="font-headline-md text-headline-md text-primary font-bold">¿Por Qué Tercerizar con AMSA?</h2>
</div>
{/* Data metric cards */}
<div className="grid grid-cols-2 gap-space-sm">
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-1">
<span className="font-display-hero-mobile text-display-hero-mobile text-secondary font-bold leading-none">45%</span>
<span className="font-headline-sm text-[15px] text-on-surface font-semibold">Margen Bruto</span>
<span className="font-body-sm text-[12px] text-on-surface-variant">Optimice costos unitarios vs importar marcas comerciales tradicionales.</span>
</div>
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-1">
<span className="font-display-hero-mobile text-display-hero-mobile text-primary font-bold leading-none">0%</span>
<span className="font-headline-sm text-[15px] text-on-surface font-semibold">Inversión Fabril</span>
<span className="font-body-sm text-[12px] text-on-surface-variant">Elimine gastos de maquinaria, permisos de salud y tanques de agitación.</span>
</div>
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-1">
<span className="font-display-hero-mobile text-display-hero-mobile text-secondary font-bold leading-none">100%</span>
<span className="font-headline-sm text-[15px] text-on-surface font-semibold">Biodegradabilidad</span>
<span className="font-body-sm text-[12px] text-on-surface-variant">Activos botánicos que protegen mantos acuíferos y cumplen normas Minaet.</span>
</div>
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-1">
<span className="font-display-hero-mobile text-display-hero-mobile text-primary font-bold leading-none">48h</span>
<span className="font-headline-sm text-[15px] text-on-surface font-semibold">Despacho GAM</span>
<span className="font-body-sm text-[12px] text-on-surface-variant">Logística integrada y entregas directas a su centro de distribución.</span>
</div>
</div>
{/* Process Workflow Steps */}
<div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-space-sm shadow-sm">
<span className="font-headline-sm text-headline-sm text-primary font-bold">Ruta Crítica de Fabricación:</span>
<div className="flex flex-col gap-space-xs">
<div className="flex items-center gap-space-sm p-2 rounded-lg bg-surface-container-lowest">
<span className="w-7 h-7 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-sm text-label-sm font-bold shrink-0">1</span>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md font-semibold text-on-surface">Selección de Fórmula &amp; Muestra</span>
<span className="font-body-sm text-[12px] text-on-surface-variant">Enviamos kit de prueba a su laboratorio o bodega comercial.</span>
</div>
</div>
<div className="flex items-center gap-space-sm p-2 rounded-lg bg-surface-container-lowest">
<span className="w-7 h-7 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-sm text-label-sm font-bold shrink-0">2</span>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md font-semibold text-on-surface">Personalización y Etiquetado</span>
<span className="font-body-sm text-[12px] text-on-surface-variant">Diseño de marca blanca con cumplimiento normativo y código de barras.</span>
</div>
</div>
<div className="flex items-center gap-space-sm p-2 rounded-lg bg-surface-container-lowest">
<span className="w-7 h-7 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-sm text-label-sm font-bold shrink-0">3</span>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md font-semibold text-on-surface">Producción en Planta AMSA &amp; Despacho</span>
<span className="font-body-sm text-[12px] text-on-surface-variant">Fabricación por batch con certificación de control de calidad por lote.</span>
</div>
</div>
</div>
</div>
</section>
{/* Technical Credentials Accordion / SEO FAQs */}
<section className="px-margin pb-space-lg flex flex-col gap-space-sm">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-semibold">Resolución de Dudas Frecuentes</span>
<h2 className="font-headline-md text-headline-md text-primary font-bold">Preguntas sobre Maquila y Marca Blanca</h2>
</div>
<div className="flex flex-col gap-space-xs" id="faq-accordion">
{/* FAQ 1 */}
<div className="faq-item bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
<button className="faq-toggle w-full flex items-center justify-between text-left gap-2 font-headline-sm text-headline-sm text-on-surface font-semibold" type="button">
<span className="">¿Cuál es el volumen mínimo de compra (MOQ)?</span>
<span className="material-symbols-outlined text-[20px] text-secondary faq-icon transition-transform">expand_more</span>
</button>
<div className="faq-content hidden pt-2 font-body-sm text-body-sm text-on-surface-variant">
          Iniciamos programas de maquila desde 500 litros mensuales para validación comercial de nuevas marcas. Para lotes con personalización de fragancia exclusiva, el estándar es a partir de 1,000 litros.
        </div>
</div>
{/* FAQ 2 */}
<div className="faq-item bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
<button className="faq-toggle w-full flex items-center justify-between text-left gap-2 font-headline-sm text-headline-sm text-on-surface font-semibold" type="button">
<span className="">¿Puedo comercializar bajo mi propio nombre de marca?</span>
<span className="material-symbols-outlined text-[20px] text-secondary faq-icon transition-transform">expand_more</span>
</button>
<div className="faq-content hidden pt-2 font-body-sm text-body-sm text-on-surface-variant">
          Sí. Es un servicio 100% marca blanca (Private Label). Le proveemos el producto terminado con su logotipo, código de barras y diseño gráfico, o envasamos a granel si usted cuenta con sus propios envases.
        </div>
</div>
{/* FAQ 3 */}
<div className="faq-item bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
<button className="faq-toggle w-full flex items-center justify-between text-left gap-2 font-headline-sm text-headline-sm text-on-surface font-semibold" type="button">
<span className="">¿Cómo se gestiona el registro sanitario del Ministerio de Salud?</span>
<span className="material-symbols-outlined text-[20px] text-secondary faq-icon transition-transform">expand_more</span>
</button>
<div className="faq-content hidden pt-2 font-body-sm text-body-sm text-on-surface-variant">
          Nuestras fórmulas base ya cuentan con registro sanitario activo y aval de biodegradabilidad. Ofrecemos la opción de amparar su marca bajo nuestros registros autorizados o gestionar el registro exclusivo de su empresa mediante nuestro regente químico.
        </div>
</div>
{/* FAQ 4 */}
<div className="faq-item bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
<button className="faq-toggle w-full flex items-center justify-between text-left gap-2 font-headline-sm text-headline-sm text-on-surface font-semibold" type="button">
<span className="">¿Hacen entregas en zonas fuera del GAM y puertos?</span>
<span className="material-symbols-outlined text-[20px] text-secondary faq-icon transition-transform">expand_more</span>
</button>
<div className="faq-content hidden pt-2 font-body-sm text-body-sm text-on-surface-variant">
          Cubrimos el Gran Área Metropolitana (GAM) con flota propia de planta y coordinamos envíos consolidados de tarimas a Guanacaste, Puntarenas, Zona Norte, Limón y Pérez Zeledón. Disponemos de protocolos de embalaje para exportación a Centroamérica.
        </div>
</div>
</div>
</section>
{/* Sticky Conversion Banner */}
<div className="px-margin pb-space-lg">
<div className="bg-gradient-to-r from-primary to-primary-container text-on-primary p-space-md rounded-xl shadow-lg flex flex-col gap-space-sm items-center text-center">
<div className="w-16 h-16 rounded-full bg-surface-container-lowest/90 p-2 flex items-center justify-center shadow-sm"><img alt="EUKAL Poder Natural" className="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuChE1b2UZNSpUfAn8EdCU_WO9Gidq0HPVhlncjvDFUJvGwilps_5nic3PEmFGPJnTdBLhrFIDAVEHcaRYHR4bq93jNT1BgyrNzLWPvxk8vU49JnA7dA-XivhUX32k5ZbrIIEA7ta9Uc221jyqom19mi9etGn79Q7D67PFNU0U7AFeiYZn84qhJX8tloSN25DRHJvSC3lhPduXl9RKWAtU2N3Y-Zl5OUUy7SopYbMI0sJybYxZ-WO4mR" /></div>
<div className="flex flex-col gap-1">
<h3 className="font-headline-md text-headline-md font-bold">¿Listo para formular su marca propia?</h3>
<p className="font-body-sm text-body-sm text-surface-container-high">
          Agende una visita técnica a la planta AMSA o solicite su kit de muestras biodegradables hoy mismo.
        </p>
</div>
<a className="w-full py-3 bg-tertiary-fixed text-on-tertiary-fixed font-label-md text-label-md rounded-lg flex items-center justify-center gap-2 hover:bg-tertiary-fixed-dim transition-colors shadow" href="#formulario-maquila">
<span className="material-symbols-outlined text-[18px]">send</span>
<span className="">Iniciar Cotización de Maquila B2B</span>
</a>
</div>
</div>
</div>
</main><aside className="fixed bottom-24 right-4 z-50"><a aria-label="Contacto WhatsApp B2B" className="w-14 h-14 bg-secondary text-on-secondary rounded-full flex items-center justify-center shadow-[0_4px_12px_rgba(23,107,75,0.35)] hover:scale-105 active:scale-95 transition-all" href="https://wa.me/50688888888" rel="noopener noreferrer" target="_blank"><span className="material-symbols-outlined text-[28px]">chat</span></a></aside><nav className="fixed bottom-0 w-full z-50 pb-safe bg-surface/90 backdrop-blur-xl shadow-[0_-2px_12px_rgba(0,0,0,0.05)]" data-active-classes="text-primary font-bold"><div className="flex justify-around items-center h-16 px-space-sm"><a className="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] gap-0.5 text-on-surface-variant hover:text-primary transition-colors" href="/"><span className="material-symbols-outlined text-[22px]">home_work</span><span className="font-label-sm text-[11px]">Inicio</span></a><a className="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] gap-0.5 text-on-surface-variant hover:text-primary transition-colors" href="/#calculadora-dilucion"><span className="material-symbols-outlined text-[22px]">science</span><span className="font-label-sm text-[11px]">Productos</span></a><a aria-current="page" className="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] gap-0.5 transition-colors text-primary font-bold" href="/maquila"><span className="material-symbols-outlined text-[22px]">precision_manufacturing</span><span className="font-label-sm text-[11px]">Maquila</span></a><a className="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] gap-0.5 text-on-surface-variant hover:text-primary transition-colors" href="/#lead-sample"><span className="material-symbols-outlined text-[22px]">receipt_long</span><span className="font-label-sm text-[11px]">Cotizar</span></a></div></nav>


    </div>
  );
}
