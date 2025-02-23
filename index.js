const readline = require('readline');
const math = require('./solution');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("=== Kalkulator Sederhana ===");
console.log("1. Tambah\n2. Kurang\n3. Kali\n4. Bagi\n5. Pangkat\n6. Faktorial\n7. Cek Prima\n8. Modulus\n9. Absolut\n10. Maksimum\n11. Minimum\n12. Bulatkan");

rl.question("Pilih operasi (1-12): ", (choice) => {
    if (choice >= 1 && choice <= 12) {
        rl.question("Masukkan angka pertama: ", (a) => {
            a = parseFloat(a);
            if (choice == 6 || choice == 7) {
                console.log("Hasil:", choice == 6 ? math.faktorial(a) : math.isPrima(a));
                rl.close();
            } else {
                rl.question("Masukkan angka kedua: ", (b) => {
                    b = parseFloat(b);
                    let hasil;
                    switch (choice) {
                        case '1': hasil = math.tambah(a, b); break;
                        case '2': hasil = math.kurang(a, b); break;
                        case '3': hasil = math.kali(a, b); break;
                        case '4': hasil = math.bagi(a, b); break;
                        case '5': hasil = math.pangkat(a, b); break;
                        case '8': hasil = math.modulus(a, b); break;
                        case '9': hasil = math.absolut(a); break;
                        case '10': hasil = math.maksimum(a, b); break;
                        case '11': hasil = math.minimum(a, b); break;
                        case '12': hasil = math.bulatkan(a); break;
                        default: hasil = "Pilihan tidak valid"; break;
                    }
                    console.log("Hasil:", hasil);
                    rl.close();
                });
            }
        });
    } else {
        console.log("Pilihan tidak valid!");
        rl.close();
    }
});
