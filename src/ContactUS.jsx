import { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for contacting Innovatex! See you soon: ' + formData.name);
    setFormData({ name: '', email: '', message: '' }); 
  };

  return (
    <div className="p-6">
      <h1 className="text-4xl font-semibold text-center text-gray-800 mb-6 mt-4">Contact InnovateX</h1>
      <p className="text-lg text-gray-700 mb-4">We’d love to hear from you! If you have any questions, feedback, or suggestions, please reach out.</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-lg font-medium text-gray-800">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-lg font-medium text-gray-800">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-lg font-medium text-gray-800">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button type="submit" className="w-full p-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600
        focus:outline-none focus:ring-2 focus:ring-blue-400">
          Submit
        </button>
      </form>

      <div className="mt-8 text-center">
        <h2 className="text-2xl font-semibold text-gray-800">Other Ways to Reach Us</h2>
        <p className="mt-4 text-lg text-gray-700">Email: <a href="mailto:contact@innovatex.com" className="text-blue-500">contact@innovatex.com</a></p>
        <p className="mt-2 text-lg text-gray-700">Phone: +1 (123) 456-7890</p>
        <p className="mt-4 text-lg text-gray-700">Follow Innovatex on social media:</p>
        <ul className="text-2xl flex justify-center items-center mt-3">
         <li className='mr-4'><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-500">LinkedIn</a></li>
         <li className='mr-4'><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-blue-500">Instagram</a></li>
          <li><a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500">GitHub</a></li>
        </ul>
      </div>
    </div>
  );
};

export default ContactPage;
