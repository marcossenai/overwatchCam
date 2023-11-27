var mediaStream;

        function abrirCamera(){
           navigator.mediaDevices.getUserMedia({ video: true, audio: false})
             .then(function(stream) {
                mediaStream = stream;
                const areaVideo = document.getElementById('camera');
                areaVideo.srcObject = stream;
             })
             .catch(function(error) {
                console.error('Erro ao acessar a câmera:', error)
             })
        }

        function tirarFoto() {
            const areaVideo = document.getElementById('camera');
            const canvas = document.createElement('canvas');
            canvas.width = areaVideo.videoWidth;
            canvas.height = areaVideo.videoHeight;
            const context = canvas.getContext('2d');
            context.drawImage(areaVideo, 0, 0, canvas.width, canvas.height);
            const imageDataURL = canvas.toDataURL();
            const fotoDiv = document.getElementById('foto');
            fotoDiv.style.backgroundImage = `url(${imageDataURL})`;
        
            // Criar o link de download
            const downloadLink = document.createElement('a');
            downloadLink.href = imageDataURL;
            downloadLink.download = 'foto.png';
            downloadLink.textContent = 'Clique aqui para baixar';
            
            // Adicionar estilos ao link de download
            downloadLink.style.display = 'block';
            downloadLink.style.padding = '10px';
            downloadLink.style.fontSize = '16px';
            downloadLink.style.backgroundColor = '#3498db';
            downloadLink.style.color = '#fff';
            downloadLink.style.textDecoration = 'none';
            downloadLink.style.border = 'none';
            downloadLink.style.borderRadius = '4px';
            downloadLink.style.cursor = 'pointer';
            downloadLink.style.marginTop = '5px';
        
            // Adicionar o link à página
            document.body.appendChild(downloadLink);
        }
        

        function fechar() {
            navigator.mediaDevices.getUserMedia({ video: false });
            const areaVideo = document.getElementById('camera');
            areaVideo.srcObject = null;
            mediaStream = null; 
        }