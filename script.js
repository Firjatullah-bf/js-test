let inputValue = [];

function generateTable() {
  document.getElementById("nama").disabled = "true";
  document.getElementById("pilihan").disabled = "true";
  document.getElementById("ok1").hidden = "true";
  let generateTable = document.getElementById("content1");
  let pilihan = document.getElementById("pilihan").value;
  generateTable.innerHTML = "";

  for (let i = 1; i <= pilihan; i++) {
    let label = document.createElement("label");
    label.textContent = "Pilihan " + i + ": ";
    let input = document.createElement("input");

    input.name = "Pilihan " + i;
    input.type = "text";
    input.required = true;

    input.addEventListener("input", function () {
      inputValue[i] = input.value;
    });

    generateTable.appendChild(label);
    generateTable.appendChild(input);
    generateTable.appendChild(document.createElement("br"));
    generateTable.appendChild(document.createElement("br"));
  }

  document.getElementById("submitShow").style.display = "block";
}

function generateDropDownAndResult() {
  document.querySelectorAll("button").forEach(btn => btn.style.display = "none");

  let generateOptions = document.getElementById("content1");
  generateOptions.innerHTML = "";
  
  let select = document.createElement("select");
  select.id = "dropdownOptions"; 
  
  for (let i = 1; i <= inputValue.length; i++) {
    if (inputValue[i]) { 
      let option = document.createElement("option");
      option.value = inputValue[i]; 
      option.textContent = inputValue[i]; 
      select.appendChild(option); 
    }
  }
  select.addEventListener('change',function(){
    const selectedValue = select.value;
    showResult(selectedValue);
  })
  generateOptions.style.display = "block";

  generateOptions.appendChild(select); // Add the select to the content area
  generateOptions.appendChild(document.createElement("br")); // Add a line break
  document.getElementById("submitButton").style.display = "block";

  
}
function showResult(pilihan){
  let result = document.getElementById("Result");
  let nama = document.getElementsById("nama").value;

  result.innerHTML = "";

}

