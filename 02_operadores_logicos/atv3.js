/*
===========================================
🎮 Atividade: Verificação de Acesso ao Boss Final
===========================================

📘 Cenário:
No seu jogo, o jogador quer acessar a batalha contra o Boss Final.
Para isso, ele precisa cumprir uma série de requisitos relacionados
ao seu progresso e condição atual.

🧾 Regras para poder enfrentar o Boss:

1. O jogador precisa ter pelo menos nível 25.
2. A vida atual deve ser maior que 50% da vida máxima.
3. Deve possuir pelo menos 1 chave lendária no inventário.
4. A energia precisa ser maior que 30.
   - Se a energia for menor ou igual a 30, o jogador só pode continuar se for VIP.
5. O jogador precisa estar com a vida cheia
   OU ter pelo menos 3 poções de cura.


🎲 Os dados que você tem disponível são:

- vidaAtual (número)
- qtdMoedas (número)
- possuiAmuletoMagico (booleano)
- chavesLendarias (número)
- nivel (número)
- vidaMaxima (número)
- energia (número)
- nomeDoJogador (string)
- isVIP (booleano)
- qtdPocoes (número)
- estaEmMissaoSecundaria (booleano)
- pontosDeReputacao (número)
- isAdmin (booleano)

🎯 A função deve exibir no console:

- "🔥 Batalha autorizada! Prepare-se para o Boss." se todas as condições forem atendidas
- "🚫 Você ainda não pode enfrentar o Boss." caso contrário

*/

/**
 * 
 *   
 *   num1 + num2 = adição
 *   num1 - num2 = subtração
 *   num1 * num2 = multiplicação
 *   num1 / num2 = divisão
 * 
 */

/**1- nivel>=25
 * 
 * 2- vidaMaxima, vidaAtual
 * vidaAtual>50% =vidaMaxima
 * vidaAtual> vidaMaxima/2
 * 
 * 
 * 3-chavelendaria>=1
 * 
 * 
 * 4- (energia>30)|| (energia<=30 && isVIP)
 * 
 * 5- (vidaAtual= vidaMaxima) || (qntPocoes>= 3)
 * 
 *   
 * 
 * 
 */

function saberPodeAcessarBatalha( 
   nivel,
   vidaMaxima,
   vidaAtual, 
   chavesLendarias, 
   energia,
   qtdPocoes,
   isVip
) {    
   if (nivel>=25
      && vidaAtual> vidaMaxima/2
      && chavesLendarias >= 1
      && (energia>30 || energia <= 30 && isVip)
      && (vidaAtual === vidaMaxima || qtdPocoes>= 3)


   )
      {
      return "🔥 Batalha autorizada! Prepare-se para o Boss"
   } else{
      return "🚫 Você ainda não pode enfrentar o Boss"

   }

}

module.exports = { saberPodeAcessarBatalha };