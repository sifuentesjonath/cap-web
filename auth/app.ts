import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/messaging';

class FirebaseApp {
	private onMessagingObserver: (payload) => void;
	private deviceToken: string = '';

	constructor() {
		this.getAppInstance()
		this.initializeMessagingApp()
	}

	private getAppInstance() {
		const config = {
			apiKey: 'AIzaSyDRqt2FQTh1Yy7S8kNlor2oLZ3VBDmgx8s',
			authDomain: 'condoo-web-app.firebaseapp.com',
			projectId: 'condoo-web-app',
			storageBucket: 'condoo-web-app.appspot.com',
			messagingSenderId: '768309329962',
			appId: '1:768309329962:web:6e66d8b2d68c198b10c353',
			measurementId: 'G-K3069JYKVF',
		};

		if(typeof window !== "undefined" && firebase.apps?.length <= 0) 
			return firebase.initializeApp(config);
		else if(typeof window !== "undefined" && firebase.apps?.length)
			return firebase;
	}
	
	private initializeMessagingApp(){
		if(typeof window !== "undefined"){
			(window as any).firebase = this.getAppInstance();
			if (firebase.messaging.isSupported()) {
				this.getToken().then((token) => {
					if(token) {
						console.log('Setting token to local storage', token);
						this.deviceToken = token; 
					}
				});

				this.getAppInstance().messaging().onMessage((payload) => {
					console.log('Message received. ', payload);
					alert('Message received!')
					if(this.onMessagingObserver) this.onMessagingObserver(payload);
				})
			}
			else {
				console.error('Messaging is not supported');
			}
		}
	}

	private getToken(){
		const messaging = this.getAppInstance().messaging();
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

	public getFirebaseApp(){
		return this.getAppInstance()
	}

	public getDeviceToken(){
		return this.deviceToken;
	}

	public setMessagingObServer(callBack: (payload) => void) {
		this.onMessagingObserver = callBack;
	}
}

// const firebaseApp = new FirebaseApp();

export default FirebaseApp;