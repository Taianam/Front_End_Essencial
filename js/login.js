function autentificar(){

    const admin = "adm@whatthefilm.com";
    const adminSenha = "654321";

    var email = document.getElementById("email");
    var senha = document.getElementById("senha");
    var alert = document.getElementById("alert");

    if( email.value.length <= 6 || senha.value.length < 6 ){
        alert.classList.remove("hidden");
        email.style.border = "1px solid red";
        senha.style.border = "1px solid red";

        setTimeout(function(){
            alert.classList.add("hidden");
            email.style.border = "1px solid #f39034";
            senha.style.border = "1px solid #f39034";
        }, 3000);

        return;
    }
    
    setTimeout(function(){
        if( email.value.toLowerCase() === admin && senha.value.toLowerCase() === adminSenha ){
            window.location.href = "http://127.0.0.1:5500/html/home.html";
        }else {
            alert.classList.remove("hidden");
            email.style.border = "1px solid red";
            senha.style.border = "1px solid red";

            setTimeout(function(){
                alert.classList.add("hidden");
                email.style.border = "1px solid #f39034";
                senha.style.border = "1px solid #f39034";
            }, 3000);
        }
    }, 2000);
}