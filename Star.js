//bintang segitiga terbalik
n = 5
for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
        if (i + j < n) {
            process.stdout.write("*");
        }
        if (j == n - 1) {
            process.stdout.write("\n");
        }
    }
}

//bintang berbentuk layangan
n = 3
for (i = 0; i < n; i++) {
    for (j = i + 1; j < n; j++) {
        process.stdout.write(" ")
    }

    for (j = 0; j <= i; j++) {
        process.stdout.write("*")
        if (j < i) {
            process.stdout.write(" ")
        }
    }
    process.stdout.write("\n")
}
for (i = 1; i < n; i++) {
    for ( j = 0; j < i; j++){
        process.stdout.write(" ")
    }
    for (j = 1 + i; j <= n; j++) {
        process.stdout.write("*");
        if (j < n){
        process.stdout.write(" ")
        }

    }
    process.stdout.write("\n")
}