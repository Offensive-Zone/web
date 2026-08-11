import { useTranslation } from "react-i18next";
import logoIcon from "../../assets/logo/logo-icon.png";
import logoEs from "../../assets/logo/logo-es.png";
import logoEn from "../../assets/logo/logo-en.png";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const year = new Date().getFullYear();
  const logoLockup = i18n.language === "es" ? logoEs : logoEn;

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
          <img className="footer-logo-lockup" src={logoLockup} alt="Offensive Zone" />
          <h2>{t("footer.cta-title")}</h2>
          <p>{t("footer.cta-text")}</p>
          <a href="#contacto" className="btn btn-flare">{t("hero.cta-primary")}</a>
        </div>
      </section>

      <footer>
        <div className="container footer-row">
          <div className="footer-brand">
            <img className="flag" src={logoIcon} alt="Offensive Zone" />
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
