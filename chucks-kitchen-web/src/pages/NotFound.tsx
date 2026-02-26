import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { IMAGES } from "@/lib/store";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-5">
      <div className="text-center">
        <Link to="/" className="block mx-auto mb-6 w-fit cursor-pointer">
          <img
            src={IMAGES.hero}
            alt="Chuka's Kitchen"
            className="h-40 w-40 rounded-full object-cover transition-opacity hover:opacity-90"
          />
        </Link>
        <h1 className="mb-2 text-6xl font-bold text-primary">404</h1>
        <p className="mb-6 text-xl text-muted-foreground">Oops! Page not found</p>
        <p className="mb-6 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            to="/"
            className="rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary/90"
          >
            Return to Home
          </Link>
          <Link
            to="/menu"
            className="rounded-full border border-primary px-6 py-3 font-semibold text-primary hover:bg-primary/10"
          >
            Browse Menu
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
