import './styles.scss';
import BaseForm from "../../../../../core/components/BaseForm";
import React, {useState} from "react";
import {makerequest} from "../../../../../core/Utils/request";

type FormState = {
    name: string;
    price: string;
    category: string;
    description: string;
}

type FormEvent = React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;

const Form = () => {
    const [formData, setFormData] = useState<FormState>({
        name: '', price: '', category: '1', description: ''
    });

    const handleOnChange = (event: FormEvent) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormData(data => ({ ...data, [name]: value }));
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const payload = {
            ...formData,
            imgUrl: 'https://a-static.mlcdn.com.br/210x210/controle-xbox-one-com-cabo-usb/tribosgames/dbb193acbd2411eabcb74201ac18501e/0bcea9d9be105d20365297ec7503e644.jpg',
        }
        makerequest({ url: '/products', method: 'POST', data: payload })
            .then(() => {
                setFormData({ name: '', category: '', price: '', description: ''});
            })
    }

    return (
        <form onSubmit={handleSubmit}>
            <BaseForm title="Cadastrar um produto">
                <div className="row">
                    <div className="col-6">
                        <input
                            value={formData.name} name="name"
                            type="text" className="form-control"
                            onChange={handleOnChange}
                            placeholder="Nome do Produto"
                        />

                        <select
                            value={formData.category} name="category"
                            className="form-control mb-5"
                            onChange={handleOnChange}
                            >
                            <option value="1">Laços</option>
                            <option value="2">Tiaras</option>
                            <option value="3">Viseiras</option>
                            <option value="4">Faixas</option>
                        </select>

                        <input
                            value={formData.price} name="price"
                            type="text" className="form-control"
                            onChange={handleOnChange}
                            placeholder="Preço"
                        />
                    </div>
                    <div className="col-6">
                        <textarea
                            name="description" value={formData.description}
                            onChange={handleOnChange} className="form-control"
                            cols={30} rows={10}
                        />
                    </div>
                </div>
            </BaseForm>
        </form>
    )
}

export default Form;