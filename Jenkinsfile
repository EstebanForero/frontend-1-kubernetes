pipeline {
    agent any

    environment {
        DOCKERHUB_USERNAME = "esteban1930"
        APP_NAME = "frontend-1"
        DOCKER_CREDENTIALS_ID = "dockerhub-credentials"

        HELM_CHART_BRANCH = "master"
        GIT_CREDENTIALS_ID = "github-credentials"
        HELM_CHART_REPO = "https://github.com/EstebanForero/parcial-1"
    }

    stages {
        stage('Build and Push Image') {
            steps {
                script {
                    echo "Starting Docker build for frontend..."
                    echo "This will compile the Vite app with Bun and package it into an Nginx-based image."

                    def imageName = "${env.DOCKERHUB_USERNAME}/${env.APP_NAME}:1.${env.BUILD_NUMBER}.0"
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

        stage('Update Helm Chart pipeline') {
            steps {
                script {
                    sh 'rm -rf chart'
                    sh "git clone --branch ${env.HELM_CHART_BRANCH} https://github.com/EstebanForero/parcial-1.git chart"

                    dir('chart') {
                        if (false) {
                            sh """
                                sed -i '/^backend:/,/^[^ ]/{/tag:/s/tag:[ ]*.*/tag: "1.${BUILD_NUMBER}.0"/}' values.yaml
                                """
                        }
                        if (true) {
                            sh """
                                sed -i '/^frontend:/,/^[^ ]/{/tag:/s/tag:[ ]*.*/tag: "1.${BUILD_NUMBER}.0"/}' values.yaml
                                """
                        }

                        withCredentials([usernamePassword(credentialsId: 'github-credentials', usernameVariable: 'GIT_USERNAME', passwordVariable: 'GIT_PASSWORD')]) {
                            sh 'git config --local user.email "jenkins@example.com"'
                            sh 'git config --local user.name "Jenkins"'
                            // Set remote using credentials (HTTPS with username:password)
                            sh 'git remote set-url origin https://${GIT_USERNAME}:${GIT_PASSWORD}@github.com/EstebanForero/parcial-1.git'
                            sh 'git add .'
                            sh 'git commit -m "Bump version and update image tag(s)"'
                            sh 'git push origin master'
                        }
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
