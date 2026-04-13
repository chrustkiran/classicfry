import { createServer } from 'node:http';
import fs from 'fs';
import url from 'url';

const db = JSON.parse(fs.readFileSync('./mock/db.json', 'utf-8'));


const sendItems = (res, branch = "EPSOM") => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(db["items"].filter(item => item.BRANCH === branch)));
};

const sendDeals = (res, branch = "EPSOM") => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(db["deals"].filter(deal => deal.branch === branch)));
}

const sendItemById = (res, id) => {
  const item = db["items"].find(i => i.id === id);
  console.log(`Looking for item with id: ${id}`);
  console.log(`Found item: ${item ? JSON.stringify(item) : 'None'}`);
  if (item) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(item));
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Item not found' }));
  }
}

const sendNotFound = (res) => {
  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ error: 'Not found' }));
}

const server = createServer((req, res) => {

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const query = parsedUrl.query;
  const basePath = pathname.split('/').slice(0, 4).join('/'); // Get the first 4 segments of the path
  const pathParam = pathname.split('/').slice(4).join('/'); // Get the part after /api/v1/{items|deals}/

  console.log(`Received request: ${req.method} ${req.url}`);
  console.log(`Parsed pathname: ${pathname}`);
  console.log(`Base path: ${basePath}`);
  console.log(`Query parameters: ${JSON.stringify(query)}`);
  console.log(`Path parameter: ${pathParam}`);

  if (basePath === '/api/v1/items') {
    console.log(`Query parameters: ${JSON.stringify(query)}`);
    console.log(`Path parameter: ${pathParam}`);
    if (query.branch) {
      sendItems(res, query.branch);
    } else if (pathParam) {
      sendItemById(res, pathParam);
    } else {
      sendNotFound(res);
    }
  } else if (basePath === '/api/v1/deals') {
    sendDeals(res, query.branch);
  } else {
    sendNotFound(res);
  }
});

server.listen(8080, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:8080');
});
