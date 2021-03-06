import { IUserForm } from '../interfaces/auth.interfaces';

const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;

export const validateLogin = (form: IUserForm) => {
  let errors: IUserForm = {};

  if (!form.email?.trim()) errors.email = 'El campo "email" es requerido';

  if (form.email && !regexEmail.test(form.email.trim()))
    errors.email = 'El campo "email" es incorrecto';

  if (!form.password?.trim())
    errors.password = 'El campo "contraseña" es requerido';

  if (form.password && form.password.length < 6)
    errors.password =
      'El campo "contraseña" debería tener 6 caracteres como mínimo';

  return errors;
};

export const validateRegister = (form: IUserForm) => {
  let errors: IUserForm = {};

  if (!form.names?.trim()) errors.names = 'El campo "nombre" es requerido';
  else if (form.names && !regexName.test(form.names.trim()))
    errors.names = 'El campo "nombre" solo acepta letras y espacios en blanco';

  if (!form.surnames?.trim())
    errors.surnames = 'El campo "apellido" es requerido';
  else if (form.surnames && !regexName.test(form.surnames.trim()))
    errors.surnames =
      'El campo "apellido" solo acepta letras y espacios en blanco';

  if (!form.email?.trim()) errors.email = 'El campo "email" es requerido';
  else if (form.email && !regexEmail.test(form.email.trim()))
    errors.email = 'El campo "email" es incorrecto';

  if (!form.password?.trim())
    errors.password = 'El campo "contraseña" es requerido';
  else if (form.password && form.password.length < 6)
    errors.password =
      'El campo "contraseña" debe tener 6 caracteres como minimo';

  return errors;
};
