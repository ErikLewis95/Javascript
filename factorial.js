function factorial(n) {
  // write code here
  if (n === 0) {
    // supaya kalau n nya 0, factorial tetap me return 1 untuk dikalikan di else
    return 1;
  } else {
    // mengalikan n yang sekarang dengan hasil dari factorial di return berikutnya
    return n * factorial(n - 1); // 5 * 4 * 3 * 2 * 1
  }
}

console.log(factorial(5));