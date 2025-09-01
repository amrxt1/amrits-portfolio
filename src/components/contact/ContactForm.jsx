"use client";

function submitHandler(e) {
  e.preventDefault();
  alert(
    "Unfortunately, the form is still being wired. You're welcome to use the links below :)",
  );
}

const ContactForm = () => {
  return (
    <div>
      <h1 className="text-2xl">Leave a Message</h1>
      <form
        onSubmit={submitHandler}
        className="border-text/50 mt-4 max-w-xl border px-2 pt-2 pb-4 *:grid"
      >
        <div>
          <label>Name</label>
          <input type="text" className="border-text/50 border" />
        </div>
        <div>
          <label>Email</label>
          <input type="text" className="border-text/50 border" />
        </div>
        <div>
          <label>Message</label>
          <textarea
            className="border-text/50 resize-none border"
            rows={5}
          ></textarea>
        </div>
        <button
          type="submit"
          className="mt-4 cursor-pointer hover:text-green-500 hover:underline"
        >
          {"[ Submit ]"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
