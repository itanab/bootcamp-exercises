<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <style>
        .board .row {
            width: 24em;
            display: flex;
        }
        .board .row > div {
            width: 3em;
            height: 3em;
        }
        .board .white {
            background-color: #c2c2c2;
        }
        .board .black {
            background-color: #525252;
        }

    </style>

    <title>Chessboard</title>
</head>

<body>

<div class="board">
    <div class="row">
        <div class="white"></div>
        <div class="black"></div>
    </div>
    <div class="row">
        <div class="black"></div>
        <div class="white"></div>
    </div>
</div>

</body>

</html>