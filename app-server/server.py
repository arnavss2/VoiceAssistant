# Filename - server.py
 
# Import flask and datetime module for showing date and time
from speech_recognizer import *
from flask import Flask, request
import datetime
from flask_cors import CORS, cross_origin
from controllers.gemini_controller import *
from speech_recognizer import *
x = datetime.datetime.now()
 
# Initializing flask app
app = Flask(__name__)

@app.route('/')
@cross_origin(origin='*')
def home():
    return "Hello World"
 
@app.route('/question')
@cross_origin(origin='*')
def get_questions():
    result = send_message("Ask me a single creative, thought-provoking question to allow only 'Yes' or 'No' binary answers. Please don't write anything except the question in your response. No headers.").text
    while 'or' in result:
        result = send_message("Ask me a single creative, thought-provoking question to allow only 'Yes' or 'No' binary answers. Please don't write anything except the question in your response. No headers.").text
    # Append-adds at last
    file1 = open("log.txt", "a")  # append mode
    file1.write(result + "\n")
    file1.close()
    text_dict = {"Question": result}
    return text_dict

@app.route('/analyze', methods=['POST'])
@cross_origin(origin='*')
def analyze_data():
    f = request.files['wavfile']
    language = request.form.get('language')
    f.save('./audio.webm')
    file_path = convert_file('audio')
    print('file has been converted')
    output = get_audio(file_path, language)
    valid = False
    if "yes" in output.lower() or "no" in output.lower():
        file1 = open("log.txt", "a")  # append mode
        file1.write(output + "\n")
        file1.close()
        valid = True
    result = {"Valid": valid}
    return result

@app.route('/log-invalid-answer', methods=['POST'])
@cross_origin(origin='*')
def log_invalid_answer():
    file1 = open("log.txt", "a")  # append mode
    file1.write("Invalid response\n")
    file1.close()
    return ""

# Running app
if __name__ == '__main__':
    CORS(app)
    app.run(host="0.0.0.0", debug=True)