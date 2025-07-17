import { useState } from "react";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

const TAB_RDV = "rdv";
const TAB_DEMANDE = "demande";

export default function Devis() {
  const [tab, setTab] = useState(TAB_RDV);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Ouvre le widget Calendly (popup)
  const openCalendly = () => {
    console.log("Calendly ouvert !");
    window.Calendly && window.Calendly.initPopupWidget({ url: "https://calendly.com/andal-creative" });
    return false;
  };

  // Gestion du formulaire de demande simple
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const form = e.currentTarget;
    const data = {
      email: form.email.value,
      societe: form.societe.value,
      besoin: form.besoin.value
    };
    // Remplacer l'URL ci-dessous par celle de Formspree ou EmailJS
    const res = await fetch("https://formspree.io/f/{form_id}", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    if (res.ok) setSent(true);
    else setError("Erreur lors de l'envoi. Veuillez réessayer.");
    setLoading(false);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-yellow-100 via-white to-blue-100 flex flex-col">
      {/* Bouton retour */}
      <div className="absolute top-6 left-6">
        <a href="/" className="inline-block bg-white/80 hover:bg-yellow-400 text-black font-semibold px-4 py-2 rounded-lg shadow transition-all border border-yellow-300">
          ← Retour à l'accueil
        </a>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <div className="bg-white/90 p-10 rounded-3xl shadow-2xl w-full max-w-lg space-y-8 border border-yellow-200">
          {/* Onglets */}
          <div className="flex mb-8">
            <button
              className={`flex-1 py-3 rounded-l-xl font-bold text-lg transition ${tab === TAB_RDV ? 'bg-yellow-400 text-black' : 'bg-white text-gray-500 border border-yellow-200'}`}
              onClick={() => setTab(TAB_RDV)}
            >
              Prendre un RDV Zoom
            </button>
            <button
              className={`flex-1 py-3 rounded-r-xl font-bold text-lg transition ${tab === TAB_DEMANDE ? 'bg-yellow-400 text-black' : 'bg-white text-gray-500 border border-yellow-200'}`}
              onClick={() => setTab(TAB_DEMANDE)}
            >
              Envoyer une demande
            </button>
          </div>

          {/* Contenu de l'onglet RDV */}
          {tab === TAB_RDV && (
            <div className="flex flex-col items-center space-y-6 py-8 w-full">
              <h2 className="text-3xl font-extrabold text-black mb-2 text-center">
                Réserve ton créneau Zoom avec l'agence
              </h2>
              <p className="text-gray-700 text-center mb-4">
                Choisis le créneau qui te convient, nous validerons ta demande par email.
              </p>
              <div
                style={{
                  minWidth: "320px",
                  maxWidth: "1100px",
                  width: "100%",
                  height: "350px",
                  margin: "0 auto",
                  paddingTop: "2rem",
                  paddingBottom: "2rem"
                }}
              >
                <iframe
                  src="https://calendly.com/andal-creative"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  title="Calendly"
                  style={{ borderRadius: "1rem" }}
                ></iframe>
              </div>
              <p className="text-xs text-gray-400 text-center">
                Le lien Zoom te sera envoyé après validation par l'agence.
              </p>
            </div>
          )}

          {/* Contenu de l'onglet Demande simple */}
          {tab === TAB_DEMANDE && (
            sent ? (
              <div className="flex flex-col items-center justify-center py-16">
                <svg className="w-16 h-16 text-green-500 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                <div className="text-2xl font-bold text-green-700 mb-2">Merci pour votre demande !</div>
                <div className="text-lg text-green-800">Nous vous répondrons rapidement.</div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h1 className="text-3xl font-extrabold mb-4 text-center text-black drop-shadow">Envoyer une demande</h1>
                {error && <div className="text-red-600 text-center">{error}</div>}
                <div>
                  <label className="block mb-1 font-medium text-gray-700">Email</label>
                  <input name="email" type="email" required className="w-full border border-yellow-200 rounded px-3 py-2 focus:ring-2 focus:ring-yellow-400" />
                </div>
                <div>
                  <label className="block mb-1 font-medium text-gray-700">Nom de la société</label>
                  <input name="societe" type="text" required className="w-full border border-yellow-200 rounded px-3 py-2 focus:ring-2 focus:ring-yellow-400" />
                </div>
                <div>
                  <label className="block mb-1 font-medium text-gray-700">Décris ton besoin</label>
                  <textarea name="besoin" required className="w-full border border-yellow-200 rounded px-3 py-2 min-h-[100px] focus:ring-2 focus:ring-yellow-400" />
                </div>
                <button type="submit" disabled={loading} className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 rounded-xl shadow transition text-lg">
                  {loading ? "Envoi en cours..." : "Envoyer la demande"}
                </button>
              </form>
            )
          )}
        </div>
      </div>
    </div>
  );
}

function CalendlyInline() {
  return (
    <div style={{ minWidth: "320px", maxWidth: "1100px", width: "100%", height: "350px", paddingTop: "2rem", paddingBottom: "2rem" }}>
      <iframe
        src="https://calendly.com/andal-creative"
        width="100%"
        height="100%"
        frameBorder="0"
        title="Calendly"
        style={{ borderRadius: "1rem" }}
      ></iframe>
    </div>
  );
} 