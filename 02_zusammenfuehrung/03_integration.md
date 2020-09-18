# Integration von mehreren Angular Anwendungen innerhalb einer Hauptapplikation

Im Allgemeinen lässt sich das Integrieren von verschiedenen Projekten in einer Webseite
über verschiedene Wege angehen:

| Methode    | Überlegung |
|--------------------------|------------|
| Hyperlinks               | Mittels Links lassen sich verschieden Anwendungen verbinden. Vor dem Absprung muss ggf. der Zustand gespeichert werden |
| Iframes                 | Bieten hohes Maß an Isolation, Kommunikation über window möglich |
| Mehrere SPA pro Dokument | Einschränkung der einzelnen Anwendungen mit geteilten Plattform Services (z.B.: URL) und kaum Isolation
| Web-Components           | Styling ist von Haus aus isoliert, Kommunikation nur über Events am document, mittels Angular Elements und Ivy auch mit Angular möglich

Wenn nur eine SPA zur gleichen Zeit sichtbar sein soll, eignen sich vor allem Hyperlinks. Als Alternative stehen der 
Monolith, Iframes und Webcomponents zur Verfügung.

Intensivere Überlegungen finden sich in dem [Blog-Artikel](https://www.angulararchitects.io/aktuelles/a-software-architects-approach-towards/)

Ein anderer guter Artikel [6 Steps to your Angular-based Microfrontend Shell](https://www.angulararchitects.io/aktuelles/6-steps-to-your-angular-based-microfrontend-shell/)
beschäftigt sich mit den Herausforderungen, um eine Angular Anwendung aus verschieden Bibliotheken zusammenzusetzen.
