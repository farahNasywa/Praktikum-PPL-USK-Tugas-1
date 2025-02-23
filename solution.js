function tambah(a, b) {
    return a + b;
}

function kurang(a, b) {
    return a - b;
}

function kali(a, b) {
    return a * b;
}

function bagi(a, b) {
    if (b === 0) throw new Error("Tidak bisa membagi dengan nol");
    return a / b;
}

function pangkat(a, b) {
    return Math.pow(a, b);
}

function faktorial(n) {
    if (!Number.isInteger(n) || n < 0) return null; // Mengembalikan null jika input negatif atau bukan bilangan bulat
    if (n === 0 || n === 1) return 1;
    return n * faktorial(n - 1);
}

function isPrima(n) {
    if (!Number.isInteger(n) || n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function modulus(a, b) {
    return a % b;
}

function absolut(a) {
    return Math.abs(a);
}

function maksimum(a, b) {
    return Math.max(a, b);
}

function minimum(a, b) {
    return Math.min(a, b);
}

function bulatkan(a) {
    return Math.round(a);
}

// Ekspor semua fungsi agar bisa digunakan di test.js dan index.js
module.exports = { 
    tambah, kurang, kali, bagi, pangkat, faktorial, isPrima, 
    modulus, absolut, maksimum, minimum, bulatkan 
};

