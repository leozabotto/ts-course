/* eslint-disable @typescript-eslint/triple-slash-reference */

/// <reference path="module.ts" />

// must change TS module to AMD / System to work + configure outFile
// or setup build outFile while compiling:
// npx tsc src/A0059-namespaces/index.ts --outFile src/A0059-name-spaces/index.js

console.log(MyNamespace.name);
