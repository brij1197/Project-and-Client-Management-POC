import '../assets/styles.css';

export const ProjectCard = ({ project }) => {

  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case 'in progress':
        return 'in-progress';
      case 'completed':
        return 'completed';
      case 'pending':
        return 'pending';
      default:
        return ''; 
    }
  };

  return (
    <div className="col-md-6">
      <div className={`card mb-3 ${getStatusClass(project.status)}`}  >
        <div className="card-body">
          <div className="d-flex justify-content-between align-tems-center">
            <h5 className="card-title">{project.name}</h5>
            <a className="btn btn-light" href={`/projects/${project.id}`}>View</a>
          </div>
          <p className="small">Status:<strong>{project.status}</strong></p>
        </div>
      </div>
    </div>
  );
};
