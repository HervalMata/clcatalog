import { Link } from "react-router-dom";
import ButtonIcon from "../../core/components/ButtonIcon";
import './styles.scss';

const Home = () => (
    <div className="home-container">
        <div className="row home-container">
            <div className="col-6">
                <h1 className="text-title">Conheça o melhor <br /> Catálogo de laços</h1>
                <p className="text-subtitle">
                    Ajudaremos você a encontrar os melhores <br /> laços do mercado.
                </p>
                <Link to="/catalog">
                    <ButtonIcon text="Inicia agora a sua busca" />
                </Link>
                <div className="col-6">
                    {/* <MainImage className="main-image" /> */}
                </div>
            </div>
        </div>
    </div>
);

export default Home;