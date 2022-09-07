/* eslint-disable import/prefer-default-export */

import * as yup from 'yup';

export const contactModal = yup.object({
  name: yup.string().required('Obrigatório'),
  email: yup
    .string()
    .email('Formato de email inválido!')
    .required('Email obrigatório!'),
});
