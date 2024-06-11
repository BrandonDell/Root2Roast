import { Link } from "react-router-dom";

const HobbyList = ({ hobbies }) => {
  if (!hobbies.length) {
    return <h3>No hobbies Yet</h3>;
  }
  console.log(hobbies);
  return (
    <div>
      {hobbies &&
        hobbies.map((hobby) => (
          <div key={hobby._id} className='card mb-3'>
            <h4 className='card-header bg-dark text-light p-2 m-0'>
              {hobby.name}
            </h4>
            <div className='card-body bg-light p-2'>
              <h5>Description:</h5>
              <p>{hobby.description}</p>
              <h5>Habitat:</h5>
            </div>
            <Link
              className='btn btn-primary btn-block btn-squared'
              to={`/hobbies/${hobby._id}`}
            >
              Join the discussion on this hobby.
            </Link>
          </div>
        ))}
    </div>
  );
};

export default HobbyList;
