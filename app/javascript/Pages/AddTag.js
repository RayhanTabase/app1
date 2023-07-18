import React, { useState } from 'react';

function AddAdmin() {
  const [searchTerm, setSearchTerm] = useState('');
  const [user, setUser] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await fetch(`/users/${searchTerm}`);
      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
      } else {
        console.error('Error:', response.status);
        // Handle error case (e.g., show error message)
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle error case (e.g., show error message)
    }
  };

  const handleAddAdmin = async () => {
    if (user) {
      try {
        const response = await fetch(`/users/${user.id}`, {
          method: 'PATCH',
          body: JSON.stringify({ admin: true }),
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').content,
          },
        });

        if (response.ok) {
          // Update the user's admin flag in the local state
          setUser({ ...user, admin: true });
          alert('Admin flag set to true for the user.');
        } else {
          console.error('Error:', response.status);
          // Handle error case (e.g., show error message)
        }
      } catch (error) {
        console.error('Error:', error);
        // Handle error case (e.g., show error message)
      }
    }
  };

  return (
    <div>
      <h2>Add Admin</h2>
      <div>
        <input
          type="text"
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
