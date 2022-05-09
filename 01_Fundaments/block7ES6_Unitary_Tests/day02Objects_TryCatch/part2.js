const order = {
  name: "Rafael Andrade",
  phoneNumber: "11-98763-1416",
  address: {
    street: "Rua das Flores",
    number: "389",
    apartment: "701",
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: "Coca-Cola Zero",
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: "Ana Silveira",
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  return `Olá ${order.order.delivery.deliveryPerson}
Entrega para: ${order.name},
Telefone: ${order.phoneNumber},
Endereço: ${order.address.street}, N: ${order.address.number}, AP: ${order.address.apartment}.`;
};

console.log(customerInfo(order));

const orderModifier = (order) => {
  order.name = 'Luiz Silva';
  order.payment.total = 50;
  return `Olá ${order.name}
Items do pedido: 
  ${order.order.pizza.marguerita.amount} Marguerita,
  ${order.order.pizza.pepperoni.amount} Pepperoni,
  ${order.order.drinks.coke.amount} ${order.order.drinks.coke.type}
Total do pedido: R$${order.payment.total}`

}

console.log(orderModifier(order));
