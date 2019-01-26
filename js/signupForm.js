const firstNameFunction = ()=>{
    const firstName = document.querySelector("#firstName").previousElementSibling; 
    const firstNameSpan = document.querySelector("#firstNameSpan");
}
const lastNameFunction = ()=>{
    const lastName = document.querySelector("#lastName").previousElementSibling; 
    const lastNameSpan = document.querySelector("#lastNameSpan");
}

const otherNameFunction = ()=>{
const otherName = document.querySelector("#otherName").previousElementSibling; 
const otherNameSpan = document.querySelector("#otherNameSpan");
} 
 
const emailFunction = ()=>{
    const email = document.querySelector("#email").previousElementSibling; 
    const emailSpan = document.querySelector("#emailSpan");
}

    const passwordFunction = ()=>{
    const password = document.querySelector("#password").previousElementSibling; 
    const passwordSpan = document.querySelector("#passwordSpan");
}

    const password2Function = ()=>{
    const password2 = document.querySelector("#password2").previousElementSibling; 
    const password2Span = document.querySelector("#password2Span");
}
const phoneNumberFunction = ()=>{
const phoneNumber = document.querySelector("#phoneNumber").previousElementSibling; 
const phoneNumberSpan = document.querySelector("#phoneNumberSpan");
}
firstName.addEventListener("focus", ()=>{               
               firstNameFunction();
               firstNameSpan.innerHTML="Your First Name";
               firstNameSpan.style.fontSize="15px";
               firstNameSpan.style.marginLeft = "7px";
               firstNameSpan.style.transition="font-size 0.2s linear 0s";
               firstNameSpan.style.display="inline"; 
              });

          firstName.addEventListener("blur", ()=>{      
          firstNameSpan.style.fontSize="0px"; 
          firstNameSpan.style.transition="font-size 0.2s ease-in-out 0s";
         firstNameSpan.innerHTML=""; 
         firstNameSpan.removeAttribute("style");   
         }); 

        lastName.addEventListener("focus", ()=>{               
        lastNameFunction();
        lastNameSpan.innerHTML="Your last Name";
        lastNameSpan.style.fontSize="15px";
        lastNameSpan.style.marginLeft = "7px";
        lastNameSpan.style.transition="font-size 0.2s linear 0s";
        lastNameSpan.style.display="inline"; 
       });
                
        lastName.addEventListener("blur", ()=>{      
        lastNameSpan.style.fontSize="0px"; 
        lastNameSpan.style.transition="font-size 0.2s ease-in-out 0s";
        lastNameSpan.innerHTML=""; 
        lastNameSpan.removeAttribute("style");   
        }); 
                    
    
        
otherName.addEventListener("focus", ()=>{               
otherNameFunction();
otherNameSpan.innerHTML="Your other Name";
otherNameSpan.style.fontSize="15px";
otherNameSpan.style.marginLeft = "7px";
otherNameSpan.style.transition="font-size 0.2s linear 0s";
otherNameSpan.style.display="inline"; 
});

otherName.addEventListener("blur", ()=>{      
otherNameSpan.style.fontSize="0px"; 
otherNameSpan.style.transition="font-size 0.2s ease-in-out 0s";
otherNameSpan.innerHTML=""; 
otherNameSpan.removeAttribute("style");   
}); 
                


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
                               passwordSpan.innerHTML="Create Password";
                               passwordSpan.style.fontSize="15px";
                               passwordSpan.style.marginLeft = "7px";
                               passwordSpan.style.transition="font-size 0.2s linear 0s";
                               passwordSpan.style.display="inline"; 
                              });
                
                          password.addEventListener("blur", ()=>{      
                          passwordSpan.style.fontSize="0px"; 
                          passwordSpan.style.transition="font-size 0.2s ease-in-out 0s";
                          passwordSpan.innerHTML=""; 
                          passwordSpan.removeAttribute("style");   
                      }); 
                          
                    
                               password2.addEventListener("focus", ()=>{               
                                   password2Function();
                                   password2Span.innerHTML="Confirm password";
                                   password2Span.style.fontSize="15px";
                                   password2Span.style.marginLeft = "7px";
                                   password2Span.style.transition="font-size 0.2s linear 0s";
                                   password2Span.style.display="inline"; 
                                  });
                    
                              password2.addEventListener("blur", ()=>{      
                              password2Span.style.fontSize="0px"; 
                              password2Span.style.transition="font-size 0.2s ease-in-out 0s";
                              password2Span.innerHTML=""; 
                              password2Span.removeAttribute("style");   
                          }); 

                        
                                   phoneNumber.addEventListener("focus", ()=>{               
                                       phoneNumberFunction();
                                       phoneNumberSpan.innerHTML="Your Phone Number";
                                       phoneNumberSpan.style.fontSize="15px";
                                       phoneNumberSpan.style.marginLeft = "7px";
                                       phoneNumberSpan.style.transition="font-size 0.2s linear 0s";
                                       phoneNumberSpan.style.display="inline"; 
                                      });
                        
                                  phoneNumber.addEventListener("blur", ()=>{      
                                  phoneNumberSpan.style.fontSize="0px"; 
                                  phoneNumberSpan.style.transition="font-size 0.2s ease-in-out 0s";
                                  phoneNumberSpan.innerHTML=""; 
                                  phoneNumberSpan.removeAttribute("style");   
                              }); 
                            