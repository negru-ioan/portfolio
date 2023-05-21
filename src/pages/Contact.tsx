import Form from "../components/contact/Form";

function Contact() {
  return (
    <div className="block lg:flex pt-20">
      <div className="heroElem" style={{ animation: "none" }}>
        <img
          className="sqD left-[35px] top-[85px] sm:top-[100px] w-12 sm:left-5 opacity-40"
          style={{ animationDelay: "0.6s" }}
          src="./img/doodles/hero/code.svg"
        />
        <img
          className="sqD squiggle-hero-html w-16 top-[90px] right-[8%] sm:top-[90px] sm:right-[170px]"
          style={{ animationDelay: "0.3s" }}
          src="./img/doodles/hero/html.svg"
        />
        <img
          className="sqD sm:block right-8 lg:left-[10px] bottom-[-150px] sm:bottom-[-195px] w-52 rotate-[-15deg] opacity-40"
          style={{ animationDelay: "0.6s" }}
          src="./img/doodles/contact-book.svg"
        />
        <img
          className="sqD right-[120px] bottom-[-330px] md:right-[600px] lg:right-[140px] lg:bottom-[-220px]"
          style={{ animationDelay: "0.3s" }}
          src="./img/doodles/hero/paintbrush.svg"
        />
      </div>

      <Form />

      <div
        className="w-[90%] mt-10 sm:mt-[200px] md:h-52 lg:h-[400px] md:mt-0 lg:mt-56 flex justify-center items-center"
        id="contactBook"
      >
        <img
          src="https://cdn3d.iconscout.com/3d/premium/thumb/contact-book-4387910-3640621.png"
          className="sm:object-cover md:object-scale-down lg:object-contain w-full h-full ml-8"
        />
      </div>
    </div>
  );
}

export default Contact;
