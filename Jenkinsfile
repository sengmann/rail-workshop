pipeline {
    agent {
        docker {
            image 'node:14-alpine'
            args '-p 3000:3000'
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Prepare') {
            steps {
                sh 'cd rail && npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'cd rail && npm run test'
            }
        }
        stage('Build') {
            steps {
               sh 'cd rail && npm run test'
            }
        }
    }
}
