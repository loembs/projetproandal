import React from "react";

const GrilleTarifaire = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-white to-blue-100 flex flex-col items-center py-10">
      <img src="/images/ANDAL.png" alt="Logo ANDAL" className="h-20 w-auto mb-6" />
      <a href="/studio" className="mb-8 inline-block bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded-lg font-semibold shadow">← Retour au studio</a>
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 text-black drop-shadow-lg tracking-tight">Grille tarifaire du Studio</h1>
      <div className="w-full max-w-4xl h-[80vh] rounded-3xl border-4 border-yellow-400 bg-white shadow-2xl overflow-hidden">
        <iframe
          src="/images/Grilles%20tarifaires%20Andal%20Cre%CC%81ative%20Studio.pdf"
          title="Grille tarifaire Andal Creative Studio"
          className="w-full h-full rounded-2xl"
          style={{ border: 0 }}
          allowFullScreen
        />
      </div>
      <div className="flex flex-col items-center mt-6">
        <div className="mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-yellow-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 13l-7 7-7-7M12 4v16" />
          </svg>
        </div>
        <a
          href="/images/Grilles%20tarifaires%20Andal%20Cre%CC%81ative%20Studio.pdf"
          download
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold shadow"
        >
          Cliquez ici pour télécharger la grille tarifaire
        </a>
      </div>
    </div>
  );
};

export default GrilleTarifaire; 