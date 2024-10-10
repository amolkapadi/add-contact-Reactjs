import React, { useState } from 'react';
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [contactList, setContactList] = useState([]);

  // Function to handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && contact) {
      setContactList([...contactList, { name, contact }]);
      setName('');
      setContact('');
      setIsModalOpen(false);
    }
  };

  // Function to get the initials of the user's name
  const getInitials = (name) => {
    return name.charAt(0).toUpperCase();
  };

  return (
    <div className="App">
    <div className='main'>
    <h1>Contact List</h1>
    <button onClick={() => setIsModalOpen(true)}>Add Contact</button>
    </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Add Contact</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label>Name:</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label>Contact Number:</label>
                <input
                  type="text"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  required
                />
              </div>
              <button type="submit">Submit</button>
              <button onClick={() => setIsModalOpen(false)}>Close</button>
            </form>
          </div>
        </div>
      )}

      {/* Contact List Display with Cards */}
      <div className="contact-list">
        {contactList.map((item, index) => (
          <div key={index} className="contact-card">
            <div className="profile-pic">{getInitials(item.name)}</div>
            <div className="contact-details">
              <h3>{item.name}</h3>
              <p>{item.contact}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
