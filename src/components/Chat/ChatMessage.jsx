import React from 'react';

const ChatMessage = ({ message }) => {
  const isBot = message.type === 'bot';

  return (
    <div className={`flex ${isBot ? 'justify-start' : 'justify-end'} mb-4`}>
      <div className={`flex max-w-[80%] ${isBot ? 'flex-row' : 'flex-row-reverse'}`}>
        {/* Avatar */}
        <div className="flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center">
          {isBot ? (
            <div className="bg-blue-100 rounded-full p-2">
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
          ) : (
            <div className="bg-gray-200 rounded-full p-2">
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
          )}
        </div>

        {/* Message Content */}
        <div className={`mx-2 ${isBot ? 'order-2' : 'order-1'}`}>
          <div className={`rounded-lg p-4 ${
            isBot 
              ? 'bg-white border border-gray-200 text-gray-800' 
              : 'bg-blue-500 text-white'
          }`}>
            <p className="text-sm">{message.content}</p>
            {message.image && (
              <img 
                src={URL.createObjectURL(message.image)} 
                alt="Uploaded MRI"
                className="mt-2 max-w-xs rounded"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
