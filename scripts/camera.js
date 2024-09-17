export function camera(){

    const videoElement = document.getElementById('camera');
    const canvasElement = document.getElementById('photo-canvas');
    const captureButton = document.getElementById('capture-button');
    const switchCameraButton = document.getElementById('switch-camera');
    const downloadButton = document.getElementById('download-button');
    const canvasContainer = document.getElementById('canvas-container');

    const deleteButton = document.getElementById('delete');
    
    const cameraContainer = document.querySelector('.play-camera')
    const loader = document.querySelector('.spinn')
    const capture = document.getElementById('capture');

    let stream;
    let currentCamera = 'user'; // Padrão: câmera frontal
    let videoTracks;

    async function startCamera() {
        // Fecha o stream existente
        if (stream) {
            stream.getTracks().forEach(track => track.stop());
        }

        // Define as opções da câmera (front ou traseira)
        const constraints = {
            video: {
                facingMode: currentCamera  // Pode ser 'user' ou 'environment'
            }
        };

        try {
            // Solicita acesso à câmera
            stream = await navigator.mediaDevices.getUserMedia(constraints);
            if(stream){
                loader.style.display = 'none';
                document.querySelector('.controls-camera').style.display = 'flex'
            }
            videoTracks = stream.getVideoTracks();
            videoElement.srcObject = stream;
        } catch (error) {
            console.error('Erro ao acessar a câmera: ', error);
        }
    }

    // Função para alternar entre câmeras
    switchCameraButton.addEventListener('click', () => {
        currentCamera = currentCamera === 'user' ? 'environment' : 'user';
        startCamera();
    });

    // Função para capturar a imagem da câmera
    captureButton.addEventListener('click', () => {
        const context = canvasElement.getContext('2d');
        canvasElement.width = videoElement.videoWidth;
        canvasElement.height = videoElement.videoHeight;
        
        // Desenha o frame do vídeo no canvas
        context.drawImage(videoElement, 0, 0, canvasElement.width, canvasElement.height);

        // Exibe o canvas com a imagem capturada
        canvasContainer.style.display = 'block';
        cameraContainer.style.display = 'none';
    });

    // Função para baixar a imagem capturada
    downloadButton.addEventListener('click', () => {
        const link = document.createElement('a');
        link.download = 'photo.png';
        link.href = canvasElement.toDataURL();
        link.click();
    });

    // Função para excluir a imagem e retornar à visualização da câmera
    deleteButton.addEventListener('click', () => {
        // Esconde o canvas e volta a exibir o vídeo
        canvasContainer.style.display = 'none';
        videoElement.style.display = 'block';
        cameraContainer.style.display = 'block'
        
        // Limpa o conteúdo do canvas
        const context = canvasElement.getContext('2d');
        context.clearRect(0, 0, canvasElement.width, canvasElement.height);
    });

    // Iniciar a câmera ao carregar a página
    startCamera();
}