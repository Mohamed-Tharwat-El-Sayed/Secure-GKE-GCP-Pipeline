
 pipeline {
     agent any


     stages {
         stage('ci') {
             steps {
            withCredentials([usernamePassword(credentialsId: 'git', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]){

                // Get some code from a GitHub repository
                git 'https://github.com/Msbian/Secure-GKE-GCP-Pipeline.git'
                                                                }
                withCredentials([usernamePassword(credentialsId: 'Dockerhub', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]){
                sh "docker build . -f Dockerfile -t $JOB_NAME:v1.$BUILD_ID"
                sh "docker tag $JOB_NAME:v1.$BUILD_ID ${USERNAME}/$JOB_NAME:v1.$BUILD_ID"
                sh "docker tag $JOB_NAME:v1.$BUILD_ID ${USERNAME}/$JOB_NAME:latest"
                sh "docker login -u ${USERNAME} -p ${PASSWORD}"
                sh "docker push ${USERNAME}/$JOB_NAME:v1.$BUILD_ID"
                sh "docker push ${USERNAME}/$JOB_NAME:latest"
}
                 // To run Maven on a Windows agent, use
                // bat "mvn -Dmaven.test.failure.ignore=true clean package"
             }


         }
         stage('cd'){
         steps{
          withCredentials([file(credentialsId: 'sakey', variable: 'config')]){
                    
                    sh "gcloud auth activate-service-account --key-file=${config}"
                    sh "gcloud container clusters get-credentials app-cluster --zone europe-west1-b --project mohamed-tharwat-project"
                   
                    sh "kubectl apply  -f /var/jenkins_home/workspace/auto-deployment/dep-ser.yaml"  
                    
                }


             }

         }
     }
}
