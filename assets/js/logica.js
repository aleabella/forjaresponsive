/*document.querySelector('#btnIngresat');addEventListener('click', iniciarSesion);

function iniciarSesion(){
    var username = '';
    var pass = '';
    var bAcceso = false;

    username =document.querySelector('#user').value;
    pass = document.querySelector('#password').value;

    bAcceso = validarCredenciales(username,pass);
  

    if (bAcceso == true){
        ingresar();
    }
}
function ingresar*/

function go(){

    if (document.form.password.value=='Admin' && document.form.login.value=='Kuepa2022'){ 
            document.form.submit(); 
        } 
        else{ 
             alert("Porfavor ingrese, nombre de usuario y contraseña correctos."); 
            
        }
}