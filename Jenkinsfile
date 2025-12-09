pipeline {
    agent any

    environment {
        DEPLOY_USER = "admin"
        DEPLOY_HOST = "72.62.128.213"
        PROJECT_PATH = "/home/root/react-app"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/binodsapkota/my-portfolio.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh "docker build -t react-app ."
            }
        }

        stage('Deploy to VPS') {
            steps {
                sshagent(['vps-ssh-key']) {
                    sh """
                    ssh $DEPLOY_USER@$DEPLOY_HOST '
                        cd $PROJECT_PATH
                        git pull
                        docker compose down
                        docker compose up -d --build
                    '
                    """
                }
            }
        }
    }
}
