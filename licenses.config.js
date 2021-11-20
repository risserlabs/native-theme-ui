module.exports = {
  isValidLicense: new RegExp('\\b(mit|apache\\b.*2|bsd|isc|unlicense)\\b', 'i'),
  ignorePackages: ['react']
};
