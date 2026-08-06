import { useTranslation } from "react-i18next";

const cards = [
  { key: "proactive", icon: <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" strokeLinejoin="round" /> },
  { key: "confidentiality", icon: <path d="M12 3 4 6.5v5c0 5 3.4 8.6 8 10 4.6-1.4 8-5 8-10v-5L12 3Z" strokeLinejoin="round" /> },
  { key: "premium", icon: <path d="m12 2 2.9 6.3 6.9.7-5.2 4.6 1.6 6.8L12 16.9 5.8 20.4l1.6-6.8L2.2 9l6.9-.7L12 2Z" strokeLinejoin="round" /> },
];

const WhyChooseUs = () => {
  const { t } = useTranslation();
  return (
    <section className="section" id="por-que">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow"><span className="dim">{t("why-us.eyebrow-sector")}</span> {t("why-us.eyebrow-label")}</p>
          <h2>{t("why-us.heading")}</h2>
        </div>
        <div className="why-grid">
          {cards.map((card) => (
            <div className="why-card reveal" key={card.key}>
              <div className="icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">{card.icon}</svg>
              </div>
              <h3>{t(`why-us.${card.key}.title`)}</h3>
              <p>{t(`why-us.${card.key}.description`)}</p>
            </div>
          ))}
        </div>

        <div className="compliance" style={{ marginTop: "48px" }}>
          {["iso", "soc2", "owasp", "badge-placeholder"].map((key) => (
            <span className="compliance-badge" key={key}>
              <svg viewBox="0 0 24 24" fill="none"><path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              {t(`compliance.${key}`)}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
