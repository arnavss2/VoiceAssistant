# VoiceAssistant
Hello! Here is a minimal voice assistant that asks the user a single, creative question, expects a "Yes" or "No" answer, handles invalid responses appropriately, and logs the interaction. The application is containerized using Docker.

## Instructions:
Please install [Docker](https://www.docker.com/get-started/) before proceeding with the steps below.

1. Build the Docker image and run the container.
    1. Make sure you are in the root VoiceAssistant directory.
    2. At the command prompt type `docker-compose up`.
2. Interact with the voice assistant.
    1. Select your accent from the drop-down menu.
    2. Your question will automatically show up in the text box.
    3. Click the button 'Get Microphone' to allow microphone permissions.
    4. Click on 'Start Recording'.
    5. Wait a second before you speak your answer.
    6. Click on 'Stop Recording' to see your results.
         1. If you answer 'Yes' or 'No', a new question will be generated.
         2. If you answer an invalid response, it will prompt you to try again three times until giving you a new question.

### Programming Language:
This project is made using Python to implement the voice assistant.
Python is an excellent choice for creating voice assistants due to its rich ecosystem of libraries, ease of development, cross-platform compatibility, integration with third-party APIs, and machine learning and AI support. Python offers several libraries for speech recognition, text-to-speech conversion, NLP, and audio processing. Its readable syntax makes it easy to develop and maintain voice assistant projects. Python's cross-platform compatibility allows developers to deploy voice assistants on various devices. Voice assistants can leverage third-party APIs and machine learning libraries like TensorFlow for natural language understanding and personalized user interactions.

### Voice Recognition: 
This project uses speech recognition to convert voice input into text. The focus is on
accurately capturing "Yes" or "No" responses.

### Question Design: 
The voice assistant uses Google Gemini API to ask a thought-provoking question that is open-ended yet structured, allowing only "Yes" or "No" answers.
For instance: "Is technology making humanity better?"

### Response Handling: 
The application
- Accurately determine if the response is "Yes," "No," or invalid.
- If an invalid response is received, prompt the user up to three times for a valid "Yes" or "No" answer.
- After three unsuccessful attempts, log it as "Invalid response" and conclude the interaction.

### Logging:
The app outputs the interaction to a text file, including the question and the uuser'sresponse (or notes it as “"nvalid response”"if tthat'sthe case) to log.txt. This requirement simulates basic logging functionality, a common feature in real-world applications.

### Docker Deployment: 
The application is packaged in a Docker container.
            
### In-progress developments
Currently, I am working on creating a conversational AI interview prep tool. The demo is called [InterviewInsider](https://youtu.be/0BsZ--nhQO8).
