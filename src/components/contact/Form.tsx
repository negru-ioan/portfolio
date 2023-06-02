import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Input from "./Input";
import Popup from "./Popup";

function Form() {
  const form = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [response, setResponse] = useState("");
  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    setResponse("");
  }, [isOpen]);

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);
    setIsOpen(true);

    emailjs
      .sendForm(
        "service_68gpgxb",
        "template_lu5md2v",
        form.current,
        "293dbDxiezAXtdt-k"
      )
      .then(
        (result) => {
          console.log(result.text);
          setResponse("Mesajul a fost trimis cu succes!");
          if (form.current) form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setResponse("Mesajul nu s-a trimits. Încercati prin altă metodă!");
        }
      );
  };
  return (
    <div className="text-white w-[100%] lg:w-[70%] h-full">
      <h1 className="py-5 text-4xl sm:text-5xl text-start px-3 md:text-center lg:text-start">
        Contactează-mă
      </h1>

      <div className="md:max-w-full max-w-[650px] p-3">
        <p className="text-fun-gray text-xl max-w-3xl m-auto text-start mb-12 mt-4">
          Ai idei? Eu am abilități. Hai să formăm o echipă! Spune-mi mai multe
          despre tine și despre ideile tale. Indiferent dacă ai întrebări,
          sugestii sau pur și simplu vrei să discutăm, poți să mă contactezi
          prin formularul de contact de pe această pagină, prin apel telefonic
          sau direct prin e-mail.
        </p>
        <div className="sm:block md:flex justify-between md:gap-3">
          <button
            className="cursor-pointer font-bold whitespace-nowrap px-10 py-4 text-fun-white border-2 text-xl border-fun-white
             bg-bg hover:bg-fun-pink hover:text-white hover:border-fun-pink transition-colors w-full lg:w-auto mb-3 md:mb-0 rounded-full"
          >
            <a href="mailto:negruioan@duck.com">Deschide Aplicatia Mail</a>
          </button>
          <button
            className="cursor-pointer font-bold whitespace-nowrap px-10 py-4 text-fun-white border-2 text-xl border-fun-white
             bg-bg hover:bg-fun-pink hover:text-white hover:border-fun-pink transition-colors w-full lg:w-auto rounded-full"
          >
            <a href="tel:0742440724">Apelează-mă Telefonic</a>
          </button>
        </div>

        <form ref={form} onSubmit={sendEmail} className="text-white mt-">
          <Input label="Nume" name="user_name" type="name" />
          <Input label="Email" name="user_email" type="email" />
          <Input label="Telefon" name="phone_number" type="tel" />
          <textarea
            className="textareaResize focus:ring-0 p-0"
            placeholder="Scrie mesajul tau aici..."
            name="message"
          ></textarea>
          <div className="w-full my-4">
            <input
              type="submit"
              value="Trimite mesajul"
              className="w-full cursor-pointer font-bold whitespace-nowrap px-10 py-4 text-fun-white border-2 text-xl border-fun-white
              rounded-full bg-white text-bg hover:bg-bg hover:text-white hover:border-fun-pink transition-colors"
            />
          </div>
          {isOpen && (
            <Popup
              isOpen={isOpen}
              response={response}
              closeModal={closeModal}
            />
          )}
        </form>
      </div>
    </div>
  );
}


export default Form;