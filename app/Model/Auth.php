<?php


namespace App\Model;


use Tymon\JWTAuth\JWTAuth;

class Auth
{
    private $jwtAuth;

    public function __construct(JWTAuth $jwtAuth)
    {
        $this->jwtAuth = $jwtAuth;
    }

    public function getIdUser() {
       return $this->jwtAuth->getIdentifier();
    }

}