import React from 'react';
import ChatContainer from './components/Chat/ChatContainer';
import LungIcon from './components/common/LungIcon';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-red-400 via-pink-600 to-red-400 shadow-sm">
        <div className="max-w-4xl mx-auto py-6 px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <LungIcon className="w-8 h-8 text-white animate-pulse" />
            <h1 className="text-3xl font-bold text-white tracking-tight">
              Lung Cancer Detection
            </h1>
          </div>
          <span className="block text-rose-100 text-xl font-medium">
            AI-Powered Assistant
          </span>
        </div>
      </header>
      <main className="max-w-4xl mx-auto p-4">
        <ChatContainer />
      </main>
      <footer className="max-w-4xl mx-auto p-4 text-center text-sm text-gray-500">
        <p>This is an AI-powered medical assistant prototype. Not for clinical use.</p>
      </footer>
    </div>
  );
}

export default App;
