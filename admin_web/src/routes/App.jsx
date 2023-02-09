import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function App() {
  const { id } = useParams();
  const [admin, setAdmin] = useState('');

  useEffect(() => {
    const adminData = async () => {
      try {
        const res = await axios.get(`http://localhost:3010/admins/${id}`);
        setAdmin(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    adminData();
  }, [id]);

  return (
    <>
      <h1>管理者ID {id}</h1>
      {admin && (
        <>
          <p>名前: {admin.name}</p>
          <p>メールアドレス: {admin.email}</p>
        </>
      )}
      <Link to={'/'}>戻る</Link>
    </>
  );
}
