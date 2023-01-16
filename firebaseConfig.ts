import { initializeApp } from "firebase/app";
import {
	FacebookAuthProvider,
	getAuth,
	GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyD2XBZatG6Ex1V5T8d8VfaKy_4xTMmLvOE",
	authDomain: "oneinvo-react.firebaseapp.com",
	databaseURL: "https://oneinvo-react.firebaseio.com",
	projectId: "oneinvo-react",
	storageBucket: "oneinvo-react.appspot.com",
	messagingSenderId: "448022510625",
	appId: "1:448022510625:web:5f5c29f329b1f531fb7760",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
