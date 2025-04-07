import React from 'react';

const ImageUpload = ({ onImageSelect, selectedImage }) => {
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      onImageSelect(file);
    }
  };

  return (
    <div className="relative">
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="hidden"
        id="image-upload"
      />
      <label 
        htmlFor="image-upload"
        className="cursor-pointer p-2 bg-gray-100 rounded-lg hover:bg-gray-200"
      >
        {selectedImage ? '✓ MRI Selected' : '+ Add MRI'}
      </label>
    </div>
  );
};

export default ImageUpload;
