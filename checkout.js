const input1 = [
  { qty: 1, desc: '16lb bag of Skittles', price: 16.00, sales: false, import: false },
  { qty: 1, desc: 'Walkman', price: 99.99, sales: true, import: false },
  { qty: 1, desc: 'Bag of microwave Popcorn', price: .99, sales: false, import: false }
];

const input2 = [
  { qty: 1, desc: 'Imported bag of Vanilla-Hazelnut Coffee', price: 11.00, sales: false, import: true },
  { qty: 1, desc: 'Imported Vespa', price: 15001.25, sales: true, import: true }
];

const input3 = [
  { qty: 1, desc: 'Imported crate of Almond Snickers', price: 75.99, sales: false, import: true },
  { qty: 1, desc: 'Discman', price: 55.00, sales: true, import: false },
  { qty: 1, desc: 'Imported Bottle of Wine', price: 10.00, sales: true, import: true },
  { qty: 1, desc: '300# bag of Fair-Trade Coffee', price: 997.99, sales: false, import: false }
];

function calcSalesTax(item) {
  if (item.sales) {
    const salesTax = .1 * item.price;
    item.salesTax = Math.ceil(salesTax * 20)/20;
  } else {
    item.salesTax = 0;
  }

  return item;
}

function calcImportTax(item) {
  if (item.import) {
    const importTax = .05 * item.price;
    item.importTax = Math.ceil(importTax * 20)/20;
  } else {
    item.importTax = 0;
  }

  return item;
}

function printReceipt(items) {
  let total = 0;
  let salesTotal = 0;

  items.forEach(item => {
    item = calcImportTax(calcSalesTax(item));
    console.log(`${item.qty} ${item.desc}: ${(item.price + item.salesTax + item.importTax).toFixed(2)}`);
    total = total + (item.qty * (item.price + item.salesTax + item.importTax));
    salesTotal = salesTotal + (item.salesTax + item.importTax);
  });

  console.log(`Sales Taxes: ${salesTotal.toFixed(2)}`);
  console.log(`Total: ${total.toFixed(2)}\n`);

  return {
    items,
    salesTotal: parseFloat(salesTotal.toFixed(2)),
    total: parseFloat(total.toFixed(2))
  };
}

module.exports = {
  input1,
  input2,
  input3,
  printReceipt,
  calcSalesTax,
  calcImportTax
};