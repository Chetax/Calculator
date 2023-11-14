const inputbox=document.getElementById('inputbox');
inputbox.style.fontSize='30px';
inputbox.style.textAlign = "end";
inputbox.style.color = "skyblue";
inputbox.style.backgroundColor = "orange";
const AC =document.getElementById("AC");
const tagmod =document.getElementById("tag_%");
const tag_divide =document.getElementById("tag_/");
const tag_7 =document.getElementById("tag_7");
const tag_8 =document.getElementById("tag_8");
const tag_9 =document.getElementById("tag_9");
const tag_X =document.getElementById("tag_X");
const tag_4 =document.getElementById("tag_4");
const tag_5 =document.getElementById("tag_5");
const tag_6 =document.getElementById("tag_6");
const tagMin =document.getElementById("tagMin");
const tag_1 =document.getElementById("tag_1");
const tag_2 =document.getElementById("tag_2");
const tag_3 =document.getElementById("tag_3");
const tag_plus =document.getElementById("tag_plus");
const tag_0 =document.getElementById("tag_0");
const tagdot =document.getElementById("tagdot");
const tag_erase =document.getElementById("tag_erase");
const tag_equal =document.getElementById("tag_equal");
let val1;
let val2;
let flag=0;
let flag1=0;//for inifinty
AC.addEventListener("click",()=>{
  inputbox.value="";flag=0;
  inputbox.style.textAlign = "end";
  console.log(inputbox.value);
  AC.style.color = 'skyblue';
setTimeout(function(){
  AC.style.color = 'skyblue';
  AC.style.border = "1px solid white";
},600);  
});
tagmod.addEventListener("click",()=>{
  val1= parseFloat( inputbox.value);
  console.log("val"+val1);
  inputbox.value+= " % ";

  tagmod.style.color = 'skyblue';
setTimeout(function(){
  tagmod.style.color = 'skyblue';
  tagmod.style.border = "1px solid white";
},600);  
});

tag_divide.addEventListener("click",()=>{

  inputbox.value+=" / ";
    val1= parseFloat( inputbox.value);
    console.log("val"+val1);
  tag_divide.style.color = 'skyblue';
setTimeout(function(){
  tag_divide.style.color = 'skyblue';
  tag_divide.style.border = "1px solid white";
},600);  
});

tag_plus.addEventListener("click",()=>{

  inputbox.value+=" + ";
    val1= parseFloat( inputbox.value);
    console.log("val"+val1);
  tag_plus.style.color = 'skyblue';
setTimeout(function(){
  tag_plus.style.color = 'skyblue';
  tag_plus.style.border = "1px solid white";
},600);  
});

tagMin.addEventListener("click",()=>{

  inputbox.value+=" - ";
    val1= parseFloat( inputbox.value);
    console.log("val"+val1);
  tagMin.style.color = 'skyblue';
setTimeout(function(){
  tagMin.style.color = 'skyblue';
  tagMin.style.border = "1px solid white";
},600);  
});

tag_X.addEventListener("click",()=>{

  inputbox.value+=" x ";
    val1= parseFloat( inputbox.value);
    console.log("val"+val1);
  tag_X.style.color = 'skyblue';
setTimeout(function(){
  tag_X.style.color = 'skyblue';
  tag_X.style.border = "1px solid white";
},600);  
});

tag_equal.addEventListener("click",()=>{
//calculation: 
//get string upto sybol + - / * %
   let str=inputbox.value;
   let str2="";
   let opt="";
   for(let i=str.length-1;i>=0;i--)
  {
    if(str[i]=='%'||str[i]=='+'||str[i]=='-'||str[i]=='/'||str[i]=='x')
   {  opt=str[i];
     break;}
    else
    str2=str[i]+str2;
  }
  val2=parseFloat(str2);
  if(opt=='+'){
    if (!isNaN(val1) && !isNaN(val2))
    inputbox.value=val1+val2;
    else 
    inputbox.value=" ";
  }
  else if(opt=='-')
  {
    if (!isNaN(val1) && !isNaN(val2))
    inputbox.value=val1-val2;
    else 
    inputbox.value=" ";
  }
  else if (opt == 'x') {
    if (!isNaN(val1) && !isNaN(val2)) {
      inputbox.value = val1 * val2;
    } else {
      inputbox.value = " ";
    }
  }
  else if(opt=='/')
  {
    if (!isNaN(val1) && !isNaN(val2)){
      if(val2!=0)
      inputbox.value=val1/val2;
      else 
     { inputbox.value="∞";
    flag1=1;}
    }
    else 
    inputbox.value=" ";   
  }
  else if(opt=='%')
  {
    if (!isNaN(val1) && !isNaN(val2))
    inputbox.value=val1%val2;
    else 
    inputbox.value=" ";
  }


  tag_equal.style.color = 'skyblue';
setTimeout(function(){
  tag_equal.style.color = 'skyblue';
  tag_equal.style.border = "1px solid white";
},600);  
});

tag_erase.addEventListener("click",()=>{
let str=inputbox.value;
//if want to change the sign
if(str[str.length-1]==" ")
{
  inputbox.value=inputbox.value.slice(0, -1);
  inputbox.value=inputbox.value.slice(0, -1);
  inputbox.value=inputbox.value.slice(0, -1);
}
else 
  inputbox.value=inputbox.value.slice(0, -1);
  tag_erase.style.color = 'skyblue';
setTimeout(function(){
  tag_erase.style.color = 'skyblue';
  tag_erase.style.border = "1px solid white";
},600);  
});



tag_7.addEventListener("click",()=>{

  if(flag1===1){
    inputbox.value="";
    flag1=0;
  }
  inputbox.value+="7";
  tag_7.style.color = 'skyblue';
setTimeout(function(){
  tag_7.style.color = 'skyblue';
  tag_7.style.border = "1px solid white";
},600);  
});
tag_8.addEventListener("click",()=>{

  
  if(flag1===1){
    inputbox.value="";
    flag1=0;
  }
  inputbox.value+="8";
  tag_8.style.color = 'skyblue';
setTimeout(function(){
  tag_8.style.color = 'skyblue';
  tag_8.style.border = "1px solid white";
},600);  
});
tag_9.addEventListener("click",()=>{

  
  if(flag1===1){
    inputbox.value="";
    flag1=0;
  }
  inputbox.value+="9";
  tag_9.style.color = 'skyblue';
setTimeout(function(){
  tag_9.style.color = 'skyblue';
  tag_9.style.border = "1px solid white";
},600);  
});
tag_4.addEventListener("click",()=>{

  
  if(flag1===1){
    inputbox.value="";
    flag1=0;
  }
  inputbox.value+="4";
  tag_4.style.color = 'skyblue';
setTimeout(function(){
  tag_4.style.color = 'skyblue';
  tag_4.style.border = "1px solid white";
},600);  
});
tag_5.addEventListener("click",()=>{

  
  if(flag1===1){
    inputbox.value="";
    flag1=0;
  }
  inputbox.value+="5";
  tag_5.style.color = 'skyblue';
setTimeout(function(){
  tag_5.style.color = 'skyblue';
  tag_5.style.border = "1px solid white";
},600);  
});
tag_6.addEventListener("click",()=>{

  
  if(flag1===1){
    inputbox.value="";
    flag1=0;
  }
  inputbox.value+="6";
  tag_6.style.color = 'skyblue';
setTimeout(function(){
  tag_6.style.color = 'skyblue';
  tag_6.style.border = "1px solid white";
},600);  
});
tag_3.addEventListener("click",()=>{

  
  if(flag1===1){
    inputbox.value="";
    flag1=0;
  }
  inputbox.value+="3";
  tag_3.style.color = 'skyblue';
setTimeout(function(){
  tag_3.style.color = 'skyblue';
  tag_3.style.border = "1px solid white";
},600);  
});
tag_2.addEventListener("click",()=>{

  
  if(flag1===1){
    inputbox.value="";
    flag1=0;
  }
  inputbox.value+="2";
  tag_2.style.color = 'skyblue';
setTimeout(function(){
  tag_2.style.color = 'skyblue';
  tag_2.style.border = "1px solid white";
},600);  
});
tag_1.addEventListener("click",()=>{

  
  if(flag1===1){
    inputbox.value="";
    flag1=0;
  }
  inputbox.value+="1";
  tag_1.style.color = 'skyblue';
setTimeout(function(){
  tag_1.style.color = 'skyblue';
  tag_1.style.border = "1px solid white";
},600);  
});
tag_0.addEventListener("click",()=>{

  
  if(flag1===1){
    inputbox.value="";
    flag1=0;
  }
  inputbox.value+="0";
  tag_0.style.color = 'skyblue';
setTimeout(function(){
  tag_0.style.color = 'skyblue';
  tag_0.style.border = "1px solid white";
},600);  
});



tagdot.addEventListener("click",()=>{

  
  if(flag1===1){
    inputbox.value="";
    flag1=0;
  }
  inputbox.value+=".";
  tagdot.style.color = 'skyblue';
setTimeout(function(){
  tagdot.style.color = 'skyblue';
  tagdot.style.border = "1px solid white";
},600);  
});



