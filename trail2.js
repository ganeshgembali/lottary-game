let thing=document.querySelector(".main");
let setintervalid=0;
const tick=new Audio("jump.mp3");
let variable=0;
let arr=[
   "100 cash",
   "toy car",
   "chocolate box",
   "500 cash",
   "smartphone cover",
   "book",
   "head phones",
   "50 cash",
   "gift voucher",
   "watch",
   "teddy bear",
   "bluethooth speaker",
   "movie ticket",
   "200 cash",
   "puzzle game",
   "perfume",
   "sunglasses",
   "1000 cash",
   "board game",
   "fitness band",
   "digital clock",
   "lamp",
   "shopping voucher",
   "laptop bag",
   "wireless mouse",
   "travel mug",
   "notebook set",
   "gaming mousepad",
   "250 cash",
   "key chain",
   "water bottle",
   "portable charger",
   "desk organiser",
   "cooking set",
   "action figure",
   "300 cash",
   "travel pillow",
   "mini backpack",
   "personalizes mug",
   "gaming controller",
   "camera strap",
   "toy robot",
   "750 cash",
   "sports equipment",
   "pen set",
   "bluethooth earbuds",
   "digital photo frame",
   "wallet",
   "backpack",
   "gift hamper",
];
let make=document.querySelector(".rank");
arr.forEach(function(value,i){
let value1=`<p class="box" id="s${i+1}">${i+1}.  ${value}</p>`;
thing.insertAdjacentHTML("beforeend",value1);
});
let button1=document.querySelector(".button2");
let result=document.querySelector(".result");


button1.addEventListener("click",function(){
   button1.disabled=true;
   
    clearInterval(setintervalid);
    clearTimeout(variable);
   for(let k=1;k<=50;k++){
      document.querySelector(`#s${k}`).classList.remove("shock");
   }
   arr.forEach(function(value,index){
   document.getElementById(`s${index+1}`).classList.remove("new");
   });
  let number=Math.floor((Math.random()*50)+1);
  let select=document.querySelector(`#s${number}`);
   result.textContent="waiting for result......";
   make.textContent="NUMBER";
    variable=setTimeout(function(){
     clearInterval(setintervalid); 
      select.classList.add("new");
      result.textContent=`you have got : ${number} and you won ${arr[number-1]}`;
    make.textContent=`${number}`;
    button1.disabled=false;
   },6000);
   let counting=0;
  setintervalid=setInterval(function(){
   
      counting++
      let value=Math.floor((Math.random()*50)+1);
       for(let i=0;i<50;i++){
         document.getElementById(`s${i+1}`).classList.remove("shock");
      }
      if(counting!=5){
         tick.pause();
   tick.currentTime=0;
   tick.play();
        document.getElementById(`s${value}`).classList.add("shock");
      }
      
     
   },1000);
})
let buttoncancel=document.querySelector(".button1");
buttoncancel.addEventListener("click",function(){
   clearInterval(setintervalid);
    clearTimeout(variable);
    for(let i=0;i<50;i++){
         document.getElementById(`s${i+1}`).classList.remove("shock");
         document.getElementById(`s${i+1}`).classList.remove("new");
      }

   arr.forEach(function(value,index){
   document.getElementById(`s${index+1}`).classList.remove("new");
   });
  
   result.textContent="RESULT";
   make.textContent="NUMBER";
})