import 'zone.js/node';
import express from 'express';
import { join } from 'path';
import { existsSync, readFileSync } from 'fs';
import { renderApplication } from '@angular/platform-server';
import bootstrap from './src/main.server';

const app = express();
const distFolder = join(process.cwd(), 'dist/onada-coding-interview/browser');

app.use(express.static(distFolder, {
  maxAge: '1y'
}));

app.get('*', async (req, res) => {
  try {
    const indexHtml = existsSync(join(distFolder, 'index.html'))
      ? readFileSync(join(distFolder, 'index.html')).toString()
      : '<app-root></app-root>';

    const html = await renderApplication(bootstrap, {
      document: indexHtml,
      url: req.originalUrl
    });

    res.status(200).send(html);
  } catch (err) {
    console.error('SSR Error:', err);
    res.status(500).send('Server error');
  }
});

const port = process.env['PORT'] || 4000;
app.listen(port, () => {
  console.log(`Angular Standalone SSR running at http://localhost:${port}`);
});

