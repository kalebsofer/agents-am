# Agents: Morning session.

Our first task is to get a functioning extension up and running with a basic chat interface.

## Goal

Create a chat extension that:
- Maintains conversation history
- Retains conversation context indefinitely
- Properly manages tokens and message history

## Getting Started

```bash
git clone https://github.com/kalebsofer/agents-am

cd agent-workshop

npm install

# To test the extension, run in debugging mode
# Press F5 or use the "Run and Debug" panel
```

## API Key Configuration

You'll need an API key:
- Use your own if you have one. 
- I’ll ping a temporary key on Discord (OpenAI). 
- This template uses the OpenAI API, you are free to choose your preferred LLM.

Create a `.env` file in the root of the project and add your API key:

```
OPENAI_API_KEY=your_api_key_here
``` 

## What This Template Includes

- ✅ Configuration setup for API keys
- ✅ WebView UI components
- ✅ Extension entry point (`extension.ts`)
- ✅ Basic panel infrastructure

## What You Need to Implement

- 🛠️ Chat functionality in `src/panels/AIPanel.ts`
- 🛠️ A chat manager to handle conversations
- 🛠️ API integration

## Resources

- [Your First VS Code Extension](https://code.visualstudio.com/api/get-started/your-first-extension)
- [VS Code Extension Samples](https://github.com/microsoft/vscode-extension-samples)
- [OpenAI API Documentation](https://platform.openai.com/docs/api-reference)
