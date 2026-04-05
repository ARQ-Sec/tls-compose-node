import https from 'https';
const partial = { rejectUnauthorized: false };
function merged() { return Object.assign({}, { keepAlive: true }, partial); }
function runtimeOptions() { return { ...merged() }; }
export function buildAgent() { return new https.Agent(runtimeOptions()); }
