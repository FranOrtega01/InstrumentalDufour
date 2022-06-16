function alerteffect(){
    var alerta = document.getElementById("alert");
    alerta.classList.remove("hidden");
    alerta.classList.add("show");
    setTimeout(() => {
        alerta.classList.add("hide");
        setTimeout(() => {
            alerta.classList.add("hidden");  
            alerta.classList.remove("show");
            alerta.classList.remove("hide");    
        }, 1500); 
    }, 3000);
}

function alertclose(){
    var alerta = document.getElementById("alert");
    alerta.classList.add("hide");
    setTimeout(() => {
        alerta.classList.add("hidden");  
        alerta.classList.remove("show");
        alerta.classList.remove("hide");    
    }, 1500);
}