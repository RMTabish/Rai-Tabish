import { useState } from 'react';
import { X } from 'lucide-react';
import axios from 'axios';


interface ChatbotProps {
  onClose: () => void;
}
//just testing
const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

export default function Chatbot({ onClose }: ChatbotProps) {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([
    { role: 'system', content: 'Hello! Rai is tight on budget and got no credits for openAI API, otherwise i would tell you all about him, please refer to the download resume button.' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const response = await axios.post('https://api.openai.com/v1/chat/completions', {
        model: 'gpt-3.5-turbo',
        messages: newMessages.map(msg => ({ role: msg.role, content: msg.content })),
      }, {
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'Content-Type': 'application/json'
        }
      });

      setMessages([...newMessages, response.data.choices[0].message]);
    } catch (error) {
      console.error('Error fetching response:', error);
    }

    setLoading(false);
  };

  return (
    <div className="fixed bottom-16 right-6 bg-white text-black w-80 shadow-lg rounded-lg p-4 flex flex-col">
      <div className="flex justify-between items-center border-b pb-2 mb-2">
        <h2 className="text-lg font-semibold">Ask me anything!</h2>
        <button onClick={onClose} className="text-red-500 hover:text-red-700">
          <X className="h-5 w-5" />
        </button>
      </div>
      <div className="h-60 overflow-y-auto flex flex-col space-y-2 p-2 border rounded">
        {messages.map((msg, index) => (
          <div key={index} className={`p-2 rounded max-w-[90%] ${msg.role === 'user' ? 'bg-blue-500 text-white self-end' : 'bg-gray-200 text-black self-start'}`}>
            {msg.content}
          </div>
        ))}
      </div>
      <div className="mt-2 flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 border rounded-l"
          placeholder="Type a message..."
        />
        <button
          onClick={sendMessage}
          disabled={loading}
          className="bg-blue-600 text-white px-4 rounded-r hover:bg-blue-700 transition"
        >
          {loading ? '...' : 'Send'}
        </button>
      </div>
    </div>
  );
}
