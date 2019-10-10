<?php

//exercise 1 - creating an array

$cars_i_want = [];
var_dump($cars_i_want);

//exercise 2 - adding items to the array

$cars_i_want[] = 'Aston Martin';
$cars_i_want[] = 'Bugatti';
$cars_i_want[] = 'Ferrari';
$cars_i_want[] = 'Lamborghini';
$cars_i_want[] = 'Maserati';
$cars_i_want[] = 'Mercedes';
$cars_i_want[] = 'Porsche';
$cars_i_want[] = 'SKoda';

var_dump($cars_i_want);

//exercise 3 - retrieving array values

echo "<br>For myself I would buy {$cars_i_want[1]}.<br>";
echo "For my spouse I would buy {$cars_i_want[4]}<br>";

$cars_i_want[4] = 'Smart';

echo "Each of my kids will get a {$cars_i_want[4]}<br>";


//exercise 4 - foreach loop

$html = "<ul>";
foreach ($cars_i_want as $car){
    $html .= "<li>{$car}</li>";
}
$html .= "</ul>";

echo $html;

//exercise 5 - associative arrays

$car_prices = [
    'Skoda Octavia' => 270000,
    'Volkswagen Golf' => 170000,
    'BMW X6' => 380000,
    'Porsche 911' => 1150000
];

echo "You can have a Porche for just {$car_prices['Porsche 911']}CZK.";

foreach ($car_prices as $car => $price){
    echo "The price of $car Octavia is $price CZK.<br>";
}



?>