import https from 'https';
const partial = { rejectUnauthorized: true };
export function buildAgent() { return new https.Agent({ ...partial, keepAlive: true }); }
