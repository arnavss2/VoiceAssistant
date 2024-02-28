# This Dockerfile builds the API only.

FROM python:3.9
WORKDIR /app

# Set Google API Key as an environment variable
ENV GOOGLE_API_KEY="AIzaSyDoFlHcY3FEyg6APANtcVXig7J-qIjcNGs"
ENV FLASK_APP=server.py
ENV FLASK_ENV=development
RUN apt-get -y update
RUN apt-get -y upgrade
RUN apt-get install -y ffmpeg

COPY ./requirements.txt ./server.py ./speech_recognizer.py ./
COPY ./controllers/gemini_controller.py ./controllers/
COPY ./models/gemini_initializer.py ./models/
RUN pip install -r requirements.txt

CMD ["python", "server.py"]