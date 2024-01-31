<?php

namespace App\Controller;

//uso las dependencias
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


Class GreetingController extends AbstractController
{
  #[Route('/home/{name}')]
  public function greeting(string $name =null): Response
  {
    $greet="";
    if($name)
      {
        if(preg_match('/^[a-zA-ZñÑ]+$/', $name) && !str_contains($name, '?'))
          {
            $greet ="buenas tardes $name";
          }
          else
          {
            $greet="ERROR - NOMBRE NO VALIDO";
          }
        }
        else
        {
          $greet="bienvenido user";
        }
      return $this->render('/greeting.html.twig', ["saludo" =>$greet, "nombre" => $name]);
  }    
}
?>