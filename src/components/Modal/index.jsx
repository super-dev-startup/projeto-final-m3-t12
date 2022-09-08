import { useEffect, useRef, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Container, Form, ErrorMsg, Send } from './styles';
import { contactModal } from '../../validators/contactModal';
import { RouteContext } from '../../contexts/contextRoutes';

const ContactModal = () => {
  const modalRef = useRef();
  const { handleModal, isOpenModal } = useContext(RouteContext);

  useEffect(() => {
    function handleOutClick(event) {
      if (!modalRef.current?.contains(event.target)) {
        handleModal(false);
      }
    }

    document.addEventListener('mousedown', handleOutClick);

    return () => {
      document.removeEventListener('mousedown', handleOutClick);
    };
  }, []);

  const submitContact = () => {
    handleModal(false);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(contactModal) });

  return (
    isOpenModal && (
      <Container>
        <div className="modal-box" ref={modalRef}>
          <div>
            <h1>CONTACT ME!</h1>
          </div>
          <Form onSubmit={handleSubmit(submitContact)}>
            <label htmlFor="name">
              Nome
              <input
                type="text"
                id="name"
                placeholder="Full name"
                {...register('name')}
              />
            </label>
            <ErrorMsg>{errors.name?.message}</ErrorMsg>

            <label htmlFor="email">
              Email
              <input
                type="text"
                id="email"
                placeholder="Ex: fulano@mail.com"
                {...register('email')}
              />
            </label>
            <ErrorMsg>{errors.email?.message}</ErrorMsg>

            <Send errors={errors} type="submit">
              Send
            </Send>
          </Form>
        </div>
      </Container>
    )
  );
};

export default ContactModal;
