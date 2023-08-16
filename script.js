const button=document.getElementById("button");
const vid=document.getElementById("vid");
console.log(vid);
async function selectMeia(){
  try{
     const mediaStream=await navigator.mediaDevices.getDisplayMedia();
     vid.srcObject=mediaStream;
     vid.onloadedmetadata= ()=>{
         vid.play();
     }
  } catch(error){
    console.log("whoops ... something is misssing",error);
 
  }
};

button.addEventListener("click", async ()=>{
    button.disabled= true;
     await vid.requestPictureInPicture();
     button.disabled=false;
});
 selectMeia();