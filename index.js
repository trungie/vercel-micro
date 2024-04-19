const { send } = require('micro');
const url = require('url');

module.exports = (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  
  // Only handle requests to /jujuchella2024
  if (pathname === '/test2024') {
    res.writeHead(200);
    res.end('Hello');
  } else {
    // Return a 404 error for any other endpoint
    send(res, 404, { error: "Not Found" });
  }
};

