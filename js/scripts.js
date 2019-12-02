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
        element.parentElement.style.height = (2 * alturaImagem) + (0.14 * element.parentElement.offsetHeight) + "px";
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
    switch(numFriso){
        case "friso1":
            var el = document.getElementById("f1");

            el.style.transform = "translateX(100%)";
            
            for(let i=0; i < 6; i++){
                let clone = el.cloneNode();
                el.parentElement.appendChild(clone);
                clone.style.marginLeft = -clone.offsetWidth + "px";
                clone.style.transform = "translateX(" + ((i+2) * 100) + "%)";
                console.log("transformX(" + ((i+2) * 100) + "%)")
            }

            el.style.marginLeft = -el.offsetWidth + "px";

            break
        case "friso2":
            var el = document.getElementById("f2");

            var clone = el.cloneNode();

            el.parentElement.appendChild(clone);

            clone.style.transform = "translateX(100%) translateY(100%) rotateX(180deg)";

            for (let i = 0; i < 3; i++) {
                let firstEl = el.cloneNode();
                el.parentElement.appendChild(firstEl);

                firstEl.style.marginLeft = firstEl.offsetWidth + "px";

                el.parentElement.appendChild(clone.cloneNode());
            }

            break
        case "friso3":
            var el = document.getElementById("f3").previousElementSibling.previousElementSibling;
            
            el.style.marginLeft = "1%";
            document.getElementById("f3").style.marginLeft = "0px";
            el.style.transform = "rotateY(180deg)";
            
            for(let i=0; i < 6; i++){
                let clone = el.cloneNode();
                if(i % 2 != 0){
                    clone.style.transform = "rotateY(0deg)";
                }
                clone.style.marginLeft = 0;
                el.parentElement.appendChild(clone);
                //clone.style.marginLeft = -clone.offsetWidth + "px";
                //clone.style.transform = "translateX(100%)";
                //console.log("transformX(" + ((i+2) * 100) + "%)")
            }

            //el.style.marginLeft = -el.offsetWidth + "px";
            break
        case "friso4":
            var el = document.getElementById("f4");

            var clone = el.cloneNode();

            el.parentElement.appendChild(clone);

            clone.style.transform = "translateY(100%) rotateX(180deg)";

            for (let i = 0; i < 7; i++) {
                let firstEl = el.cloneNode();
                el.parentElement.appendChild(firstEl);

                firstEl.style.marginLeft = "0px";

                el.parentElement.appendChild(clone.cloneNode());
            }
            break
        case "friso5":
            var el = document.getElementById("f5");

            var clone = el.cloneNode();

            el.parentElement.appendChild(clone);

            clone.style.transform = "translateX(100%) translateY(100%) rotateX(-180deg) rotateY(-180deg)";

            for (let i = 0; i < 3; i++) {
                let firstEl = el.cloneNode();
                el.parentElement.appendChild(firstEl);

                firstEl.style.marginLeft = firstEl.offsetWidth + "px";

                el.parentElement.appendChild(clone.cloneNode());
            }
            break
        case "friso6":
            var el = document.getElementById("f6").previousElementSibling.previousElementSibling;
        
            el.style.marginLeft = "1%";
            document.getElementById("f6").style.marginLeft = "0px";
            el.style.transform = "rotateY(180deg)";
            
            for(let i=0; i < 6; i++){
                let clone = el.cloneNode();
                if(i == 0 || i == 4){
                    clone.style.transform = "rotateY(-180deg) rotateX(180deg) translateY(-100%)";
                }else if(i == 1 || i == 5){
                    clone.style.transform = "rotateY(0deg) rotateX(180deg) translateY(-100%)";
                }else if(i == 3){
                    clone.style.transform = "rotateY(0deg)";
                }


                clone.style.marginLeft = 0;
                el.parentElement.appendChild(clone);
                //clone.style.marginLeft = -clone.offsetWidth + "px";
                //clone.style.transform = "translateX(100%)";
                //console.log("transformX(" + ((i+2) * 100) + "%)")
            }
            break
        case "friso7":
            var el = document.getElementById("f7");

            el.style.transform = "rotateY(180deg)";

            var clone = el.cloneNode();

            el.parentElement.appendChild(clone);

            clone.style.transform = "translateY(100%) rotateX(180deg) rotateY(180deg)";

            for (let i = 0; i < 7; i++) {
                let firstEl = el.cloneNode();

                let clone2 = clone.cloneNode();
                if(i % 2 == 0){
                    firstEl.style.transform = "rotateY(0deg)";
                    clone2.style.transform = "translateY(100%) rotateX(180deg)";
                }
                el.parentElement.appendChild(firstEl);

                firstEl.style.marginLeft = "0px";

                el.parentElement.appendChild(clone2);
            }
            break
    }
}

function init(){
    content.innerHTML = initContent;
}

function clean(){
    var child = document.querySelector(".frisos");
    content.innerHTML = "";
    content.appendChild(child);
}