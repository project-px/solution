import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';

import Project1 from './page/Project1';
import Project2 from './page/Project2';

import { useLocalStorageState } from './hooks/useLocalStorageState';
import { useEffect } from 'react';

function App() {
  const [theme, setTheme] = useLocalStorageState([], 'theme-mode');

  useEffect(() => {
    if (theme.length) return;

    setTheme([
      {
        id: 1,
        mode: 'light',
      },
      { id: 2, mode: 'light' },
    ]);
  }, []);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route index path="/">
          <Route path="1" element={<Project1 />} />
          <Route path="1-hard" element={<Project1 difficult />} />
          <Route path="2" element={<Project2 />} />
          <Route path="2-hard" element={<Project2 difficult />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
