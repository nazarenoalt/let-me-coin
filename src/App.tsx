import { BrowserRouter as Router, Routes, Route } from 'react-router';
import GlobalStyles from './globalStyles.js';
import HomePage from './pages/HomePage/HomePage';
import CategoriesPage from './pages/CategoriesPage/CategoriesPage';
import { Error404 } from './pages/Error404/Error404';
import { MobileLayout } from './layouts/MobileLayout/MobileLayout.js';
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route element={<MobileLayout />}>
            <Route path="/" element={<HomePage />} />
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