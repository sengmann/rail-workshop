# Nexus
Nexus stellt einen Artefakt-Server bereit. Dieser kann auch als npm-Registry verwendet werden.

Um Nexus für den Betrieb einer npm-Registry vorzubereiten, muss ein bisschen Konfiguration betrieben werden.

Zur Installation von Nexus verwende ich in diesem Beispiel, der Einfachheit halber, Docker.

```bash
docker run --name=nexus-demo --rm -it -p 8395:8081/tcp sonatype/nexus3:latest
```

Im Container finden wir im Pfad `/nexus-data/admin.password` das generierte Administrator-Passwort um uns mit dem
Nutzer *admin* einloggen zu können. Nach dem Login ändern wir das Passwort nach den höchsten Sicherheits-Standard
auf admin. Anschließend erlauben wir den Zugriff ohne Anmeldung.

Über das Zahnrädchen erreichen wir die Einstellungen. Zuerst erstellen wir einen neuen Blob-Store mit dem Namen *NPM*.
Anschließend erzeugen wir die notwendigen Repository.

 1. *npm-hosted* mit dem Namen `npm-private`
 1. *npm-proxy* mit dem Namen `npm-proxy` und der Url `https://registry.npmjs.org`
 1. *npm-group* mit dem Namen `npm-group` und den Repositories in der Reihenfolge `npm-private` gefolgt von `npm-proxy`
 
 Abschließend wird noch unter dem Punkt Security -> Realms der *npm Bearer Token Realm aktiviert*.
 
 Über die Kommandozeile können wir uns mit den Nutzerdaten des *admin* Kontos einloggen.
 ```bash
 npm login --registry=http://localhost:8395/repository/npm-private
 npm publish --registry=http://localhost:8395/repository/npm-private
 ```

Für das Abrufen der Pakete tragen wir das Repository `npm-group` in die *.npmrc* Datei ein.
```
registry=http://your-host:8081/repository/npm-group/
```

Die Gruppe sorgt dafür das erst in `npm-private` versucht wird ein Paket zu finden, anschließend dann
über den `npm-proxy` auf die offizielle npm-Registry. 
