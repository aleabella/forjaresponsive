let caso1 = "52368795";
let caso2 = "1001235478";
let caso3 = "25413574";
let caso4 = "1007203506";

let modCaso1 = document.getElementById("modalC1");
let modCaso2 = document.getElementById("modalC2");
let modCaso3 = document.getElementById("modalC3");
let modCaso4 = document.getElementById("modalC4");

let btnSearch = document.getElementById("busqueda");

btnSearch.addEventListener("click",()=>{
    let usuario = document.getElementById("usuario").value;
    if(caso1 == usuario){
        document.getElementById("busqueda").href = "#modalC1";
    }else if(caso2 == usuario){
        document.getElementById("busqueda").href = "#modalC2";
    }else if(caso3 == usuario){
        document.getElementById("busqueda").href = "#modalC3";
    }else if(caso4 == usuario){
        document.getElementById("busqueda").href = "#modalC4";
    }
})