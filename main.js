const student = {
  prn: "24070521091",
  name: "Sparsh Goswami",
  caseStudyTitle: "Experiment 1: Inline, Internal, and External JavaScript",
  filePath: __filename
};

const environmentInfo = {
  platform: process.platform,
  nodeVersion: process.version,
  currentDirectory: process.cwd(),
  runTime: new Date().toLocaleString()
};

function showHeader() {
  console.log(`${student.prn}: ${student.name}`);
  console.log(`Student Name: ${student.name}`);
  console.log(`PRN: ${student.prn}`);
  console.log(`File Path: ${student.filePath}`);
  console.log(`Case Study Title: ${student.caseStudyTitle}`);
  console.log("\nCase Study Program Code:");
  console.log("Demonstrates inline, internal, and external JavaScript concepts.");
  console.log("\nOutput:");
}

function demonstrateJavaScriptTypes() {
  console.log("Welcome message: Hello, Sparsh! Welcome to JavaScript Practical 1.");
  console.log("\nInline JavaScript example:");
  console.log('<button onclick="alert(\'Welcome!\')">Click Me</button>');

  console.log("\nInternal JavaScript example:");
  console.log("<script>console.log('This is internal JavaScript.');</script>");

  console.log("\nExternal JavaScript example:");
  console.log('<script src="main.js"></script>');
}

function logEnvironmentInfo() {
  console.log("\nUser environment information:");
  console.table(environmentInfo);
}

function demonstrateConsoleMethods() {
  console.log("console.log(): Normal information message displayed successfully.");
  console.error("console.error(): Sample error message for demonstration.");
  console.trace("console.trace(): Trace showing the function call path.");
}

showHeader();
demonstrateJavaScriptTypes();
logEnvironmentInfo();
demonstrateConsoleMethods();
