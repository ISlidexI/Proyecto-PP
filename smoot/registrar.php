<?php 
include("conexion.php");

if(isset($_POST)){
    if(
        strlen($_POST['username']) >= 1 &&
        strlen($_POST['email']) >= 1 &&
        strlen($_POST['contraseña']) >= 1
    ){
        $username = trim($_POST['username']);
        $email = trim($_POST['email']);
        $contraseña = trim($_POST['contraseña']);
        $dmy = date("Y-m-d");
        $consulta = "INSERT INTO datos(username, email, contraseña, dmy) VALUES ('$username', '$email', '$contraseña', '$dmy')";
        $resultado = mysqli_query($conex, $consulta);
        if ($resultado) {
            ?>
            <h3 class="success">¡Te has inscrito correctamente!</h3>
            <?php
            header("refresh:3; url=http://127.0.0.1:5500/iniciar.html");
        } else {
            ?>
            <h3 class="error">¡Ups ha ocurrido un error!</h3>
            <?php
            header("refresh:3; url=http://127.0.0.1:5500/registro.html");
        }
    } else {
        ?>
        <h3 class="error">¡Debes rellenar todos los campos!</h3>
        <?php
    }
}
?>