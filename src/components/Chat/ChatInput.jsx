import React, { useState } from 'react';
import { PaperAirplaneIcon, PaperClipIcon } from '@heroicons/react/24/solid';

const ChatInput = ({ onSendMessage, loading }) => {
  const [message, setMessage] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() || image) {
      onSendMessage(message, image);
      setMessage('');
      setImage(null);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="flex items-center space-x-2">
        {/* File Upload Button */}
        <div className="flex-shrink-0">
          <label htmlFor="image-upload" className="cursor-pointer">
            <div className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <PaperClipIcon className="h-6 w-6 text-gray-500" />
            </div>
            <input
              type="file"
              id="image-upload"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              className="hidden"
            />
          </label>
        </div>

        {/* Text Input */}
        <div className="flex-1 relative">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="w-full p-3 pr-12 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            disabled={loading}
          />
          
          {/* Send Button */}
          <button
            type="submit"
            disabled={loading || (!message.trim() && !image)}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:hover:bg-transparent transition-colors"
          >
            <PaperAirplaneIcon className="h-5 w-5 text-blue-500" />
          </button>
        </div>
      </div>

      {/* Image Preview */}
      {image && (
        <div className="mt-2 p-2 bg-gray-50 rounded-lg">
          <div className="flex items-center space-x-2">
            <img
              src={URL.createObjectURL(image)}
              alt="Preview"
              className="h-10 w-10 object-cover rounded"
            />
            <span className="text-sm text-gray-600">MRI Image Selected</span>
            <button
              type="button"
              onClick={() => setImage(null)}
              className="text-red-500 text-sm hover:underline"
            >
              Remove
            </button>
          </div>
        </div>
      )}
    </form>
  );
};

export default ChatInput;
