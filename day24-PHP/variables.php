<?php 

//passing the argument by value
function asses_number($a)
{
    $a++;
    return $a > 10;
}

$number = 6;
$result = asses_number($number); //false

//passing the argument by reference
function is_number_small(&$b)
{
    $b++;
    return $b < 10;
}

$number = 6;
$result = is_number_small($number); //true

//after passing by reference - every operation that we do on the argument inside the function happens as well to the variable passed in the outside (it saves memory, because all vars crated in a function are destroyed after execution and the initial parameter is modified- we dont have a copy)


function is_odd($number, &$is_big = false)
{
    $is_big = $number > 100;

    return $number % 2 == 1;
}

$number_is_odd = is_odd(123, $is_big);
//echo $is_big; //true 
var_dump($is_big);

//having copies with & and reference
//creating a reference without a function

$number = 6;
//echo $number; //6
var_dump($number);
die();

$copy = &$number;
$copy++;

//echo $number; //7

function headline($text, $level =1)
{
    return "<h{$level}>{$text}</h{$level}>";
}

//echo headline('Main headline'); //uses the default value
//echo headline('Main headline', 2); //not using the default value
?>