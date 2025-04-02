export interface Message {
    role: 'user' | 'system';
    content: string;
    timestamp?: number;
}

export interface AIMessage {
    role: 'assistant';
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