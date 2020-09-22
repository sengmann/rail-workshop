# Bestimmung notwendiger Migrations-Schritte

## CI / CD Pipeline

* Monorepo für zwei Applikationen legen (Gitlab)
* CI / CD baut Angular Anwendungen (base-href beachten wenn nicht Hash Navigation)
* CI / CD verpackt Angular Artefakte in zwei JAR-Files **ohne Backend**
* JAR-Files werden in Nexus bei CI in _SNAPSHOT_- oder bei Release in _Release_-Repository 
* Integration: Backend CI Projekt sammelt das richtige Client-JAR aus dem Nexus ein
  und baut dieses in das WAR-File
