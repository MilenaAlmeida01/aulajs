

### 🧠 **Atualização Completa (em Markdown)**

# 🧠 Condição, Comparação e Operadores Lógicos em JavaScript

## 📌 O que é uma Condição?
Uma **condição** é um teste que pode ser **verdadeiro (`true`)** ou **falso (`false`)**.

---

## 🧾 Operadores de Comparação

| Operador | Significado            | Exemplo (`a = 5, b = 10`) | Resultado |
|----------|------------------------|----------------------------|-----------|
| `>`      | Maior que              | `a > b`                    | false     |
| `<`      | Menor que              | `a < b`                    | true      |
| `>=`     | Maior ou igual         | `a >= 5`                   | true      |
| `<=`     | Menor ou igual         | `b <= 10`                  | true      |
| `===`    | Igual (valor e tipo)   | `a === '5'`                | false     |
| `!==`    | Diferente (valor/tipo) | `a !== b`                  | true      |

---

## ➗ Operador de Resto (`%`)
Retorna o **resto da divisão** entre dois números.

### 📌 Exemplos:
```js
console.log(10 % 2); // 0 → número par
console.log(7 % 2);  // 1 → número ímpar
````

### 💡 Usado para saber se um número é par:

```js
const numero = 8;

if (numero % 2 === 0) {
  console.log("É par.");
} else {
  console.log("É ímpar.");
}
```

---

## ⚙️ Estrutura de Controle de Fluxo (if, else, else if)

```js
if (condicao) {
  // se for verdadeiro, executa aqui
} else {
  // se for falso, executa aqui
}
```

### 🧪 Exemplo 1: Verificar idade para dirigir

```js
const idade = 18;

if (idade >= 18) {
  console.log("Você pode dirigir.");
} else {
  console.log("Você ainda não pode dirigir.");
}
```

---

### 🧪 Exemplo 2: Avaliação de nota com várias condições

```js
const nota = 7;

if (nota >= 9) {
  console.log("Excelente!");
} else if (nota >= 6) {
  console.log("Você passou.");
} else {
  console.log("Reprovado.");
}
```

---

## 🔗 Operadores Lógicos

Usados para **combinar condições** ou criar condições mais complexas.

---

### ✅ `&&` (E lógico)

Só é verdadeiro se **todas** as condições forem verdadeiras.

```js
const idade = 20;
const temCarteira = true;

if (idade >= 18 && temCarteira) {
  console.log("Pode dirigir.");
}
```

---

### ✅ `||` (OU lógico)

É verdadeiro se **pelo menos uma** das condições for verdadeira.

```js
const temDinheiro = false;
const temCartao = true;

if (temDinheiro || temCartao) {
  console.log("Pode fazer a compra.");
}
```

---

### ✅ `!` (NÃO lógico)

Inverte o valor da condição.

```js
const estaChovendo = false;

if (!estaChovendo) {
  console.log("Pode sair sem guarda-chuva.");
}
```
