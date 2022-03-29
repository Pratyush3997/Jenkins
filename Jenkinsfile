pipeline
{
	agent any

	stages
	{
		stage('Build')
		{
			steps
			{
				echo 'Build App'
			}
		}
		stage('Test')
		{
			steps
			{
				echo 'Test App'
			}
		}
		stage('Deploy')
		{
			steps
			{
				echo 'Deploy App'
			}
		}
	}

	post
	{
        always
        {
            emailtext body:'Summary' ,mail to: pratyushthorat@gmail.com, subject: 'The Pipeline failed :('
        }
        
    }
	
}
