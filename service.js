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
 const FieldValue = firebase.firestore().FieldValue;

async function handleSubmitService(event) {
    event.preventDefault();
    
    const data = new FormData(event.target);

    const value = data.get('device ID');
    var Status = "";
    if(document.getElementById("field-a4e2").checked) {
        Status = "Solved";
    } else if(document.getElementById("field-fa07").checked) {
        Status = "Not Solved";
    } else if(document.getElementById("field-ff25").checked) {
        Status = "Pending";
    } else { }
   

    


    const send = {



        DeviceId: value,
        Service_By: data.get('Select Name'),
        
        AssembledDate: data.get('date'),
        Service_Status: Status,
        Service_Issue: data.get('textarea'),
        

     
    }
  
  console.log(send);
   var lengthsofFile = 1;
  var ServiceJson = [];


const ServiceRef = db.collection('Service').doc(`${value}`);
const SerDoc = await ServiceRef.get();
if (!SerDoc.exists) {
  console.log('No such SerDocument!');
  db.collection("Service")
        .doc(`${value}`)
        .set({})
        .then(() => {
            console.log("Document created");
        });
        
} else {
    
      ServiceJson = SerDoc.data();
      var keys = Object.keys(ServiceJson);
      console.log(keys.length);
      console.log(SerDoc.data());
      console.log(keys[keys.length - 1]);
      lengthsofFile = keys.length+1;

}
 
    var sendJson = {[lengthsofFile]: {
            "Service_By": data.get('Select Name'),
            "AssembledDate": data.get('date'),
            "Service_Status": Status,
            "Service_Issue": data.get('textarea')}

    };
   
    const updateData =  await ServiceRef.update(sendJson)
    .then(() => {
        console.log("Document created");
    });
    
        // .set( [{"1"} , {
        //     //DeviceId: value,
        //     
        // } ],{merge:true}
        // )

        
   
  
}

const form = document.getElementById('ServiceLog');
form.addEventListener('submit', handleSubmitService);