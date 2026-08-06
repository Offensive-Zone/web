import { useTranslation } from "react-i18next";
import edgardoPhoto from "../../assets/img/team/edgardo.jpg";
import cesarPhoto from "../../assets/img/team/cesar.jpg";

const members = [
  {
    key: "edgardo",
    photo: edgardoPhoto,
    role: "id-card.role",
    profile: "https://linkedin.com/in/edgardokrause/",
  },
  {
    key: "cesar",
    photo: cesarPhoto,
    role: "team.cesar.id-role",
    profile: "https://www.linkedin.com/in/cesar-arreaza/",
  },
];

const Team = () => {
  const { t } = useTranslation();
  return (
    <div className="team-grid">
      {members.map((member) => (
        <div className="team-card" key={member.key}>
          <div className="team-photo">
            <img src={member.photo} alt={t(`team.${member.key}.name`)} loading="lazy" />
          </div>
          <div className="team-caption">
            <span>{t(member.role)}</span>
            <span className="tag">
              <svg viewBox="0 0 24 24" fill="none"><path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
              {t("id-card.verified")}
            </span>
          </div>
          <div className="team-name">{t(`team.${member.key}.name`)}</div>
          <p className="team-bio">{t(`team.${member.key}.bio`)}</p>
          <a className="team-link" href={member.profile} target="_blank" rel="noopener">
            {t("team.linkedin")} →
          </a>
        </div>
      ))}
    </div>
  );
};

export default Team;
