importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: "AIzaSyCbwbrE_jRfdGlloBkHEgLHdEnSiv_3th8",
  authDomain: "ieduy-2b38b.firebaseapp.com",
  projectId: "ieduy-2b38b",
  storageBucket: "ieduy-2b38b.firebasestorage.app",
  messagingSenderId: "133544253650",
  appId: "1:133544253650:web:76e33615d67200b175750b",
  measurementId: "G-N8N99CS619"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'logo.png' 
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
