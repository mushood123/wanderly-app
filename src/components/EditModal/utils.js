import {PackageSchema} from '../../utils';

export const formInit = ({hourlyRate = '', places = ''}) => {
  console.log('FORM INIT', hourlyRate, places);
  return {
    initialValues: {
      hourlyRate,
      places,
    },
    validationSchema: PackageSchema,
    validateOnMount: true,
  };
};
