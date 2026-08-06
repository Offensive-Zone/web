import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  const sweepRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!sweepRef.current || prefersReduced) return;
    let angle = 0;
    let frame;
    const spin = () => {
      angle = (angle + 0.15) % 360;
      if (sweepRef.current) sweepRef.current.style.transform = `rotate(${angle}deg)`;
      frame = requestAnimationFrame(spin);
    };
    frame = requestAnimationFrame(spin);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <header className="hero" id="inicio">
      <div className="grid-bg"></div>
      <svg className="radar" viewBox="0 0 900 900" fill="none">
        <circle cx="450" cy="450" r="120" stroke="#232B3A" strokeWidth="1" />
        <circle cx="450" cy="450" r="230" stroke="#232B3A" strokeWidth="1" />
        <circle cx="450" cy="450" r="340" stroke="#232B3A" strokeWidth="1" />
        <circle cx="450" cy="450" r="440" stroke="#1A2029" strokeWidth="1" />
        <g ref={sweepRef} style={{ transformOrigin: "450px 450px" }}>
          <path d="M450 450 L450 20 A430 430 0 0 1 800 250 Z" fill="url(#sweepGrad)" />
        </g>
        <defs>
          <radialGradient id="sweepGrad" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(450 450) rotate(45) scale(430)">
            <stop stopColor="#FF5A29" stopOpacity="0.22" />
            <stop offset="1" stopColor="#FF5A29" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>

      <div className="container hero-grid">
        <div>
          <p className="eyebrow"><span className="dim">{t("hero.eyebrow-sector")}</span> {t("hero.eyebrow-label")}</p>
          <h1 className="reveal">
            {t("hero.title-line1")}<br />
            {t("hero.title-line2")} <em>{t("hero.title-em")}</em>
            {t("hero.title-line3") ? <>{" "}<br />{t("hero.title-line3")}</> : null}
          </h1>
          <p className="hero-sub reveal">{t("hero.subtitle")}</p>
          <div className="hero-actions reveal">
            <a href="#contacto" className="btn btn-flare">{t("hero.cta-primary")}</a>
            <a href="#servicios" className="btn btn-ghost">{t("hero.cta-secondary")}</a>
          </div>
          <div className="hero-stats reveal">
            <div><span className="num">{t("hero.stat1-num")}</span><span className="lbl">{t("hero.stat1-label")}</span></div>
            <div><span className="num">{t("hero.stat2-num")}</span><span className="lbl">{t("hero.stat2-label")}</span></div>
            <div><span className="num">{t("hero.stat3-num")}</span><span className="lbl">{t("hero.stat3-label")}</span></div>
          </div>
        </div>

        <div className="id-card reveal">
          <div className="id-photo">
            <svg viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="8" r="3.4" stroke="currentColor" strokeWidth="1.4" />
              <path d="M4.5 20c1.4-3.8 4.6-5.7 7.5-5.7s6.1 1.9 7.5 5.7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
            <span className="ph-label">{t("id-card.photo-label")}<br />{t("id-card.photo-sublabel")}</span>
          </div>
          <div className="id-caption">
            <span>{t("id-card.role")}</span>
            <span className="tag">
              <svg viewBox="0 0 24 24" fill="none"><path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
              {t("id-card.verified")}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
