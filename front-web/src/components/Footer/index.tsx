import { ReactComponent as YoutubeIcon } from "./youtube.svg";
import { ReactComponent as LinkedinIcon } from "./linkedin.svg";
import { ReactComponent as InstagramIcon } from "./instagram.svg";
import { Link } from "react-router-dom";
import "./styles.css";

export default function Footer() {
  return (
    <footer className="main-footer">
      <span>
        App desenvolvido durante a 2ª ed. do evento
        <strong> Semana DevSuperior</strong>
      </span>
      <div className="footer-icons">
        <Link to="https://youtube.com/devsuperior" target="_blank">
          <YoutubeIcon />
        </Link>
        <Link to="https://www.linkedin.com/school/devsuperior/" target="_blank">
          <LinkedinIcon />
        </Link>
        <Link to="https://www.instagram.com/devsuperior.ig/" target="_blank">
          <InstagramIcon />
        </Link>
      </div>
    </footer>
  );
}
