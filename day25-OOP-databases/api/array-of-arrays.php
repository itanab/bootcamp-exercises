<?php

$movie_names = [
    'tt0468569' => 'Dark Knight', 
    'tt0050083' => '12 angry men', 
    'tt0108052' => 'Schindler\'s list',
    'tt0110912' => 'Pulp fiction',
    'tt0167260' => 'Lord of the Rings: Return of the King',
    'tt0111161' => 'The Shawshank redemption',
    'tt0071562' => 'The Godfather II',
    'tt0060196' => 'The good, the bad and the ugly',
    'tt0137523' => 'Fight club',
    'tt0068646' => 'The Godfather',
  ];
  $movie_ratings = [
    'tt0111161' => 9.2,
    'tt0068646' => 9.2,
    'tt0071562' => 9.0,
    'tt0468569' => 8.9, 
    'tt0050083' => 8.9, 
    'tt0108052' => 8.9,
    'tt0110912' => 8.9,
    'tt0167260' => 8.9,
    'tt0060196' => 8.9,
    'tt0137523' => 8.8
  ];

  $names_ratings = [];
  $final=[];

  foreach ($movie_names as $id1 => $name){
      foreach ($movie_ratings as $id2 => $ratings){
          if ($id1 === $id2){
            $names_ratings['name']=$name;
            $names_ratings['rating']=$ratings;
            $object = (object) $names_ratings;
            array_push($final, $object);
        }
      }
  }
 
  header('Content-type: application/json');

  //sort($final);
  usort($final, function($a, $b){
    if($a->rating > $b->rating){
      return 1;
    }elseif($a->rating < $b->rating){
      return -1;
    }else{
      return 0;
    }
  });

  echo json_encode($final);



  ?>
