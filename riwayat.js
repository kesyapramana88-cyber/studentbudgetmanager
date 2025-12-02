let pemasukan = JSON.parse(localStorage.getItem("pemasukan")||"[]");
let pengeluaran = JSON.parse(localStorage.getItem("pengeluaran")||"[]");

let gabung = [...pemasukan, ...pengeluaran];
let tbody = document.getElementById("tabelRiwayat");

gabung.forEach(t=>{
  let tr = document.createElement("tr");
  tr.innerHTML = `<td>${t.jenis}</td><td>Rp ${t.jumlah}</td><td>${t.kategori}</td><td>${t.tanggal}</td>`;
  tbody.appendChild(tr);
});
