document.getElementById('btn-case').addEventListener('click', function () {
   const caseNumber = document.getElementById('btn-case-number');
   const caseNumberString = caseNumber.value;
   const previousCaseNumber = parseFloat(caseNumberString);
   const newCaseNumber = previousCaseNumber + 1;
   caseNumber.value = newCaseNumber;
   // console.log(newCaseNumber);
})