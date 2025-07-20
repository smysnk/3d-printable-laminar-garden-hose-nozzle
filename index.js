const { cube } = JSCAD.modeling.primitives;

function main({ variables: { size } }) {
  return cube({ size });
}

module.exports = { main };