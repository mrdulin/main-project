import express from 'express';
import faker from 'faker';

function createServer() {
  const app = express();
  const port = 3000;

  app.get('/user', (req, res) => {
    res.sendFile('index.html', { root: __dirname });
  });

  app.get('/api/user', (req, res) => {
    console.log(`[${new Date().toLocaleTimeString()}] request user`);
    const user = { name: faker.name.findName(), email: faker.internet.email() };
    res.set('Cache-Control', 'public, max-age=30').json(user);
  });

  app.get('/api/project', (req, res) => {
    console.log(`[${new Date().toLocaleTimeString()}] request project`);
    const project = { name: faker.commerce.productName() };
    res.json(project);
  });
  return app.listen(port, () => {
    console.log(`HTTP server is listening on http://localhost:${port}`);
  });
}

if (require.main === module) {
  createServer();
}

export { createServer };
