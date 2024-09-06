import { PackageSchema } from '../../utils';

export const formInit = ({ hourlyRate = '', places = '' }) => ({
    initialValues: {
        hourlyRate,
        places,
    },
    validationSchema: PackageSchema,
    validateOnMount: true,
});
