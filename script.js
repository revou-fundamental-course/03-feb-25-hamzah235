document.getElementById('temperatureForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Mencegah form submit
  
    // Ambil nilai input
    const temperature = parseFloat(document.getElementById('temperature').value);
    const unit = document.getElementById('unit').value;
  
    // Validasi input
    if (isNaN(temperature)) {
      alert('Masukkan suhu yang valid!');
      return;
    }
  
    // Konversi suhu
    let convertedTemp, explanation;
    if (unit === 'celsius') {
      convertedTemp = (temperature * 9 / 5) + 32; // Celsius ke Fahrenheit
      explanation = `${temperature}°C sama dengan ${convertedTemp.toFixed(2)}°F`;
    } else {
      convertedTemp = (temperature - 32) * 5 / 9; // Fahrenheit ke Celsius
      explanation = `${temperature}°F sama dengan ${convertedTemp.toFixed(2)}°C`;
    }
  
    // Tampilkan hasil
    document.getElementById('convertedTemperature').textContent = convertedTemp.toFixed(2);
    document.getElementById('explanation').textContent = explanation;
    document.getElementById('result').classList.remove('hidden');
  });