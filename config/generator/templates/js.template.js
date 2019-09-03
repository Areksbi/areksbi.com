module.exports = (originalName, reworkedName) => {
  return `import './_${originalName.toLowerCase()}.scss';\
  \n\nexport default class ${reworkedName} {\
  \n\trender() {\
  \n\t\t// your code here\
  \n\t} \
  \n}`;
};
