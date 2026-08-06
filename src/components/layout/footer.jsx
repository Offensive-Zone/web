import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  const menu = [
    { label: t("header.inicio"), to: "inicio" },
    { label: t("header.nosotros"), to: "nosotros" },
    { label: t("header.servicios"), to: "servicios" },
    { label: t("header.contacto"), to: "contacto" },
  ];

  return (
    <>
      <section className="footer-cta">
        <div className="grid-bg"></div>
        <div className="container" style={{ position: "relative" }}>
          <svg className="flag-plant" viewBox="0 0 24 24" fill="none">
            <path d="M5 2v20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M5 3.5 20 8.5 5 13.5V3.5Z" fill="currentColor" />
          </svg>
          <h2>{t("footer.cta-title")}</h2>
          <p>{t("footer.cta-text")}</p>
          <a href="#contacto" className="btn btn-flare">{t("hero.cta-primary")}</a>
        </div>
      </section>

      <footer>
        <div className="container footer-row">
          <div className="footer-brand">
            <svg className="flag" viewBox="0 0 24 24" fill="none">
              <path d="M4 2v20" stroke="#FF5A29" strokeWidth="1.6" strokeLinecap="round" />
              <path d="M4 3.5 19 8.5 4 13.5V3.5Z" fill="#FF5A29" />
            </svg>
            OFFENSIVE ZONE
          </div>
          <ul className="footer-links">
            {menu.map((item) => (
              <li key={item.to}><a href={`#${item.to}`}>{item.label}</a></li>
            ))}
          </ul>
          <span className="footer-copy">© {year} Offensive Zone. {t("footer.copyright")}</span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
