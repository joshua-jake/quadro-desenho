
// Trocando as cores 

    let currentColor = 'black';
     // selecionado todas as cores 
     let canDraw = false;
     //Modo desenho Esta desenhado pode ou não pode?

     //pegando a posição do mouse
     let mouseX = 0;
     let mouseY = 0;
    // selecionando a tela 
    let screen = document.querySelector('#tela');
    let ctx = screen.getContext('2d');

// events 
    document.querySelectorAll('.colorArea .color').forEach(item => {
        item.addEventListener('click', colorClickEvent);
    });
    screen.addEventListener('mousedown', mouseDownEvent);
    screen.addEventListener('mousemove', mouseMoveEvent);
    screen.addEventListener('mouseup', mouseUpEvent);
// limpar quadro
    document.querySelector('.clear').addEventListener('click', clearScreen);




    // functions
    function colorClickEvent(e) {
        let color = e.target.getAttribute('data-color');
        currentColor = color;

        // tirando a cor do active

        document.querySelector('.color.active').classList.remove('active');
        // adicionando em quem eu clicar 
        e.target.classList.add('active');
    }
    
    
    function mouseDownEvent(e){
        canDraw = true;
        mouseX = e.pageX - screen.offsetLeft;
        mouseY = e.pageY - screen.offsetTop;
    }
    
    function mouseMoveEvent(e) {
        if(canDraw) {
                draw(e.pageX, e.pageY);
            // canDraw();
            //função para mostrar a pocisão do mouse 
  
           
        }
    }

    function mouseUpEvent() {
        canDraw = false;
    }

    function draw(x,  y) {
        let pointX = x - screen.offsetLeft;
        let pointY = y - screen.offsetTop;

        ctx.beginPath();
        ctx.lineWidth = 5;
        ctx.lineJoin = "round";
        ctx.moveTo(mouseX, mouseY);
        ctx.lineTo(pointX, pointY);
        ctx.closePath();
        ctx.strokeStyle = currentColor;
        ctx.stroke();

        // desenhar 
        mouseX = pointX;
        mouseY = pointY;

    }

    function clearScreen(){
        // função para limpar quadro! zerar o cursor de desenho
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }














