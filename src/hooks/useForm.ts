import { ChangeEvent, FocusEvent, useState, SyntheticEvent } from 'react';
import { toast } from 'react-toastify';
import { IUserForm } from '../interfaces/auth.interfaces';
import { HelpHttp } from '../utils/HelpHttp';
import { API } from '../utils/Globals';

const useForm = (
  initialForm: IUserForm,
  validateForm: (form: IUserForm) => IUserForm,
  process?: (res?: any) => void | boolean,
  endpoint?: string
) => {
  const [form, setForm] = useState<IUserForm>(initialForm);
  const [errors, setErrors] = useState<IUserForm>({});
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    handleChange(e);
    setErrors(validateForm(form));
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    setErrors(validateForm(form));

    if (!Object.keys(errors).length) {
      toast.info('Se esta procesando el formulario...');
      setLoading(true);
      let err;

      const res = await HelpHttp().post(`${API}/api/${endpoint}`, {
        body: JSON.stringify(form),
        headers: {
          'content-type': 'application/json',
          accept: 'application/json'
        }
      });

      setLoading(false);

      if (
        res.err ||
        res.status > 400 ||
        res instanceof DOMException ||
        res instanceof TypeError
      ) {
        toast.error(
          `Error: ${res.err || 'Failed Petition'} Estado: ${res.status || 404}`
        );
      } else {
        if (process) err = process(res) || false;

        if (!err) {
          toast.success('Operación exitosa');
          setForm(initialForm);
        } else toast.error('Hubo un error inténtelo más tarde');
      }
    } else {
      if (errors.password) toast.error(errors.password);
      if (errors.email) toast.error(errors.email);
    }
  };

  return {
    form,
    errors,
    loading,
    setLoading,
    handleBlur,
    handleSubmit,
    handleChange
  };
};

export default useForm;
