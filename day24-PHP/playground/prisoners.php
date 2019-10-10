<?php

$time_served = 0;

//exercise 1


while ($time_served < 10) {
    $time_served++;
    echo "The prisoner has served {$time_served} years.<br>";
}


//exercise 2


do{
    $time_served++;
    echo "The prisoner has served {$time_served} years.<br>";
}
while($time_served < 10);


//exercise 3

for ($i=0; $i<=5; $i++){
    echo "The prisoner has {$i} more years to serve <br>";
}

//exercise 4

/* If the current iterator is bigger than 5 skip the iteration right after the first sentence (ie. when the prisoner has more than 5 years to serve he will not go to the parole hearing).

When the current iterator is 2 print out the sentence Paroled! and break off the entire loop.*/

for ($j=10; $j>=0; $j--) {
    echo "The prisoner has {$j} more years to serve.<br>";

    if ($j > 5) {
        continue;
    }echo "Going to parole hearing <br>";
    

    if ($j == 2) {
        echo "Paroled!<br>";
        break;
    }

}
?>