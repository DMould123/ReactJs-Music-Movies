import React from 'react'
function Contact() {
  return (
    <div className="contactform-container">
      <form id="my-form" onsubmit="alert('you submitted the form')">
        <div className="form-group">
          <label for="firstName"> First Name</label>
          <input type="text" id="firstName" name="firstName" />
        </div>

        <div className="form-group">
          <label for="Surname">Surname</label>
          <input type="text" id="Surname" name="Surname" />
        </div>

        <div className="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>

        <div className="form-group">
          <label for="feedback">Feedback</label>
          <textarea
            name="feedback"
            id="feedback"
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
export default Contact
