import * as React from 'react';
import ChatWidget from './src/index'

interface propTypes {
  title?: String,
  selector?: String,
  primaryColor?: String,
  inputHint?: string
}

const NeoChat: React.FC<propTypes> = ({ title, primaryColor, inputHint }) => {
  return (<ChatWidget
    title={title}
    primaryColor={primaryColor}
    inputHint={inputHint} />)
}

export default NeoChat;