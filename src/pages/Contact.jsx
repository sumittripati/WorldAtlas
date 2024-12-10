export const Contact = () => {
  const handleFormSubmit = (formData) => {
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);
  };

  return (
    <section className="my-[9.6rem]">
      <h2 className="text-center text-3xl font-bold">Contact Us</h2>

      <div className="contact-wrapper flex justify-center">
        <form onSubmit={handleFormSubmit} className="flex flex-col gap-[3.2rem] w-full max-w-[48rem]">
          <input
            type="text"
            className="bg-black text-white border border-opacity-40 border-white rounded-md p-[1.2rem] text-xl outline-none"
            placeholder="Enter your name"
            name="username"
            required
            autoComplete="off"
          />

          <input
            type="email"
            className="bg-black text-white border border-opacity-40 border-white rounded-md p-[1.2rem] text-xl outline-none"
            placeholder="Enter your email"
            name="email"
            required
            autoComplete="off"
          />

          <textarea
            className="bg-black text-white border border-opacity-40 border-white rounded-md p-[1.2rem] text-xl outline-none"
            rows="10"
            placeholder="Enter your message"
            name="message"
            required
            autoComplete="off"
          ></textarea>

          <button type="submit" className="bg-green-500 text-white p-[1rem] rounded-md hover:bg-green-600 transition-colors">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};
