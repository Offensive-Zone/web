import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import logoIcon from "../../assets/logo/logo-icon.png";

const NavBar = () => {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const menu = [
    { label: t("header.inicio"), to: "inicio" },
    { label: t("header.nosotros"), to: "nosotros" },
    { label: t("header.servicios"), to: "servicios" },
    { label: t("header.metodologia"), to: "metodologia" },
    { label: t("header.contacto"), to: "contacto" },
  ];

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === "es" ? "en" : "es");
  };

  return (
    <nav className={`nav${scrolled ? " is-scrolled" : ""}`} id="nav">
      <a href="#inicio" className="nav-brand">
        <img className="flag" src={logoIcon} alt="Offensive Zone" />
        OFFENSIVE ZONE
      </a>

      <ul className={`nav-links${open ? " open" : ""}`} id="navLinks">
        {menu.map((item) => (
          <li key={item.to}>
            <a href={`#${item.to}`} onClick={() => setOpen(false)}>{item.label}</a>
          </li>
        ))}
      </ul>

      <div className="nav-cta">
        <button type="button" onClick={toggleLang} className="btn btn-ghost" style={{ fontFamily: "var(--mono)" }}>
          {i18n.language === "es" ? "EN" : "ES"}
        </button>
        <a href="#contacto" className="btn btn-ghost">{t("header.cta")}</a>
      </div>

      <button
        className="nav-toggle"
        id="navToggle"
        aria-label="Abrir menú"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </button>
    </nav>
  );
};

export default NavBar;
