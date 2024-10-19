import Logo_Gahca from "../assets/image/gacha.jpeg";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import Button from "../components/atoms/Button";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="Home">
      <header className="Gacha">
        <h1>Home</h1>
        <p>
          <img
            className="Gacha-image"
            src={Logo_Gahca}
            alt="Gacha-image"
            width={"100"}
            height={"100"}
          />
        </p>
        <Button name="Gacha" onClick={() => navigate("/Gacha")} />
      </header>
    </div>
  );
};

export default Home;
