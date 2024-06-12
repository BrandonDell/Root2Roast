import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import CommentList from "../components/CommentList";
import CommentForm from "../components/CommentForm";
import UpdateHobbyForm from "../components/updateHobbyForm";
import { QUERY_SINGLE_HOBBY } from "../utils/queries";

const SingleHobby = () => {
  const { hobbyId } = useParams();
  const { loading, data } = useQuery(QUERY_SINGLE_HOBBY, {
    variables: { hobbyId: hobbyId },
  });

  const hobby = data?.hobby || {};

  const [showUpdateHobbyModal, setShowUpdateHobbyModal] = useState(false);

  const handleCloseUpdateHobbyModal = () => setShowUpdateHobbyModal(false);
  const handleShowUpdateHobbyModal = () => setShowUpdateHobbyModal(true);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className='my-3'>
        <h4 className='card-header bg-dark text-light p-2 m-0'>
          {hobby.name}
        </h4>
        <div className='card-body bg-light p-2'>
          <h5>Description:</h5>
          <p>{hobby.desciption}</p>
          <h5>Members:</h5>
          <ul>
            {hobby.user.map((user, i) => (
              <li key={i}>{user}</li>
            ))}
          </ul>
          <Button onClick={handleShowUpdateHobbyModal}>Update Hobby</Button>
        </div>

        <div className='my-5'>
          <CommentList comments={hobby.comments} hobbyId={hobby._id} />
        </div>
        <div className='m-3 p-4' style={{ border: "1px dotted #1a1a1a" }}>
          <CommentForm hobbyId={hobby._id} />
        </div>
      </div>

      <Modal
        show={showUpdateHobbyModal}
        onHide={handleCloseUpdateHobbyModal}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Hobby</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Pass initialHobbyData prop here */}
          <UpdateHobbyForm
            hobbyId={hobby._id}
            initialHobbyData={hobby}
            handleCloseUpdateHobbyModal={handleCloseUpdateHobbyModal}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleCloseUpdateHobbyModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SingleHobby;
