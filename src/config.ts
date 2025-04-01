/**
 * config.ts
 * 
 * Loads environment variables and provides access to settings.
 */

import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';
import * as dotenv from 'dotenv';

try {
    const envPath = path.join(__dirname, '..', '.env');
    if (fs.existsSync(envPath)) {
        dotenv.config({ path: envPath });
    }
} catch (error) {
    console.error('Error loading .env file:', error);
}

export const SECTION = 'agent-workshop';
export const API_KEY = 'openaiApiKey';
export const MODEL = 'gpt-4o-mini-2024-07-18';
export const DEFAULT_MODEL = 'gpt-4o-mini-2024-07-18';
export const OPENAI_API_ENDPOINT = 'https://api.openai.com/v1/chat/completions';
export const MAX_TOKENS = 4000;

export function getConfig(): vscode.WorkspaceConfiguration {
    return vscode.workspace.getConfiguration(SECTION);
}

export function getApiKey(): string {
    const config = getConfig();
    const configKey = config.get<string>(API_KEY, '');
    return configKey || process.env.OPENAI_API_KEY || '';
}

export function getModel(): string {
    const config = getConfig();
    return config.get<string>(MODEL, DEFAULT_MODEL);
} 