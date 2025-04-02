# Agents - Morning Session

Our first task is to get a functioning extension up and running with a basic chat interface.

Your extension should:
- Have a panel with a text input and a send button. ✅
- Retain conversation context indefinitely*.
- Attach a file for context.

## This Template Includes

- ✅ WebView UI components [webview.html](src/webview/webview.html)
- ✅ Configuration setup for API keys [config.ts](src/config.ts)
- ✅ Extension entry point [`extension.ts`](src/extension.ts)
- ✅ Basic panel infrastructure [AIPanel.ts](src/panels/AIPanel.ts)

## You Need to Implement

- 🛠️ Chat functionality: [AIPanel.ts](src/panels/AIPanel.ts)
- 🛠️ A chat manager to handle conversations
- 🛠️ API integration

## Getting Started

```bash
git clone https://github.com/kalebsofer/agents-am

cd agent-workshop

npm install

npm run compile
```
### Test the extension:
1. Run in debugging mode: Press F5 or "Run, Start Debugging"
2. From Extension Development Host, open command palette: `Ctrl+Shift+P`
3. Select `openAIPanel` (agent-workshop.openAIPanel)

## API Keys

Create a `.env` file in the root of the project and add your API key.

- Use your own if you have one. 
- I will ping a temporary key on Discord (OpenAI). 
- This template uses the OpenAI API, you are free to choose your preferred LLM.

Note, [src/config.ts](src/config.ts) is configured for OpenAI, you will need to tweak it for your preferred LLM.


## Resources

- For VS Code Extension development, see the [VS Code Extension Samples](https://github.com/microsoft/vscode-extension-samples) or [Your First VS Code Extension](https://code.visualstudio.com/api/get-started/your-first-extension)
- For API documentation, see the [OpenAI API Documentation](https://platform.openai.com/docs/api-reference)
