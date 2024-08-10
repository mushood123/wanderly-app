import {PackageSchema} from '../../utils';

export const formInit = {
  initialValues: {
    hourlyRate: '',
    places: '',
  },
  validationSchema: PackageSchema,
  validateOnMount: false,
};
