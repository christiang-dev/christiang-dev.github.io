(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function y(){}function z(e){return e()}function K(){return Object.create(null)}function A(e){e.forEach(z)}function D(e){return typeof e=="function"}function G(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let S;function T(e,t){return S||(S=document.createElement("a")),S.href=t,e===S.href}function ee(e){return Object.keys(e).length===0}function l(e,t){e.appendChild(t)}function J(e,t,n){e.insertBefore(t,n||null)}function V(e){e.parentNode&&e.parentNode.removeChild(e)}function h(e){return document.createElement(e)}function k(e){return document.createTextNode(e)}function w(){return k(" ")}function te(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function u(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ne(e){return Array.from(e.childNodes)}function re(e,t){t=""+t,e.data!==t&&(e.data=t)}let M;function E(e){M=e}const v=[],F=[];let $=[];const H=[],oe=Promise.resolve();let q=!1;function ie(){q||(q=!0,oe.then(Q))}function P(e){$.push(e)}const j=new Set;let _=0;function Q(){if(_!==0)return;const e=M;do{try{for(;_<v.length;){const t=v[_];_++,E(t),se(t.$$)}}catch(t){throw v.length=0,_=0,t}for(E(null),v.length=0,_=0;F.length;)F.pop()();for(let t=0;t<$.length;t+=1){const n=$[t];j.has(n)||(j.add(n),n())}$.length=0}while(v.length);for(;H.length;)H.pop()();q=!1,j.clear(),E(e)}function se(e){if(e.fragment!==null){e.update(),A(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(P)}}function ce(e){const t=[],n=[];$.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),$=t}const C=new Set;let le;function R(e,t){e&&e.i&&(C.delete(e),e.i(t))}function ue(e,t,n,r){if(e&&e.o){if(C.has(e))return;C.add(e),le.c.push(()=>{C.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function fe(e){e&&e.c()}function U(e,t,n,r){const{fragment:o,after_update:i}=e.$$;o&&o.m(t,n),r||P(()=>{const c=e.$$.on_mount.map(z).filter(D);e.$$.on_destroy?e.$$.on_destroy.push(...c):A(c),e.$$.on_mount=[]}),i.forEach(P)}function W(e,t){const n=e.$$;n.fragment!==null&&(ce(n.after_update),A(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ae(e,t){e.$$.dirty[0]===-1&&(v.push(e),ie(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function X(e,t,n,r,o,i,c,f=[-1]){const d=M;E(e);const s=e.$$={fragment:null,ctx:[],props:i,update:y,not_equal:o,bound:K(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(d?d.$$.context:[])),callbacks:K(),dirty:f,skip_bound:!1,root:t.target||d.$$.root};c&&c(s.root);let b=!1;if(s.ctx=n?n(e,t.props||{},(a,x,...g)=>{const p=g.length?g[0]:x;return s.ctx&&o(s.ctx[a],s.ctx[a]=p)&&(!s.skip_bound&&s.bound[a]&&s.bound[a](p),b&&ae(e,a)),x}):[],s.update(),b=!0,A(s.before_update),s.fragment=r?r(s.ctx):!1,t.target){if(t.hydrate){const a=ne(t.target);s.fragment&&s.fragment.l(a),a.forEach(V)}else s.fragment&&s.fragment.c();t.intro&&R(e.$$.fragment),U(e,t.target,t.anchor,t.customElement),Q()}E(d)}class Y{$destroy(){W(this,1),this.$destroy=y}$on(t,n){if(!D(n))return y;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(t){this.$$set&&!ee(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const de="/christiang-dev.github.io/assets/svelte-a39f39b7.svg",he="/christiang-dev.github.io/vite.svg";function pe(e){let t,n,r,o,i;return{c(){t=h("button"),n=k("count is "),r=k(e[0])},m(c,f){J(c,t,f),l(t,n),l(t,r),o||(i=te(t,"click",e[1]),o=!0)},p(c,[f]){f&1&&re(r,c[0])},i:y,o:y,d(c){c&&V(t),o=!1,i()}}}function ge(e,t,n){let r=0;return[r,()=>{n(0,r+=1)}]}class me extends Y{constructor(t){super(),X(this,t,ge,pe,G,{})}}function _e(e){let t,n,r,o,i,c,f,d,s,b,a,x,g,p,B,N,I,L,O;return p=new me({}),{c(){t=h("main"),n=h("div"),r=h("a"),o=h("img"),c=w(),f=h("a"),d=h("img"),b=w(),a=h("h1"),a.textContent="Vite + Svelte",x=w(),g=h("div"),fe(p.$$.fragment),B=w(),N=h("p"),N.innerHTML='Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer">SvelteKit</a>, the official Svelte app framework powered by Vite!',I=w(),L=h("p"),L.textContent="Click on the Vite and Svelte logos to learn more",T(o.src,i=he)||u(o,"src",i),u(o,"class","logo svelte-11cv5lq"),u(o,"alt","Vite Logo"),u(r,"href","https://vitejs.dev"),u(r,"target","_blank"),u(r,"rel","noreferrer"),T(d.src,s=de)||u(d,"src",s),u(d,"class","logo svelte svelte-11cv5lq"),u(d,"alt","Svelte Logo"),u(f,"href","https://svelte.dev"),u(f,"target","_blank"),u(f,"rel","noreferrer"),u(g,"class","card"),u(L,"class","read-the-docs svelte-11cv5lq")},m(m,Z){J(m,t,Z),l(t,n),l(n,r),l(r,o),l(n,c),l(n,f),l(f,d),l(t,b),l(t,a),l(t,x),l(t,g),U(p,g,null),l(t,B),l(t,N),l(t,I),l(t,L),O=!0},p:y,i(m){O||(R(p.$$.fragment,m),O=!0)},o(m){ue(p.$$.fragment,m),O=!1},d(m){m&&V(t),W(p)}}}class ve extends Y{constructor(t){super(),X(this,t,null,_e,G,{})}}new ve({target:document.getElementById("app")});