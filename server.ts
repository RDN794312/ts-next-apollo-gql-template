import { createServer } from 'http';
import { parse } from 'url';
import next from 'next';

const port = parseInt(process.env.PORT || '5000', 10);
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const parsedUrl = parse(req.url!, true);

    res.setHeader('Access-Control-Allow-Origin', '*');
    handle(req, res, parsedUrl);
  }).listen(port);

  // eslint-disable-next-line no-console
  console.log(`>🔥 Server listening at http://0.0.0.0:${port} as ${dev ? 'development' : process.env.NODE_ENV}`);
});
