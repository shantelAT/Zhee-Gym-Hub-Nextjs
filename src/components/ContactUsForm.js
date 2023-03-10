import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ContactForm() {
  return (
  <div className='contactform-grid'>
    <Form className="contactform-form">

      <div className="contactform-title">
      <Form.Text > Subscribe </Form.Text>
      </div>
      <Form.Group className="contactform-fields" controlId="formBasicEmail">
        <Form.Control type="name" className="contactform-field"  placeholder="Name" />
        <Form.Control type="email" className="contactform-field" placeholder="Email" />
        <textarea className="contactform-message"  placeholder="Enter message here"/>
      </Form.Group>
      <button className='contact-btn' type="submit">
        Submit
      </button>
    </Form>
    </div>
  );
}

export default ContactForm;