import os
import time
import speech_recognition as sr
from gtts import gTTS
import wave
import subprocess

def get_audio(filepath, lang):
    r = sr.Recognizer()
    r.energy_threshold = 4000
    with sr.AudioFile(filepath) as source:
        r.adjust_for_ambient_noise(source)
        print('start')
        audio = r.record(source)
        print('stop')
        try:
            s = r.recognize_google(audio_data=audio, language=lang)
            print(s)
            return s
        except ValueError as e:
            print("speech not recognized")
        except Exception as e:
            print("Exception: " + str(e))
    return ""

def convert_file(filename):
    print('hello')
    subprocess.run([
        "ffmpeg",
        "-y", 
        "-i",
        "./" + filename + ".webm",
        "./" + filename + ".wav",
    ])

    return "./" + filename + ".wav"