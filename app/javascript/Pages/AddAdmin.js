import React, { useState } from 'react';

function AddAdmin() {
  const [searchTerm, setSearchTerm] = useState('');
  const [user, setUser] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await fetch('/user/find', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').content,
        },
        body: JSON.stringify({ email: searchTerm }),
      });
  
      if (response.ok) {
        // const userData = await response.json();
        setUser(searchTerm);
      } else {
        console.error('Error:', response.status);
        // Handle error case (e.g., show error message)
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle error case (e.g., show error message)
    }
  };
  
  const handleAddAdmin = () => {
    if (user) {
      // Perform logic to update the user's admin flag to true
      // For simplicity, let's assume it sets the admin flag to true for the found user
      // You should replace this with your actual update logic
      setUser({ ...user, admin: true });
      alert('Admin flag set to true for the user.');
    }
  };

  return (
    <div>
      <h2>Add Admin</h2>
      <div>
        <input
          type="email"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for a user"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {user && (
        <div>
          <p>
            User found: {user.name} (ID: {user.id})
          </p>
          <button onClick={handleAddAdmin}>Add Admin</button>
        </div>
      )}
    </div>
  );
}

export default AddAdmin;
