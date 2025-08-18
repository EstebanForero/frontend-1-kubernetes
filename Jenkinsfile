pipeline {
    agent any

    environment {
        DOCKERHUB_USERNAME = "esteban1930"
        APP_NAME = "frontend-1"
        DOCKER_CREDENTIALS_ID = "dockerhub-credentials"
    }

    stages {
        stage('Build and Push Image') {
            steps {
                script {
                    echo "Starting Docker build for frontend..."
                    echo "This will compile the Vite app with Bun and package it into an Nginx-based image."

                    def imageName = "${env.DOCKERHUB_USERNAME}/${env.APP_NAME}:${env.BUILD_NUMBER}"
                    def customImage

                    try {
                        customImage = docker.build(imageName)
                    } catch (e) {
                        echo "Docker build failed. Check the logs for errors. ${e.message}"
                        error "Build failed."
                    }

                    echo "Build succeeded. Pushing image to Docker Hub..."
                    docker.withRegistry("https://index.docker.io/v1/", env.DOCKER_CREDENTIALS_ID) {
                        customImage.push()
                    }
                }
            }
        }
    }

    post {
        always {
            echo "Pipeline finished."
            cleanWs()
        }
    }
}
