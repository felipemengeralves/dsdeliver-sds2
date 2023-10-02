import { ReactComponent as MainImage } from "./main.svg";
import { Link } from "react-router-dom";
import "./styles.css";

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="home-actions">
          <h1 className="home-title">
            Faça seu pedido que entregamos para você
          </h1>
          <h3 className="home-subtitle">
            Escolha o seu pedido e em poucos minutos levaremoss na sua porta
          </h3>
          <Link to="/orders" className="home-btn-order">
            FAZER PEDIDO
          </Link>
        </div>
        <div className="home-image">
          <MainImage />
        </div>
      </div>
    </div>
  );
}

export default Home;
