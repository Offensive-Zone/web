import { useState } from "react";
import { useTranslation } from "react-i18next";

const FORM_URL = "https://offensive-zone-form-handler.camaguapa.workers.dev";

const ContactForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const res = await fetch(FORM_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus({ type: "success", message: t("contact.success") });
        setFormData({ name: "", email: "", message: "" });
      } else {
        console.error("Contact form error:", data.error);
        setStatus({ type: "error", message: t("contact.error") });
      }
    } catch (err) {
      console.error("Contact form network error:", err);
      setStatus({ type: "error", message: t("contact.network-error") });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section" id="contacto" style={{ borderBottom: "none" }}>
      <div className="container">
        <div className="section-head">
          <p className="eyebrow"><span className="dim">{t("contact.eyebrow-sector")}</span> {t("contact.eyebrow-label")}</p>
          <h2>{t("contact.heading")}</h2>
          <p>{t("contact.heading-subtitle")}</p>
        </div>

        <div className="contact-grid">
          <form onSubmit={handleSubmit} noValidate>
            <div className="field">
              <label htmlFor="name">{t("contact.name")}</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder={t("contact.name-placeholder")}
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="field">
              <label htmlFor="email">{t("contact.email")}</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder={t("contact.email-placeholder")}
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="field">
              <label htmlFor="message">{t("contact.message")}</label>
              <textarea
                id="message"
                name="message"
                placeholder={t("contact.message-placeholder")}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-flare" disabled={loading}>
              {loading ? t("contact.sending") : t("contact.send")}
            </button>

            {status.message && (
              <div className={`form-msg show ${status.type === "success" ? "ok" : "err"}`}>
                {status.message}
              </div>
            )}
          </form>

          <div className="contact-info">
            <div className="row">
              <svg viewBox="0 0 24 24" fill="none"><path d="M12 21s-7-6.1-7-11.2A7 7 0 0 1 19 9.8C19 14.9 12 21 12 21Z" stroke="currentColor" strokeWidth="1.4" /><circle cx="12" cy="9.5" r="2.4" stroke="currentColor" strokeWidth="1.4" /></svg>
              <div><div className="lbl">{t("contact.location-label")}</div><div className="val">{t("contact.location-value")}</div></div>
            </div>
            <div className="row">
              <svg viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.4" /><path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.4" /></svg>
              <div>
                <div className="lbl">{t("contact.email-label")}</div>
                <div className="val">
                  <a href="mailto:sales@offensive-zone.com">sales@offensive-zone.com</a>
                </div>
              </div>
            </div>
            <div className="row">
              <svg viewBox="0 0 24 24" fill="none"><path d="M12 8v5l3 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.4" /></svg>
              <div><div className="lbl">{t("contact.response-label")}</div><div className="val">{t("contact.response-value")}</div></div>
            </div>
            <div className="social-row">
              <a href="https://www.linkedin.com/company/theoffensivezone" target="_blank" rel="noopener" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="none"><path d="M6.94 8.5H4v11h2.94v-11ZM5.47 7.15A1.7 1.7 0 1 0 5.47 3.75a1.7 1.7 0 0 0 0 3.4ZM20 13.4c0-3.05-1.63-4.47-3.81-4.47-1.76 0-2.54.97-2.98 1.65V8.5H10.3c.04.83 0 11 0 11h2.91v-6.14c0-.33.02-.66.12-.9.26-.66.86-1.34 1.86-1.34 1.31 0 1.84.99 1.84 2.45V19.5H20V13.4Z" fill="currentColor" /></svg>
              </a>
              <a href="https://www.instagram.com/offensivezone/" target="_blank" rel="noopener" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none"><rect x="3.5" y="3.5" width="17" height="17" rx="4.5" stroke="currentColor" strokeWidth="1.4" /><circle cx="12" cy="12" r="3.8" stroke="currentColor" strokeWidth="1.4" /><circle cx="16.7" cy="7.3" r="1" fill="currentColor" /></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
