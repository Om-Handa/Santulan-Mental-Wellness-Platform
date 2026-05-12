import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0
    })
  }, [])
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold text-blue-600">404</h1>
        <p className="mb-6 text-xl text-gray-500">Oops! Page not found</p>
        <a
          href="/"
          className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;