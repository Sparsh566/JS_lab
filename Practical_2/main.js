const student = {
  prn: "24070521091",
  name: "Sparsh Goswami",
  caseStudyTitle: "Experiment 2: Variables, Template Literals, Destructuring, and Billing Calculator",
  filePath: __filename
};

function showHeader() {
  console.log(`${student.prn}: ${student.name}`);
  console.log(`Student Name: ${student.name}`);
  console.log(`PRN: ${student.prn}`);
  console.log(`File Path: ${student.filePath}`);
  console.log(`Case Study Title: ${student.caseStudyTitle}`);
  console.log("\nCase Study Program Code:");
  console.log("Uses var, let, const, template literals, destructuring, and billing calculation.");
  console.log("\nOutput:");
}

function readBillingInput() {
  var defaultCustomerName = "Sparsh Goswami";
  let quantity = Number(process.argv[2]) || 3;
  let pricePerItem = Number(process.argv[3]) || 499;
  let discountPercent = Number(process.argv[4]) || 10;
  const gstPercent = 18;

  return {
    customerName: process.argv[5] || defaultCustomerName,
    quantity,
    pricePerItem,
    discountPercent,
    gstPercent
  };
}

function calculateBill(order) {
  const { customerName, quantity, pricePerItem, discountPercent, gstPercent } = order;

  let subtotal = quantity * pricePerItem;
  let discountAmount = (subtotal * discountPercent) / 100;
  let taxableAmount = subtotal - discountAmount;
  let gstAmount = (taxableAmount * gstPercent) / 100;
  let finalAmount = taxableAmount + gstAmount;

  return {
    customerName,
    quantity,
    pricePerItem,
    subtotal,
    discountPercent,
    discountAmount,
    gstPercent,
    gstAmount,
    finalAmount
  };
}

function printBill(bill) {
  const {
    customerName,
    quantity,
    pricePerItem,
    subtotal,
    discountPercent,
    discountAmount,
    gstPercent,
    gstAmount,
    finalAmount
  } = bill;

  console.log(`Customer Name: ${customerName}`);
  console.log(`Quantity: ${quantity}`);
  console.log(`Price Per Item: Rs. ${pricePerItem.toFixed(2)}`);
  console.log(`Subtotal: Rs. ${subtotal.toFixed(2)}`);
  console.log(`Discount (${discountPercent}%): Rs. ${discountAmount.toFixed(2)}`);
  console.log(`GST (${gstPercent}%): Rs. ${gstAmount.toFixed(2)}`);
  console.log(`Final Bill Amount: Rs. ${finalAmount.toFixed(2)}`);

  console.log("\nBilling Summary Table:");
  console.table([
    { item: "Subtotal", amount: subtotal.toFixed(2) },
    { item: "Discount", amount: discountAmount.toFixed(2) },
    { item: "GST", amount: gstAmount.toFixed(2) },
    { item: "Final Amount", amount: finalAmount.toFixed(2) }
  ]);
}

showHeader();
const billingInput = readBillingInput();
const bill = calculateBill(billingInput);
printBill(bill);
