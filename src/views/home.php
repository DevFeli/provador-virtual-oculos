<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Provador Online</title>

    <!-- styles -->
     <link rel="stylesheet" href="../styles/global.css">

     <!-- scripts -->
      <script type="module" defer src="../scripts/main.js"></script>
</head>
<body>

    <main>

        <div class="container">

            <section class="camera">

                <div class="play-camera">
                    <video id="camera" autoplay playsinline></video>
                    <button id="capture-button">Capturar Foto</button>
                    <button id="switch-camera">Trocar Câmera</button>
                </div>

                <div id="canvas-container" style="display:none;">
                    <canvas id="photo-canvas"></canvas>
                    <button id="download-button">Download</button>
                </div>

            </section>

            <section class="glasses">
                <!-- <?php foreach($getImages->getImages() as $image): ?>
                    <img src="<?php echo $image; ?>" alt="Imagem de óculos" class="">
                <?php endforeach; ?> -->
            </section>
        </div>

    </main>

</body>
</html>