var contraseña = prompt("Crea una contraseña")
var contraseña1 = prompt("Repite la contraseña")

function ver (Alberto){
    alert( "Su contraseña es aceptada, " + Alberto)
}
ver("Perfecto!")

function ver (password){
    if( contraseña == contraseña1)
    {
        alert ("Ya puedes ingresar a la página")
    }
    else{
        alert ("Las contraseñas no coinciden")
    }
}

var mail = prompt ("Ingrese su gmail para registrarse")


function ver (Jose){
    alert("Te enviamos un mail a " + Jose)
}
ver (mail)
var codigo = prompt("Ingresa el código para verificar")

function ver (Roberto){
    alert( "Su código es corecto" )
}
ver(codigo)