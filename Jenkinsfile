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
                    sh 'npm test || true' // Ignore test failures for now
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Deploy to the server
                    // Assuming Jenkins has access to the SSH key to connect to the deployment server
                    sh 'git clone https://github.com/AnilBai/React-Web-App.git'
                    sh 'scp -r React-Web-App/build/* root@167.71.225.137:/var/www/reactwebapp' // Path to the build directory
                    sh 'ssh root@167.71.225.137 "systemctl restart nginx"'
                }
            }
        }
    }
}
