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





function handleSubmitFirmware(event) {
    event.preventDefault();
    
    const data = new FormData(event.target);

    const value = data.get('device ID');
   
    


    const send = {

        DeviceId: value,
        FirmwareUpdateBy: data.get('Select Name'),
        FirmUpdate_Date: data.get('date'),
        FirmwareURL: data.get('url'),
     
    }
  
  console.log(send);

    db.collection("Firmware")
        .doc(`${value}`)
        .set({
            DeviceId: value,
            FirmwareUpdateBy: data.get('Select Name'),
            FirmUpdate_Date: data.get('date'),
            FirmwareURL: data.get('url'),

       
        })
        .then(() => {
            console.log("Document created");
        });
  
}

function handleSubmitWifi(event) {
    event.preventDefault();
    
    const data = new FormData(event.target);

    const value = data.get('device ID');
   
    


    const send = {
        
        DeviceId: value,
        WifiSSID: data.get('text'),
        WifiPassword: data.get('text-1'),
            
     
    }
  
  console.log(send);

    db.collection("WCreds")
        .doc(`${value}`)
        .set({


            
            DeviceId: value,
            WifiSSID: data.get('text'),
            WifiPassword: data.get('text-1'),
            

       
        })
        .then(() => {
            console.log("Document created");
        });
  
}
function handleSubmitLora(event) {
    event.preventDefault();
    
    const data = new FormData(event.target);

    const value = data.get('device ID');
    var join = "";
    if(document.getElementById("field-f32c").checked) {
        join = "OTAA";
    } else if (document.getElementById("field-8993").checked) {
        join = "ABP";
    }else {
        join = "Nothing Selected";
    }
    
   
    


    const send = {
        
        DeviceId: value,
        joinMethod: join,
        ServerSelect: data.get('select'),
        DevEUI: data.get('text'),
        APPEUI: data.get('text-1'),
        APPKEY: data.get('text-2'),
        DevADDR: data.get('text-3'),
        APPSKEY: data.get('text-4'),
        NWSKEY: data.get('text-5'),

            
     
    }
  
  console.log(send);

    db.collection("LCreds")
        .doc(`${value}`)
        .set({



            DeviceId: value,
            joinMethod: join,
            ServerSelect: data.get('select'),
            DevEUI: data.get('text'),
            APPEUI: data.get('text-1'),
            APPKEY: data.get('text-2'),
            DevADDR: data.get('text-3'),
            APPSKEY: data.get('text-4'),
            NWSKEY: data.get('text-5'),
            

       
        })
        .then(() => {
            console.log("Document created");
        });
  
}


const formFirmware = document.getElementById('firmwareUpdate');
formFirmware.addEventListener('submit', handleSubmitFirmware);

const formLora = document .getElementById('loraCreds');
formLora.addEventListener('submit', handleSubmitLora); 

const formWifiCreds = document .getElementById('wifiCreds');
formWifiCreds.addEventListener('submit', handleSubmitWifi);