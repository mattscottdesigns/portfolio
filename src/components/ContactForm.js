import React from "react"
import SimpleReactValidator from "simple-react-validator"

class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      submitted: false,
    }
    this.validator = new SimpleReactValidator({
      className: "text-red-500 text-sm my-1 font-light",
    })
  }

  setFirstName(event) {
    this.setState({
      firstName: event.target.value,
    })
  }

  setLastName(event) {
    this.setState({
      lastName: event.target.value,
    })
  }

  setEmail(event) {
    this.setState({
      email: event.target.value,
    })
  }

  setMessage(event) {
    this.setState({
      message: event.target.value,
    })
  }

  handleErrorStyling() {
    if (this.state.submitted) {
      Object.keys(this.validator.fields).forEach(field => {
        if (this.validator.fields[field]) {
          this[field].classList.remove("border-red-500")
          this[field].classList.remove("bg-red-100")
        } else {
          this[field].classList.add("border-red-500")
          this[field].classList.add("bg-red-100")
        }
      })
    }
  }

  handleSubmit(event) {
    this.setState(
      {
        submitted: true,
      },
      () => {
        this.handleErrorStyling()

        if (this.validator.allValid()) {
          this.setState({
            completed: true,
          })
        } else {
          this.validator.showMessages()
          this.forceUpdate()
        }
      }
    )
  }

  render() {
    return (
      <div className="px-8 py-16">
        {!this.state.completed && (
          <form
            noValidate
            className="w-full max-w-3xl mx-auto"
            ref={ref => (this.form = ref)}
          >
            <input
              type="hidden"
              name="_subject"
              value="Contact form submitted"
            />
            <input type="hidden" name="_honeypot" value="" />

            <div className="flex flex-wrap mb-10">
              <div className="w-full px-4 mb-6 md:w-1/2">
                <label className="form-label text-light" htmlFor="firstName">
                  First Name
                </label>
                <input
                  className="form-field"
                  id="firstName"
                  type="text"
                  onChange={this.setFirstName.bind(this)}
                  onBlur={this.handleErrorStyling.bind(this)}
                  ref={ref => (this.firstName = ref)}
                />
                {this.validator.message(
                  "firstName",
                  this.state.firstName,
                  "required|alpha"
                )}
              </div>
              <div className="w-full px-4 mb-6 md:w-1/2">
                <label className="form-label text-light" htmlFor="last-name">
                  Last Name
                </label>
                <input
                  className="form-field"
                  id="last-name"
                  type="text"
                  onChange={this.setLastName.bind(this)}
                  onBlur={this.handleErrorStyling.bind(this)}
                  ref={ref => (this.lastName = ref)}
                />
                {this.validator.message(
                  "lastName",
                  this.state.lastName,
                  "required|alpha"
                )}
              </div>
              <div className="w-full px-4 mb-6">
                <label className="form-label text-light" htmlFor="email">
                  Email
                </label>
                <input
                  className="form-field"
                  id="email"
                  type="email"
                  onChange={this.setEmail.bind(this)}
                  onBlur={this.handleErrorStyling.bind(this)}
                  ref={ref => (this.email = ref)}
                />
                {this.validator.message(
                  "email",
                  this.state.email,
                  "required|email"
                )}
              </div>
              <div className="w-full px-4 mb-6">
                <label className="form-label text-light" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="h-32 form-field"
                  id="message"
                  onChange={this.setMessage.bind(this)}
                  onBlur={this.handleErrorStyling.bind(this)}
                  ref={ref => (this.message = ref)}
                ></textarea>
                {this.validator.message(
                  "message",
                  this.state.message,
                  "required|alpha"
                )}
              </div>
            </div>
            <div className="text-center">
              <button
                type="button"
                onClick={this.handleSubmit.bind(this)}
                className="px-6 py-3 text-lg text-white rounded bg-primary"
              >
                Send Message
              </button>
            </div>
          </form>
        )}

        {this.state.completed && (
          <div className="text-center text-white">
            <div className="text-4xl font-bold tracking-wider uppercase">
              Thank You!
            </div>
            <div className="text-xl font-thin">
              I'll be in touch with you shortly
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default ContactForm
