# VoiceAssistant
Hello! Here is a minimal voice assistant that asks the user a single, creative question, expects a "Yes" or "No" answer, handles invalid responses appropriately, and logs the interaction. The application is containerized using Docker.

## Instructions:
Please install [Docker](https://www.docker.com/get-started/) before you go ahead with the steps below.

1. Build the Docker image and run the container.
    1. Make sure you are in the root VoiceAssistant directory.
    2. At the command prompt, type `docker-compose up`
2. Interact with the voice assistant.
    1. Go to `localhost:3000`.
    2. Select your accent from the drop-down menu.
    3. Your question will automatically show up in the text box.
    4. Click the button 'Get Microphone' to allow microphone permissions.
    5. Click on 'Start Recording'.
    6. Wait a second before you speak your answer.
    7. Click on 'Stop Recording' to see your results.
         1. If you answer 'Yes' or 'No,' a new question will be generated.
         2. If you answer an invalid response, it will prompt you to try again three times until giving you a new question.
            
## In-progress developments:
Currently, I am working on creating a conversational AI interview prep tool. The demo is called [InterviewInsider](https://youtu.be/0BsZ--nhQO8).
