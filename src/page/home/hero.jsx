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
          <div className="network-diagram">
            <svg viewBox="0 0 240 300" fill="none">
              <line x1="120" y1="50" x2="55" y2="110" stroke="var(--line)" strokeWidth="1.5" />
              <line x1="120" y1="50" x2="190" y2="95" stroke="var(--line)" strokeWidth="1.5" />
              <line x1="120" y1="50" x2="95" y2="170" stroke="var(--line)" strokeWidth="1.5" />
              <line x1="55" y1="110" x2="95" y2="170" stroke="var(--line)" strokeWidth="1.5" />
              <line x1="95" y1="170" x2="175" y2="185" stroke="var(--line)" strokeWidth="1.5" />
              <line x1="95" y1="170" x2="45" y2="230" stroke="var(--line)" strokeWidth="1.5" />
              <line x1="175" y1="185" x2="150" y2="250" stroke="var(--line)" strokeWidth="1.5" />
              <line x1="45" y1="230" x2="150" y2="250" stroke="var(--line)" strokeWidth="1.5" />

              <circle cx="120" cy="50" r="9" fill="var(--secure-dim)" stroke="var(--secure)" strokeWidth="1.5" />
              <circle cx="55" cy="110" r="6" fill="var(--secure-dim)" stroke="var(--secure)" strokeWidth="1.5" />
              <circle cx="190" cy="95" r="6" fill="var(--flare-dim)" stroke="var(--flare)" strokeWidth="1.5" />
              <circle cx="95" cy="170" r="6" fill="var(--secure-dim)" stroke="var(--secure)" strokeWidth="1.5" />
              <circle cx="175" cy="185" r="6" fill="var(--flare-dim)" stroke="var(--flare)" strokeWidth="1.5" />
              <circle cx="45" cy="230" r="6" fill="var(--secure-dim)" stroke="var(--secure)" strokeWidth="1.5" />
              <circle cx="150" cy="250" r="6" fill="var(--secure-dim)" stroke="var(--secure)" strokeWidth="1.5" />
            </svg>
          </div>
          <div className="id-caption">
            <span>{t("hero.network-caption")}</span>
            <span className="tag">
              <svg viewBox="0 0 24 24" fill="none"><path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
              {t("hero.network-status")}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
