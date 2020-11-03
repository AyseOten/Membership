

window.onload = function() {
var btn=document.getElementById("submit-button");


		btn.onclick=function(){

            document.getElementById("right-side").innerHTML = "";
            
            var username=document.getElementById("username");
            var fullname=document.getElementById("fullname");
            var telephone=document.getElementById("tel");
            var adres= document.getElementById("adres");  

            if(username.value !== '' && fullname.value !== '') {

                // buraya appendChild ile kod yazılacak
              
                    var node = document.createElement("p");
                    var textnode = document.createTextNode("Hosgeldiniz " + username.value);
                    node.appendChild(textnode);
                    document.getElementById("right-side").appendChild(node);

                    var node = document.createElement("p");
                    var textnode = document.createTextNode("Adınız Soyadınız: " + fullname.value);
                    node.appendChild(textnode);
                    document.getElementById("right-side").appendChild(node);

                    var node = document.createElement("p");
                    var textnode = document.createTextNode("Telefon numaranız: " + telephone.value);
                    node.appendChild(textnode);
                    document.getElementById("right-side").appendChild(node);

                    var node = document.createElement("p");
                    var textnode = document.createTextNode("Adresiniz: " + adres.value);
                    node.appendChild(textnode);
                    document.getElementById("right-side").appendChild(node);
                

                 /* textboxların temizlenmesi */
                    document.getElementById("username").value = "";
                    document.getElementById("fullname").value = "";
                    document.getElementById("tel").value = "";
                    document.getElementById("adres").value = "";

            }
            else{
                alert("Alanlar boş bırakılamaz!");

            return false;
            }

            
        }

    // form'un sayfayi refresh ettirmemesi icin yazilan function
    function handleForm(event) {
        event.preventDefault();
    }

    // form içinde gerçekleşen olayları dinler biz submit olayını dinledik.
    myForm.addEventListener('submit', handleForm);
}
