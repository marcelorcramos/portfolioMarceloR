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
    try {
      if (!supabaseUrl || !supabaseKey) {
        return res.json({
          status: 'unhealthy',
          database: 'not_configured',
          error: 'Variáveis de ambiente não configuradas'
        });
      }

      const supabase = createClient(supabaseUrl, supabaseKey);
      
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
  } else {
    res.status(405).json({ error: 'Método não permitido' });
  }
};