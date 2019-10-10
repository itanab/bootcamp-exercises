<?php 

//exercise 1

$first_name = 'Itana';
$surname = 'Bulatovic';

echo "Fist name: {$first_name} <br> Surname {$surname} <br>";

//exercise 2

$year_of_birth = 1997;
$height = 165;

echo "Year of birth: {$year_of_birth} <br> Height: {$height}";

/*
//exercise 3

define('SERVER_SOFTWARE', 'Apache');
//constants cannot be used like variables - need to be concatenated with dot
echo 'This server is running on' . SERVER_SOFTWARE . '.';

define('MY_OS', 'Windows');
echo 'My operating system is:' . MY_OS . '.';

//exercise 4

function greet($whom)
{
    echo "Hello, {$whom}";
}

greet('Prague');

//exercise 5

function truncateString(&$string, $size)
{
    
    $string = mb_substr ($string, 0, $size);
}
$sentence = 'Quick brown fox jumps over the lazy dog.';
truncateString($sentence, 10);
echo $sentence;*/
?>