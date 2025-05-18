import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background" data-id="6scsfm252" data-path="src/pages/NotFound.tsx">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-6 p-8">

        <motion.div
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}>

          <h1 className="text-8xl font-bold text-primary" data-id="43yriqcym" data-path="src/pages/NotFound.tsx">404</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-4">

          <h2 className="text-2xl font-semibold tracking-tight" data-id="tpvmo4z1d" data-path="src/pages/NotFound.tsx">Page Not Found</h2>
          <p className="text-muted-foreground" data-id="18h763shv" data-path="src/pages/NotFound.tsx">
            Sorry, the page you are looking for does not exist or has been removed.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}>

          <Button asChild variant="default" size="lg">
            <a href="/" data-id="o7yoo0qlo" data-path="src/pages/NotFound.tsx">Back to Home</a>
          </Button>
        </motion.div>
      </motion.div>
    </div>);

};

export default NotFound;