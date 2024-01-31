<?php

namespace App\Controller;

//uso las dependencias
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

//creo la clase HomeController
Class HomeController
{
//añado la ruta hacia /home
    #[Route('/home')]
    //creo el metodo llamado index que devuelve un Response
    public function index():Response
    {
        //creo el mensaje bienvenido
        $message = 'bienvenido';

        //hago un return devolivendo un Response con el mensaje creado
        return new Response($message);
    }
}
?>