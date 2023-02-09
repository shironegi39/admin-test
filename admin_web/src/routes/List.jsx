import React, { useState, useEffect } from 'react';
import { Admin } from '../component/Admin';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default function List() {
  const [admins, setAdmins] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const fetch = async () => {
    const res = await axios.get('http://localhost:3010/admins');
    setAdmins(res.data);
  };

  const createAdmin = async () => {
    await axios.post('http://localhost:3010/admins', {
      name: name,
      email: email,
    });
    setName('');
    setEmail('');
    fetch();
  };

  const showAdmin = async (id) => {
    await axios.get(`http://localhost:3010/admins/${id}`);
    fetch();
  };

  const destroyaAdmin = async (id) => {
    await axios.delete(`http://localhost:3010/admins/${id}`);
    fetch();
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <Container>
        <h1 className='mt-3'>管理者一覧</h1>

        <Link to={'/app'}>Your Name</Link>

        <Form className='mb-3'>
          <Form.Group className='mb-3' controlId='formBasicName'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='name'
              placeholder='名前を入力'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Form.Text className='text-muted'></Form.Text>
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type='email'
              placeholder='アドレスを入力'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Button variant='primary' type='submit' onClick={createAdmin}>
            登録
          </Button>
        </Form>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>
            {admins.map((admin, index) => {
              return (
                <Admin
                  id={admin.id}
                  key={index}
                  index={index}
                  name={admin.name}
                  email={admin.email}
                  destroyAdmin={destroyaAdmin}
                  showAdmin={showAdmin}
                />
              );
            })}
          </tbody>
        </Table>
      </Container>
    </>
  );
}
