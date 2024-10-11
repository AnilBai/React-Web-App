pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/AnilBai/React-Web-App.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Deploy') {
            steps {
                sh 'scp -r dist/* root@165.22.217.78:/var/www/html/react-app'
            }
        }
    }
}
