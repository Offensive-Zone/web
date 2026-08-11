import { useTranslation } from "react-i18next";

const WHATSAPP_NUMBER = "573016245204";

const WhatsAppButton = () => {
  const { t } = useTranslation();

  const prefill = encodeURIComponent(t("whatsapp.message"));

  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${prefill}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-fab"
      aria-label={t("whatsapp.label")}
      title={t("whatsapp.label")}
    >
      <svg viewBox="0 0 24 24" fill="none" width="26" height="26">
        <path
          d="M17.47 14.38c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.48-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.91-2.2-.24-.58-.48-.5-.67-.5-.17 0-.37-.02-.57-.02-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"
          fill="currentColor"
        />
        <path
          d="M12.02 2C6.5 2 2 6.48 2 12c0 1.85.5 3.58 1.36 5.07L2 22l5.08-1.33A9.96 9.96 0 0 0 12.02 22C17.52 22 22 17.52 22 12S17.52 2 12.02 2Zm0 18.13c-1.64 0-3.17-.46-4.47-1.26l-.32-.19-3.02.79.8-2.94-.21-.3A8.12 8.12 0 0 1 3.87 12c0-4.5 3.66-8.15 8.15-8.15S20.17 7.5 20.17 12s-3.66 8.13-8.15 8.13Z"
          fill="currentColor"
        />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
