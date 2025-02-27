import { BrowserRouter as Router, Routes, Route } from 'react-router';
import GlobalStyles from './globalStyles.ts';
import MobileLayout from './layouts/MobileLayout/MobileLayout';
import MovementsPage from './pages/MovementsPage/MovementsPage';
import CategoriesPage from './pages/CategoriesPage/CategoriesPage';
import Error404 from './pages/Error404/Error404';
import LoginPage from './pages/LoginPage/LoginPage';
import BudgetPage from './pages/BudgetPage/BudgetPage.tsx';
import UserPage from './pages/UserPage/UserPage.tsx';
import ChartsPage from './pages/ChartsPage/ChartsPage.tsx';
import { AppProvider } from './context/appContext.tsx';

function App() {
  return (
    <>
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="*" element={<Error404 />} />

          <Route element={<MobileLayout />}>
            <Route path="/movements" element={<MovementsPage />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/budgets" element={<BudgetPage />} />
            <Route path="/user" element={<UserPage />} />
            <Route path="/charts" element={<ChartsPage />} />
          </Route>

        </Routes>
      </Router>
    </AppProvider>
    <GlobalStyles />
    </>
  )
}

export default App