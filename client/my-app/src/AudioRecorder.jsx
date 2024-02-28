import { useState, useRef } from "react";
import { useEffect } from "react";

const AudioRecorder = () => {
    const [permission, setPermission] = useState(false);
    const mediaRecorder = useRef(null);
    const [recordingStatus, setRecordingStatus] = useState("inactive");
    const [stream, setStream] = useState(null);
    const [audioChunks, setAudioChunks] = useState([]);
    const [count, setCount] = useState(0);
    const [data, setdata] = useState({
        question: "Your question will appear here. Loading new question..."
    });

    const options = [
        { label: 'Australia', value: 'en-AU' },
        { label: 'Canada', value: 'en-CA' },
        { label: 'Ghana', value: 'en-GH' },
        { label: 'Hong Kong', value: 'en-HK' },
        { label: 'India', value: 'en-IN' },
        { label: 'Ireland', value: 'en-IE' },
        { label: 'Kenya', value: 'en-KE' },
        { label: 'New Zealand', value: 'en-NZ' },
        { label: 'Nigeria', value: 'en-PK' },
        { label: 'Phillipines', value: 'en-PH' },
        { label: 'Singapore', value: 'en-SG' },
        { label: 'South Africa', value: 'en-ZA' },
        { label: 'Tanzania', value: 'en-TZ' },
        { label: 'United Kingdom', value: 'en-UK' },
        { label: 'United States', value: 'en-US' },
    ];
     
    const [value, setValue] = useState('en-US');
    
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    useEffect(() => {
        console.log('use effect being called: ' + count)
        if (count === 3) {
            fetch('/log-invalid-answer', {
                method: "POST"
            }).then(() => {
                setCount(0);
            })
            setdata({
                question: data.question + "\n Unsuccessful! Loading new question..."
            })
        }
        if (count > 0 && count !== 3) {
            setdata({
                question: data.question + "\n Try Again!"
            })
        } else {
            fetchQuestion();
        }
    }, [count]);

    const getMicrophonePermission = async () => {
        if ("MediaRecorder" in window) {
            try {
                const streamData = await navigator.mediaDevices.getUserMedia({
                    audio: true,
                    video: false,
                });
                setPermission(true);
                setStream(streamData);
            } catch (err) {
                alert(err.message);
            }
        } else {
            alert("The MediaRecorder API is not supported in your browser.");
        }
    };

    const fetchQuestion = async () => {
        fetch("/question", {
            mode: "cors"
        }).then((res) => {
            return res.json();
        })
        .then((responseData) => {
            setdata({
                question: responseData.Question
            });
        })
    }

    const startRecording = async () => {
        setRecordingStatus("recording");
        const media = new MediaRecorder(stream, { type: mimeType });
        mediaRecorder.current = media;
        mediaRecorder.current.start();
        let localAudioChunks = [];
        mediaRecorder.current.ondataavailable = (event) => {
            if (typeof event.data === "undefined") return;
            if (event.data.size === 0) return;
            localAudioChunks.push(event.data);
        };
        setAudioChunks(localAudioChunks);
    };

    const stopRecording = () => {
        setRecordingStatus("inactive");
        mediaRecorder.current.stop();
        mediaRecorder.current.onstop = () => {
            const audioBlob = new Blob(audioChunks, { type: mimeType });
            
            let data = new FormData();
            data.append('wavfile', audioBlob, "recording.wav");
            data.append('language', value)
    
            fetch('/analyze', {
                method: "POST",
                body: data,
              }).then((res) => {
                return res.json();
              }).then((responseData) => {
                  console.log(responseData.Valid);
                  if (responseData.Valid) {
                    if (count === 0) {
                        fetchQuestion();
                    }
                    setCount(n => 0);
                  } else {
                    setCount(n => n + 1);
                  }
              });

            setAudioChunks([]);
        };
    };

    return (
        <div>
            <div>
                <p>Select your accent:</p>
                <label>
                    <select value={value} onChange={handleChange}>
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                    </select>
                </label>
            </div>
            <main>
                <div className="audio-player">
                    <div className = "textbox"> 
                        <p> {data.question} </p>
                    </div>
                    
                </div>
            </main>
            <div className="audio-controls">
                {!permission ? (
                    <button onClick={getMicrophonePermission} type="button">
                        Get Microphone
                    </button>
                ) : null}
                {permission && recordingStatus === "inactive" ? (
                    <button onClick={startRecording} type="button">
                        Start Recording
                    </button>
                ) : null}
                {recordingStatus === "recording" ? (
                    <button onClick={stopRecording} type="button">
                        Stop Recording
                    </button>
                ) : null}
            </div>
        </div>
    );
};

const mimeType = "audio/webm";

export default AudioRecorder;
