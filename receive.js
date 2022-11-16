var firebaseConfig = {
    apiKey: "AIzaSyDQ7vfOyBgoyEazS3lF7IAvxzgQ7FuoDsQ",
    authDomain: "vyoman-devices.firebaseapp.com",
    projectId: "vyoman-devices",
    storageBucket: "vyoman-devices.appspot.com",
    messagingSenderId: "701685900627",
    appId: "1:701685900627:web:674072dda6d409c9436da6",
    measurementId: "G-WWN64Y1G47"
  };

 firebase.initializeApp(firebaseConfig);
 const db = firebase.firestore();

 const booksRef = firebase.firestore().collection('PCB');

 async function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target);

  const value = data.get('device ID');

  console.log(value);
  
  

//   booksRef
//   .get()
//   .then((snapshot) => {
//     const data = snapshot.docs.map((doc) => ({
//       id: doc.id,
//       ...doc.data(),
//     }));
//     console.log("All data in 'books' collection", data); 
//     // [ { id: 'glMeZvPpTN1Ah31sKcnj', title: 'The Great Gatsby' } ]
//   });

const cityRef = db.collection('PCB').doc(`${value}`);
const doc = await cityRef.get();
if (!doc.exists) {
  console.log('No such document!');
} else {
    var dat = doc.data()
  alert('Document data:', JSON.stringify(dat));
}

  
}

const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);