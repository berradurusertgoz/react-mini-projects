import { useEffect, useState } from "react"

export default function RandomColor() {
    const [typeOfColor, setTypeOfColor] = useState('hex')
    const [color, setColor] = useState('#00000')

    function randomColor(length) {
        return Math.floor(Math.random() * length)
    }

    function handleCreateRandomHexColor() {
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        let hexColor = "#";

        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomColor(hex.length)]
        }
        setColor(hexColor)
    }
    function handleCreateRandomRgbColor() {
        const r = randomColor(256)
        const g = randomColor(256)
        const b = randomColor(256)

        setColor(`rgb(${r},${g},${b})`);

    }
    useEffect(() => {
        if (typeOfColor === 'rgb') {
            handleCreateRandomRgbColor();
        } else {
            handleCreateRandomHexColor();
        }
    }, [typeOfColor]);

    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            background: color,
        }}>
            <button style={{
                padding: "10px 20px",
                margin: "10px",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                background: "#111827",
                color: "white"
            }}
                onClick={() => setTypeOfColor('hex')}>Create HEX color</button>
            <button
                style={{
                    padding: "10px 20px",
                    margin: "10px",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                    background: "#1f2937",
                    color: "white"
                }}
                onClick={() => setTypeOfColor('rgb')}>Create RGB color</button>
            <button onClick={typeOfColor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRgbColor}
                style={{
                    padding: "12px 24px",
                    marginTop: "20px",
                    border: "none",
                    borderRadius: "10px",
                    cursor: "pointer",
                    background: "#4f46e5",
                    color: "white",
                    fontWeight: "bold"
                }}>Generate Random Color</button>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: '#fff',
                    fontSize: '50px',
                    marginTop: '50px',
                    flexDirection: "column",
                    gap: "20px",
                }}
            >
                <h3>{typeOfColor === 'rgb' ? 'RGB Color' : 'HEX Color'}</h3>
                <h1>{color}</h1>
            </div>

        </div>
    )

}