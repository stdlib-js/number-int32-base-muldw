// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.3-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/number-int32-base-mul@v0.0.1-esm/index.mjs";var s=65535;function t(e,t,r,i,d){var m,a,o,l,u,p,f;return m=(p=(a=(e|=0)>>16|0)*(u=((t|=0)&s)>>>0)+(f=(p=(l=(e&s)>>>0)*u>>>0)>>>16>>>0)>>>0)>>16>>>0,f=(p=l*(o=t>>16|0)+((p&s)>>>0)>>>0)>>16>>>0,r[d]=a*o+m+f|0,r[d+i]=0|n(e,t),r}function r(e,n){return t(e,n,[0,0],1,0)}e(r,"assign",t);export{t as assign,r as default};
//# sourceMappingURL=index.mjs.map
