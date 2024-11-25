const express = require('express');  // Importiert Express.js für die Webserver-Funktionalität
const app = express();  // Initialisiert eine Express-Anwendung
const fs = require('fs');  // Importiert das Filesystem-Modul, um Dateien zu erstellen

app.get('/download', (req, res) => {  // Route für den Download-Endpunkt
    const data = "Lottoschein:\n" +  // Erstellt eine Zeichenkette für den Lottoschein
        Array.from({ length: 6 }, () => Math.floor(Math.random() * 49 + 1))  // Generiert 6 Zufallszahlen
        .join(', ');  // Verbindet die Zahlen zu einer Zeichenkette
    fs.writeFileSync('/app/lotto.txt', data);  // Schreibt die Daten in eine Datei lotto.txt
    res.download('/app/lotto.txt', 'lotto.txt');  // Bietet die Datei als Download an
});

app.listen(3000, () => {  // Startet den Server auf Port 3000
    console.log('Download-Service läuft auf Port 3000');  // Log-Meldung bei Start
});