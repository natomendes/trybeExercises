/* Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
INSS (Instituto Nacional do Seguro Social)

Salário bruto até R$ 1.556,94: alíquota de 8%
Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88

IR (Imposto de Renda)
Até R$ 1.903,98: isento de imposto de renda
De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto. */

const fullSalary = 4000;
let inssDue;
if (fullSalary <= 1556.94) {
  inssDue = fullSalary * 0.08;
} else if ( fullSalary <= 2594.92) {
  inssDue = fullSalary * 0.09;
} else if ( fullSalary <= 5189.82) {
  inssDue = fullSalary * 0.11;
} else if ( fullSalary <= 2594.92) {
  inssDue = 570.88;
}

const salAfterInssDiscount = fullSalary - inssDue;

const irTable = [
  {
    salValue: 1903.98,
    rate: 0,
    discount: 0
  },
  {
    salValue: 2862.65,
    rate: 0.075,
    discount: 142.8
  },
  {
    salValue: 3751.05,
    rate: 0.15,
    discount: 354.8
  },
  {
    salValue: 4664.68,
    rate: 0.225,
    discount: 636.13
  },
  {
    salValue: 4664.68,
    rate: 0.275,
    discount: 869.36
  },
]

let irDue;

for (ir of irTable) {
  if(salAfterInssDiscount <= ir.salValue ) {
    irDue = (salAfterInssDiscount * ir.rate) - ir.discount;
    break;
  }
}

const liquidSalary = salAfterInssDiscount - irDue;

console.log('Salario Bruto:', fullSalary.toFixed(2));
console.log('Desconto Inss:', inssDue.toFixed(2));
console.log('Salario após Desc. Inss:', (fullSalary - inssDue).toFixed(2));
console.log('Desconto Ir:', irDue.toFixed(2));
console.log('Salario Liquido:', liquidSalary.toFixed(2));


