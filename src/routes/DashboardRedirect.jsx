import { Navigate } from "react-router-dom";
import useAuth from "../components/hooks/useAuth";
import { useEffect, useState } from "react";

const DashboardRedirect = () => {
  const { user } = useAuth();
  const [redirectPath, setRedirectPath] = useState(null);

  useEffect(() => {
    if (user && user.groups) {
      const groupNames = user.groups.map(g => g.name?.toLowerCase());

      if (groupNames.includes("admin")) {
        setRedirectPath("/dashboard/admin-dashboard");
      } else if (groupNames.includes("teacher")) {
        setRedirectPath("/dashboard/teacher-dashboard");
      } else if (groupNames.includes("student")) {
        setRedirectPath("/dashboard/order");
      } else {
        setRedirectPath("/");
      }
    }
  }, [user]);

  // Prevent flashing by waiting until redirectPath is set
  if (!redirectPath) return null;

  return <Navigate to={redirectPath} replace />;
};

export default DashboardRedirect;
