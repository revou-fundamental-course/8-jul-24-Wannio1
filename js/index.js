const submitBtn = document.getElementById('submit-bmi')
const hasilBmi = document.getElementById('hasilbmi')

submitBtn.addEventListener('click', function(e){
    e.preventDefault();
    
    const beratBadan = document.getElementById('Berat-Badan').value;
    const tinggiBadan = document.getElementById('Tinggi-Badan').value;
    
   let bmi = (beratBadan / ((tinggiBadan * tinggiBadan) / 10000)).toFixed(1);
    
    hasilBmi.innerHTML = bmi
    
    const statusBmi = document.getElementById('status')
    let status =''
    
    if (bmi <= 18.5) {
    status = "Kekurangan berat badan";
  } else if (bmi > 18.5 && bmi <= 24.9) {
    status = "Normal / Ideal";
  } else if (bmi >= 25.0 && bmi <= 29.9) {
    status = "Kelebihan berat badan";
  } else {
    status = "Kegemukan / Obesitas";
  }
    statusBmi.innerHTML = status;
    
    const jenisKelamin = document.getElementsByName('selection-Gender')
    const usia = document.getElementById('usia').value;
    const keteranganBmi = document.getElementById('keterangan')
    
    for (i = 0; i < jenisKelamin.length; i++) {
        if (jenisKelamin[i].checked) {
            keteranganBmi.innerHTML = `Anda berjenis kelamin ${jenisKelamin[i].value} dan berusia ${usia}. Anda berada dalam kategori ${status}`;
        }
    }
});

const resetBtn = document.getElementById('reset')
    resetBtn.addEventListener('click', function (e){
        e.preventDefault();
        hasilBmi.innerHTML = "00,0";
        document.getElementById("Berat-Badan").value ="";
        document.getElementById("Tinggi-Badan").value ="";
        document.getElementById("usia").value ="";
        document.getElementById("status").innerHTML ="";
        document.getElementById("keterangan").innerHTML =
        "Anda Belum Memasukkan Nilai Berat Badan Dan Tinggi Badan";
        
        for (i = 0; i < jenisKelamin.length; i++) {
            jenisKelamin[i].checked = false;
        }
    });