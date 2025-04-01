/**
 * Type definitions for chat functionality
 */

export interface Message {
    role: 'user' | 'assistant' | 'system';
    content: string;
    timestamp?: number;
}

export interface AIMessage {
    role: 'user' | 'assistant' | 'system';
    content: string;
}

export interface AIRequest {
    model: string;
    messages: AIMessage[];
    max_tokens: number;
}

export interface AIResponse {
    choices: Array<{message: {content: string}}>;
    error?: {
        message: string;
        type: string;
        code?: string;
    };
}