import { Link } from "react-router-dom";
import Card from "../components/shared/Card";

function AboutPage() {
  return (
      <Card>
          <div className="about">
              <h1>About This Project</h1>
              <p>This is a training project</p>
              <p>Version: 1.0.0</p>
          </div>
          <Link to="/">Back to Home</Link>
      </Card>
  )
}

export default AboutPage;
