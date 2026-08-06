import { useTranslation } from "react-i18next";
import Team from "./team";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <section className="section" id="nosotros">
      <div className="container about-grid">
        <p className="eyebrow"><span className="dim">{t("about.eyebrow-sector")}</span> {t("about.eyebrow-label")}</p>
        <h2 style={{ fontSize: "clamp(26px,3.6vw,38px)", marginBottom: "24px" }}>
          {t("about.title-line1")}<br />{t("about.title-line2")}
        </h2>
        <div className="about-copy">
          <p dangerouslySetInnerHTML={{ __html: t("about.paragraph1") }} />
          <p>{t("about.paragraph2")}</p>
        </div>
        <div className="about-coords">
          <span>[ <span>●</span> {t("about.coord1")} ]</span>
          <span>[ <span>●</span> {t("about.coord2")} ]</span>
        </div>
        <Team />
      </div>
    </section>
  );
};

export default AboutUs;
