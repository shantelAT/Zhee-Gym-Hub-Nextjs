import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function SignInForm() {
  return (
  <div className='contactform-grid'>
    <Form className="contact-form">
      <Form.Text className="contact-title"> Subscribe </Form.Text>
      <Form.Group className="contact-fields" controlId="formBasicEmail">
        <Form.Control type="name" className="contact-field"  placeholder="Name" />
        <Form.Control type="name" className="contact-field" placeholder="Email" />
      

      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">

      <div className="field textarea">
        <textarea className="message" cols="30" rows="10" placeholder="This is a demo and doesn't actually work.."/>
      </div>

        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
         
        <Form.Text className='contact-forgetpass'>
           <a > forget your password? </a>
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  );
}

export default SignInForm;