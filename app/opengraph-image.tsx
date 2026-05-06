import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Sólida Energías Renovables — 220 GW de experiência em energias renováveis";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const metrics = [
  { value: "2.500+", label: "Projetos" },
  { value: "50+", label: "Países" },
  { value: "300+", label: "Profissionais" },
  { value: "18 anos", label: "100% renováveis" },
];

const technologies = [
  { label: "Solar FV", value: "148 GW" },
  { label: "Eólica", value: "45 GW" },
  { label: "BESS", value: "29 GWh" },
  { label: "CSP", value: "9 GW" },
];

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px 72px",
          background: "#020917",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Amber glow — top left */}
        <div
          style={{
            position: "absolute",
            top: -120,
            left: -120,
            width: 700,
            height: 700,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(245,158,11,0.18) 0%, transparent 65%)",
          }}
        />
        {/* Sky glow — bottom right */}
        <div
          style={{
            position: "absolute",
            bottom: -80,
            right: -80,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(56,189,248,0.08) 0%, transparent 65%)",
          }}
        />

        {/* Top row: logo + Bureau Veritas */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <span
              style={{
                fontSize: 30,
                fontWeight: 800,
                color: "#f1f5f9",
                letterSpacing: "-0.5px",
              }}
            >
              Sólida
            </span>
            <span
              style={{
                fontSize: 11,
                fontWeight: 500,
                color: "#64748b",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
              }}
            >
              Energías Renovables
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              borderRadius: 100,
              border: "1px solid rgba(245,158,11,0.22)",
              background: "rgba(245,158,11,0.08)",
              padding: "7px 16px",
              fontSize: 11,
              fontWeight: 600,
              color: "rgba(251,191,36,0.85)",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            <div
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#f59e0b",
              }}
            />
            Grupo Bureau Veritas · 140 países
          </div>
        </div>

        {/* Center: main metric */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: 14,
            }}
          >
            <span
              style={{
                fontSize: 168,
                fontWeight: 800,
                color: "#f59e0b",
                lineHeight: 1,
                letterSpacing: "-6px",
              }}
            >
              220
            </span>
            <span
              style={{
                fontSize: 76,
                fontWeight: 700,
                color: "rgba(245,158,11,0.5)",
                lineHeight: 1,
              }}
            >
              GW
            </span>
          </div>
          <span
            style={{
              fontSize: 22,
              color: "#94a3b8",
              fontWeight: 400,
              letterSpacing: "-0.2px",
            }}
          >
            de experiência acumulada em projetos de energia renovável
          </span>
        </div>

        {/* Bottom: divider + metrics + tech tags */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {/* Divider */}
          <div
            style={{
              width: "100%",
              height: 1,
              background: "rgba(148,163,184,0.12)",
            }}
          />

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            {/* Key metrics */}
            <div style={{ display: "flex", gap: 48 }}>
              {metrics.map((m) => (
                <div
                  key={m.label}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 4,
                  }}
                >
                  <span
                    style={{
                      fontSize: 30,
                      fontWeight: 700,
                      color: "#f59e0b",
                      lineHeight: 1,
                    }}
                  >
                    {m.value}
                  </span>
                  <span
                    style={{
                      fontSize: 11,
                      color: "#64748b",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {m.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Technology tags */}
            <div style={{ display: "flex", gap: 8 }}>
              {technologies.map((t) => (
                <div
                  key={t.label}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 2,
                    borderRadius: 8,
                    border: "1px solid rgba(148,163,184,0.1)",
                    background: "rgba(15,23,42,0.6)",
                    padding: "8px 14px",
                  }}
                >
                  <span
                    style={{
                      fontSize: 16,
                      fontWeight: 700,
                      color: "#f59e0b",
                    }}
                  >
                    {t.value}
                  </span>
                  <span
                    style={{
                      fontSize: 10,
                      color: "#64748b",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {t.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
