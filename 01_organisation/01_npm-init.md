# NPM - Node Package Manager

Wie der Name schon aussagt, ist npm ein Paketmanager für die Node Umgebung.
Bei der Installation von Node ist der npm Befehl das Command Line Interface
für den Manager. Über ihn werden die _dependencies_ von _packages_ mit einer
_version_ verwaltet und aus der _registry_ heruntergeladen.
Zusätzlich können standalone tools heruntergeladen werden oder aber auch
direkt ausgeführt werden.

## Packages

Der Code wird in die Packages verpackt. Diese können als dependency verwendet
werden und wiederum dependencies auf weitere Pakte haben. Zur Versionierung
wird das sogenannte **[Semantic Versioning](https://semver.org/)** benutzt.
Die Nummerierung erfolgt in drei Segmenten MAJOR.MINOR.PATCH (Beispiel 3.2.0).
Die MAJOR Version wird immer dann erhöht, wenn Änderungen gibt, die nicht
Abwärtskompatibel sind. Bei Erhöhung der MINOR Version können neue Funktionen
hinzukommen, sofern diese ohne Breaking Changes daherkommen. Die PATCH Version
wird für rückwärtskompatible Bug Fixes verwendet.

## Dependencies

Abhängigkeit von einem package auf ein anderes packages. Werden in drei
Gruppen aufgeteilt:

1.  **dependencies**
    Abhängigkeiten, die der ausgelieferte Code benötigt, um lauffähig zu sein.

2.  **development dependencies (dev-dependencies)**
    alle Abhängigkeiten die zur Entwicklung des package genutzt werden, die
    aber zur Laufzeit nicht benötigt werden (z.B.: das Build-System, der
    Typecript Compiler usw.)

3.  **peer dependencies**
    Können hilfreich sein um Versionskonflikte zu vermeiden. Drücken nur
    aus das die dependency im Projekt installiert sein muss, damit alles
    wie gewünscht funktioniert. Wenn die Abhängigkeit schon erfüllt ist,
    tue nichts, wenn diese aber noch nicht erfüllt wurde, warne nur das
    sie fehlt, aber installiere sie nicht.
    Eingesetzt werden sie vor allem bei Bibliotheken die ein gemeinsames
    Framework, in einer bestimmten Versions-Range, verwenden.

## Registry

Packages werden in einer Registry veröffentlicht. Jede Version darf nur
genau einmal in der Registry verfügbar gemacht werden. Bei der Installation
von Node und NPM wird die offizielle Registry von npmjs.org verwendet. In
dieser können mit einem kostenlosen Account Packages veröffentlicht werden,
private Packages sind nur gegen Bezahlung möglich.

Es besteht die Möglichkeit eigene Registries zu betreiben. Diese müssen nicht
über das öffentliche Internet erreichbar sein und können auch eine separate
Nutzerverwaltung beinhalten. Die Registry muss eine kompatible REST-API für das
Auffinden von Paketen bereitstellen.

Gerade im Unternehmensumfeld erfüllen eigene Registries noch einen weiteren
Zweck. Sie dienen als Cache zwischen dem CI-Server oder dem Entwickler-Rechner
und der npmjs.org Registry. Wenn ein Paket in der eigenen Registry nicht gefunden
wird, versucht diese das gesuchte Paket bei npmjs.org zu finden.
So können wir private Pakete in einer Registry unter unserer Kontrolle veröffentlichen,
aber trotzdem die öffentliche Pakete von npmjs.org konsumieren.
