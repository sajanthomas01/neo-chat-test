import * as React from 'react';
import './style.scss';
import chatOpenIcon from '../../../assets/images/chat.svg';
import chatCloseIcon from '../../../assets/images/close.svg';

interface propTypes {
  title?: String,
  primaryColor?: String,
  inputHint?: string
}

const ChatWidget: React.FC<propTypes> = ({ title, primaryColor, inputHint }) => {

  const [isChatOpen, setIsChatOpen] = React.useState<boolean>(false);


  const openChat = () => {
    setIsChatOpen(!isChatOpen)
  }

  return (<>
    <button id="open-chat" onClick={openChat}><img src={isChatOpen ? chatCloseIcon : chatOpenIcon} alt="open chat" /></button>
    {isChatOpen && (
      <div className="chat-popup">
        <div className="chat-container">
          <div className="chat-company" style={{ backgroundColor: primaryColor ? primaryColor : null }}>
            <h2>{title || "Neochat"}</h2>
          </div>
          <div className="chat-area">
            <div contentEditable={true}>
              chat messages
     </div>
            <input type="text" placeholder={inputHint || "Type here"} />
          </div>

        </div>
      </div>
    )}

  </>);
}

export default ChatWidget;

