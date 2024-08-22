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
  hourlyRate: Yup.number().max(500).required('Required'),
  places: Yup.string().required('Required'),
});

export const userProfileSchema = Yup.object().shape({
  name: Yup.string()
    .test(name => name.trim().length > 0)
    .required('Required'),
  age: Yup.number()
    .min(18, 'too young')
    .max(100, 'too old')
    .required('Required'),
  experience: Yup.number()
    .min(1, 'too less')
    .max(100, 'too much')
    .required('Required'),
  phone: Yup.string()
    .required('Required')
    .matches(/^\d+$/, 'The field must contain only numbers'),
});
