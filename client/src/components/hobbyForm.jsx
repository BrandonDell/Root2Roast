import { useState } from "react";
import { useMutation } from "@apollo/client";

import { ADD_HOBBY } from "../../utils/mutations";
import { QUERY_HOBBIES } from "../../utils/queries";

const HobbyForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    description: "",
  });
  const [descriptionInput, setdescriptionInput] = useState("");
  const [addHobby, { error }] = useMutation(ADD_HOBBY, {
    refetchQueries: [QUERY_HOBBIES, "getHobbies"],
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addHobby({
        variables: { ...formState },
      });
      console.log(data);
      setFormState({
        name: "",
        description: "",
      });
      setDescriptionInput("");
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };
  const handleDescriptionChange = (event) => {
    setDescriptionInput(event.target.value);
  };
  const handleAddDescription = () => {
    if (descriptionInput.trim() !== "") {
      setFormState({
        ...formState,
        descriptions: [...formState.descriptions, descriptionInput],
      });
      setdescriptionInput("");
    }
  };

  const handleRemoveDescription = (index) => {
    const updateddescriptions = formState.descriptions.filter(
      (_, idx) => idx !== index
    );
    setFormState({ ...formState, descriptions: updateddescriptions });
  };

  return (
    <div>
      <h3>Add Hobby?</h3>

      <form
        className='flex-row justify-center justify-space-between-md align-center'
        onSubmit={handleFormSubmit}
      >
        <div className='col-12 col-lg-9'>
          <textarea
            name='name'
            placeholder="Here's a new hobby..."
            value={formState.name}
            className='form-input w-100'
            style={{ lineHeight: "1.5", resize: "vertical" }}
            onChange={handleChange}
          ></textarea>
          <textarea
            name='description'
            placeholder='Describe the hobby?'
            value={formState.description}
            className='form-input w-100'
            style={{ lineHeight: "1.5", resize: "vertical" }}
            onChange={handleChange}
          ></textarea>
          {/* insert an input for an array of strings */}
          <div>
            <input
              type='text'
              placeholder='Enter a description'
              value={descriptionInput}
              onChange={handleDescriptionChange}
            />
            <button type='button' onClick={handleAddDescription}>
              Add description
            </button>
          </div>
          <div>
            <h4>descriptions:</h4>
            <ul>
              {formState.descriptions.map((description, index) => (
                <li key={index}>
                  {description}
                  <button
                    type='button'
                    onClick={() => handleRemoveDescription(index)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className='col-12 col-lg-3'>
          <button className='btn btn-primary btn-block py-3' type='submit'>
            Add Hobby
          </button>
        </div>
        {error && (
          <div className='col-12 my-3 bg-danger text-white p-3'>
            {error.message}
          </div>
        )}
      </form>
    </div>
  );
};

export default HobbyForm;
