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








async function output() {
    var  KeyID = localStorage.getItem("Key");

    console.log(KeyID);

var DeviceJson = "";
var FirmwareJson ="";
var ClaimJson = "";
var WifiJson = "";
var loraJson = "";
var ServiceJson ="";

const Devref = db.collection('Device').doc(`${KeyID}`);
const Devdoc = await Devref.get();
if (!Devdoc.exists) {
  console.log('No such Devdocument!');
} else {

    DeviceJson = Devdoc.data();
  
  
}
/*
const PCBref = db.collection('PCB').doc(`${KeyID}`);
const pcbdoc = await PCBref.get();
if (!pcbdoc.exists) {
  console.log('No such pcbdocument!');
} else {
    PCBJson = pcbdoc.data();
  
  
}
*/
const Claimref = db.collection('Claim').doc(`${KeyID}`);
const claimDoc = await Claimref.get();
if (!claimDoc.exists) {
  console.log('No such claimDocument!');
} else {
    ClaimJson = claimDoc.data();
  
  
}
const FirmRef = db.collection('Firmware').doc(`${KeyID}`);
const FirmDoc = await FirmRef.get();
if (!FirmDoc.exists) {
  console.log('No such FirmDocument!');
} else {
    FirmwareJson = FirmDoc.data();
  
  
}
const Wref = db.collection('WCreds').doc(`${KeyID}`);
const Wdoc = await Wref.get();
if (!Wdoc.exists) {
  console.log('No such Wdocument!');
} else {
    WifiJson = Wdoc.data();
  
  
}
const Lref = db.collection('LCreds').doc(`${KeyID}`);
const Ldoc = await Lref.get();
if (!Ldoc.exists) {
  console.log('No such Ldocument!');
} else {
    loraJson = Ldoc.data();
  
  
}
const ServiceRef = db.collection('Service').doc(`${KeyID}`);
const SerDoc = await ServiceRef.get();
if (!SerDoc.exists) {
  console.log('No such SerDocument!');
} else {
    ServiceJson = SerDoc.data();
  
  
}

console.log(DeviceJson)
//console.log(PCBJson)
console.log(ClaimJson)
console.log(FirmwareJson)
console.log(WifiJson)
console.log(loraJson)
console.log(ServiceJson)

// Device Details......
document.getElementById("Device ID").innerHTML= DeviceJson.DeviceId;
document.getElementById("AssemId").innerHTML= DeviceJson.DeviceAssembledBy;
document.getElementById("HardIns").innerHTML= DeviceJson.HardwareInside;
document.getElementById("PCBId").innerHTML= DeviceJson.PCBId;

document.getElementById("AssemDate").innerHTML= DeviceJson.AssembledDate;
document.getElementById("ProjectID").innerHTML= DeviceJson.DevicePurpose;
document.getElementById("QCstatus").innerHTML= DeviceJson.DeviceQC;
document.getElementById("QCby").innerHTML= DeviceJson.QCDeviceBy;


// Claims......
document.getElementById("DeviceClaimed").innerHTML= ClaimJson.DeviceClaim;
document.getElementById("ClaimDate").innerHTML= ClaimJson.ClaimDate;
document.getElementById("ClaimPurpose").innerHTML= ClaimJson.ClaimPurpose;

// firmwareUpdate........
document.getElementById("FirmwareUpdatedBy").innerHTML= FirmwareJson.FirmwareUpdateBy;
document.getElementById("FirmwareDate").innerHTML= FirmwareJson.FirmUpdate_Date;
document.getElementById("firmwareURL").innerHTML= FirmwareJson.FirmwareURL;

//wifiCreds
document.getElementById("SSID").innerHTML= WifiJson.WifiSSID;
document.getElementById("Pass").innerHTML= WifiJson.WifiPassword;

//LoraCreds.........args
document.getElementById("joinMed").innerHTML= loraJson.joinMethod;
document.getElementById("Server").innerHTML= loraJson.ServerSelect;
document.getElementById("DEUI").innerHTML= loraJson.DevEUI;
document.getElementById("AEUI").innerHTML= loraJson.APPEUI;

document.getElementById("AKey").innerHTML= loraJson.APPKEY;
document.getElementById("DADR").innerHTML= loraJson.DevADDR;
document.getElementById("ASKEY").innerHTML= loraJson.APPSKEY;
document.getElementById("NKEY").innerHTML= loraJson.NWSKEY;

//ServiceJson
document.getElementById("serviceBy").innerHTML= ServiceJson.Service_By;
document.getElementById("ServiceDate").innerHTML= ServiceJson.AssembledDate;
document.getElementById("serviceStatus").innerHTML= ServiceJson.Service_Status;
document.getElementById("Issue").innerHTML= ServiceJson.Service_Issue;
}

output();