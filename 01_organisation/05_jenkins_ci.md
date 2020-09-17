# Jenkins als CI Server für Angular Projekte

Mit Jenkins existiert eine weitverbreitete Plattform für Continues Integration und Continues Delivery.
Auch können Angular Projekte über Jenkins gebaut und deployed werden. 

Analog zu Nexus benutze ich für ein Beispiel das Jenkins Docker Image. Eine reguläre Installation ist
genauso möglich.

Um Docker innerhalb der Jenkins Container nutzen zu können müssen wir ein wenig Vorarbeit leisten.

```bash
docker network create jenkins
docker volume create jenkins-docker-certs
docker volume create jenkins-data
```

In einem ersten Terminal führen wir folgenden Befehl aus:
```bash
docker container run --name jenkins-docker --rm --detach \
  --privileged --network jenkins --network-alias docker \
  --env DOCKER_TLS_CERTDIR=/certs \
  --volume jenkins-docker-certs:/certs/client \
  --volume jenkins-data:/var/jenkins_home \
  --volume $(pwd):/home \
  --publish 3000:3000 docker:dind
```

In einem zweiten Terminal starten wir jetzt einen Jenkins-Container
```bash
docker container run --name jenkins-tutorial --rm --detach \
  --network jenkins --env DOCKER_HOST=tcp://docker:2376 \
  --env DOCKER_CERT_PATH=/certs/client --env DOCKER_TLS_VERIFY=1 \
  --volume jenkins-data:/var/jenkins_home \
  --volume jenkins-docker-certs:/certs/client:ro \
  --volume $(pwd):/home \
  --publish 8080:8080 jenkinsci/blueocean
```

Sobald der Container gestartet hat, kann in der Konsole das initiale Administrator-Passwort mit 
`docker exec jenkins-tutorial cat /var/jenkins_home/secrets/initialAdminPassword`
abgelesen werden. Unter der URL [http://localhost:8080](http://localhost:8080) erreichen wir den Server. Nach Angabe des
Passworts fahren wir mit der Installation der empfohlenen Plugins fort.
 
Da die ganze Vorarbeit abgeschlossen ist, können wir nun ein Projekt erzeugen. Als Vorlage nutzen wir die Pipeline
und vergeben den Namen angular-pipeline. Im Abschnitt Pipeline wählen wir `Pipeline Script from SCM`. Der Pfad wird
auf `/home/` gesetzt.

Jetzt können wir in der Oberfläche in der Angular Pipeline auf *jetzt bauen* klicken und die Pipeline manuell starten.

