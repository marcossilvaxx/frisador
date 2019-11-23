var content = document.querySelector(".content");
var initContent = content.innerHTML;
var larguraImagem;
var alturaImagem;

function previewImage(event){
    var file = new FileReader();
    file.onload = function(e){
        var imagem = document.getElementById("img");
        imagem.src = e.target.result;
        //var download = document.getElementById("download");
        //download.href = e.target.result;
    }

    file.readAsDataURL(event.target.files[0]);
}

function gerar(){
    var img = document.getElementById("img").src;
    document.querySelector(".frisos").style.display = "flex";
    document.querySelectorAll(".frisos img").forEach(element => {
        element.src = img;
        alturaImagem = element.offsetHeight;
        larguraImagem = element.offsetWidth;
        element.parentElement.style.height = 2 * alturaImagem + 0.04 * element.parentElement.offsetHeight + "px";
        if(element.nextElementSibling != null){
            var proxElement = element.nextElementSibling.nextElementSibling;
            proxElement.src = element.src;
            proxElement.style.marginLeft = -larguraImagem + "px";
            //proxElement.style.marginTop = alturaImagem + 0.02 * element.parentElement.offsetHeight + "px";
        }
    });
    clean();
}

function frisar(numFriso){
    
}

function init(){
    content.innerHTML = initContent;
}

function clean(){
    var child = document.querySelector(".frisos");
    content.innerHTML = "";
    content.appendChild(child);
}