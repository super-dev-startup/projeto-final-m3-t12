import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../api/api";
import ModalService from "./styles";

const ModalServiceAdmin = ({ id, setModalIsOpen, service }) => {
  const modalRef = useRef();

  const { register, handleSubmit, setValue } = useForm({});

  const navigate = useNavigate();

  const verDados = (dados) => {
    const { name, price, ...rest } = dados;

    const serviceEdited = {
      name,
      price,
      id,
      portfolio: Object.values(rest),
    };

    toast.promise(
      api.put(`/services/${id}`, serviceEdited).catch((err) => {
        if (err.response.status === 401) {
          localStorage.clear();
          navigate("/login");
        }
      }),
      {
        pending: "Aguarde...",
        success: "Editado com sucesso! 👌",
        error: "Promise rejected 🤯",
      }
    );
  };

  setValue("name", service.name);
  setValue("price", service.price);
  useEffect(() => {
    const modalClick = (e) => {
      if (!modalRef.current?.contains(e.target)) {
        setModalIsOpen(false);
      }
    };

    document.addEventListener("mousedown", modalClick);

    return () => {
      document.removeEventListener("mousedown", modalClick);
    };
  }, []);

  return (
    <ModalService>
      <div ref={modalRef} className="modalDivService">
        <h3>{service.name}</h3>

        <form onSubmit={handleSubmit(verDados)} action="">
          <div>
            <label htmlFor="name">
              Nome:
              <input type="text" name="" id="name" {...register("name")} />
            </label>
            <label htmlFor="price">
              Preço:
              <input type="text" name="" id="price" {...register("price")} />
            </label>
          </div>
          <div className="portfolioDiv">
            {service.portfolio.map((img, index) => {
              setValue(`img${index}`, img);
              return (
                <label key={`img${index + 2}`} htmlFor={`img${index}`}>
                  Imagem {index + 1}
                  <input
                    type="text"
                    name=""
                    id={`img${index}`}
                    {...register(`img${index}`)}
                  />
                </label>
              );
            })}
          </div>
          <button type="submit">Editar</button>
        </form>
      </div>
    </ModalService>
  );
};
export default ModalServiceAdmin;
