pipeline {
    agent any 

    stages {
        stage('Checkout') {
            steps {
                // Checkout code from GitHub repository
                git 'https://github.com/AnilBai/React-Web-App.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                // Install npm dependencies
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                // Build the React app
                sh 'npm run build'
            }
        }
        stage('List Build Artifacts') {
            steps {
                // List the contents of the dist folder to verify build artifacts
                sh 'ls -l dist'
            }
        }
        stage('Deploy') {
            steps {
                // Deploy the build artifacts to the remote server
                sshPublisher(publishers: [
                    sshPublisherDesc(
                        configName: 'Deploy Server',
                        transfers: [
                            sshTransfer(
                                sourceFiles: 'dist/**/*',  // Ensure this is set correctly
                                remoteDirectory: '/var/www/html/react-app'
                            )
                        ]
                    )
                ])
            }
        }
    }

    post {
        success {
            // Optional: Notify on success
            echo 'Deployment successful!'
        }
        failure {
            // Optional: Notify on failure
            echo 'Deployment failed!'
        }
    }
}
