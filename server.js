import express from 'express';
import { createServer } from 'vite';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

// Serve built frontend
app.use(express.static('dist'));
app.get('*', (req, res) => {
  res.sendFile(path.resolve('dist', 'index.html'));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
