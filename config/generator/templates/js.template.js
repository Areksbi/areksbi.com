module.exports = (name) => {
  return `import './_${name.toLowerCase()}.scss';\
  \n\nexport default class ${name} {\
  \n\trender() {\
  \n\t\t// your code here\
  \n\t} \
  \n}`;
};
