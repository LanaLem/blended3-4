import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { AddContacts } from 'pages/AddContact/AddContact';
import { Box } from 'constants';

export const App = () => {
  return (
    <Box display="flex" flexDirection="column">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/add" element={<AddContacts />} />
          {/* <Route path="/contact" element={<Contacts />} /> */}
        </Route>
      </Routes>
    </Box>
  );
};
