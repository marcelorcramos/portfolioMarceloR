const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { createClient } = require('@supabase/supabase-js');

const app = express();

// Configuração do Supabase - DESENVOLVIMENTO LOCAL
const supabaseUrl = 'https://pbmhbcloabrgksjiubun.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBibWhiY2xvYWJyZ2tzaml1YnVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkyNzkxNjYsImV4cCI6MjA4NDg1NTE2Nn0.yQraSzvLiBnNakDqKcXPKHsfBNFsZq0hMNmZtf4J9WI';

const supabase = createClient(supabaseUrl, supabaseKey);
console.log('Supabase configurado para desenvolvimento');

app.use(cors({
  origin: '*',
  credentials: true
}));
app.use(bodyParser.json());

// Rota de teste
app.get('/api', (req, res) => {
  res.json({
    message: 'Marcelo Ramos Portfolio API - Supabase',
    status: 'online',
    endpoints: [
      'POST /api/contact - Enviar mensagem de contato',
      'GET /api/contacts - Listar todas as mensagens (admin)',
      'GET /api/health - Verificar saúde da API'
    ]
  });
});

// Enviar mensagem
app.post('/api/contact', async (req, res) => {
  console.log('Recebendo contato:', req.body);
  
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error: 'Nome, email e mensagem são obrigatórios.'
    });
  }

  try {
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

    console.log('Mensagem salva com ID:', data.id);
    
    res.status(201).json({ 
      success: true, 
      id: data.id,
      message: `Olá ${name}, sua mensagem foi enviada com sucesso!`
    });

  } catch (error) {
    console.error('Erro ao salvar:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Erro ao processar sua mensagem.'
    });
  }
});

// Health check
app.get('/api/health', async (req, res) => {
  try {
    const { error } = await supabase
      .from('contacts')
      .select('id')
      .limit(1);

    res.json({
      status: 'healthy',
      database: error ? 'disconnected' : 'connected',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    res.status(500).json({
      status: 'unhealthy',
      error: error.message
    });
  }
});

// Para Vercel Serverless
module.exports = app;