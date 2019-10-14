<?php

include_once 'data.php';
require_once 'celebrity.php';

$celebrities = [];

foreach($data as $bio){
    $object = new Celebrity();
    $object->fromArray($bio);
    array_push($celebrities, $object);
}


header('Content-type: application/json');
echo json_encode($celebrities);