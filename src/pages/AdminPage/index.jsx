/* eslint-disable react/button-has-type */
import { useCallback, useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from '../../api/api';
import ModalServiceAdmin from '../../components/ModalServiceAdmin/ModalServiceAdmin';
// import { Image, Info, List, SeeMore } from '../../components/Services/styles';
import { RouteContext } from '../../contexts/contextRoutes';
import DashboardDiv from './styles';

function AdminPage() {
  const { Logout } = useContext(RouteContext);

  const { register, handleSubmit, setValue } = useForm({});

  const [services, setServices] = useState([]);

  const navigate = useNavigate();

  const setApresentationFunc = useCallback(() => {
    api.get('/services').then((response) => setServices(response.data));

    api
      .get('/apresentation')
      .then((response) => {
        setValue('title', response.data.title);
        setValue('subtitle', response.data.subtitle);
        setValue('body', response.data.body);
        setValue('born-in', response.data['born-in']);
        setValue('date-of-birth', response.data['date-of-birth']);
        setValue('experience', response.data.experience);
        setValue('project-completed', response.data['project-completed']);
        setValue('happy-cliente', response.data['happy-cliente']);
      })
      .catch((err) => err);
  });

  const updateApresentation = (data) => {
    toast.promise(
      api.put('/apresentation', data).catch((err) => {
        if (err.response.status === 401) {
          localStorage.clear();
          navigate('/login');
        } else return err;
      }),
      {
        pending: 'Aguarde...',
        success: 'Editado com sucesso! 👌',
        error: 'Promise rejected 🤯',
      },
    );
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [id, setId] = useState();
  const [indexService, setIndex] = useState();

  useEffect(() => {
    setApresentationFunc();
  }, []);

  return (
    <>
      {modalIsOpen === true && (
        <ModalServiceAdmin
          id={id}
          service={services[indexService]}
          setModalIsOpen={setModalIsOpen}
        />
      )}
      <DashboardDiv>
        <div className="infos">
          <h1>Dashboard Admin</h1>
          <button className="btnLogout" onClick={Logout}>
            Sair
          </button>
        </div>

        <h2>Edite suas informações</h2>
        <div className="superContainer">
          <form
            onSubmit={handleSubmit(updateApresentation)}
            className="form-apresentation"
          >
            <h3>Apresentação</h3>
            <label htmlFor="title">
              Título
              <input type="text" id="title" {...register('title')} />
            </label>
            <label htmlFor="subtitle">
              Subtítulo
              <input type="text" id="subtitle" {...register('subtitle')} />
            </label>
            <label className="textarea" htmlFor="body">
              Corpo da apresentação
              <textarea rows="2" cols="15" id="body" {...register('body')} />
            </label>
            <label htmlFor="born-in">
              Local
              <input type="text" id="born-in" {...register('born-in')} />
            </label>
            <label htmlFor="experience">
              Experiência
              <input type="text" id="experience" {...register('experience')} />
            </label>
            <label htmlFor="date-of-birth">
              Nascimento
              <input
                type="text"
                id="date-of-birth"
                {...register('date-of-birth')}
              />
            </label>
            <label htmlFor="project-completed">
              Projetos completos
              <input
                type="text"
                id="project-completed"
                {...register('project-completed')}
              />
            </label>
            <label htmlFor="happy-cliente">
              Clientes satisfeitos
              <input
                type="text"
                id="happy-cliente"
                {...register('happy-cliente')}
              />
            </label>
            <input className="btnSubmit" type="submit" value="Editar" />
          </form>
          <div className="services">
            <h3>Seus serviços</h3>
            {/* <List>
              {services.map((item, index) => (
                <li key={item.id}>
                  <Image>
                    <img src={item.portfolio[0]} alt="" />
                  </Image>
                  <Info>
                    <span>Merriage</span>
                    <h2>{item.name}</h2>
                    <SeeMore
                      to={item.id}
                      onClick={() => {
                        setId(item.id);
                        setIndex(index);
                        setModalIsOpen(true);
                      }}
                    >
                      Editar
                    </SeeMore>
                  </Info>
                </li>
              ))}
            </List> */}
            <ul>
              {services.map((item, index) => (
                <li key={item.id}>
                  <figure>
                    <img src={item.portfolio[0]} alt="" />
                  </figure>
                  <div>
                    <span>Demo</span>
                    <h2>{item.name}</h2>
                    <span
                      to={item.id}
                      onClick={() => {
                        setId(item.id);
                        setIndex(index);
                        setModalIsOpen(true);
                      }}
                    >
                      Editar
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </DashboardDiv>
    </>
  );
}

export default AdminPage;
