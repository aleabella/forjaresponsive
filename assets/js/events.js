/*function login(){
    user = document.getElementById("Usuario").Value;
    password = document.getElementById("Contraseña").Value;

if (user === "Admin" && password === "Kuepa2022"){
    window.location = 'http://www.pagina12.com.a';
} else{
    alert("no")
}
}*/
/*
function obtenerListaUsuarion(){
    var listaUsuarios = JSON.parse(localStorage.getItem('listaUsiariosLs'));
    if(listaUsuarios == null){
        listaUsuarios =
      [  // user , contraseña
        ['Admin','Kuepa2022']
    ]
    }
    return listaUsuarios;
}
function validarCredenciales(pUser,pPassword){
    var listaUsuarios =obtenerListadeUsuariorder();
    var bAcceso = false;

    for (var i=0; i< listaUsuarios.length; i++){
        if(pUser === listaUsuarios[i][1] && pPassword[i][2]){
            bAcceso = true;
            sessionStorage.setItem
        }
    }
    return bAcceso;
}
*/
/*function go(){

    if (document.form.password.value=='Admin' && document.form.login.value=='Kuepa2022'){ 
            document.form.submit("./"); 
        } 
        else{ 
             alert("Porfavor ingrese, nombre de usuario y contraseña correctos."); 
            
        }

        }*/

        function go() {
            if (document.form.login.value == 'Admin' && document.form.password.value == 'Kuepa2022') {
                document.form.submit();
            }
            else {
                alert("Por favor ingrese, nombre de usuario y contraseña correctos.");
            }
        }