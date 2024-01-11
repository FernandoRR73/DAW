<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
</head>
<body>
    
    <?php//creation of menu with user and guest button?>
    <h1>Menu Login</h1>
    <form id="menuNav" method="post" action="index.php">
        <label for="user">User:</label>
        <input type="text"id="user" name ="user" required>
        <br>
        <label for="password">Password</label>
        <input type="password" name="pass" id="pass" required>
        <br>
    </form>

    <?php
    session_start();
    include("functions.php");
    
    if (isset($_SESSION['autentiqued_user']) && $_SESSION['usuario_autentiqued'] === true)
    {
        header("Location: application.php");
        exit();
    }


    if(isset($_POST['session_start']))
    {
        $user = $_POST["user"];
        $pass = $_POST["pass"];
        $dateStart = date('H:i:s');


        $hashPass = obtainPass($user);

        if ($hashPass && password_verify($pass , $hashPass))
        {
            $_SESSION['autentiqued_user'] = true;
            $_SESSION['user'] = $user;
            $_SESSION['time'] = $dateStart;

            header("Location: aplication.php");
            exit();
        }else
        {
            echo "incorrect User or Password.";
        }
    }
    if($action === "GUEST")
        {
            showInfo();
            echo "<br>";
        }
    
    ?>
</body>
</html>