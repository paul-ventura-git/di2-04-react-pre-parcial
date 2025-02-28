import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="container">
      <div className="p-5 mb-4 mt-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">404 Not Found</h1>
          <p className="col-md-8 fs-4">
            A 404 status code only indicates that the resource is missing without indicating if this is temporary or permanent. 
            If a resource is permanently removed, servers should send the 410 Gone status instead.
          </p>
          <Link to="/"><button className="btn btn-primary btn-lg" type="button">Back to homepage</button></Link>
        </div>
      </div>
    </div>
  )
}
