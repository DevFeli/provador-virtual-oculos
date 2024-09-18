<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Provador Online</title>

    <!-- icons -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />

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
            
                    <div class="spinn">
                        <div class="loader"></div>
                        <span>Carregando...</span>
                    </div>

                    <video id="camera" autoplay playsinline></video>
                    <div class="controls-camera" style="display:none;">
                        <div id="capture-button"></div>
                        <div id="switch-camera">
                        <span class="material-symbols-outlined">
                            autorenew
                        </span>
                        </div>
                    </div>
                </div>

                <div id="canvas-container" style="display:none;">
                    <div class="drag-glass"></div>
                    <canvas id="photo-canvas" width="400"></canvas>

                    <div class="controls-photo">
                        <div class="photo">
                            <div class="delete">
                                <span id="delete" class="material-symbols-outlined">
                                    delete_forever
                                </span>
                            </div>
                            <div id="download-button">
                                <span class="material-symbols-outlined">
                                    download
                                </span>
                            </div>
                        </div>

                        <div class="controls-glasses">
                            <span class="material-symbols-outlined plus">
                                add
                            </span>
                            <span class="material-symbols-outlined minus">
                                remove
                            </span>
                            <span class="material-symbols-outlined rotate-left">
                                rotate_left
                            </span>
                            <span class="material-symbols-outlined rotate-rigth">
                                rotate_right
                            </span>
                        </div>
                    </div>
                </div>

            </section>

            <section class="glasses">
                <?php foreach($getImages->getImages() as $image): ?>
                    <img src="<?php echo $image; ?>" alt="Imagem de óculos" class="glass">
                <?php endforeach; ?>
            </section>

        </div>

    </main>

</body>
</html>