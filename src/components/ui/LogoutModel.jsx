import { Modal, Button, ModalHeader, ModalBody } from "flowbite-react";
import React from "react";

const LogoutModal = ({ isOpen, onConfirm, onCancel }) => {
  return (
    <Modal show={isOpen} size="md" onClose={onCancel} popup>
      <ModalHeader className="bg-gradient-to-r from-[#f8d6e9]/70 to-[#d8cafa]/70"/>
      <ModalBody className="bg-gradient-to-r from-[#f8d6e9]/70 to-[#d8cafa]/70">
        <div className="text-center ">
          {/* Tailwind-based alert icon */}
          <div className="mx-auto mb-4 flex items-center justify-center h-14 w-14 rounded-full bg-red-100">
            <svg
              className="w-8 h-8 text-red-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v2m0 4h.01M21 12A9 9 0 113 12a9 9 0 0118 0z"
              />
            </svg>
          </div>

          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            Are you sure you want to logout?
          </h3>

          <div className="flex justify-center gap-4">
            <Button color="failure" onClick={onConfirm}>
              Yes, Logout
            </Button>
            <Button color="gray" onClick={onCancel}>
              Cancel
            </Button>
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default LogoutModal;
