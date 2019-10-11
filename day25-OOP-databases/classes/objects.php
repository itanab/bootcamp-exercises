<?php

require_once 'User.php';

$steve = new User('steve');

$steve->id =1;
$steve->username='steve';
$steve->name='Steven';

//var_dump($steve->name);
//var_dump($steve);

$steve->dumpMe();

$bob = new User('bob');
$bob->dumpMe();