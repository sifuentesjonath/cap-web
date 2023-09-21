import { validateEmail } from '@utils/index';

const useValidateEmail = (email: string) => {
	if (email == null) return false;

	return validateEmail(email);
}

export default useValidateEmail;