const readline = require('readline');
const math = require('./solution');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("=== Kalkulator Sederhana ===");
console.log("1. Tambah\n2. Kurang\n3. Kali\n4. Bagi\n5. Pangkat\n6. Faktorial\n7. Cek Prima\n8. Modulus\n9. Absolut\n10. Maksimum\n11. Minimum\n12. Bulatkan");

rl.question("Pilih operasi (1-12): ", (choice) => {
    if (!['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'].includes(choice)) {
        console.log("Pilihan tidak valid!");
        rl.close();
        return;
    }

    rl.question("Masukkan angka pertama: ", (a) => {
        a = parseFloat(a);
        if (isNaN(a)) {
            console.log("Input harus berupa angka!");
            rl.close();
            return;
        }

        if (choice === '6') {  // Faktorial
            console.log("Hasil:", math.faktorial(a));
            rl.close();
            return;
        }

        if (choice === '7') {  // Cek Prima
            console.log("Hasil:", math.isPrima(a));
            rl.close();
            return;
        }

        if (choice === '9') {  // Absolut
            console.log("Hasil:", math.absolut(a));
            rl.close();
            return;
        }

        if (choice === '12') { // Bulatkan
            console.log("Hasil:", math.bulatkan(a));
            rl.close();
            return;
        }

        rl.question("Masukkan angka kedua: ", (b) => {
            b = parseFloat(b);
            if (isNaN(b)) {
                console.log("Input harus berupa angka!");
                rl.close();
                return;
            }

            let hasil;
            switch (choice) {
                case '1': hasil = math.tambah(a, b); break;
                case '2': hasil = math.kurang(a, b); break;
                case '3': hasil = math.kali(a, b); break;
                case '4': hasil = math.bagi(a, b); break;
                case '5': hasil = math.pangkat(a, b); break;
                case '8': hasil = math.modulus(a, b); break;
                case '10': hasil = math.maksimum(a, b); break;
                case '11': hasil = math.minimum(a, b); break;
                default: hasil = "Pilihan tidak valid"; break;
            }

            console.log("Hasil:", hasil);
            rl.close();
        });
    });
});
