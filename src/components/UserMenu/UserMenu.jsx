import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import css from './UserMenu.module.css';
import { toast } from 'react-toastify';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogout = () => {
    dispatch(logOut())
      .unwrap()
      .then(res => {
        toast.success('You are logged out!');
      })
      .catch(err => {});
  };
  return (
    <>
      <div className={css.wrapper}>
        <p className={css.username}>
          <PersonIcon className={css.userIcon} />
          {user.name}
        </p>
        <LogoutIcon className={css.logout} onClick={() => handleLogout()}>
          Log out
        </LogoutIcon>
      </div>
    </>
  );
};
