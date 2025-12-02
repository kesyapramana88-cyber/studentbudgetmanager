let pemasukan = JSON.parse(localStorage.getItem("pemasukan")||"[]");
let pengeluaran = JSON.parse(localStorage.getItem("pengeluaran")||"[]");

function updateDashboard(){
  let masuk = pemasukan.reduce((a,b)=>a+b.jumlah,0);
  let keluar = pengeluaran.reduce((a,b)=>a+b.jumlah,0);
  document.getElementById("totalMasuk").innerText = "Rp "+masuk;
  document.getElementById("totalKeluar").innerText = "Rp "+keluar;
  document.getElementById("saldo").innerText = "Rp "+(masuk-keluar);
}
updateDashboard();
