import React from 'react';
import Contact from './Contact';
import { UserRound } from 'lucide-react';

const ContactList = ({ contacts, onDeleteContact }) => {
  if (contacts.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 text-center">
        <div className="flex justify-center">
          <UserRound className="h-12 w-12 text-gray-300" />
        </div>
        <p className="mt-2 text-gray-500">No contacts found</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <ul className="divide-y divide-gray-200">
        {contacts.map((contact) => (
          <Contact
            key={contact.id}
            contact={contact}
            onDelete={onDeleteContact}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;