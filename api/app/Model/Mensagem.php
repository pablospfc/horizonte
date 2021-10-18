<?php


namespace App\Model;

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

class Mensagem
{
    private $email;

    function __construct()
    {
        $this->email = new PHPMailer(true);
    }

    public function sendMail($data) {
        $this->email->isSMTP();
       // $this->email->SMTPDebug = 2;
        $this->email->SMTPOptions = array(
            'ssl' => array(
                'verify_peer' => false,
                'verify_peer_name' => false,
                'allow_self_signed' => true
            )
        );
        $this->email->SMTPSecure = 'tls';
        $this->email->Host = "smtp.gmail.com";
        $this->email->SMTPAuth = true;
        $this->email->Port = 587;
        $this->email->CharSet = 'UTF-8';
        $this->email->Username = "horizonteassessoriaslz@gmail.com";
        $this->email->Password = "45enef80khs1";
        $this->email->setFrom($data['from'], $data['from_name'],0);
        $this->email->addAddress($data['address'], 'Horizonte Assessoria');
        $this->email->addReplyTo($data['from'], "Reply");
        $this->email->isHTML(true);
        $this->email->Subject = $data['subject'];
        $this->email->Body = $data['message'];
        $this->email->AltBody = "This is the plain text version of the email content";

        $this->email->send();
    }

}