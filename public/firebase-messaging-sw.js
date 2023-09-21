// import firebase from '../auth/app'
// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts("https://www.gstatic.com/firebasejs/8.3.3/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.3.3/firebase-messaging.js");

firebase.initializeApp({
  apiKey: 'AIzaSyDRqt2FQTh1Yy7S8kNlor2oLZ3VBDmgx8s',
  authDomain: 'condoo-web-app.firebaseapp.com',
  projectId: 'condoo-web-app',
  storageBucket: 'condoo-web-app.appspot.com',
  messagingSenderId: '768309329962',
  appId: '1:768309329962:web:6e66d8b2d68c198b10c353',
  measurementId: 'G-K3069JYKVF',
});

const messaging = firebase.messaging();

// customize notifications that are received in the
// background (Web app is closed or not in browser focus)

messaging.onBackgroundMessage(function(payload) {
console.log('[firebase-messaging-sw.js] Received background message ', payload);
// Customize notification here
const notificationTitle = 'Background Message Title';
const notificationOptions = {
	body: 'Background Message body.',
	//  icon: '/firebase-logo.png'
};

self.registration.showNotification(notificationTitle,
	notificationOptions);
});