import * as React from 'react';
import * as ReactDOM from 'react-dom';
import NeoChat from "./neo-chat"

interface argTypes {
  title: String,
  selector?: string,
  primaryColor: String,
  inputHint: string
}

const plugin = {
  init: (args: argTypes) => {
    ReactDOM.render(
      <React.StrictMode>
        <NeoChat
          title={args.title}
          primaryColor={args.primaryColor}
          inputHint={args.inputHint} />
      </React.StrictMode>,
      document.querySelector(args.selector ? args.selector : "body")
    );
  }
}

export { plugin as default }