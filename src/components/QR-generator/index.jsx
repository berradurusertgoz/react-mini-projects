import {QRCode} from "react-qr-code";
import "./qr.css";
import { useState } from "react";

function QRGenerator() {
const [qrCode, setQrCode] = useState("https://google.com")   
const [input, setInput] = useState("")
    
    function handleGenerate(){
        setQrCode(input)
        setInput('')
    }
    return (
        <div className="qr-container">
            <h1>QR Code Generator</h1>
            <div className="qr-input-wrapper">
                <input 
                onChange={(e) =>setInput(e.target.value)}
                type="text" 
                name="qr-code" 
                placeholder="Enter your value here"
                value={input}/>
                <button
                disabled={!input.trim()}
                onClick={handleGenerate}
                >Generate</button>
            </div>
            <div className="qr-code-wrapper">
                <QRCode 
                id="qr-code-value"
                value={qrCode}
                size={400}
                bgColor="#fff"
                />
            </div>
        </div>
    )
}

export default QRGenerator
