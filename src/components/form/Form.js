import React, { useState } from 'react'
import axios from 'axios'
import './form.scss'

const Form = () => {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  })
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    })
    if (ok) {
      form.reset()
    }
  }
  const handleOnSubmit = e => {
    e.preventDefault()
    const form = e.target
    setServerState({ submitting: true })
    axios({
      method: 'post',
      url: 'https://getform.io/f/2f7686ae-155c-4fb7-983b-181931f3f8cf',
      data: new FormData(form),
    })
      .then(r => {
        handleServerResponse(true, 'Thanks!', form)
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form)
      })
  }
  return (
    <div className="form-container">
      <form onSubmit={handleOnSubmit}>
        <div className="form-group">
          <label for="inputName" required="required">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="inputName"
            placeholder="Name"
            required="required"
          />
        </div>
        <div className="form-group">
          <label for="inputEmail1" required="required">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="inputEmail1"
            aria-describedby="emailHelp"
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <label for="inputMessage" required="required">
            Message
          </label>
          <input
            type="textarea"
            name="email"
            className="form-control"
            id="inputMessage"
            aria-describedby="emailHelp"
            placeholder="Message"
          />
        </div>

        <div className="form-group">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={serverState.submitting}
          >
            Submit
          </button>
          {serverState.status && (
            <p className={!serverState.status.ok ? 'errorMsg' : ''}>
              {serverState.status.msg}
            </p>
          )}
        </div>
      </form>
    </div>
  )
}
export default Form
