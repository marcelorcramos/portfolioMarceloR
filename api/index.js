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

  if (req.method === 'GET') {
    const supabase = createClient(supabaseUrl, supabaseKey);
    
    res.json({
      message: 'Marcelo Ramos Portfolio API',
      status: 'online',
      database: supabaseUrl ? 'configurado' : 'não configurado',
      endpoints: [
        'POST /api/contact - Enviar mensagem de contato',
        'GET /api/health - Verificar saúde da API'
      ]
    });
  } else {
    res.status(405).json({ error: 'Método não permitido' });
  }
};