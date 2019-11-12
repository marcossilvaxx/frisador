var inputImg = document.getElementById("imagem");

function previewImage(){
    var file = new FileReader();
    console.log(this.files)
    file.onload = function(e){
        document.getElementById("img").src = e.target.result;
    }

    file.readAsDataURL(this.files[0]);
}

inputImg.addEventListener('change', previewImage);