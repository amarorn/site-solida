const partners: { src: string; alt: string }[] = [
  {
    src: "/partners/tuv-rheinland-testmark.svg",
    alt: "TÜV Rheinland, certificação Testmark",
  },
  {
    src: "/partners/solare-italia-white.svg",
    alt: "Solare Italia, associação do setor solar na Itália",
  },
  {
    src: "/partners/spain-dc-white.svg",
    alt: "Spain DC, infraestrutura de datacenter na Espanha",
  },
  {
    src: "/partners/aee-white.svg",
    alt: "AEE, associação empresarial de energia",
  },
  {
    src: "/partners/logo-aias-bianco.svg",
    alt: "AIAS, associação italiana do setor solar",
  },
  {
    src: "/partners/aepibal-white.svg",
    alt: "Aepibal, associação do setor fotovoltaico",
  },
  {
    src: "/partners/camera-logo.svg",
    alt: "Camera di Commercio, câmara de comércio",
  },
  {
    src: "/partners/avaesen-logo-1.svg",
    alt: "Avaesen, cluster de energias renováveis",
  },
  {
    src: "/partners/logo-apren-blanco.svg",
    alt: "APREN, associação de energias renováveis",
  },
];

export function FooterPartners() {
  return (
    <div>
      <p className="mb-4 text-sm font-semibold leading-snug text-slate-300">
        Orgulhosos parceiros de:
      </p>
      <ul className="flex flex-col gap-5">
        {partners.map((p) => (
          <li key={p.src} className="flex justify-start">
            <img
              src={p.src}
              alt={p.alt}
              loading="lazy"
              decoding="async"
              className="h-10 max-h-11 w-auto max-w-[180px] object-contain object-left"
              width={180}
              height={44}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
