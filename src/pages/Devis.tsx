import { useState } from "react";

const SERVICES = [
  "Marketing Digital",
  "Production de Contenu",
  "Événements",
  "Design",
  "Autre"
];

export default function Devis() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const form = e.currentTarget;
    const data = {
      nom: form.nom.value,
      email: form.email.value,
      telephone: form.telephone.value,
      service: form.service.value,
      message: form.message.value
    };
    // Remplacer l'URL ci-dessous par celle de Formspree ou EmailJS
    const res = await fetch("https://formspree.io/f/your-form-id", {
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
          {sent ? (
            <div className="flex flex-col items-center justify-center py-16">
              <svg className="w-16 h-16 text-green-500 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              <div className="text-2xl font-bold text-green-700 mb-2">Merci pour votre demande !</div>
              <div className="text-lg text-green-800">Nous vous répondrons rapidement.</div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <h1 className="text-4xl font-extrabold mb-4 text-center text-yellow-500 drop-shadow">Demande de devis gratuit</h1>
              {error && <div className="text-red-600 text-center">{error}</div>}
              <div>
                <label className="block mb-1 font-medium text-gray-700">Nom et prénom</label>
                <input name="nom" type="text" required className="w-full border border-yellow-200 rounded px-3 py-2 focus:ring-2 focus:ring-yellow-400" />
              </div>
              <div>
                <label className="block mb-1 font-medium text-gray-700">Email</label>
                <input name="email" type="email" required className="w-full border border-yellow-200 rounded px-3 py-2 focus:ring-2 focus:ring-yellow-400" />
              </div>
              <div>
                <label className="block mb-1 font-medium text-gray-700">Téléphone (optionnel)</label>
                <input name="telephone" type="tel" className="w-full border border-yellow-200 rounded px-3 py-2 focus:ring-2 focus:ring-yellow-400" />
              </div>
              <div>
                <label className="block mb-1 font-medium text-gray-700">Service souhaité</label>
                <select name="service" required className="w-full border border-yellow-200 rounded px-3 py-2 focus:ring-2 focus:ring-yellow-400">
                  {SERVICES.map((s) => <option key={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label className="block mb-1 font-medium text-gray-700">Message</label>
                <textarea name="message" required className="w-full border border-yellow-200 rounded px-3 py-2 min-h-[100px] focus:ring-2 focus:ring-yellow-400" />
              </div>
              <button type="submit" disabled={loading} className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 rounded-xl shadow transition text-lg">
                {loading ? "Envoi en cours..." : "Envoyer la demande"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
} 