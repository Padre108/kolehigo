import React, { useState, useEffect } from 'react';
import LoadingPage from './components/LoadingPage';
import LoginPage from './components/LoginPage';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (e.g., 2 seconds)
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="app">
      {isLoading ? <LoadingPage /> : <LoginPage />}
    </div>
  );
};
export default App;