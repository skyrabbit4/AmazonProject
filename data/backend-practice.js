const xhr=new XMLHttpRequest();


//setup
xhr.addEventListener('load',()=>{
   console.log(xhr.response);
}); //listens for even//wait


//triggger the event
xhr.open('GET','https://supersimplebackend.dev');

xhr.send();








