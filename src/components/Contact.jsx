import "../css/Contact.scss";
import React from "react";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <section id="contact">
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/f/xpzoyvwl"
        method="POST"
      >
        {/* <!-- add your custom form HTML here --> */}
        
        <div className="body">

          <div className="container">
            <div className="box">
              <h1 className='text4'>Send me a Message</h1>
        <label>Name</label>
        <input type="name" name="name" placeholder="Full Name.."/>
        <label>Email</label>
        <input type="email" name="email" placeholder="Email..." />
        <label for="subject">Message</label>
              <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
              <div className="button">
        {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
                {status === "ERROR" && <p>Ooops! There was an error.</p>}
                </div>
              </div>
        </div>
          </div>
        </form>
        </section>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
      
}