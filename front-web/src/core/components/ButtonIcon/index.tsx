import { ReactComponent as ArrowIcon } from '../../assets/images/arrow.svg';
import './styles.scss';

type Props = {
    text: String;
}

const ButtonIcon = ({ text }: Props) => (
    <div className="d-inline-flex">
        <button className="btn btn-primary btn-icon">
            <h5>{ text }</h5>
        </button>
        <div className="btn-icon-content">
            <ArrowIcon />
        </div>
    </div>
);

export default ButtonIcon;