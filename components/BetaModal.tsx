import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

interface BetaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BetaModal({ isOpen, onClose }: BetaModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // Add document to 'beta-submissions' collection
      await addDoc(collection(db, 'beta-submissions'), {
        ...formData,
        timestamp: serverTimestamp(),
      });

      setStatus('success');
      setTimeout(() => {
        onClose();
        setStatus('idle');
        setFormData({ name: '', email: '', description: '' });
      }, 2000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
            onClick={onClose}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-md mx-4"
              onClick={e => e.stopPropagation()}
            >
              <div className="bg-purple-100 p-12 rounded-lg shadow-xl text-center relative min-h-[400px] flex flex-col justify-between">
                <div className="space-y-6 mb-8">
                  <h3 className="text-2xl font-bold text-purple-900">Join our exclusive beta program</h3>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="flex flex-col space-y-4">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Name"
                      required
                      className="px-4 py-3 rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-black"
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      required
                      className="px-4 py-3 rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-black"
                    />
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Briefly describe your business"
                      required
                      className="px-4 py-3 rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 min-h-[100px] text-black"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className={`w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 ${
                      status === 'submitting' ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {status === 'submitting' ? 'Submitting...' : 
                     status === 'success' ? 'Submitted!' : 
                     status === 'error' ? 'Failed - Try Again' : 
                     'Submit Interest'}
                  </button>
                </form>

                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-purple-900 hover:text-purple-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}