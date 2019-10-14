<?php

require_once 'DB/DB.php';
require_once 'DB/DB_functions.php';
require_once 'Country.php';

//connect to a database
connect('localhost', 'world','root', 'rootroot');

//prepare a query string
$query = 'SELECT
         * FROM `country`
            WHERE `Population` > ?
        ';
//run the query
$results=select($query, [20000000], 'Country');

/*$populations = array_map(function($country){
    return $country->getFormattedPopulation();
}, $results);*/

var_dump($results);
//var_dump($populations);