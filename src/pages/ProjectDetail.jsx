import { Navigate } from "react-router-dom";

const ProjectDetail = () => {
  // individual project pages not implemented in prasen-style layout
  return <Navigate to="/projects" replace />;
};

export default ProjectDetail;
