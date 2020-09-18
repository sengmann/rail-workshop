# Wiederverwendbarkeit von Angular Komponenten mittels Angular-Bibliotheken

Die Wiederverwendbarkeit von Komponenten hängt von mehreren Faktoren ab. Mit NX steht uns schon
ein Tool bereit, mit dem wir Bibliotheken aufbauen können. Ob diese dann im Monorepo verwendet
werden oder per npm in einer Registry veröffentlicht werden, ist zweitrangig.

Diese Kriterien sollten mindestens erfüllt sein:
 1. Eine gute Dokumentation, im Idealfall mit Beispielen, sollte vorhanden sein.
 1. Komponenten sind nicht an einen bestimmten Kontext gebunden
 1. Es existiert ein Konzept zum Theming


## Dokumentation von Komponenten

Um die Dokumentation möglichst aktuell halten zu können, sollte diese zum größten Teil aus dem Code
generiert werden. Dazu lässt sich ideal das Tool [Compodoc](https://compodoc.app/) nutzen.


## Komponenten und Kontext

Der Kontext, in dem eine Komponente verwendet werden kann, wird von ihren Abhängigkeiten bestimmt.
In Angular sind das die Parameter im Konstruktor und andererseits Komponenten und Direktiven,
die im Template genutzt werden. Daten können per Input hereingereicht werden, statt
über einen Service, der per Dependency Injection bezogen wird. Herausforderungen können dann zum Beispiel
routerLinks sein.


## Konzept zum Theming

Um Komponenten mittels Styling anpassen zu können gibt es zwei Wege. Der erste führt über die Style Encapsulation.
Dabei wird das CSS vom Rest der Anwendung isoliert und nur Eigenschaften die der Entwickler bestimmt können
überschrieben werden. Hierzu werden oft Sass oder Less Mixins verwendet.

Der zweite Weg ist die Encapsulation abzuschalten. Dann wirken alle Stylings der Komponente so, als wären sie
in dem globalen Kontext geschrieben worden. Dies entspricht der "alten" Arbeitsweise mit allen Vor- und auch
Nachteilen. Jeder darf alles in der Komponente überschreiben.

Egal welcher Weg eingeschlagen wird, muss ein bewusstes Konzept erarbeitet werden.
