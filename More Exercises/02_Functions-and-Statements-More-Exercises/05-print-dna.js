function printDNA(n) {
    let symbols = ["A", "T", "C", "G", "T", "T", "A", "G", "G", "G"];
    for (let i = 0; i < n; i++) {
        let symbol = symbols[(i * 2) % symbols.length];
        let pair = symbols[(i * 2 + 1) % symbols.length];
        let output = "";

        switch (i % 4) {
            case 0:
                output += "**" + symbol + pair + "**\n";
                break;
            case 1:
                output += "*" + symbol + "--" + pair + "*\n";
                break;
            case 2:
                output += symbol + "----" + pair + "\n";
                break;
            case 3:
                output += "*" + symbol + "--" + pair + "*\n";
                break;
        }
        console.log(output.trim());
    }
}

printDNA(10);   // **AT**
                // *C--G*
                // T----T
                // *A--G*
                // **GG**
                // *A--T*
                // C----G
                // *T--T*
                // **AG**
                // *G--G*
