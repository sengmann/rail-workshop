pipeline {
    agent {
        docker {
            image 'node:14-alpine'
            args '-p 3000:3000'
        }
    }
   parameters {
           gitParameter name: 'BRANCH_TAG',
                        type: 'PT_BRANCH_TAG',
                        defaultValue: 'master'
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
