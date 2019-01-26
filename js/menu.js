const showHideMenu = document.querySelector("#showHideMenu");
const sideMenu = document.querySelector("#sideMenu");
const cover = document.querySelector("#cover");

let showMenu = ()=>{    
sideMenu.style.marginLeft="0px";
sideMenu.style.transition="0.2s linear 0s"; 
cover.style.display="block";
cover.style.transition="background 1.0s ease-in 1s";
           }
let hideMenu = ()=>{ 
    sideMenu.style.marginLeft="-270px";
       cover.style.display="none";
       cover.style.transition="3.1s";
        }
            
showHideMenu.addEventListener("click", ()=>{ 
        if(sideMenu.style.marginLeft==="0px"){
        hideMenu();
    }else{
        showMenu();
    }
});

cover.addEventListener("click", ()=>{
    hideMenu();
});