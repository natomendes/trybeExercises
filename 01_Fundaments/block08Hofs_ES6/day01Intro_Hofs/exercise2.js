const prizeDraw = () => Math.floor(Math.random() * 5);

const checkResult = (ticketNumber, func) => (
  ticketNumber === func() 
  ? 'Parabéns você ganhou'
  : 'Tente novamente' 
);

console.log(checkResult(4, prizeDraw))