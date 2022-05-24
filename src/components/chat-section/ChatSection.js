import './ChatSection.css'

function ChatSection(){
    return (
        <div>
            <div className="float-chat">
                <div className="chat-content">
                </div>
                <div className="chat-input">
                    <input placeholder="Digite sua mensagem" type="text" className="input-message" />
                    <input type="submit" value="Enviar" className="btn-message"/>
                </div>
            </div>
        </div>
    )
}

export default ChatSection