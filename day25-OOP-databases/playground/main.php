<?php

//variables and data types
$my_name = 'Itana';
$height = 165;

var_dump($my_name);
var_dump($height);

//function #1
function headline($text)
{
    return "<h1>{$text}</h1>";
}

echo headline('My website');

//function #3
$inches = 12;

function inchesToCentimeters ($inches)
{
    $cm = $inches * 2.54;
    return $cm;
}


echo "My screen in cm is ". inchesToCentimeters($inches) . "<br>";

//functions #4
$celsius = 38;
function celsiusToFahrenheit ($celsius)
{
    $fahrenheit = (9/5) * $celsius + 32;
    return $fahrenheit;
}

echo celsiusToFahrenheit($celsius);

//conditions #1

$temperature1 = 36.5; //healthy c
$temperature2 = 100; //not healthy f

function isHealthy ($temperature, $string)
{
    if ($string === 'f'){
        $temperature =($temperature - 32) * (5/9);
    }

    if($temperature < 37){
        echo "<br> is healthy";
    }else {
        echo "<br> is not healthy";
    }
}

echo isHealthy($temperature2, 'f');

//ternary operator

$number = 42;
function evenOrOdd($number){
    return $number % 2 == 0 ? "even" : "odd";
}

echo "<br>" . evenOrOdd($number);

//concatenation #1

$weekday = 'Friday';

function sayWeekday ($weekday)
{
    echo "<br> Today is " . $weekday . "<br>";
}

sayWeekday($weekday);

//concatenation #2

$year_of_birth = 1997;

function sayBirthday ($year_of_birth)
{
    $this_year = 2019;

    echo "<br> I was born in " . $year_of_birth . "so this year I am celabrating my " . ($this_year - $year_of_birth) . ". birthday.";
}

sayBirthday($year_of_birth);

//conditions 

