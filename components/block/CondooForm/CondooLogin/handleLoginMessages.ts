import messages from "./messages.json"

const handleLoginMessages = (error: {
	a: any;
	code: string;
	message: string;
	stack: "";
}) => {
	const defaultMessage = "Something went wrong while trying to log in, try again";
	return messages.errors[error.code] ?? defaultMessage;
}

export default handleLoginMessages;