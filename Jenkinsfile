pipeline {
    agent any

    tools {
        nodejs 'NodeJS 18' // This should match the name you gave in the Global Tool Configuration
    }

    stages {
        stage('Build') {
            steps {
                script {
                    // Install dependencies and build the application
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    // Run your tests if you have any
                    sh 'npm test || true' // ignore test failures for now
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Deploy to the server
                    sshagent(['your-ssh-credentials-id']) { // Add your SSH credentials ID here
                        sh 'scp -r build/* root@167.71.225.82:/var/www/reactwebapp'
                        sh 'ssh root@167.71.225.82 "systemctl restart nginx"'
                    }
                }
            }
        }
    }
}
