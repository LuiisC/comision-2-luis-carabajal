export const TaskItem = ({ title, description, done }) => {
    return (
        <div className="col-sm-6 mb-3 mb-sm-0">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href="#" className={`btn ${done ? "btn-success" : "btn-warning"}`}> {done ? "Completado" : "Completar"}</a>
                </div>
            </div>
        </div>
    )
  }