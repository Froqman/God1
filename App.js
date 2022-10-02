import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDwoRXqhTEWczK2u48CAVqvRYQn8w6zPs",
  authDomain: "god1-2a702.firebaseapp.com",
  databaseURL: "https://god1-2a702-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "god1-2a702",
  storageBucket: "god1-2a702.appspot.com",
  messagingSenderId: "879442379046",
  appId: "1:879442379046:web:46199ebf5656c9e4c281e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
