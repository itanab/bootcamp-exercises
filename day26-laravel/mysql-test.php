<?php

require_once 'DB/DB.php';
require_once 'DB/DB_functions.php';
require_once 'Country.php';
require_once 'Region.php';

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

//var_dump($results);
//var_dump($populations);

//$region = new Region;
//$region->name = 'Central Africa';
//$region->insert();

//echo 'A new region was inserted with id'.$region->id.'<br>';


//update the slug of Central Afrika

$query = "
    SELECT *
    FROM `region`
    WHERE `name` = ?
";

$central_africa = select_one($query, ['Central Africa'], 'Region');



$central_africa->slug = 'central-africa';
$central_africa->update();

var_dump($central_africa);