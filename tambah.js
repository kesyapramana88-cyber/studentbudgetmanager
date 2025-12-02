let kategori = JSON.parse(localStorage.getItem("kategori")||"[]");
let pemasukan = JSON.parse(localStorage.getItem("pemasukan")||"[]");
let pengeluaran = JSON.parse(localStorage.getItem("pengeluaran")||"[]");

let select = document.getElementById("kategori");
kategori.forEach(k => {
  let opt = document.createElement("option");
  opt.value = k; opt.textContent = k;
  select.appendChild(opt);
});

document.getElementById("formTransaksi").addEventListener("submit", e=>{
  e.preventDefault();
  let data = {
    jenis: document.getElementById("jenis").value,
    jumlah: parseInt(document.getElementById("jumlah").value),
    kategori: document.getElementById("kategori").value,
    tanggal: new Date().toLocaleDateString()
  };
  if(data.jenis==="pemasukan") pemasukan.push(data);
  else pengeluaran.push(data);

  localStorage.setItem("pemasukan", JSON.stringify(pemasukan));
  localStorage.setItem("pengeluaran", JSON.stringify(pengeluaran));

  alert("Tersimpan!");
});
