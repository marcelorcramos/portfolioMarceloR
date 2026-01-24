const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

module.exports = async (req, res) => {
  // CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Validação
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Nome, email e mensagem são obrigatórios.'
      });
    }

    // Validação de email
    const emailRegex = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        success: false, 
        error: 'Email inválido.' 
      });
    }

    try {
      const supabase = createClient(supabaseUrl, supabaseKey);
      
      const { data, error } = await supabase
        .from('contacts')
        .insert([
          { 
            name: name.trim(),
            email: email.trim(),
            message: message.trim()
          }
        ])
        .select()
        .single();

      if (error) {
        console.error('Erro Supabase:', error);
        throw error;
      }

      res.status(201).json({ 
        success: true, 
        id: data.id,
        message: `Olá ${name}, sua mensagem foi enviada com sucesso!`
      });

    } catch (error) {
      console.error('Erro:', error);
      res.status(500).json({ 
        success: false, 
        error: 'Erro ao processar sua mensagem.'
      });
    }
  } else {
    res.status(405).json({ error: 'Método não permitido' });
  }
};