export default function ({types: t}) {
  const curryDec = () => t.importSpecifier(t.identifier('_curry'), t.identifier('curry'))
  return {
    visitor: {
      Program(path) {
        const imports = path.node.body.filter((el) => t.isImportDeclaration(el));
        let ramda;
        if (imports) {
          ramda = imports.find((el) => el.source.value === 'ramda')
        }

        if (ramda) {
          ramda.specifiers.push(curryDec());
        } else {
          path.node.body.unshift(
            t.importDeclaration([curryDec()], t.stringLiteral('ramda'))
          );
        }
      },
      ExportDefaultDeclaration(path) {
        const fn = path.node.declaration;
        if (t.isFunctionExpression(fn) || t.isArrowFunctionExpression(fn)) {
          path.node.declaration = t.callExpression(t.identifier("_curry"), [fn]);
        }
      },
      ExportNamedDeclaration(path) {
        if (t.isVariableDeclaration(path.node.declaration)) {
          const ds = path.node.declaration.declarations;
          const fn = ds[0].init;
          if (t.isFunctionExpression(fn) || t.isArrowFunctionExpression(fn)) {
            ds[0].init = t.callExpression(t.identifier("_curry"), [fn]);
          }
        }
      }
    }
  };
}

