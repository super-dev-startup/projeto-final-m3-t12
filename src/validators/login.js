import * as yup from 'yup';

const loginResolver = yup.object({
  email: yup
    .string()
    .email('Formato de email inválido!')
    .required('Email obrigatório!'),
  password: yup.string().required('Senha Obrigatória'),
});

export default loginResolver;
