import React, { useState, useRef, useEffect } from 'react';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';

const ChatContainer = () => {
  const [messages, setMessages] = useState([{
    type: 'bot',
    content: "Hello! I'm your medical assistant. I can help analyze your MRI images and answer questions about lung cancer. How can I help you today?"
  }]);
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async (message, image = null) => {
    setLoading(true);
    // ... rest of your send message logic
  };

  return (
    <div className="flex flex-col h-[calc(100vh-2rem)] bg-white rounded-lg shadow-xl mx-auto max-w-4xl">
      {/* Chat Header */}
      <div className="border-b p-4 bg-white rounded-t-lg">
        <h2 className="text-lg font-semibold text-gray-800">Medical Assistant</h2>
        <p className="text-sm text-gray-500">Powered by AI</p>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {messages.map((message, index) => (
          <ChatMessage key={index} message={message} />
        ))}
        {loading && (
          <div className="flex space-x-2 p-3 bg-gray-100 rounded-lg max-w-[80%]">
            <div className="loading-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      {/* Input Area */}
      <div className="border-t bg-white p-4 rounded-b-lg">
        <ChatInput onSendMessage={handleSendMessage} loading={loading} />
      </div>
    </div>
  );
};

export default ChatContainer;
