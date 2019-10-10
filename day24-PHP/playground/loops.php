<?php

//while
$days_to_christmas = 76;
while ($days_to_christmas > 0) {
    $days_to_christmas--;
    echo "There are still {$days_to_christmas} days to Christmas <br>";
}

//do while
$days_to_christmas = 76;
do{
    $days_to_christmas--;
    echo "There are still {$days_to_christmas} days to Christmas <br>";
}
while ($days_to_christmas > 0);

//for loop

for($days_to_christmas = 76; $days_to_christmas >= 0; $days_to_christmas--){

    //to skipp a value
    if($days_to_christmas == 70){
        continue;
    }
    echo "There are still {$days_to_christmas} days to Christmas <br>";  

    if($days_to_christmas == 60){
        //if we have two loops one in other and say break2 (it will break both of them)
        break;
    }
}