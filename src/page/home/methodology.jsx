import { useTranslation } from "react-i18next";

const phases = ["phase1", "phase2", "phase3", "phase4"];

const Methodology = () => {
  const { t } = useTranslation();
  return (
    <section className="section" id="metodologia">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow"><span className="dim">{t("methodology.eyebrow-sector")}</span> {t("methodology.eyebrow-label")}</p>
          <h2>{t("methodology.heading")}</h2>
          <p>{t("methodology.subtitle")}</p>
        </div>
        <div className="process-list">
          {phases.map((phase) => (
            <div className="process-step reveal" key={phase}>
              <span className="step-tag">{t(`methodology.${phase}.tag`)}</span>
              <h4>{t(`methodology.${phase}.title`)}</h4>
              <p>{t(`methodology.${phase}.description`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
