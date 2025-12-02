let kategori = JSON.parse(localStorage.getItem("kategori")||"[]");
let ul = document.getElementById("listKategori");

function tampil(){
  ul.innerHTML = "";
  kategori.forEach(k=>{
    let li = document.createElement("li");
    li.textContent = k;
    ul.appendChild(li);
  });
}

document.getElementById("formKategori").addEventListener("submit", e=>{
  e.preventDefault();
  let nama = document.getElementById("namaKategori").value;
  kategori.push(nama);
  localStorage.setItem("kategori", JSON.stringify(kategori));
  tampil();
});

tampil();
