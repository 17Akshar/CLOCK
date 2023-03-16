const psec = document.getElementById("sec-para");
const pmin = document.getElementById("min-para");
const phr = document.getElementById("hr-para");
const ap = document.getElementById("ap-para");
const qpara = document.getElementById("q-para");
function setDate(){
  const now = new Date();
  const seconds = now.getSeconds();
  const hours = now.getHours();
  const minute = now.getMinutes();
  var sec = document.getElementsByClassName(".sec");
  psec.innerHTML = seconds;
  if(seconds==0){
    psec.innerHTML = 60;
  }
  if(seconds<10){
    psec.innerHTML ='0' + seconds; 
  }
  pmin.innerHTML = minute;
  if(minute==0){
    pmin.innerHTML ='00';
  }
  if(minute<10){
    pmin.innerHTML ='0' + minute; 
  }  
  phr.innerHTML = hours;
  if(hours==0){
    phr.innerHTML = 24;
  }  
  const twofour = ['13','14','15','16','17','18','19','20','21','22','23','24']
  const onetwo = ['1','2','3','4','5','6','7','8','9','10','11','12']
  if(hours>=13){
    ap.innerHTML = "PM";
  }
  else{
    ap.innerHTML = 'AM';
  }
  // console.log(twofour);
  for(var i=0;i<12;i++){
    if(phr.innerHTML == twofour[i]){
      phr.innerHTML = onetwo[i];
    }
  }
}
setInterval(setDate,1000);
function change_content(){
  // var arr = ["TIME WILL NOT WAIT , LOOK ITS RUNNING!","TIME IS MORE THAN MONEY","TIME FLIES AND YOU ARE THE PILOT","TIME IS FREE BUT ITS PRICELESS"]
    for(var i=0;i<4;i++){
      qpara.innerHTML = arr[i];
      console.log(arr[i])
    }
  
}
