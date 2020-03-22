import React from 'react'
import axios from 'axios';
import '../styles/Contact.css'

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }


    handleSubmit = (e) => {
        e.preventDefault();
        axios({
            method: "POST",
            url:"https://ipsita-portfolio.herokuapp.com/",
            headers: {"Content-Type" : "application/json"},

            // url: "http://localhost:3000/send" || "https://ipsita-portfolio.herokuapp.com/",
            data: this.state
        }).then((response) => {
            if (response.data.status === 'success') {
                alert("Message Sent.");
                console.log("Message Sent.");
                this.resetForm()
            } else if (response.data.status === 'fail') {
                alert("Message failed to send.")
                console.log("Message failed to send.");
            }
        })
    }
    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     axios({
    //         method: "POST",
    //         url:"https://ipsita-portfolio.herokuapp.com/",
    //         // url: "http://localhost:3000/send" || "https://ipsita-portfolio.herokuapp.com/",
    //         data: this.state
    //     }).then((response) => {
    //         if (response.data.status === 'success') {
    //             alert("Message Sent.");
    //             console.log("Message Sent.");
    //             this.resetForm()
    //         } else if (response.data.status === 'fail') {
    //             alert("Message failed to send.")
    //             console.log("Message failed to send.");
    //         }
    //     })
    // }


    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(this.state)
    //     fetch('https://ipsita-portfolio.herokuapp.com/', {
    //         method: "POST",
    //         headers: {"Content-Type" : "application/json"},
    //         body: JSON.stringify(this.state),
    //         data: this.state
    //       }) .then(() => alert("Success! Talk soon!"))
    //       .catch(error => alert(error));
    // }

    resetForm() {

        this.setState({ name: "", email: "", message: "" })
    }

    render() {
        return (
        
            <div className="contact--container" id="contact">
                <div className = "contacts-title"><div>CONTACT ME</div></div>
                {/* <p> email: ipsita.rao@gmail.com</p> */}
                <form id="contact-form" onSubmit={this.handleSubmit}  method="POST">
                    <div className="form-group">
                        <label htmlFor="name">NAME</label>
                        <input type="text" className="form-control" id="name" value={this.state.name} onChange={this.onNameChange.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">EMAIL: ipsita.rao@gmail.com</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">MESSAGE</label>
                        <textarea className="form-control" rows="5" id="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }

    onNameChange(event) {
        this.setState({ name: event.target.value })
    }

    onEmailChange(event) {
        this.setState({ email: event.target.value })
    }

    onMessageChange(event) {
        this.setState({ message: event.target.value })
    }
}


export default Contact