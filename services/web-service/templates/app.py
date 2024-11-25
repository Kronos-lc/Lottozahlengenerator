from flask import Flask, render_template, jsonify  # render_template für HTML-Seiten, jsonify für JSON-Antworten
import random  # Bibliothek für Zufallszahlen

app = Flask(__name__)  # Flask-Anwendung initialisieren

@app.route('/')  # Route für die Startseite
def home():
    # Rendert die Willkommensseite (HTML)
    return render_template('index.html')

@app.route('/lotto')  # Route für die Lotteriezahlen-Seite
def lotto():
    numbers = sorted(random.sample(range(1, 50), 6))  # Generiert 6 Hauptzahlen (1-49)
    superzahl = random.randint(0, 9)  # Generiert eine Superzahl (0-9)
    return render_template('lotto.html', numbers=numbers, superzahl=superzahl)  # Übergibt die Zahlen an die HTML-Seite

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)  # Startet die Anwendung