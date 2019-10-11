<?php

class User{
    
    //NO EXECUTABLE CODE HERE!
    
    
    public $id = null;
    public $username = null;
    public $name = null;
    public $password = null;
    public $number_of_posts = 0;
    public $created_at = null;

    public function __construct($username){
        $this->username = $username;
        $this->created_at = date('Y-m-d H:i:s');
    }

    public function dumpMe(){
        var_dump($this);
    }


}
    