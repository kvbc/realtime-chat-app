import { FormEvent, useEffect, useRef, useState } from "react";
import "./Chat.css"

function Chat() {
    const [messages, setMessages] = useState<Array<String>>([]);
    const [inputMessage, setInputMessage] = useState<string>("");
    const [webSocket, _] = useState<WebSocket>(new WebSocket("ws://localhost:3002"));
    const refChatMessages = useRef<HTMLDivElement>(null);

    useEffect(() => {
        fetch('http://localhost:3001/messages')
            .then(res => res.json())
            .then(data => setMessages(data.messages))
    }, [])

    useEffect(() => {
        webSocket.onmessage = msg => {
            setMessages(messages => [...messages, msg.data])
        }
    }, [webSocket])

    useEffect(() => {
        if(refChatMessages.current) {
            refChatMessages.current.scrollTop = refChatMessages.current.scrollHeight // scroll to bottom
        }
    }, [messages])

    function onFormSubmitted(event: FormEvent) {
        event.preventDefault()
        console.log(`Send: "${inputMessage}"`)
        fetch('http://localhost:3001/messages', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                message: inputMessage
            })
        })
        setInputMessage("")
    }

    return (
        <div className="Chat">
            <div className="Chat-messages" ref={refChatMessages}>
                {messages.map(message => <span>{message}</span>)}
            </div>
            <form className="Chat-input" onSubmit={onFormSubmitted}>
                <input type="text" value={inputMessage} onChange={e => setInputMessage(e.target.value)} />
                <button type="submit">Send</button>
            </form>
        </div>
    )
}

export default Chat;