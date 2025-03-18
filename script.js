function generateForm() {
  document.getElementById("nama").disabled = "true";
  document.getElementById("pilihan").disabled = "true";
  document.getElementById("ok1").hidden = "true";

  let showInput = document.getElementById("dataInput");
  showInput.innerHTML = `<h3>Masukkan Data Pilihan Yang Akan Dipilih</h3>`;
  let pilihan = document.getElementById("pilihan").value;

  showInput.innerHTML += "";

  for (let i = 1; i <= pilihan; i++) {
    showInput.innerHTML += `<label for="pilihan${i}">Pilihan ${i} : </label>
          <input type="text" name="Pilihan ${i}" id="pilihan${i}" required /><br /><br />`;
  }

  showInput.innerHTML += `<button type="submit" id="ok2" onclick="generateDropDown()">Ok</button>`;
  showInput.style.display = "block";
}

function generateDropDown() {
  document.getElementById("ok2").hidden = "true";
  let pilihan = document.getElementById("pilihan").value;

  let opsi = [];
  
  for (let i = 1; i <= pilihan; i++) {
    let input = document.getElementById(`pilihan${i}`);
    let value = input.value.trim();
    opsi.push(value);
    input.disabled = true;
}

  let dropDown = document.getElementById("dropDown");
  dropDown.innerHTML = `<h3>Pilih Pilihan</h3>`;
  let select = document.createElement("select");
  select.id = "dropdown";


  opsi.forEach((pilihanItem) => {
    let option = document.createElement("option");
    option.value = pilihanItem;
    option.textContent = pilihanItem;
    select.appendChild(option);
  });

  dropDown.appendChild(select);

  let defaultOption = document.createElement("option");
  defaultOption.textContent = "Pilih";
  defaultOption.value = "";
  defaultOption.disabled = true;
  defaultOption.selected = true;
  select.appendChild(defaultOption);

  dropDown.appendChild(select);
  dropDown.style.display = "block";

  dropDown.addEventListener('change', function() {
    const selected = select.value;
    generateResult(selected,opsi);
  });
}

function generateResult(result,opsi) {
  let resultDiv = document.getElementById("result");
  let nama = document.getElementById("nama").value;
  let pilihan = document.getElementById("pilihan").value;
  resultDiv.innerHTML = `<h3>Result</h3>`; 
  resultDiv.innerHTML += `<p>Halo nama saya ${nama}, saya sejumlah ${pilihan} pilihan yaitu ${opsi.join(" ,")} saya memilih ${result}</p>`;
  resultDiv.style.display = "block"; 
}