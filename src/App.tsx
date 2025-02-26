import { BrowserRouter as Router, Routes, Route } from 'react-router';
import GlobalStyles from './globalStyles.ts';
import MovementsPage from './pages/MovementsPage/MovementsPage';
import CategoriesPage from './pages/CategoriesPage/CategoriesPage';
import Error404 from './pages/Error404/Error404';
import { MobileLayout } from './layouts/MobileLayout/MobileLayout';
import LoginPage from './pages/LoginPage/LoginPage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<MobileLayout />}>
            <Route path="/" element={<LoginPage />} />
            <Route path="/movements" element={<MovementsPage />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="*" element={<Error404 />} />
          </Route>
        </Routes>
      </Router>
    <GlobalStyles />
    </>
  )
}

export default App