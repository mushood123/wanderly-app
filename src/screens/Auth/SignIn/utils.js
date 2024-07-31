import {firebase} from '../../../firebase';
import {signInSchema} from '../../../utils';

export const formInit = {
  initialValues: {
    email: '',
    password: '',
  },
  validationSchema: signInSchema,
  validateOnMount: false,
};

export const signInCallback = values => {
  firebase.signInWithEmailAndPassword({
    email: values.email,
    password: values.password,
    successCallback: r => {
      console.log(r);
    },
    errorCallback: e => {
      console.log(e.code);
    },
  });
};
