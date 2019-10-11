<?php
//question1
$party = [
    'bilbo' => 'Bilbo Baggins',
    'frodo' => 'Frodo Baggins',
    'ring' => 'The One Ring'
];

//question 2
$party['gandalf'] = 'Gandalf the Grey';

//question 3
unset($party['bilbo']);

//question 4
$party['sam'] = 'Samwise Gamgee';

//question5
unset($party['gandalf']);

//question9
$party = leave_hobbiton($party);

//question13
$party = go_to_bree($party);

//question16
$party = go_to_weathertop($party);

//quesstion20
$party = meet_arwen($party);

//questioin24
$party = go_to_rivendell($party);

//question27
go_to_moria($party);

//question31
go_to_falls_of_rauros($party);

//question40
$parties = break_fellowship($party);
var_dump($parties);

?>