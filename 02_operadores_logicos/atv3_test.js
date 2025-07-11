const { saberPodeAcessarBatalha } = require('./atv3');

function testar(caso, esperado, ...args) {
  const resultado = saberPodeAcessarBatalha(...args);
  const passou = resultado === esperado;
  const simbolo = passou ? '✅' : '❌';
  console.log(`${simbolo} ${caso}: ${resultado}`);
}

const autorizado = "🔥 Batalha autorizada! Prepare-se para o Boss";
const negado = "🚫 Você ainda não pode enfrentar o Boss";

// ✅ Casos que devem ser autorizados
testar("Caso 1 - Todos os critérios OK com vida cheia", autorizado,
  30, 100, 100, 1, 40, 0, false);

testar("Caso 2 - Vida não cheia, 3 poções", autorizado,
  28, 100, 60, 2, 45, 3, false);

testar("Caso 3 - Energia baixa, mas é VIP", autorizado,
  30, 100, 80, 2, 25, 3, true);

testar("Caso 4 - Vida não cheia, energia baixa, VIP e poções", autorizado,
  25, 80, 60, 1, 10, 3, true);

// ❌ Casos que devem ser negados
testar("Caso 5 - Nível abaixo de 25", negado,
  20, 100, 100, 2, 40, 2, false);

testar("Caso 6 - Vida abaixo de 50%", negado,
  28, 100, 40, 3, 50, 2, false);

testar("Caso 7 - Sem chave lendária", negado,
  30, 100, 100, 0, 50, 2, false);

testar("Caso 8 - Energia baixa e não é VIP", negado,
  30, 100, 100, 2, 20, 3, false);

testar("Caso 9 - Vida não cheia e menos de 3 poções", negado,
  30, 100, 80, 2, 50, 1, false);

testar("Caso 10 - Vários erros juntos", negado,
  10, 100, 30, 0, 10, 0, false);
