import {userProfileSchema} from '../../../utils';

export const formInit = ({name, age, experience, phone}) => ({
  initialValues: {
    name,
    age,
    experience,
    phone,
  },
  validationSchema: userProfileSchema,
  validateOnMount: false,
});
