pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
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
                script {
                    def src = 'dist/*'
                    def dest = 'root@165.22.217.78:/var/www/html/react-app'
                    sh "echo 'Deploying to ${dest}'"
                    sh "scp -rv ${src} ${dest}"  // Verbose logging for scp
                }
            }
        }
    }
}
