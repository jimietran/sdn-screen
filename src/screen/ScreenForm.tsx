import { SyntheticEvent, useState } from "react";
import { Person } from "./Person";

interface ScreenFormProps {
  person: Person;
  onScreen: (person: Person) => void;
}

function ScreenForm({ person: initialPerson, onScreen }: ScreenFormProps) {
  const [person, setPerson] = useState(initialPerson);
  const [errors, setErrors] = useState({
    name: "",
    country: "",
    dob: "",
  });

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    if (!isValid()) return;
    onScreen(person);
  };

  function isValid() {
    return (
      errors.name.length === 0 &&
      errors.country.length === 0 &&
      errors.dob.length === 0
    );
  }

  const handleChange = (event: any) => {
    const { name, value, maxLength } = event.target;
    const updatedValue = value;
    const change = {
      [name]: name === "dob" ? updatedValue.slice(0, maxLength) : updatedValue,
    };

    let updatedPerson: Person;
    setPerson((p) => {
      updatedPerson = new Person({ ...p, ...change });
      return updatedPerson;
    });
    setErrors(() => validate(updatedPerson));
  };

  function validate(person: Person) {
    let errors: any = { name: "", country: "", dob: "" };
    if (person.name.length === 0) {
      errors.name = "Full name is required.";
    }
    if (person.country.length === 0) {
      errors.country = "Country is required.";
    }
    if (person.dob.length === 0) {
      errors.dob = "Birth year is required.";
    }
    return errors;
  }

  return (
    <form className="input-group vertical" onSubmit={handleSubmit}>
      <h1>SDN Screen</h1>
      <label id="name">Full Name</label>
      <input
        type="text"
        name="name"
        placeholder="enter full name"
        value={person.name}
        onChange={handleChange}
      />
      {errors.name.length > 0 && (
        <div className="error">
          <p>{errors.name}</p>
        </div>
      )}

      <label id="country">Country</label>
      <input
        type="text"
        name="country"
        placeholder="enter country"
        value={person.country}
        onChange={handleChange}
      />
      {errors.country.length > 0 && (
        <div className="error">
          <p>{errors.country}</p>
        </div>
      )}
      <label id="dob">Birth Year</label>
      <input
        type="number"
        name="dob"
        placeholder="enter birth year"
        value={person.dob}
        onChange={handleChange}
        maxLength={4}
      />
      {errors.dob.length > 0 && (
        <div className="error">
          <p>{errors.dob}</p>
        </div>
      )}
      <div className="input-group">
        <button className="primary bordered medium">Screen</button>
      </div>
    </form>
  );
}

export default ScreenForm;
