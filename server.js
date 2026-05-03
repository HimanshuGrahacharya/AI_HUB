// This is a wrapper file specifically for zero-config deployments like Render.com
// Render runs 'node server.js' by default. This file redirects to the built TypeScript code.
require('./dist/server.js');
