export interface BenchmarkEntry {
  model: string;
  score: number;
  highlighted?: boolean;
}

export interface BenchmarkCategory {
  name: string;
  entries: BenchmarkEntry[];
}

// Real benchmark data for frontier LLMs (as of early 2025)
// Sources: official announcements, Chatbot Arena, Open LLM Leaderboard
export const benchmarks: BenchmarkCategory[] = [
  {
    name: "MMLU",
    entries: [
      { model: "DeepSeek R1", score: 90.8, highlighted: true },
      { model: "GPT-4o", score: 88.7 },
      { model: "Claude 3.5 Sonnet", score: 88.3 },
      { model: "Llama 3.3 70B", score: 86.0 },
      { model: "Qwen 2.5 72B", score: 85.3 },
      { model: "Gemini 2.0 Flash", score: 85.2 },
    ],
  },
  {
    name: "HumanEval",
    entries: [
      { model: "DeepSeek R1", score: 96.3, highlighted: true },
      { model: "Claude 3.5 Sonnet", score: 93.7 },
      { model: "GPT-4o", score: 90.2 },
      { model: "Gemini 2.0 Flash", score: 89.5 },
      { model: "Llama 3.3 70B", score: 88.4 },
      { model: "Qwen 2.5 72B", score: 86.6 },
    ],
  },
  {
    name: "MATH-500",
    entries: [
      { model: "DeepSeek R1", score: 97.3, highlighted: true },
      { model: "Gemini 2.0 Flash", score: 83.9 },
      { model: "Qwen 2.5 72B", score: 83.1 },
      { model: "Claude 3.5 Sonnet", score: 78.3 },
      { model: "Llama 3.3 70B", score: 77.0 },
      { model: "GPT-4o", score: 76.6 },
    ],
  },
  {
    name: "GPQA Diamond",
    entries: [
      { model: "DeepSeek R1", score: 71.5, highlighted: true },
      { model: "Claude 3.5 Sonnet", score: 65.0 },
      { model: "Gemini 2.0 Flash", score: 62.0 },
      { model: "GPT-4o", score: 53.6 },
      { model: "Qwen 2.5 72B", score: 49.0 },
      { model: "Llama 3.3 70B", score: 46.7 },
    ],
  },
  {
    name: "SWE-Bench Verified",
    entries: [
      { model: "Claude 3.5 Sonnet", score: 49.0 },
      { model: "DeepSeek R1", score: 49.2, highlighted: true },
      { model: "GPT-4o", score: 38.4 },
      { model: "Gemini 2.0 Flash", score: 33.8 },
      { model: "Qwen 2.5 72B", score: 30.2 },
      { model: "Llama 3.3 70B", score: 26.0 },
    ],
  },
  {
    name: "ARC-Challenge",
    entries: [
      { model: "Claude 3.5 Sonnet", score: 96.7 },
      { model: "GPT-4o", score: 96.4 },
      { model: "Gemini 2.0 Flash", score: 94.2 },
      { model: "Llama 3.3 70B", score: 93.5 },
      { model: "Qwen 2.5 72B", score: 93.2 },
      { model: "DeepSeek R1", score: 92.3, highlighted: true },
    ],
  },
];

export const modelColors: Record<string, string> = {
  "DeepSeek R1": "#EF4444",
  "GPT-4o": "#10B981",
  "Claude 3.5 Sonnet": "#8B5CF6",
  "Gemini 2.0 Flash": "#3B82F6",
  "Qwen 2.5 72B": "#F59E0B",
  "Llama 3.3 70B": "#6B7280",
};
