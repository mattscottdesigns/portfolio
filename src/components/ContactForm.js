import React, { useState } from "react"
import { useForm } from "react-hook-form"

const ErrorMessage = props => {
  const { error } = props

  if (error) {
    return (
      <p className="my-1 text-sm font-light text-red-500">{error.message}</p>
    )
  } else {
    return false
  }
}

const ContactForm = () => {
  const [completed, setCompleted] = useState(false)
  const { register, handleSubmit, errors } = useForm()

  const onSubmit = data => setCompleted(true)

  return (
    <div className="px-8 py-16">
      {!completed && (
        <form
          noValidate
          className="w-full max-w-3xl mx-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input type="hidden" name="_subject" value="Contact form submitted" />
          <input type="hidden" name="_honeypot" value="" />

          <div className="flex flex-wrap mb-10">
            <div className="w-full px-4 mb-6 md:w-1/2">
              <label className="form-label text-light" htmlFor="firstName">
                First Name
              </label>
              <input
                className={
                  "form-field " + (errors.firstName ? "border-red-500" : "")
                }
                name="firstName"
                type="text"
                ref={register({
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                })}
              />
              <ErrorMessage error={errors.firstName} />
            </div>
            <div className="w-full px-4 mb-6 md:w-1/2">
              <label className="form-label text-light" htmlFor="last-name">
                Last Name
              </label>
              <input
                className={
                  "form-field " + (errors.lastName ? "border-red-500" : "")
                }
                name="lastName"
                type="text"
                ref={register({
                  required: { value: true, message: "This field is required" },
                })}
              />
              <ErrorMessage error={errors.lastName} />
            </div>
            <div className="w-full px-4 mb-6">
              <label className="form-label text-light" htmlFor="email">
                Email
              </label>
              <input
                className={
                  "form-field " + (errors.email ? "border-red-500" : "")
                }
                name="email"
                type="email"
                ref={register({
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: "Please enter a valid email",
                  },
                })}
              />
              <ErrorMessage error={errors.email} />
            </div>
            <div className="w-full px-4 mb-6">
              <label className="form-label text-light" htmlFor="message">
                Message
              </label>
              <textarea
                className={
                  "h-32 form-field " + (errors.lastName ? "border-red-500" : "")
                }
                name="message"
                ref={register({
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                })}
              ></textarea>
              <ErrorMessage error={errors.message} />
            </div>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-3 text-lg text-white rounded bg-primary"
            >
              Send Message
            </button>
          </div>
        </form>
      )}

      {completed && (
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

export default ContactForm
