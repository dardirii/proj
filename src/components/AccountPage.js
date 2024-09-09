import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { fetchUserData } from '../api/accountApi';

const Account = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const data = await fetchUserData();
        setUserData(data);
      } catch (error) {
        console.error("Error loading user data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadUserData();
  }, []);

  if (loading) {
    return <p>Loading account data...</p>;
  }

  return (
    <Container>
      {userData ? (
        <>
          <h2>Account Center</h2>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
        </>
      ) : (
        <p>No account data available</p>
      )}
    </Container>
  );
};

export default Account;