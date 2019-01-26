        
     const emailFunction = ()=>{
     const email = document.querySelector("#email").previousElementSibling; 
     const emailSpan = document.querySelector("#emailSpan");
     }

     const passwordFunction = ()=>{
     const password = document.querySelector("#password").previousElementSibling; 
     const passwordSpan = document.querySelector("#passwordSpan"); 
     }

            email.addEventListener("focus", ()=>{
                emailFunction();
                emailSpan.innerHTML="Your Email Address";
                emailSpan.style.fontSize="15px";
                emailSpan.style.marginLeft = "7px";
                emailSpan.style.transition="font-size 0.2s linear 0s";
                emailSpan.style.display="inline"; 
               });

                    email.addEventListener("blur", ()=>{      
                        emailSpan.style.fontSize="0px"; 
                        emailSpan.style.transition="font-size 0.2s ease-in-out 0s";
                        emailSpan.innerHTML=""; 
                        emailSpan.removeAttribute("style");   
                    });

                    password.addEventListener("focus", ()=>{
                    passwordFunction();
                    passwordSpan.innerHTML="Your Password";
                    passwordSpan.style.fontSize="15px";
                    passwordSpan.style.marginLeft = "7px";
                    passwordSpan.style.transition="font-size 0.2s linear 0s"; 
                    });

                    password.addEventListener("blur", ()=>{
                        passwordSpan.innerHTML="";
                        passwordSpan.style.fontSize="0px"; 
                        passwordSpan.style.transition="font-size 0.2s ease-out 0s";
                        passwordSpan.innerHTML=""; 
                        passwordSpan.removeAttribute("style");  
                    });
     