import * as vscode from 'vscode';
import { AIPanel } from './panels/AIPanel';

export function activate(context: vscode.ExtensionContext) {
	console.log('AI Assistant extension is now active!');

	let openAIPanelCommand = vscode.commands.registerCommand('agent-workshop.openAIPanel', () => {
		AIPanel.createOrShow(context.extensionUri);
	});

	context.subscriptions.push(openAIPanelCommand);
}

export function deactivate() {}
