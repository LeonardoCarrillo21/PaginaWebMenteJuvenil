// index.htmnl
document.querySelector('.menu-btn').addEventListener('click', ()=>{
    document.querySelector('.nav-menu').classList.toggle('show');
})

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards',{ delay:500});
ScrollReveal().reveal('.cards-banner-one',{ delay:500});
ScrollReveal().reveal('.cards-banner-two',{ delay:500});

// galeria.html

ScrollReveal().reveal('.lightbox',{ delay:500});

//                  buscador de contenido

//ejecutando funciones
document.getElementById("icon-search").addEventListener('click',mostrar_buscador);
document.getElementById("cover-ctn-search").addEventListener('click',ocultar_buscador);

//declarando variables
const bars_search = document.getElementById("ctn-bars-search");
const cover_ctn_search = document.getElementById("cover-ctn-search"); 
const input_search = document.getElementById("inputSearch");
const box_search = document.getElementById("box-search"); // class

//funcion para mostrar el buscador
function mostrar_buscador(){
    bars_search.style.top=" 80px";
    cover_ctn_search.style.display="block";
    input_search.focus();
    if(input_search.value === ""){
        box_search.style.display="none";
    }
}
function ocultar_buscador(){
    bars_search.style.top=" -80px";
    cover_ctn_search.style.display="none";
    input_search.value="";
    box_search.style.display="none";
}   

//              buscador interno

document.getElementById("inputSearch").addEventListener("keyup",buscador_interno);
function buscador_interno(){

    let filter = input_search.value.toUpperCase();
    
    let li = box_search.getElementsByTagName("li");

    //recorriendo elementos 
    for(i=0; i<li.length;i++){
        let a = li[i].getElementsByTagName("a")[0];
        let textValue= a.textContent || a.innerText;

        if(textValue.toUpperCase().indexOf(filter)>-1){
            li[i].style.display = "";
            box_search.style.display = "block";

            if(input_search.value===""){
                box_search.style.display="none";
            }

        }else{
            li[i].style.display = "none";
        }
    }

}
