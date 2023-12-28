function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}



function hitungLuasDanKelilingPersegiPanjang() {
  var panjang = document.getElementById("panjang").value;
  var lebar = document.getElementById("lebar").value;

  var luas = panjang * lebar;
  var keliling = 2 * (parseInt(panjang) + parseInt(lebar));

  document.getElementById("luasPersegi").value = luas;
  document.getElementById("kelilingPersegi").value = keliling;

}

function hitung() {
  
  var sisi = parseFloat(document.getElementById('sisi').value);

  var luas = sisi * sisi;
  var keliling = 4 * sisi;

  document.getElementById('luas').innerHTML = 'Luas: ' + luas;
  document.getElementById('keliling').innerHTML = 'Keliling: ' + keliling;

}

function resetForm() {
  // Reset nilai input
  document.getElementById('sisi').value = '';

  // Reset hasil
  document.getElementById('luas').innerHTML = 'Luas: ';
  document.getElementById('keliling').innerHTML = 'Keliling: ';
}

function hitungLingkaran() {
 
  var jariJari = document.getElementById("jariJari").value;

  var luas = Math.PI * jariJari * jariJari;
  var keliling = 2 * Math.PI * jariJari;

  document.getElementById("luasLingkaran").innerHTML = "Luas Lingkaran = " + luas.toFixed(2) + " cm<sup>2</sup>";
  document.getElementById("kelilingLingkaran").innerHTML = "Keliling Lingkaran = " + keliling.toFixed(2) + " cm";

 
}

function resetLingkran() {
  document.getElementById("jariJari").value = "";
  document.getElementById("luasLingkaran").innerHTML = "";
  document.getElementById("kelilingLingkaran").innerHTML = "";
}