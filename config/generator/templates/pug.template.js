module.exports = (name) => {
  const className = name.toLowerCase();

  return `.${className} Hello from ${name}`;
};
