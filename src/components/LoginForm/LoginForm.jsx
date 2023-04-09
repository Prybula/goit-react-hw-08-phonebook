import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from './LoginForm.module.css';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { Button, TextField, ThemeProvider } from '@mui/material';
import { theme } from 'components/utils/ThemeProvider';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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

    dispatch(logIn({ email, password }))
      .unwrap()
      .then(res => {
        toast.success(`Hello, ${res.user.name}`);
      })
      .catch(err => {});
    setEmail('');
    setPassword('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <ThemeProvider theme={theme}>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          type="email"
          name="email"
          value={email}
          color="secondary"
          onChange={handleChange}
          className={css.input}
          required
        />

        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type="password"
          name="password"
          value={password}
          color="secondary"
          onChange={handleChange}
          className={css.input}
          required
        />
        <Button
          variant="contained"
          type="submit"
          color="primary"
          className={css.loginBtn}
        >
          Log In
        </Button>
      </ThemeProvider>
    </form>
  );
};
