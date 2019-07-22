const co = require('./checkout');

test('printReceipt returns a receipt', () => {
  expect(typeof co.printReceipt(co.input1)).toBe('object');
});

test('printReceipt returns correct sales tax', () => {
  expect(co.printReceipt(co.input1).salesTotal).toEqual(10);
});

test('printReceipt returns correct total', () => {
  expect(co.printReceipt(co.input1).total).toEqual(126.98);
});

test('calcSalesTax returns correct sales tax', () => {
  expect(co.calcSalesTax({ qty: 1, desc: 'Walkman', price: 99.99, sales: true, import: false }).salesTax).toEqual(10);
});

test('calcSalesTax returns no sales tax for exempt items', () => {
  expect(co.calcSalesTax({ qty: 1, desc: '16lb bag of Skittles', price: 16.00, sales: false, import: false }).salesTax).toEqual(0);
});

test('calcImportTax returns correct import tax', () => {
  expect(co.calcImportTax({ qty: 1, desc: 'Imported bag of Vanilla-Hazelnut Coffee', price: 11.00, sales: false, import: true }).importTax).toEqual(.55);
});

test('calcImportTax returns no import tax for non-imports', () => {
  expect(co.calcImportTax({ qty: 1, desc: 'Walkman', price: 99.99, sales: true, import: false }).importTax).toEqual(0);
});