
document.addEventListener('DOMContentLoaded', function () {
  console.log('DOM carregado com sucesso!')

  // botão adicionar lembrete
  document.getElementById('btnAdd').addEventListener('click', function () {
    addLembrete()
  })
})

// função para verificar se há texto no input
function checkInput(texto) {
  if (texto == null || texto == '' || texto.lenght < 1) {
    return false
  } else {
    return true
  }
}
// mostrar erro
function showError() {
  let html = ''
  html += '<div class="alert alert-danger" role="alert">'
  html += 'Por favor, digite um lembrete!'
  html += '</div>'

  document.getElementById('error').innerHTML = html
}

// função limpar erro
function clearError() {
  document.getElementById('error').innerHTML = ''
}

// função para adicionar lembrete
function addLembrete() {
  let texto = document.getElementById('texto')
  if (!checkInput(texto)) {
    showError()
  } else {
    clearError()
    // criar data
    let data = new Date()
    let id = data.getTime()
    let date = data.toLocaleDateString()
    let texto = document.getElementById('texto').value
    // criar objeto lembrete
    let lembrete = {
      id: id,
      date: date,
      texto: texto,
    }
    // função para salvar lembrete
    verificaLembrete(lembrete)
  }

  function verificaLembrete(lembrete) {
    let lembreteExistente = localStorage.getItem('lembrete')
    if (lembreteExistente == null || lembreteExistente == '') {
      let lembretesExistentes = []
      lembretesExistentes.push(lembrete)
      // salvar Lembrete
      saveLembrete(lembrete)
    } else {
        let lembretesExistentes = JSON.parse(lembreteExistente)
        lembretesExistentes.push(lembrete)
        // salvar Lembrete
        saveLembrete(lembretesExistentes)
    }

    document.getElementById('texto').value = ''
    
  }

  function saveLembrete(lembrete) {
    let lembretesJSON = JSON.stringify(lembrete)
    localStorage.setItem('lembrete', lembretesJSON)
    // mostrar lembrete
    showLembrete()
  }
  // função para mostrar lembrete
  function showLembrete() {
    let html = ''
    let lembretesExistentes = localStorage.getItem('lembrete')
    if (!checkInput(lembretesExistentes)) {
      html += '<div class="alert alert-warning" role="alert">'
      html += 'Nenhum lembrete encontrado!'
      html += '</div>'
      document.getElementById('lembrete').innerHTML = html
    } else {
        let lembretesRecuperados = JSON.parse(lembretesExistentes)
        for(let i = 0; i < lembretesRecuperados.length; i++) {
            html += '<div class="alert alert-success" role="alert">'
            html += lembretesRecuperados[i].texto
            html += '</div>'
        }
        document.getElementById('lembrete').innerHTML = html
  }
}
}
  
