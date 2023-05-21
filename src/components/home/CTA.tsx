import { Link } from "react-router-dom";

function CTA() {
  return (
    <div className="pt-36 relative w-full pb-0 sm:pb-24">
      <img
        className="w-30 hidden  m-auto mb-2"
        src="../../img/doodles/lineBreak.svg"
      />
      <div className="pt-14 pb-40">
        <h2 className="text-4xl md:text-5xl font-bold mb-20">
          Doriți să colaborăm?
        </h2>
        <Link
          to="/contacte"
          className="cursor-pointer font-bold whitespace-nowrap 
        mt-6 px-8 py-3 text-white border-2 rounded-full border-white bg-bg hover:bg-fun-pink hover:border-fun-pink transition-colors"
        >
          Contactați-mă
        </Link>
      </div>

      <img
        className="sqD w-[3/2] bottom-[-100px] left-1/2 sm:bottom-[-180px] lg:bottom-[-250px] -translate-x-1/2 object-cover opacity-80"
        style={{ zIndex: "-10" }}
        src="/img/doodles/hero/arrow-line.svg"
      />
      <img
        className="sqD top-20 w-20 left-[10px] sm:top-60 sm:left-[-15px] rotate-180"
        style={{ zIndex: "-10" }}
        src="/img/doodles/hero/star-outline.svg"
      />
      <img
        className="sqD top-80 sm:top-20 right-[-15px]"
        style={{ zIndex: "-10" }}
        src="/img/doodles/hero/star-outline.svg"
      />
    </div>
  );
}

export default CTA;