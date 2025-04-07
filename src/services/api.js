const API_URL = 'http://localhost:5000';

export const sendMessage = async (message, image) => {
  const formData = new FormData();
  formData.append('message', message);
  if (image) {
    formData.append('image', image);
  }

  try {
    const response = await fetch(`${API_URL}/chat`, {
      method: 'POST',
      body: formData,
    });
    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};
