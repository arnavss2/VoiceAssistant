# VoiceAssistant
Hello! Here is a minimal voice assistant that asks the user a single, creative question, expects a “Yes” or “No” answer, handles invalid responses appropriately, and logs the interaction. The application is containerized using Docker.

### Language
This project is made using Python to implement the voice assistant.
Python is an excellent choice for creating voice assistants due to its rich ecosystem of libraries, ease of development, cross-platform compatibility, integration with third-party APIs, and machine learning and AI support. Python offers several libraries for speech recognition, text-to-speech conversion, NLP, and audio processing. Its readable syntax makes it easy to develop and maintain voice assistant projects. Python's cross-platform compatibility allows developers to deploy voice assistants on various devices. Voice assistants can leverage third-party APIs and machine learning libraries like TensorFlow for natural language understanding and personalized user interactions.

### Voice Recognition: 
This project uses speech recognition to convert voice input into text. The focus is on
accurately capturing “Yes” or “No” responses.

### Question Design: 
The voice assistant uses Google Gemini API to ask a thought-provoking question that is open-ended yet structured, allowing only “Yes” or “No” answers.
For instance: “Is technology making humanity better?”

### Response Handling: 
The application
- Accurately determine if the response is “Yes,” “No,” or invalid.
- If an invalid response is received, prompt the user up to three times for a valid “Yes” or “No” answer.
- After three unsuccessful attempts, log it as “Invalid response” and conclude the interaction.

### Logging::
The app outputs the interaction to a text file, including the question and the user’s response (or notes it as “Invalid response” if that’s the case) to log.txt. This requirement simulates basic logging functionality, a common feature in real-world applications.

### Docker Deployment: 
The application is packaged in a Docker container.

## Instructions:

a. Build the Docker image.
- Run docker-compose up
e Run the container.
e Interact with the voice assistant.

The documentation should be clear enough for someone unfamiliar with
the project to get it up and running.

Evaluation Criteria:

¢ Functionality: The voice assistant accurately processes and responds to
“Yes” or “No” answers.

e Error Handling: The system effectively deals with invalid responses,
providing clear user guidance.

e Code Quality and Efficiency: The application’s code is clean, well-
organized, and demonstrates effective use of the chosen programming lan-
guage and libraries.

¢ Docker Configuration: The Dockerfile is correctly set up, and the con-
tainer runs smoothly across different environments. The provided docu-
mentation clearly explains the setup and usage.

e Creativity and User Engagement: The chosen question is engaging,
encouraging the user to think and interact with the assistant.

Bonus Points:

e Advanced handling of edge cases in speech recognition (e.g., background
noise, different accents).

¢ Including a simple UI or web interface for interacting with the voice assis-
tant, if the project is web-based.

e¢ Demonstrating best practices in Docker usage, such as minimizing image
size and securely handling credentials or sensitive data.
