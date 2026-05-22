import { useState } from "react";
import { Box, Container, Typography, TextField, Button, CircularProgress, Alert } from "@mui/material";
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
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
        setStatus({ type: "error", message: data.error || t("contact.error") });
      }
    } catch {
      setStatus({ type: "error", message: t("contact.network-error") });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      id="contact"
      sx={{
        backgroundColor: "#0d1117",
        py: { xs: 8, md: 12 },
        borderTop: "1px solid rgba(88, 166, 255, 0.15)",
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h2"
          sx={{
            fontWeight: 900,
            fontSize: { xs: "36px", md: "56px" },
            textAlign: "center",
            color: "#fff",
            mb: 2,
          }}
        >
          {t("contact.title")}
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            color: "#8b949e",
            fontSize: "18px",
            mb: 6,
            maxWidth: "600px",
            mx: "auto",
          }}
        >
          {t("contact.subtitle")}
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            backgroundColor: "#161b22",
            border: "1px solid #30363d",
            borderRadius: "12px",
            p: { xs: 3, md: 5 },
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <TextField
            name="name"
            label={t("contact.name")}
            value={formData.name}
            onChange={handleChange}
            required
            fullWidth
            variant="outlined"
            sx={inputStyles}
          />
          <TextField
            name="email"
            label={t("contact.email")}
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            fullWidth
            variant="outlined"
            sx={inputStyles}
          />
          <TextField
            name="message"
            label={t("contact.message")}
            value={formData.message}
            onChange={handleChange}
            required
            fullWidth
            multiline
            rows={5}
            variant="outlined"
            sx={inputStyles}
          />

          <Button
            type="submit"
            disabled={loading}
            variant="contained"
            size="large"
            endIcon={loading ? <CircularProgress size={20} color="inherit" /> : <SendOutlinedIcon />}
            sx={{
              backgroundColor: "#58a6ff",
              color: "#fff",
              fontWeight: 700,
              fontSize: "16px",
              py: 1.5,
              mt: 1,
              "&:hover": { backgroundColor: "#388bfd" },
              "&.Mui-disabled": { backgroundColor: "#1f2937", color: "#6b7280" },
            }}
          >
            {loading ? t("contact.sending") : t("contact.send")}
          </Button>

          {status.message && (
            <Alert severity={status.type === "success" ? "success" : "error"} sx={{ borderRadius: "8px" }}>
              {status.message}
            </Alert>
          )}
        </Box>
      </Container>
    </Box>
  );
};

const inputStyles = {
  "& .MuiOutlinedInput-root": {
    color: "#c9d1d9",
    backgroundColor: "#0d1117",
    "& fieldset": { borderColor: "#30363d" },
    "&:hover fieldset": { borderColor: "#58a6ff" },
    "&.Mui-focused fieldset": { borderColor: "#58a6ff" },
  },
  "& .MuiInputLabel-root": {
    color: "#8b949e",
    "&.Mui-focused": { color: "#58a6ff" },
  },
};

export default ContactForm;
