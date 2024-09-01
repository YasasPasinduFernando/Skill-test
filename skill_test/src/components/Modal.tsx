import React from 'react';
import { X, AlertCircle } from 'lucide-react';

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg max-w-md w-full">
        <div className="flex flex-col items-center mb-4">
          {/* Add the alert icon at the top */}
          <div className="bg-green-100 rounded-full p-2 mb-2">
            <AlertCircle size={32} className="text-green-500" />
          </div>
          <h3 className="text-lg font-semibold">Confirm your selection</h3>
        </div>
        <p className="mb-4">Are you sure you want to submit property selection to the vouchers? This action cannot be undone.</p>
        <div className="flex flex-col md:flex-row justify-end space-y-2 md:space-y-0 md:space-x-2">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;