/* eslint-disable import/prefer-default-export */

import * as yup from 'yup';

export const contactEmail = yup.object({
  firstName: yup.string('Apenas texto!').required('Campo obrigatório'),
  lastName: yup.string('Apenas texto!').required('Campo obrigatório'),
  email: yup
    .string()
    .email('Formato de email inválido!')
    .required('Email obrigatório!'),
  phone: yup.string().required('Campo obrigatório!'),
  message: yup.string('Apenas texto!').required('Campo obrigatório'),
});
