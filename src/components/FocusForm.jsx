import React, { useEffect, useRef, useState } from "react";

export default function FocusForm() {
  const focusInput = useRef(null);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const error = [];
  const errorMessage = "";


  // Toggle form
  useEffect(() => {
    focusInput.current.focus();
  }, []);
  // Validate
  const validate = () => {
    if (name == '') {
      errorMessage = "";
      error.push('Field name is required');
      return false;
    } else if (password == '') {
      return false;
    }else{
        return true;
    }
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
  console.log(error); 
    if(!validate){
        alert(error[0])
    }else{
        console.log('Name: ',  name);
        console.log('Password: ',  password);
    }
  };
  return (
    <div>
      <form>
        <h3>LOGIN</h3>
        <label>Username</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          ref={focusInput}
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          ref={focusInput}
        />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
