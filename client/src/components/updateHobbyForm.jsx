import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_HOBBY } from "../utils/mutations";
import { QUERY_HOBBIES } from "../utils/queries";

const UpdateHobbyForm = ({
  hobbyId,
  initialHobbiesData,
  handleCloseUpdateHobbyModal,
}) => {
  const [formState, setFormState] = useState({
    name: initialHobbyData.name,
    description: initialHobbyData.description,
  });

  useEffect(() => {
    setFormState({
      name: initialHobbyData.name,
      description: initialHobbyData.description,
    });
  }, [initialHobbyData]);

  const [updateHobby, { error }] = useMutation(UPDATE_HOBBY, {
    refetchQueries: [{ query: QUERY_HOBBIES }],
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await updateHobby({ variables: { hobbyId, ...formState } });
      setFormState({
        name: "",
        description: "",
      });
      handleCloseUpdateHobbyModal();
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleDescriptionChange = (event, index) => {
    const newdescription = [...formState.description];
    newdescription[index] = event.target.value;
    setFormState({ ...formState, description: newdescription });
  };

  const handleRemoveDescription = (index) => {
    const newdescription = [...formState.description];
    newdescription.splice(index, 1);
    setFormState({ ...formState, description: newdescription });
  };

  const addDescription = () => {
    setFormState({ ...formState, description: [...formState.description, ""] });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        name='name'
        value={formState.name}
        onChange={handleChange}
        placeholder='Hobby Name'
      />
      <input
        name='description'
        value={formState.description}
        onChange={handleChange}
        placeholder='Description'
      />
      {formState.description.map((description, index) => (
        <div key={index}>
          <input
            value={description}
            onChange={(event) => handleDescriptionChange(event, index)}
            placeholder='Description'
          />
          <button type='button' onClick={() => handleRemoveDescription(index)}>
            Remove
          </button>
        </div>
      ))}
      <button type='button' onClick={addDescription}>
        Add Description
      </button>
      <button type='submit'>Update Hobby</button>
      {error && <div>Error: {error.message}</div>}
    </form>
  );
};

export default UpdateHobbyForm;
