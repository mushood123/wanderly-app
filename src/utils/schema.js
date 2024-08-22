import * as Yup from 'yup';
import {emailRegex} from './regex';
import {strings} from './errorLabels';

export const signInSchema = Yup.object().shape({
  email: Yup.string()
    .test(email => emailRegex.test(email))
    .email(strings.INVALID_EMAIL)
    .required(strings.REQUIRED),
  password: Yup.string()
    .min(6, strings.TOO_SHORT)
    .max(20, strings.TOO_LARGE)
    .required(strings.REQUIRED),
});

export const signUpSchema = Yup.object().shape({
  email: Yup.string()
    .test(email => emailRegex.test(email))
    .email(strings.INVALID_EMAIL)
    .required(strings.REQUIRED),
  newPassword: Yup.string()
    .min(6, strings.TOO_SHORT)
    .max(20, strings.TOO_LARGE)
    .required(strings.REQUIRED),

  confirmPassword: Yup.string()
    .min(6, strings.TOO_SHORT)
    .max(20, strings.TOO_LARGE)
    .required(strings.REQUIRED),
});

export const PackageSchema = Yup.object().shape({
  hourlyRate: Yup.number().max(500).required(strings.REQUIRED),
  places: Yup.string().required(strings.REQUIRED),
});

export const userProfileSchema = Yup.object().shape({
  name: Yup.string()
    .test(name => name.trim().length > 0)
    .required(strings.REQUIRED),
  age: Yup.number()
    .min(18, strings.TOO_YOUNG)
    .max(100, strings.TOO_OLD)
    .required(strings.REQUIRED),
  experience: Yup.number()
    .min(1, strings.TOO_LESS)
    .max(100, strings.TOO_MUCH)
    .required(strings.REQUIRED),
  phone: Yup.string()
    .required(strings.REQUIRED)
    .matches(/^\d+$/, strings.THE_FIELD_MUST_CONTAIN_ONLY_NUMBERS),
});
