/* eslint-disable import/order */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
import { useState, useEffect, useRef } from 'react';
import { Container, Form, ErrorMsg, Send } from './styles';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { contactModal } from '../../validators/contactModal';

const ContactModal = () => {
  const modalRef = useRef();
  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    function handleOutClick(event) {
      if (!modalRef.current?.contains(event.target)) {
        setIsOpenModal(false);
      }
    }

    document.addEventListener('mousedown', handleOutClick);

    return () => {
      document.removeEventListener('mousedown', handleOutClick);
    };
  }, []);

  const submitContact = (data) => {
    console.log(data);
    setIsOpenModal(false);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(contactModal) });

  return (
    <>
      {isOpenModal && (
        <Container>
          <div className="modal-box" ref={modalRef}>
            <div>
              <h1>CONTACT ME!</h1>
            </div>
            <Form onSubmit={handleSubmit(submitContact)}>
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                id="name"
                placeholder="Full name"
                {...register('name')}
              />
              <ErrorMsg>{errors.name?.message}</ErrorMsg>

              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                placeholder="Ex: fulano@mail.com"
                {...register('email')}
              />
              <ErrorMsg>{errors.email?.message}</ErrorMsg>

              <Send errors={errors} type="submit">
                Send
              </Send>
            </Form>
          </div>
        </Container>
      )}
      <button onClick={() => setIsOpenModal(true)}>Click</button>
    </>
  );
};

export default ContactModal;
