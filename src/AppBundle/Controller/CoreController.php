<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;


class CoreController extends Controller
{

    /**
     * @Route("/", name="homepage")
     */
    public function homeAction()
    {
        $number = mt_rand(0, 100);
		
        return $this->render(
        	'core/home.html.twig', 
        	array( 'number' => $number,)
			);
		
				
    }
}

?>