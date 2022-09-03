/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { contactEmail } from '../../validators/contactEmail';

import { Container, Form } from './styles';

const Contacts = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(contactEmail) });
  const onSubmit = (data) => console.log(data);
  return (
    <Container>
      <h1>CONTACT ME!</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="First name"
          {...register('firstName')}
        />
        <span>{errors.firstName?.message}</span>
        <input type="text" placeholder="Last name" {...register('lastName')} />
        <span>{errors.lastName?.message}</span>
        <input type="email" placeholder="Email" {...register('email')} />
        <span>{errors.email?.message}</span>
        <input type="text" placeholder="Phone" {...register('phone')} />
        <span>{errors.phone?.message}</span>
        <textarea
          rows="3"
          placeholder="Message"
          {...register('message')}
        ></textarea>
        <span>{errors.message?.message}</span>
        <button type="submit">Send</button>
      </Form>
    </Container>
  );
};

export default Contacts;
