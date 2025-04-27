import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    setFormStatus({ submitted: true, success: true, message: 'Message sent successfully!' });
    
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setFormStatus(null);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: 'Email',
      content: 'jaspreetnahal100@gmail.com',
      link: 'mailto:jaspreetnahal100@gmail.com'
    },
    {
      icon: <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: 'Phone',
      content: '+91 9999604054',
      link: 'tel:+919999604054'
    },
    {
      icon: <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: 'Location',
      content: 'Noida, India',
      link: '#'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300">
            Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="flex items-center justify-center w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
              
              {formStatus && (
                <div className={`mt-4 p-3 rounded-lg ${formStatus.success ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'}`}>
                  {formStatus.message}
                </div>
              )}
            </form>
          </div>
          
          <div>
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg mr-4">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-1">{info.title}</h4>
                      <a 
                        href={info.link} 
                        className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {info.content}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Connect With Me</h3>
              
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/merciless-admiral-3083" 
                  className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-800/40 transition-colors"
                  aria-label="GitHub"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a 
                  href="https://www.linkedin.com/in/jaspreet-nahal/" 
                  className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-800/40 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <a 
                  href="https://www.instagram.com/yourusername/" 
                  className="p-3 bg-pink-50 dark:bg-pink-900/20 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-pink-100 dark:hover:bg-pink-800/40 transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.16c3.22 0 3.6.01 4.87.07 1.26.06 2.37.29 3.24.75.9.47 1.61 1.16 2.08 2.08.46.87.7 1.98.75 3.24.06 1.27.07 1.65.07 4.87s-.01 3.6-.07 4.87c-.06 1.26-.29 2.37-.75 3.24-.47.9-1.16 1.61-2.08 2.08-.87.46-1.98.7-3.24.75-1.27.06-1.65.07-4.87.07s-3.6-.01-4.87-.07c-1.26-.06-2.37-.29-3.24-.75-.9-.47-1.61-1.16-2.08-2.08-.46-.87-.7-1.98-.75-3.24-.06-1.27-.07-1.65-.07-4.87s.01-3.6.07-4.87c.06-1.26.29-2.37.75-3.24.47-.9 1.16-1.61 2.08-2.08.87-.46 1.98-.7 3.24-.75 1.27-.06 1.65-.07 4.87-.07zm0-2.16c-3.26 0-3.6.01-4.86.07-1.27.06-2.47.29-3.48.78-1.02.49-1.89 1.18-2.61 2.1-.73.91-1.3 2-1.67 3.15-.48 1.16-.71 2.46-.75 3.69-.06 1.28-.07 1.62-.07 4.88s.01 3.6.07 4.87c.04 1.23.27 2.53.75 3.69.37 1.15.94 2.24 1.67 3.15.72.91 1.59 1.6 2.61 2.1 1.01.49 2.21.72 3.48.78 1.26.06 1.6.07 4.86.07s3.6-.01 4.86-.07c1.27-.06 2.47-.29 3.48-.78 1.02-.49 1.89-1.18 2.61-2.1.73-.91 1.3-2 1.67-3.15.48-1.16.71-2.46.75-3.69.06-1.28.07-1.62.07-4.87s-.01-3.6-.07-4.88c-.04-1.23-.27-2.53-.75-3.69-.37-1.15-.94-2.24-1.67-3.15-.72-.91-1.59-1.6-2.61-2.1-1.01-.49-2.21-.72-3.48-.78-1.26-.06-1.6-.07-4.86-.07zm0 5.91c2.79 0 5.05 2.26 5.05 5.05s-2.26 5.05-5.05 5.05-5.05-2.26-5.05-5.05 2.26-5.05 5.05-5.05zm0 8.91c2.12 0 3.85-1.73 3.85-3.85s-1.73-3.85-3.85-3.85-3.85 1.73-3.85 3.85 1.73 3.85 3.85 3.85zm6.8-8.91c.48 0 .86.39.86.86s-.39.86-.86.86-.86-.39-.86-.86.39-.86.86-.86z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;