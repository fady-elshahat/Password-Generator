const password =  document.getElementById("password");
const btn = document.getElementById("btn");


btn.addEventListener("click" , () =>{
     let chars = "0123456789asdfghjklpoiuytrewqzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
     let passsNumber = 12;
     let pass = ""
     for (let index = 0; index < passsNumber; index++) {
          let rendomNumber = Math.floor(Math.random() * chars.length);
          pass += chars.substring(rendomNumber , rendomNumber +1)
          
     }
     password.value = pass
})