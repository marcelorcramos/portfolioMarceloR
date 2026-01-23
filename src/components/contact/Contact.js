import React, { useState } from "react";
import axios from "axios";
import { FiSend } from "react-icons/fi";
import Title from "../home/Title";

const Contact = () => {
  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [messages, setMessages] = useState("");
  const [loading, setLoading] = useState(false);

  // ================= Error Messages Start here =================
  const [errClientName, setErrClientName] = useState(false);
  const [errEmail, setErrEmail] = useState(false);
  const [errMessages, setErrMessage] = useState(false);
  // ================= Error Messages End here ===================
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // ================= Email Validation Start here ===============
  const EmailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };
  // ================= Email Validation End here =================

  const handleName = (e) => {
    setClientName(e.target.value);
    setErrClientName(false);
    setErrorMsg("");
  };
  
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail(false);
    setErrorMsg("");
  };
  
  const handleMessages = (e) => {
    setMessages(e.target.value);
    setErrMessage(false);
    setErrorMsg("");
  };

  const handleSend = async (e) => {
    e.preventDefault();
    
    // Reset states
    setErrClientName(false);
    setErrEmail(false);
    setErrMessage(false);
    setErrorMsg("");
    setSuccessMsg("");
    
    let hasError = false;
    
    // Validações
    if (!clientName.trim()) {
      setErrClientName(true);
      hasError = true;
    }
    
    if (!email.trim()) {
      setErrEmail(true);
      hasError = true;
    } else if (!EmailValidation(email)) {
      setErrEmail(true);
      hasError = true;
    }
    
    if (!messages.trim()) {
      setErrMessage(true);
      hasError = true;
    }
    
    if (hasError) return;
    
    setLoading(true);
    
    try {
      // ENVIAR PARA SEU BACKEND (mudei aqui!)
      const response = await axios.post('http://localhost:5000/api/contact', {
        name: clientName,
        email: email,
        message: messages,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
        timeout: 10000 // 10 segundos timeout
      });

      if (response.data.success) {
        setSuccessMsg(response.data.message || `Olá ${clientName}, sua mensagem foi enviada com sucesso! Entrarei em contato em breve.`);
        
        // Limpar formulário
        setClientName("");
        setEmail("");
        setMessages("");
        
        // Auto-reset da mensagem de sucesso após 10 segundos
        setTimeout(() => {
          setSuccessMsg("");
        }, 10000);
      } else {
        setErrorMsg(response.data.error || 'Erro ao enviar mensagem. Tente novamente.');
      }
      
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      
      if (error.response) {
        // Erro da resposta do servidor
        setErrorMsg(error.response.data.error || `Erro ${error.response.status}: ${error.response.statusText}`);
      } else if (error.request) {
        // Sem resposta do servidor
        setErrorMsg('Não foi possível conectar ao servidor. Verifique se o backend está rodando.');
      } else {
        // Outros erros
        setErrorMsg('Erro ao enviar mensagem. Tente novamente.');
      }
      
      // Auto-reset da mensagem de erro após 10 segundos
      setTimeout(() => {
        setErrorMsg("");
      }, 10000);
      
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <Title title="Get" subTitle="in Touch" />
      
      <div className="p-6 w-full flex flex-col md:flex-row justify-between gap-4 md:gap-10 lgl:gap-20">
        {/* Suas informações de contato permanecem iguais */}
        <div className="w-full lgl:w-1/2">
          <p className="flex gap-6 justify-between w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800">
            <span className="bg-designColor text-gray-700 text-sm font-titleFont font-medium px-2 rounded-md flex items-center justify-center">
              Address:
            </span>
            Lisbon, Portugal
          </p>
          <p className="flex justify-between w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800">
            <span className="bg-designColor text-gray-700 text-sm font-titleFont font-medium px-2 rounded-md flex items-center justify-center">
              Phone:
            </span>
            +351 931 470 356
          </p>
        </div>
        
        <div className="w-full lgl:w-1/2">
          <p className="flex justify-between lgl:gap-6 w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800">
            <span className="bg-designColor text-gray-700 text-sm font-titleFont font-medium px-2 rounded-md flex items-center justify-center">
              Email:
            </span>
            marcelorcramos@gmail.com
          </p>
          <p className="flex justify-between w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800">
            <span className="bg-designColor text-gray-700 text-sm font-titleFont font-medium px-2 rounded-md flex items-center justify-center">
              Freelance:
            </span>
            Available
          </p>
        </div>
      </div>
      
      <div className="w-full mt-10">
        <Title title="Send" subTitle="Messages" />
        
        {successMsg ? (
          <div className="text-center p-6">
            <p className="text-xl font-titleFont text-designColor mb-4">
              Mensagem Enviada!
            </p>
            <p className="text-base text-gray-300">
              {successMsg}
            </p>
          </div>
        ) : (
          <form className="p-6 flex flex-col gap-6">
            {/* Mensagem de erro */}
            {errorMsg && (
              <div className="bg-red-900/30 border border-red-700 rounded p-4">
                <p className="text-red-300 text-center">
                  {errorMsg}
                </p>
              </div>
            )}
            
            <div className="w-full flex flex-col lgl:flex-row gap-4 lgl:gap-10 justify-between">
              <input
                onChange={handleName}
                value={clientName}
                className={`${
                  errClientName
                    ? "border-red-600 focus-visible:border-red-600"
                    : "border-zinc-600 focus-visible:border-designColor"
                } w-full bg-transparent border-2 px-4 py-2 text-base text-gray-200 outline-none duration-300`}
                type="text"
                placeholder="Full Name"
                disabled={loading}
              />
              <input
                onChange={handleEmail}
                value={email}
                className={`${
                  errEmail
                    ? "border-red-600 focus-visible:border-red-600"
                    : "border-zinc-600 focus-visible:border-designColor"
                } w-full bg-transparent border-2 px-4 py-2 text-base text-gray-200 outline-none duration-300`}
                type="email"
                placeholder="Email Address"
                disabled={loading}
              />
            </div>
            
            <textarea
              onChange={handleMessages}
              value={messages}
              className={`${
                errMessages
                  ? "border-red-600 focus-visible:border-red-600"
                  : "border-zinc-600 focus-visible:border-designColor"
              } w-full bg-transparent border-2 px-4 py-2 text-base text-gray-200 outline-none duration-300 resize-none`}
              placeholder="Your Message"
              rows="4"
              disabled={loading}
            ></textarea>
            
            <button
              onClick={handleSend}
              disabled={loading}
              className={`text-base w-44 flex items-center justify-center gap-1 text-gray-200 hover:text-designColor duration-200 ${
                loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {loading ? (
                <>
                  <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></span>
                  Enviando...
                </>
              ) : (
                <>
                  Send Message{" "}
                  <span className="mt-1 text-designColor">
                    <FiSend />
                  </span>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;