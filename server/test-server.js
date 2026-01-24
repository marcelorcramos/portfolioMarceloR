const express = require('express');
const app = express();
const PORT = 5000;

app.get('/api', (req, res) => {
  res.json({ message: 'Teste OK!', port: PORT });
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Servidor rodando em http://localhost:${PORT}`);
  console.log(`✅ Teste: http://localhost:${PORT}/api`);
});

// Lidar com erros
process.on('uncaughtException', (err) => {
  console.error('❌ Erro não tratado:', err);
});