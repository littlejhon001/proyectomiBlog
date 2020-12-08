
function validarLog(){

    var user = document.getElementById('user');
    var contraseña = document.getElementById('contraseña');

    if(user.value == null || user.value == '' && contraseña.value == null || contraseña.value == '' ){

    alert("you must fullfill the fields");
    }

    else if (user.value == null || user.value == ''){

    alert("you must enter a valid user name");
    }
    else if(contraseña.value == null || contraseña.value == ''){

    alert("you must enter a valid password");
    }
            
}


function validarRegistro(){
    
    var correo1 = document.getElementById('correo');
    var contraseña1 = document.getElementById('nuevaContraseña').value;
    var contraseña2 = document.getElementById('repetirContraseña').value;


    if(correo1.value == null || correo1.value == '' ){
        alert("please enter a valid email")
    }
    if(nuevaContraseña.value != repetirContraseña.value){

        alert("passwords don't match");
    }

}


