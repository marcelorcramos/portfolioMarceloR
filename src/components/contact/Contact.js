import React, { useState } from "react";
import axios from "axios";
import { FiSend } from "react-icons/fi";
import Title from "../home/Title";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const API_URL = "https://api.marceloramos.pt/contact";

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      console.log("🚀 Enviando para:", API_URL);
      console.log("📦 Dados:", form);
      
      const response = await axios.post(API_URL, form, {
        headers: { "Content-Type": "application/json" },
        timeout: 15000
      });

      if (response.data.success) {
        setSuccess(response.data.message || "✅ Mensagem enviada com sucesso!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setError(response.data.error || "❌ Erro ao enviar mensagem");
      }
    } catch (err) {
      console.error("🔥 Erro:", err);
      
      if (err.code === "ERR_NETWORK") {
        setError(`🌐 Erro de rede. Verifique: ${API_URL}`);
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
            className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded text-white"
            disabled={loading}
          />
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded text-white"
            disabled={loading}
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="5"
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
          <p>API Endpoint: <code className="bg-zinc-900 p-1 rounded">{API_URL}</code></p>
          <p className="mt-2">Test API: <a href="https://api.marceloramos.pt/health" target="_blank" className="text-blue-400">https://api.marceloramos.pt/health</a></p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
