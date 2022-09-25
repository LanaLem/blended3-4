import { Outlet } from 'react-router-dom';
import { Item } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <ul>
        <li>
          <Item to="/" end>
            Home
          </Item>
        </li>
        <li>
          <Item to="/add">Contact</Item>
        </li>
      </ul>
      <Outlet />
    </>
  );
};
