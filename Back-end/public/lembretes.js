document.addEventListener('DOMContentLoaded', function() {
        console.log('DOM carregado com sucesso!')
       
        // botão adicionar lembrete
        document.getElementById('btnAdd').addEventListener('click', function() {
            addLembrete();
        });
  });

  // função para verificar se há texto no input
    function checkInput(texto) {
        if (texto == null || texto == "" || texto.lenght < 1 ) {
            return false;
        } else {
            return true;
        }
    }
 // mostrar erro 
    function showError() {  
        let html = "";
        html += '<div class="alert alert-danger" role="alert">';
        html += 'Por favor, digite um lembrete!';
        html += '</div>';

        document.getElementById('error').innerHTML = html;
        
    }

    // função limpar erro
    function clearError() {
        document.getElementById('error').innerHTML = "";
    }

    // função para adicionar lembrete
    function addLembrete() {
       let texto = document.getElementById('texto').value;
         if (!checkInput(texto)) {
            showError();
        } else {
            clearError();
        }
            
    }
