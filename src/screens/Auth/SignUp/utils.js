import { firebase } from '../../../firebase';
import { signUpSchema } from '../../../utils';

export const formInit = {
    initialValues: {
        email: '',
        newPassword: '',
        confirmPassword: '',
    },
    validationSchema: signUpSchema,
    validateOnMount: false,
};

export const signUpCallback = values => {
    if (values.newPassword !== values.confirmPassword) {
        alert('new password does match confirm password');
    } else {
        firebase.createUserWithEmailAndPassword({
            email: values.email,
            password: values.confirmPassword,
            successCallback: r => {
                console.log(r);
            },
            errorCallback: e => {
                if (e.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }

                if (e.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }
            },
        });
    }
};
