import * as Yup from 'yup';
import {emailRegex} from './regex';

export const signInSchema = Yup.object().shape({
  email: Yup.string()
    .test(email => emailRegex.test(email))
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .min(6, 'too short')
    .max(20, 'too large')
    .required('Required'),
});

export const signUpSchema = Yup.object().shape({
  email: Yup.string()
    .test(email => emailRegex.test(email))
    .email('Invalid email')
    .required('Required'),
  newPassword: Yup.string()
    .min(6, 'too short')
    .max(20, 'too large')
    .required('Required'),

  confirmPassword: Yup.string()
    .min(6, 'too short')
    .max(20, 'too large')
    .required('Required'),
});

export const PackageSchema = Yup.object().shape({
  hourlyRate: Yup.number().max(50),
  places: Yup.string().min(3),
});
