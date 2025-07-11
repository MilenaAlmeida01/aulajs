/**
 * Atividade: Verificador de Inscrição para Curso Online
 * 
 * Cenário: Você está desenvolvimento uma função que vai verificar se 
 * uma pessoa pode se inscrever no curso online
 * 
 * Regras:
 * 
 * Para que uma pessoa possa se inscrever, ela deve:
 * 
 * 1 - ter idade mínima de 16 anos
 * 2 - ter autoização dos pais se for menor de 18 anos
 * 3 - Não pode estar bloqueada no sistema
 * 4 - Deve ter aceito os termos de uso,0
 * 
 * 
 * Dica: A função que deve ser criado só deve ser responsável por
 * fazer a validação, os dados envolvidos são passados para ela
 * via parâmetros
 * 
 */



//


//// outro lugar do sistema
// const cargo = "caixa"


// // só tenho acesso a isso
// const isCargoCaixa = cargo === "caixa"

// function abrirTelaControleEstoque(isCargoCaixa) {
//   if (!isCargoCaixa) {
//     // chamar tela de cotrole de estoque
//   }  
// }

// idade>=16
//idade<18 && autorizacaoPais
//!bloqueadaSistema
//termosAceito


function verificarPodeInscrever(idade, autorizacaoPais, bloqueadoSistema, termosAceitos) {
  const isMaior16 = idade >= 16
  const isMenor18ComAutorizacao = idade < 18 && autorizacaoPais
  const isMaior18 = idade >= 18

  if (
    isMaior16 
    && (isMenor18ComAutorizacao || isMaior18) 
    && !bloqueadoSistema 
    && termosAceitos
  ) {
    console.log("pode inscrever")
  } else {
    console.log("nao pode se inscrever")
  }
}

verificarPodeInscrever(20, false, false, true);  // ✅ válido
verificarPodeInscrever(17, true, false, true);   // ✅ válido
verificarPodeInscrever(15, true, false, true);   // ❌ idade < 16
verificarPodeInscrever(17, false, false, true);  // ❌ sem autorização
verificarPodeInscrever(19, false, true, true);   // ❌ bloqueado
verificarPodeInscrever(22, false, false, false); // ❌ não aceitou termos
verificarPodeInscrever(16, true, false, false);  // ❌ termos não aceitos
verificarPodeInscrever(17, true, true, true);    // ❌ bloqueado
