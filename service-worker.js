if(!self.define){const s=s=>{"require"!==s&&(s+=".js");let e=Promise.resolve();return i[s]||(e=new Promise((async e=>{if("document"in self){const i=document.createElement("script");i.src=s,document.head.appendChild(i),i.onload=e}else importScripts(s),e()}))),e.then((()=>{if(!i[s])throw new Error(`Module ${s} didn’t register its module`);return i[s]}))},e=(e,i)=>{Promise.all(e.map(s)).then((s=>i(1===s.length?s[0]:s)))},i={require:Promise.resolve(e)};self.define=(e,r,l)=>{i[e]||(i[e]=Promise.resolve().then((()=>{let i={};const n={uri:location.origin+e.slice(1)};return Promise.all(r.map((e=>{switch(e){case"exports":return i;case"module":return n;default:return s(e)}}))).then((s=>{const e=l(...s);return i.default||(i.default=e),i}))})))}}define("./service-worker.js",["./workbox-f7715658"],(function(s){"use strict";self.skipWaiting(),s.precacheAndRoute([{url:"404.html",revision:"e860cb63e9a14f97787835f3a4732d08"},{url:"android-chrome-192x192.png",revision:"01bafd5cc06880d98f79eb014521b310"},{url:"android-chrome-384x384.png",revision:"f2d43f64b33b3aeeca99f27c463d2aad"},{url:"apple-touch-icon.png",revision:"f88235df4c68f647bcf9eff7df846cc0"},{url:"assets/css/styles.e423ca1d.css",revision:null},{url:"assets/img/app-store-badge.8c4986ee.svg",revision:null},{url:"assets/img/back-to-top.8b37f773.svg",revision:null},{url:"assets/img/compilation-msgs.f118553e.png",revision:null},{url:"assets/img/mijia-bind-key.3f1bc260.png",revision:null},{url:"assets/js/205.7c264b76.js",revision:null},{url:"assets/js/464.4cc18f0f.js",revision:null},{url:"assets/js/616.7f1f7101.js",revision:null},{url:"assets/js/961.4d033a37.js",revision:null},{url:"assets/js/app.d997d11b.js",revision:null},{url:"assets/js/runtime~app.10a26841.js",revision:null},{url:"assets/js/v-0808a66d.fda269dc.js",revision:null},{url:"assets/js/v-08eb506c.b38f4e70.js",revision:null},{url:"assets/js/v-100dc897.5372233d.js",revision:null},{url:"assets/js/v-32874d30.1923da7e.js",revision:null},{url:"assets/js/v-3706649a.61fb02f5.js",revision:null},{url:"assets/js/v-387c00a5.17974b65.js",revision:null},{url:"assets/js/v-3a697504.b0f93964.js",revision:null},{url:"assets/js/v-3c5293eb.b17721c9.js",revision:null},{url:"assets/js/v-4a7cd8b8.0090aedb.js",revision:null},{url:"assets/js/v-4bcfdd1c.6b03184b.js",revision:null},{url:"assets/js/v-4f4ccb8f.99ea37d7.js",revision:null},{url:"assets/js/v-5056dbea.d3d61559.js",revision:null},{url:"assets/js/v-51bf504c.52b2ebed.js",revision:null},{url:"assets/js/v-5f375b25.8ffea335.js",revision:null},{url:"assets/js/v-5fc1b602.72b4b95e.js",revision:null},{url:"assets/js/v-6024a082.5ca71230.js",revision:null},{url:"assets/js/v-69bf6d9d.2fd7ed62.js",revision:null},{url:"assets/js/v-6ac49b02.99c0431a.js",revision:null},{url:"assets/js/v-789f6926.d83ae632.js",revision:null},{url:"assets/js/v-8daa1a0e.3594c731.js",revision:null},{url:"assets/js/v-9a3a909a.807ee93b.js",revision:null},{url:"assets/js/v-b14866e8.8fe77334.js",revision:null},{url:"assets/js/v-b9bf0f00.c9884e2b.js",revision:null},{url:"assets/js/v-d7be191a.8a4ef240.js",revision:null},{url:"assets/js/v-dd65b598.a4aae69f.js",revision:null},{url:"assets/js/v-fffb8e28.9447039f.js",revision:null},{url:"favicon-16x16.png",revision:"c6b93302fc3f2ea8f101011a70d63a08"},{url:"favicon-32x32.png",revision:"d00874ce1e43be2ac335d1e80c0c8ead"},{url:"guide/api.html",revision:"2277c0be0a199ead5e91583273da7376"},{url:"guide/cli.html",revision:"4992b02261b13843988cb3690087f781"},{url:"guide/cluster.html",revision:"a9d87434c9847b1df40372378a08069b"},{url:"guide/configuration.html",revision:"39a043504f03c240f7f70c619623dc3f"},{url:"guide/entities.html",revision:"1800b7c7957ee4d106fa405933009462"},{url:"guide/index.html",revision:"303b5ae2d1932d06edd95fd0ebcad68a"},{url:"guide/installation.html",revision:"6cf77f972f40f2465a606c6ffc4b9f89"},{url:"guide/monitoring.html",revision:"8303ff4c32b2be78a867294701492d16"},{url:"guide/quickstart-ansible.html",revision:"03763b255d7f2a3ddca14ca38a6452bd"},{url:"guide/quickstart-docker.html",revision:"703497e329f2bc5697235f0223df61b0"},{url:"guide/quickstart-pi-zero-w.html",revision:"48a8f96e28ca51455cbae7465ec705d6"},{url:"guide/quickstart-pi.html",revision:"8efc73d86a54f7f38a1b8a866650fd0e"},{url:"guide/upgrading.html",revision:"506d93af33c9e5693ab3e915ac79f57f"},{url:"index.html",revision:"b4791505f6af05ad53c23f2cf83c71cc"},{url:"integrations/bluetooth-classic.html",revision:"0f3c910a81141a17c22157e6a9a8588e"},{url:"integrations/bluetooth-low-energy.html",revision:"f5b763eb259cee2934ebc49815f94958"},{url:"integrations/gpio.html",revision:"40c953fecbb4855eb516992a54e6a4a7"},{url:"integrations/grid-eye.html",revision:"ef73f337cc7cc4f2a6c26926152c11d3"},{url:"integrations/home-assistant.html",revision:"7b4e5e68e10a0afd7662f6df65572e47"},{url:"integrations/index.html",revision:"ff3c8a9c2a4ca2e4136a6fda2d31fc0f"},{url:"integrations/mqtt.html",revision:"cbf71bdcd53b369f8b2f67e5840ed59a"},{url:"integrations/omron-d6t.html",revision:"8789324133654cd0833c56a955e6f663"},{url:"integrations/shell.html",revision:"93435cf4a875a385477bca73e9a303d1"},{url:"integrations/xiaomi-mi.html",revision:"6444f464e53570efcc2298e16922b316"},{url:"mstile-150x150.png",revision:"5461702e6d17101516497b481857edd8"},{url:"privacy.html",revision:"745a3feffa4133cf8fe53c5abba798ab"},{url:"room-assistant.png",revision:"e79e479593059c21d0971d8d802c5a9c"},{url:"safari-pinned-tab.svg",revision:"37c5052d727a9267b550b55e1faec638"}],{})}));
