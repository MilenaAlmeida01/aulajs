//  Faça uma função que verifica se um usuário pode ou não assistir um filme +16
//  verifique a idade do usuário ou se ele está com os pais

function verificarPodeAssistir(idade, comPais) {
  if (idade>=16 || comPais) {
    console.log("pode assistir")
  }else console.log("nao pode assistir")
}


verificarPodeAssistir(13, false)
verificarPodeAssistir(18, false)
verificarPodeAssistir(16, false)
verificarPodeAssistir(13, true)
verificarPodeAssistir(18, true)