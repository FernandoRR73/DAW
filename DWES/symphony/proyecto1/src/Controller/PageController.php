<?php

namespace App\Controller;

//uso las dependencias
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


Class PageController extends AbstractController
{
    #[Route('/about')]
    public function about(): Response
    {
        return $this->render('about.html.twig',[
            'title' => 'sobre mi pagina',
            'content' => 'Hola soy fernando'
        ]);
    }

    #[Route('/contact')]
    public function contact():Response
    {
        return $this->render('/contact.html.twig', [
            'title' => 'contacto',
            'content' => 'mi telefono es 123456789'
        ]);
    }
}
?>