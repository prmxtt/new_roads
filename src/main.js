import Vue from 'vue'
import App from './App.vue'
import * as firebase from 'firebase'
import { firestorePlugin } from 'vuefire'


Vue.config.productionTip = false
Vue.use(firestorePlugin)

var firebaseConfig = {
  apiKey: "AIzaSyB_wKHIQ7znbb_FrrcSnvLHmwJ7WO7RoZg",
  authDomain: "fasolinka.firebaseapp.com",
  databaseURL: "https://fasolinka.firebaseio.com",
  projectId: "fasolinka",
  storageBucket: "fasolinka.appspot.com",
  messagingSenderId: "365580688930",
  appId: "1:365580688930:web:8958650b69dd3ee04e347b"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore()

new Vue({
  render: h => h(App),
}).$mount('#app')

