export function dragOnDrop(){

    const plus = document.querySelector('.plus');
    const minus = document.querySelector('.minus');
    const rotateLeft = document.querySelector('.rotate-left');
    const rotateRigth = document.querySelector('.rotate-rigth');
    let angle = 0

    // drag
    let container = document.querySelector('.drag-glass');
    let AreaDrop = document.querySelector('.camera');
    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;

    let cloneGlass = false;
    // clone
    document.addEventListener('click', e => {
        if(e.target.classList.contains('glass')){
            container.innerHTML = '';

            cloneGlass = e.target.cloneNode(true);

            cloneGlass.classList.add('no-hover');

            container.appendChild(cloneGlass);

            container.style.display = 'block';
        }
    })

    // controls
    plus.addEventListener('click', () => {
        if(cloneGlass && cloneGlass.offsetWidth < 400){
            cloneGlass.style.width = `${cloneGlass.offsetWidth + 10}px`;
        }
    })

    minus.addEventListener('click', () => {
        if(cloneGlass && cloneGlass.offsetWidth > 150){
            cloneGlass.style.width = `${cloneGlass.offsetWidth - 10}px`;
        }
    })

    rotateLeft.addEventListener('click', () => {
        if(cloneGlass){
            angle -= 10;
            cloneGlass.style.transform = `rotate(${angle}deg)`;
        }
    })
    rotateRigth.addEventListener('click', () => {
        if(cloneGlass){
            angle += 10;
            cloneGlass.style.transform = `rotate(${angle}deg)`;
        }
    })

    // drag and drop
    function startDrag(e) {
        // Previne o comportamento padrão dos eventos de toque
        e.preventDefault();
    
        isDragging = true;
    
        // Calcula a posição inicial do toque em relação ao elemento filho
        if(e.touches){
            offsetX = e.touches[0].clientX - container.offsetLeft;
            offsetY = e.touches[0].clientY - container.offsetTop;
        }else{
            offsetX = e.clientX - container.offsetLeft;
            offsetY = e.clientY - container.offsetTop;
        }
    
        // Altera o cursor para "grabbing" ao arrastar
        container.style.cursor = 'grabbing';
    }

    function stopDrag() {
        isDragging = false;
        container.style.cursor = 'grab'; // Volta ao cursor padrão ao soltar
    }

    function dragMove(e) {
        if (isDragging) {
            let newLeft
            let newTop
            // Calcula a nova posição da div filho
            if(e.touches){
                newLeft = e.touches[0].clientX - offsetX;
                newTop = e.touches[0].clientY - offsetY;
            }else{
                newLeft = e.clientX - offsetX;
                newTop = e.clientY - offsetY;
            }
    
            // Limites para que a div filho não ultrapasse os limites da div pai
            const parentRect = AreaDrop.getBoundingClientRect();
            const childRect = container.getBoundingClientRect();
    
            // Limita a posição horizontal
            if (newLeft < 0) newLeft = 0; // Limite esquerdo
            if (newLeft + childRect.width > parentRect.width) {
                newLeft = parentRect.width - childRect.width; // Limite direito
            }
    
            // Limita a posição vertical
            if (newTop < 0) newTop = 0; // Limite superior
            if (newTop + childRect.height > parentRect.height) {
                newTop = parentRect.height - childRect.height; // Limite inferior
            }
    
            // Aplica a nova posição na div filho
            container.style.left = `${newLeft}px`;
            container.style.top = `${newTop}px`;
        }
    }

    // Adiciona eventos de toque para dispositivos móveis
    container.addEventListener('touchstart', startDrag);
    document.addEventListener('touchmove', dragMove);
    document.addEventListener('touchend', stopDrag);

    // Adiciona eventos de mouse para desktop
    container.addEventListener('mousedown', startDrag);
    document.addEventListener('mousemove', dragMove);
    document.addEventListener('mouseup', stopDrag);
}