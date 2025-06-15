import { MdContactMail } from "react-icons/md";
import "./style.css";

export default function Form() {
  return (
    <div className="bg-white py-10 px-6 sm:px-10 md:px-20 lg:px-40 w-full" id="contact" data-aos="fade-down">
      <form
        className="bg-gray-100 rounded-2xl shadow-xl p-6 sm:p-10 flex flex-col gap-5 w-full"
        action="https://formsubmit.co/devanggupta1508@gmail.com"
        method="POST"
        onSubmit={(e) => {
          e.preventDefault();
          const form = e.target;
          const formData = new FormData(form);

          fetch(form.action, {
            method: form.method,
            body: formData,
            headers: {
              Accept: "application/json",
            },
          })
            .then((response) => {
              if (response.ok) {
                alert("Message sent successfully ✅");
                form.reset();
              } else {
                alert("Failed to send message ❌");
              }
            })
            .catch((error) => {
              alert("Something went wrong ❌");
              console.error(error);
            });
        }}
      >
        <h2 className="text-xl sm:text-3xl font-bold text-purple-700 flex items-center gap-2 mb-2">
          <MdContactMail className="text-2xl sm:text-4xl" />
          Get In <span className="text-black">Touch</span>
        </h2>

        {/* Name */}
        <label className="flex flex-col">
          <span className="mb-1 font-medium text-black">Your Name</span>
          <input
            type="text"
            name="name"
            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Enter your name"
            required
          />
        </label>

        {/* Email */}
        <label className="flex flex-col">
          <span className="mb-1 font-medium text-black">Your Email</span>
          <input
            type="email"
            name="email"
            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Enter your email"
            required
          />
        </label>

        {/* Phone */}
        <label className="flex flex-col">
          <span className="mb-1 font-medium text-black">Phone Number</span>
          <input
            type="tel"
            name="phone"
            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Enter your phone number"
            required
          />
        </label>

        {/* Message */}
        <label className="flex flex-col">
          <span className="mb-1 font-medium text-black">Message</span>
          <textarea
            name="message"
            rows="4"
            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
            placeholder="Type your message..."
            required
          />
        </label>

        {/* Hidden captcha off */}
        <input type="hidden" name="_captcha" value="false" />

        {/* Submit */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition duration-200 text-black" 
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
