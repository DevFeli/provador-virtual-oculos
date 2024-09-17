<?php

require './src/models/GetImages.php';

$path = './assets/oculos/';

$extensions = ['jpg', 'jpeg', 'png', 'gif'];

$getImages = new GetImages($path, $extensions);

require './src/views/home.php';