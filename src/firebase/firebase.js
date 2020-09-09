import firebase from 'firebase/app'
import 'firebase/firestore'
import firebaseConfig from '../firebase-config.js'

const firebaseApp = firebase.initializeApp(firebaseConfig)
const database = firebaseApp.firestore()

export default database
