import firebase from 'firebase/app';

export default function getToken(firebaseApp: firebase.app.App){
	const messaging = firebaseApp.messaging();
	// Get registration token. Initially this makes a network call, once retrieved
	// subsequent calls to getToken will return from cache.
	return messaging
		.getToken({ vapidKey: 'BEztC21p454yzhgcql-P1ZAAKOm6c06DOGEVj-aIdwuTqUqe7LrhDOh1IgmdUUE5c6Iz_NhEti0mni5oLIh2pZA' })
		.then((currentToken) => {
			// Send the token to your server and update the UI if necessary
			if (currentToken) return currentToken;
			else return ''
		})
		.catch((err) => {
			console.error('An error occurred while retrieving token. ', err);
		});
}
