# Verdaccio als Registry
Eine NPM Package registry die selbst als Node Paket daherkommt. Verdaccio
ist eine sehr simple Registry ohne Aufwand bei der Einrichtung oder Konfiguration.

Die Installation erfolgt als globales Node Paket
```bash
npm install --global verdaccio
```

Starten lässt sich dann Verdaccio mittels des nach der Installation verfügbaren 
Befehls
```bash
verdaccio
```

Um jetzt mittels npm auf die neue Registry zugreifen zu können muss diese noch
bekannt gemacht werden. Dazu können wir auf Umgebungsvariablen, den Befehl
`npm set registry` oder die Datei **.npmrc** verwenden.

Beispiel mit *.npmrc*:
```
registry=http://localhost:4873
```

Veröffentlichen können wir innerhalb der registry nur dann, sofern wir einen
Benutzer haben. Den können wir einfach über die Konsole anlegen und anschließend
mit dem Befehl `publish` unser Paket "veröffentlichen"

```bash
npm adduser --registry http://localhost:4873
npm publish --registry http://localhost:4873
```
