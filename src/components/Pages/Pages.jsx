import { Navigate } from "react-router-dom";

export default function Pages() {
  // Redirect /pages to first sub-page
  return <Navigate to="/service-details" replace />;
}