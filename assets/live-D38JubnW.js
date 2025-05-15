import{at as s,au as a,ax as t,ay as n,E as T}from"./index-BgufZbH7.js";import{f as l,m as f}from"./directive-helpers-bPiok6-s.js";/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const E=s(class extends a{constructor(e){if(super(e),e.type!==t.PROPERTY&&e.type!==t.ATTRIBUTE&&e.type!==t.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!l(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[r]){if(r===n||r===T)return r;const i=e.element,o=e.name;if(e.type===t.PROPERTY){if(r===i[o])return n}else if(e.type===t.BOOLEAN_ATTRIBUTE){if(!!r===i.hasAttribute(o))return n}else if(e.type===t.ATTRIBUTE&&i.getAttribute(o)===r+"")return n;return f(e),r}});export{E as l};
