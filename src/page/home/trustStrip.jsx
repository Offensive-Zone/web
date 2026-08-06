import { useTranslation } from "react-i18next";

const TrustStrip = () => {
  const { t } = useTranslation();
  const sectors = t("trust.sectors", { returnObjects: true });

  return (
    <section className="trust">
      <div className="container trust-row">
        <span className="trust-label">{t("trust.label")}</span>
        <div className="trust-logos">
          {sectors.map((sector) => (
            <span className="trust-logo" key={sector}>{sector}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
