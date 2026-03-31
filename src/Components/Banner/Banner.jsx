import React from "react";
import bglogo from "../../assets/banner-main.png";
import bg from "../../assets/bg-shadow.png";

const Banner = ({ handleClaimCredit }) => {
  return (
    <div className="relative w-11/12 mx-auto min-h-[420px] rounded-2xl overflow-hidden bg-gradient-to-br from-[#0a0a1a] via-[#0d1b2a] to-[#0a0f1e] flex items-center">
      {/* Background shadow image */}
      <img
        src={bg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-15 mix-blend-screen pointer-events-none"
      />

      {/* Glow orbs */}
      <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-cyan-400/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 right-1/4 w-72 h-72 rounded-full bg-yellow-400/10 blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center w-full px-8 md:px-14 py-12 gap-8">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col gap-5 text-center md:text-left items-center md:items-start">
          {/* Tag */}
          <span className="inline-flex items-center gap-2 bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full">
            🏏 Fantasy Cricket
          </span>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-slate-100 tracking-tight">
            Assemble Your <br />
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Ultimate Dream11
            </span>{" "}
            <br />
            Team
          </h1>

          {/* Subtext */}
          <p className="text-slate-400 text-base leading-relaxed max-w-sm">
            Beyond your expectations — build smarter, win bigger.
          </p>

          {/* CTA Button */}
          <button 
            onClick={handleClaimCredit}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900 font-bold text-sm px-7 py-4 rounded-xl shadow-[0_0_24px_rgba(250,204,21,0.4)] hover:shadow-[0_0_36px_rgba(250,204,21,0.6)] hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
          >
            🎁 Claim Free Credit
          </button>
        </div>

        {/* Right: Image */}
        <div className="flex-shrink-0 flex justify-center md:justify-end">
          <img
            src={bglogo}
            alt="Dream11"
            className="w-48 md:w-72 lg:w-80 object-contain drop-shadow-[0_8px_40px_rgba(34,211,238,0.25)] animate-bounce"
            style={{ animationDuration: "3s" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
