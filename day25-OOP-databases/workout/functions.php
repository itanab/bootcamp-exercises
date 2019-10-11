<?php

//question6 

function leave_hobbiton($party)
{
    //question7
    $party = array_merge($party, [
        'merry' => 'Meriadoc Brandybuck',
        'pippin' => 'Peregrin Took'
    ]);

    //question8
    return $party;
}

//question10

function go_to_bree($party){
    //question11,12
    $party['strider']='Strider';
    return $party;
}

//question14

function go_to_weathertop($party)
{
    $party = array_merge($party, [
        'Witch King of Angmar',
        'Nazgûl #2',
        'Nazgûl #3',
        'Nazgûl #4',
        'Nazgûl #5',
        'Nazgûl #6',
        'Nazgûl #7',
        'Nazgûl #8',
        'Nazgûl #9'
    ]);

    return $party;
}

//question17

function meet_arwen($party)
{
    //question18,19
    $party['arwen'] = 'Arwen Undomiel';

    array_splice($party, -10, 9);
    return $party;
}

function go_to_rivendell($party)
{
   //question22
   unset($party['arwen']);
   
   $party = array_merge($party, [
    'gandalf' => 'Gandalf the Grey',
    'boromir' => 'Boromir',
    'legolas' => 'Legolas',
    'gimli' => 'Gimli'
    ]);

    $party['strider'] = 'Aragorn';
    return $party;

}


//question25

function go_to_moria(&$party)
{
    //question26
    unset($party['gandalf']);
}

//question28

function go_to_falls_of_rauros(&$party)
{
    //question29
    $party = array_merge($party, array_fill(0, 1000, 'Orc'));
    //question30
    unset($party['boromir']);
}

//question32

function break_fellowship($party)
{
    //question33
    $mordor_party=[];
    //question34
    $mordor_party['frodo']=$party['frodo'];
    $mordor_party['sam']=$party['sam'];
    $mordor_party['ring']=$party['ring'];
    //question35
    $hunting_party=[];
    //questioin36
    $hunting_party['strider']=$party['strider'];
    $hunting_party['legolas']=$party['legolas'];
    $hunting_party['gimli']=$party['gimli'];
    //question37
    $hungry_array=[];
    //question38
    $hungry_party = array_diff_key($party, $mordor_party,   $hunting_party);
    //question39
    return [
        $mordor_party,
        $hunting_party,
        $hungry_party
    ];

}



?>