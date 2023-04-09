import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { register } from 'redux/auth/operations';

import { toast } from 'react-toastify';
import { Button, TextField, ThemeProvider } from '@mui/material';
import { theme } from 'components/utils/ThemeProvider';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(register({ name, email, password }))
      .unwrap()
      .then(res => {
        toast.success(`User ${res.user.name} succesfully registered`);
      })
      .catch(err => {
        toast.error(`Oops. Something went wrong... ${err}`);
      });
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <ThemeProvider theme={theme}>
        <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          className={css.input}
          color="secondary"
          required
        />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          className={css.input}
          color="secondary"
          required
        />

        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          minLength={7}
          className={css.input}
          color="secondary"
          required
        />

        <Button
          variant="contained"
          color="primary"
          type="submit"
          className={css.registerBtn}
        >
          Register
        </Button>
      </ThemeProvider>
    </form>
  );
};
