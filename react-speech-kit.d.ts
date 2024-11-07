declare module 'react-speech-kit' {
    export function useSpeechSynthesis(): {
        speak: (options?: {
            text: string;
            voice?: string | { name: string };
            rate?: number;
            pitch?: number;
            volume?: number;
        }) => Promise<void>;
    };

    export default function useSpeechSynthesis(): {
        speak: (options?: {
            text: string;
            voice?: string | { name: string };
            rate?: number;
            pitch?: number;
            volume?: number;
        }) => Promise<void>;
    };
}
