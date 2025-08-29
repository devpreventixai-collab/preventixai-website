import { createContext, useState, useContext } from 'react';

const ContactContext = createContext({
  showContactModal: false,
  setShowContactModal: (value: boolean) => {},
});

export const ContactProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [showContactModal, setShowContactModal] = useState(false);
  return (
    <ContactContext.Provider value={{ showContactModal, setShowContactModal }}>
      {children}
    </ContactContext.Provider>
  );
};

export const useContact = () => useContext(ContactContext);