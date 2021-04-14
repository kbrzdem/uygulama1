import Form from './form'
import React, { useState, useEffect } from "react";
import {
  useHistory
} from 'react-router-dom'

const USERDATA = localStorage.getItem('userdata')
  ? JSON.parse(localStorage.getItem('userdata'))
  : [];

const FormData = () => {
  const [userdata, setUserdata] = useState(USERDATA);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  
  const history = useHistory();

  const handleName = event => {
    setName(event.target.value)
  }
  const handleSurname = event => {
    setSurname(event.target.value)
  }

  const handleSubmitForm = event => {
    event.preventDefault();
    if (name !== "" && surname !== "") {
      const data = { name, surname }
      setUserdata([...userdata, data])
      setName('')
      setSurname('')
      history.push({ pathname: "/Home", state: { ...data }, id: Date.now() });
    } else {
      console.log("Hata")
    }
  }

  useEffect(() => {
    localStorage.setItem('userdata', JSON.stringify(userdata));
  }, [userdata])

  return (
    <div className="container">
      <Form
        name={name}
        surname={surname}
        handleName={handleName}
        handleSurname={handleSurname}
        handleSubmitForm={handleSubmitForm} />
    </div>
  )

};

export default FormData;