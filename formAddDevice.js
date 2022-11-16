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
  

function handleSubmitDevice(event) {
    event.preventDefault();
    
    const data = new FormData(event.target);

    const value = data.get('device ID');
    const checkBox = document.getElementById("checkbox-8f4d");
    var QC = 'Failed';

    if(checkBox.checked === true) {
        QC = "Passed";
    } else {}


    const send = {
        DeviceId: value,
        DeviceAssembledBy: data.get('Select Name'),
        HardwareInside: data.get('text-1'),
        PCBId: data.get('text-2'),
        AssembledDate: data.get('date'),
        DevicePurpose: data.get('text'),
        DeviceQC: QC,
        QCDeviceBy: data.get('select')

     
    }
  
  console.log(send);

    db.collection("Device")
        .doc(`${value}`)
        .set({
            DeviceId: value,
            DeviceAssembledBy: data.get('Select Name'),
            HardwareInside: data.get('text-1'),
            PCBId: data.get('text-2'),
            AssembledDate: data.get('date'),
            DevicePurpose: data.get('text'),
            DeviceQC: QC,
            QCDeviceBy: data.get('select'),

       
        })
        .then(() => {
            console.log("Document created");
        });
  
}



function handleSubmitPCB(event) {
    event.preventDefault();
    
    const data = new FormData(event.target);

  const value = data.get('device ID');
  const checkBox = document.getElementById("checkbox-8f4dc");
  var QC = 'Failed';

  if(checkBox.checked === true) {
        QC = "Passed";
  } else {}


  const send = {

    PCBId: value,
    PCBAssembledBy: data.get('Select Name'),
    AssembledDate: data.get('date'),
    PCBQC: QC,
    QCDeviceBy: data.get('select')

     
  }
  
  console.log(send);

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

db.collection("PCB")
    .doc(`${value}`)
    .set({
        PCBId: value,
        PCBAssembledBy: data.get('Select Name'),
        AssembledDate: data.get('date'),
        PCBQC: QC,
        QCDeviceBy: data.get('select')

       
    })
    .then(() => {
        console.log("Document created");
    });
  
}


const form = document.getElementById("addDevice");
form.addEventListener('submit', handleSubmitDevice);

const formPCB = document.getElementById("addPCB");
formPCB.addEventListener('submit', handleSubmitPCB);



