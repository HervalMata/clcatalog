import './styles.scss';
import BaseForm from "../../../../../core/components/BaseForm";

const Form = () => {

    return (
        <BaseForm title="Cadastrar um produto">
            <div className="row">
                <div className="col-6">
                    <input type="text" className="form-control"></input>
                </div>
            </div>
        </BaseForm>
    )
}

export default Form;