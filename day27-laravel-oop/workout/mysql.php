<?php

require_once 'DB/DB.php';
require_once 'DB/DB_functions.php';

//connect to a database
connect('localhost', 'games','root', 'rootroot');

//prepare a query string
$query = "SELECT
        * FROM `games`
        WHERE 1
        ";


//var_dump($results_sql);

if(isset($_GET['orderby']) AND $_GET['orderby']=='name'){

    if(isset($_GET['way']) AND $_GET['way']=='desc'){
        $query  = "SELECT
            * FROM `games`
            WHERE 1
            ORDER BY `name` DESC
        ";

    } else{
        $query  = "SELECT
            * FROM `games`
            WHERE 1
            ORDER BY `name` ASC
        ";
    }    
}

if(isset($_GET['orderby']) AND $_GET['orderby']=='rating'){

    if(isset($_GET['way']) AND $_GET['way']=='desc'){
        $query  = "SELECT
            * FROM `games`
            WHERE 1
            ORDER BY `rating` DESC
        ";

    } else{
        $query  = "SELECT
            * FROM `games`
            WHERE 1
            ORDER BY `rating` ASC
        ";
    }    
}
 
$results_sql=select($query);

header('Content-type: application/json');
echo json_encode($results_sql);

