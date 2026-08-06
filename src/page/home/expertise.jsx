import { useTranslation } from "react-i18next";

const services = [
  {
    key: "pentesting",
    isNew: true,
    icon: <path d="M12 2 3 6v6c0 5.2 3.6 9.9 9 11 5.4-1.1 9-5.8 9-11V6l-9-4Z" />,
    iconExtra: <path d="m9 12 2 2 4-4" />,
  },
  {
    key: "secure-dev",
    icon: <path d="M4 6h16M4 12h16M4 18h10" />,
    iconExtra: <circle cx="19" cy="18" r="2.4" />,
  },
  {
    key: "ai-implementation",
    icon: <path d="M12 3v3M12 18v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M3 12h3M18 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />,
    iconExtra: <circle cx="12" cy="12" r="3.6" />,
  },
  {
    key: "cloud-audit",
    isNew: true,
    icon: <path d="M6 18v-6a6 6 0 1 1 12 0v6" strokeLinecap="round" />,
    iconExtra: <><rect x="4" y="18" width="4" height="3" rx="1" /><rect x="16" y="18" width="4" height="3" rx="1" /></>,
  },
  {
    key: "compliance-prep",
    icon: <path d="M12 2 3 6v6c0 5.2 3.6 9.9 9 11 5.4-1.1 9-5.8 9-11V6l-9-4Z" />,
    iconExtra: <path d="M12 8v5M12 16h.01" strokeLinecap="round" />,
  },
  {
    key: "security-awareness",
    icon: <path d="M12 3 4 6.5v5c0 5 3.4 8.6 8 10 4.6-1.4 8-5 8-10v-5L12 3Z" />,
    iconExtra: <path d="M9 12h6M12 9v6" strokeLinecap="round" />,
  },
];

const Expertise = () => {
  const { t } = useTranslation();
  return (
    <section className="section" id="servicios">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow"><span className="dim">{t("services.eyebrow-sector")}</span> {t("services.eyebrow-label")}</p>
          <h2>{t("services.heading")}</h2>
          <p>{t("services.subtitle")}</p>
        </div>

        <div className="services-grid">
          {services.map((service, i) => (
            <div
              className={`service-card${service.isNew ? " new-service" : ""}`}
              key={service.key}
              data-badge={service.isNew ? t("services.new-badge") : undefined}
            >
              <span className="idx">{String(i + 1).padStart(2, "0")}</span>
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round">
                {service.icon}
                {service.iconExtra}
              </svg>
              <h3>{t(`services.${service.key}.title`)}</h3>
              <p>{t(`services.${service.key}.description`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
