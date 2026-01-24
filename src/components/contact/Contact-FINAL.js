import React, { useState } from "react";
import axios from "axios";
import { FiSend } from "react-icons/fi";
import Title from "../home/Title";
import { getApiUrl } from "../config/api";

const ContactFINAL = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      // URL 100% ABSOLUTA E VERIFICADA
      const API_URL = getApiUrl("/contact");
      console.log("🌐 Enviando para:", API_URL);
      
      const response = await axios.post(API_URL, form, {
        headers: { "Content-Type": "application/json" },
        timeout: 15000
      });

      if (response.data.success) {
        setSuccess(response.data.message || "✅ Mensagem enviada!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setError(response.data.error || "❌ Erro no servidor");
      }
    } catch (err) {
      console.error("🔥 Erro completo:", err);
      
      if (err.code === "ERR_NETWORK") {
        setError(`🌐 Erro de rede. Verificando conexão com: https://api.marceloramos.pt`);
      } else if (err.response) {
        setError(`⚠️ Erro ${err.response.status}: ${err.response.data?.error || "Servidor"}`);
      } else {
        setError(`❌ Erro: ${err.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <Title title="Contact" subTitle="Me" />
      
      <div className="p-6">
        {success && <div className="bg-green-900 text-green-300 p-4 rounded mb-4">{success}</div>}
        {error && <div className="bg-red-900 text-red-300 p-4 rounded mb-4">{error}</div>}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded text-white"
            disabled={loading}
          />
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded text-white"
            disabled={loading}
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="5"
            required
            className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded text-white"
            disabled={loading}
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded font-semibold disabled:opacity-50"
          >
            {loading ? "⏳ Sending..." : "📨 Send Message"}
          </button>
        </form>
        
        <div className="mt-6 text-sm text-gray-400">
          <p>API Endpoint: <code className="bg-zinc-900 p-1 rounded">https://api.marceloramos.pt/contact</code></p>
          <p className="mt-2">Test API: <a href="https://api.marceloramos.pt/health" target="_blank" className="text-blue-400">https://api.marceloramos.pt/health</a></p>
        </div>
      </div>
    </div>
  );
};

export default ContactFINAL;