export const customers = [
  {
    id: 1,
    name: "John Doe",
    gender: "M",
  },
  {
    id: 2,
    name: "Johnny Doe",
    gender: "F",
  },
];

export const invoices = [
  {
    customer_id: customers[0].id,
    amount: 15795,
    status: "pending",
    date: "2022-12-06",
  },
  {
    customer_id: customers[1].id,
    amount: 20348,
    status: "pending",
    date: "2022-11-14",
  },
  // ...
];
