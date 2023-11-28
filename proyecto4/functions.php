<?php
    function conectDB()
    {
        $host = 'localhost';
        $db = 'tarea4';
        $user = 'usu4';
        $pass = 'usu4';

        try {
            $conexion = new PDO("mysql:host=$host;dbname=$db;charset=utf8", $user, $pass);
            return $conexion;
        } catch (PDOException $e) {
            echo "Error de conexión: " . $e->getMessage();
            die();
        }
    }


    function obtainPass($user)
    {
        try
        {
            $conexion = conectDB();

            $sql = "SELECT pwd FROM usuarios WHERE usuario = :usuario";

            $stmt = $conexion->prepare($sql);
            
            $stmt->bindParam(':usuario', $user, PDO::PARAM_STR);
            $stmt ->execute();

            $result = $stmt->fetch(PDO::FETCH_ASSOC);

            $conexion = null;

            return $result ? $result ['pwd']:false;
        }catch(PDOException $e)
        {
            echo "error:" . $e->getMessage();
        }
        return false;
    }

    function deleteCookie($cookieName)
    {
        setcookie('backgroundColor', '', time() - 3600, "/");
    }
?>