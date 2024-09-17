<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Provador Online</title>

    <!-- styles -->
     <link rel="stylesheet" href="../styles/global.css">

     <!-- scripts -->
      <script defer src="../scripts/main.js"></script>
</head>
<body>
    <h1>Teste</h1>

    <?php foreach($getImages->getImages() as $image): ?>
        <img src="<?php echo $image; ?>" alt="Imagem de óculos" class="">
    <?php endforeach; ?>

</body>
</html>