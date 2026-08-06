import { useTranslation } from "react-i18next";

const Testimonial = () => {
  const { t } = useTranslation();
  return (
    <section className="section" id="testimonio">
      <div className="container">
        <p className="eyebrow"><span className="dim">{t("testimonial.eyebrow-sector")}</span> {t("testimonial.eyebrow-label")}</p>
        <div className="testimonial reveal">
          <p className="quote">&ldquo;{t("testimonial.quote")}&rdquo;</p>
          <p className="who">
            — {t("testimonial.who-placeholder")}, {t("testimonial.role-placeholder")} {t("testimonial.at")} <span>{t("testimonial.company-placeholder")}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
