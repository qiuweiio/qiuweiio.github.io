import{a as oe,c as ue}from"./axios.1257cc19.js";var ce={},le=Object.freeze(Object.defineProperty({__proto__:null,default:ce},Symbol.toStringTag,{value:"Module"})),fe=oe(le),Q={exports:{}};(function($,he){(function(N,B){$.exports=B(fe)})(ue,function(N){function B(t){return B=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B(t)}function m(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function k(t,e,n){return e&&_(t.prototype,e),n&&_(t,n),t}function A(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function D(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&R(t,e)}function T(t){return T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},T(t)}function R(t,e){return R=Object.setPrototypeOf||function(n,r){return n.__proto__=r,n},R(t,e)}function C(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function W(t,e){if(e&&(typeof e=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return C(t)}function E(t){var e=function(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}();return function(){var n,r=T(t);if(e){var i=T(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return W(this,n)}}function X(t,e){return function(n){if(Array.isArray(n))return n}(t)||function(n,r){var i=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(i!=null){var a,o,u=[],s=!0,f=!1;try{for(i=i.call(n);!(s=(a=i.next()).done)&&(u.push(a.value),!r||u.length!==r);s=!0);}catch(l){f=!0,o=l}finally{try{s||i.return==null||i.return()}finally{if(f)throw o}}return u}}(t,e)||q(t,e)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function q(t,e){if(t){if(typeof t=="string")return H(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?H(t,e):void 0}}function H(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function g(t,e){var n=typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=q(t))||e&&t&&typeof t.length=="number"){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(s){throw s},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,u=!1;return{s:function(){n=n.call(t)},n:function(){var s=n.next();return o=s.done,s},e:function(s){u=!0,a=s},f:function(){try{o||n.return==null||n.return()}finally{if(u)throw a}}}}var O,I;function v(t){if(O){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];O.apply(void 0,[t].concat(n))}}function x(t){if(I){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];I.apply(void 0,[t].concat(n))}}var w=function(){function t(e){m(this,t),this.payload=e,this.nri=(96&this.payload[0])>>5,this.ntype=31&this.payload[0],this.isvcl=this.ntype==1||this.ntype==5,this.stype="",this.isfmb=!1}return k(t,[{key:"toString",value:function(){return"".concat(t.type(this),": NRI: ").concat(this.getNri())}},{key:"getNri",value:function(){return this.nri}},{key:"type",value:function(){return this.ntype}},{key:"isKeyframe",value:function(){return this.ntype===t.IDR}},{key:"getPayload",value:function(){return this.payload}},{key:"getPayloadSize",value:function(){return this.payload.byteLength}},{key:"getSize",value:function(){return 4+this.getPayloadSize()}},{key:"getData",value:function(){var e=new Uint8Array(this.getSize());return new DataView(e.buffer).setUint32(0,this.getSize()-4),e.set(this.getPayload(),4),e}}],[{key:"NDR",get:function(){return 1}},{key:"IDR",get:function(){return 5}},{key:"SEI",get:function(){return 6}},{key:"SPS",get:function(){return 7}},{key:"PPS",get:function(){return 8}},{key:"AUD",get:function(){return 9}},{key:"TYPES",get:function(){var e;return A(e={},t.IDR,"IDR"),A(e,t.SEI,"SEI"),A(e,t.SPS,"SPS"),A(e,t.PPS,"PPS"),A(e,t.NDR,"NDR"),A(e,t.AUD,"AUD"),e}},{key:"type",value:function(e){return e.ntype in t.TYPES?t.TYPES[e.ntype]:"UNKNOWN"}}]),t}();function M(t,e){var n=new Uint8Array((0|t.byteLength)+(0|e.byteLength));return n.set(t,0),n.set(e,0|t.byteLength),n}var F,Y=function(){function t(e){m(this,t),this.data=e,this.index=0,this.bitLength=8*e.byteLength}return k(t,[{key:"setData",value:function(e){this.data=e,this.index=0,this.bitLength=8*e.byteLength}},{key:"bitsAvailable",get:function(){return this.bitLength-this.index}},{key:"skipBits",value:function(e){if(this.bitsAvailable<e)return!1;this.index+=e}},{key:"readBits",value:function(e){var n=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1],r=this.getBits(e,this.index,n);return r}},{key:"getBits",value:function(e,n){var r=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2];if(this.bitsAvailable<e)return 0;var i=n%8,a=this.data[n/8|0]&255>>>i,o=8-i;if(o>=e)return r&&(this.index+=e),a>>o-e;r&&(this.index+=o);var u=e-o;return a<<u|this.getBits(u,n+o,r)}},{key:"skipLZ",value:function(){var e;for(e=0;e<this.bitLength-this.index;++e)if(this.getBits(1,this.index+e,!1)!==0)return this.index+=e,e;return e}},{key:"skipUEG",value:function(){this.skipBits(1+this.skipLZ())}},{key:"skipEG",value:function(){this.skipBits(1+this.skipLZ())}},{key:"readUEG",value:function(){var e=this.skipLZ();return this.readBits(e+1)-1}},{key:"readEG",value:function(){var e=this.readUEG();return 1&e?1+e>>>1:-1*(e>>>1)}},{key:"readBoolean",value:function(){return this.readBits(1)===1}},{key:"readUByte",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;return this.readBits(8*e)}},{key:"readUShort",value:function(){return this.readBits(16)}},{key:"readUInt",value:function(){return this.readBits(32)}}]),t}(),G=function(){function t(e){m(this,t),this.remuxer=e,this.track=e.mp4track}return k(t,[{key:"parseSPS",value:function(e){var n=t.readSPS(new Uint8Array(e));this.track.fps=n.fps,this.track.width=n.width,this.track.height=n.height,this.track.sps=[new Uint8Array(e)],this.track.codec="avc1.";for(var r=new DataView(e.buffer,e.byteOffset+1,4),i=0;i<3;++i){var a=r.getUint8(i).toString(16);a.length<2&&(a="0"+a),this.track.codec+=a}}},{key:"parsePPS",value:function(e){this.track.pps=[new Uint8Array(e)]}},{key:"parseNAL",value:function(e){if(!e)return!1;var n=!1;switch(e.type()){case w.IDR:case w.NDR:n=!0;break;case w.PPS:this.track.pps||(this.parsePPS(e.getPayload()),!this.remuxer.readyToDecode&&this.track.pps&&this.track.sps&&(this.remuxer.readyToDecode=!0)),n=!0;break;case w.SPS:this.track.sps||(this.parseSPS(e.getPayload()),!this.remuxer.readyToDecode&&this.track.pps&&this.track.sps&&(this.remuxer.readyToDecode=!0)),n=!0;break;case w.AUD:v("AUD - ignoing");break;case w.SEI:v("SEI - ignoing")}return n}}],[{key:"extractNALu",value:function(e){for(var n,r,i=0,a=e.byteLength,o=0,u=[],s=0;i<a;)switch(n=e[i++],o){case 0:n===0&&(o=1);break;case 1:o=n===0?2:0;break;case 2:case 3:n===0?o=3:(n===1&&i<a&&(s!=i-o-1&&u.push(e.subarray(s,i-o-1)),s=i),o=0)}return s<a&&(r=e.subarray(s,a)),[u,r]}},{key:"skipScalingList",value:function(e,n){for(var r=8,i=8,a=0;a<n;a++)i!==0&&(i=(r+e.readEG()+256)%256),r=i===0?r:i}},{key:"readSPS",value:function(e){var n,r,i,a,o,u,s=new Y(e),f=0,l=0,c=0,h=0,p=1,b=0;s.readUByte();for(var y=[],U=e.byteLength,S=1;S<U;S++)S+2<U&&s.readBits(24,!1)===3?(y.push(s.readBits(8)),y.push(s.readBits(8)),S+=2,s.readBits(8)):y.push(s.readBits(8));if(s.setData(new Uint8Array(y)),n=s.readUByte(),s.readBits(5),s.skipBits(3),s.readUByte(),s.skipUEG(),n===100||n===110||n===122||n===244||n===44||n===83||n===86||n===118||n===128){var J=s.readUEG();if(J===3&&s.skipBits(1),s.skipUEG(),s.skipUEG(),s.skipBits(1),s.readBoolean()){u=J!==3?8:12;for(var z=0;z<u;++z)s.readBoolean()&&(z<6?t.skipScalingList(s,16):t.skipScalingList(s,64))}}s.skipUEG();var Z=s.readUEG();if(Z===0)s.readUEG();else if(Z===1){s.skipBits(1),s.skipEG(),s.skipEG(),r=s.readUEG();for(var K=0;K<r;++K)s.skipEG()}if(s.skipUEG(),s.skipBits(1),i=s.readUEG(),a=s.readUEG(),(o=s.readBits(1))===0&&s.skipBits(1),s.skipBits(1),s.readBoolean()&&(f=s.readUEG(),l=s.readUEG(),c=s.readUEG(),h=s.readUEG()),s.readBoolean()){if(s.readBoolean()){var d;switch(s.readUByte()){case 1:d=[1,1];break;case 2:d=[12,11];break;case 3:d=[10,11];break;case 4:d=[16,11];break;case 5:d=[40,33];break;case 6:d=[24,11];break;case 7:d=[20,11];break;case 8:d=[32,11];break;case 9:d=[80,33];break;case 10:d=[18,11];break;case 11:d=[15,11];break;case 12:d=[64,33];break;case 13:d=[160,99];break;case 14:d=[4,3];break;case 15:d=[3,2];break;case 16:d=[2,1];break;case 255:d=[s.readUByte()<<8|s.readUByte(),s.readUByte()<<8|s.readUByte()]}d&&d[0]>0&&d[1]>0&&(p=d[0]/d[1])}if(s.readBoolean()&&s.skipBits(1),s.readBoolean()&&(s.skipBits(4),s.readBoolean()&&s.skipBits(24)),s.readBoolean()&&(s.skipUEG(),s.skipUEG()),s.readBoolean()){var ae=s.readUInt(),se=s.readUInt();s.readBoolean()&&(b=se/(2*ae))}}return{fps:b>0?b:void 0,width:Math.ceil((16*(i+1)-2*f-2*l)*p),height:(2-o)*(a+1)*16-(o?2:4)*(c+h)}}},{key:"parseHeader",value:function(e){var n=new Y(e.getPayload());n.readUByte(),e.isfmb=n.readUEG()===0,e.stype=n.readUEG()}}]),t}(),V=function(){function t(e){m(this,t),this.remuxer=e,this.track=e.mp4track}return k(t,[{key:"setAACConfig",value:function(){var e,n,r,i=new Uint8Array(2),a=t.getAACHeaderData;a&&(e=1+((192&a[2])>>>6),n=(60&a[2])>>>2,r=(1&a[2])<<2,r|=(192&a[3])>>>6,i[0]=e<<3,i[0]|=(14&n)>>1,i[1]|=(1&n)<<7,i[1]|=r<<3,this.track.codec="mp4a.40."+e,this.track.channelCount=r,this.track.config=i,this.remuxer.readyToDecode=!0)}}],[{key:"samplingRateMap",get:function(){return[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350]}},{key:"getAACHeaderData",get:function(){return F}},{key:"getHeaderLength",value:function(e){return 1&e[1]?7:9}},{key:"getFrameLength",value:function(e){return(3&e[3])<<11|e[4]<<3|(224&e[5])>>>5}},{key:"isAACPattern",value:function(e){return e[0]===255&&(240&e[1])==240&&(6&e[1])==0}},{key:"extractAAC",value:function(e){var n,r,i=0,a=e.byteLength,o=[];if(!t.isAACPattern(e))return x("Invalid ADTS audio format"),o;for(n=t.getHeaderLength(e),F||(F=e.subarray(0,n));i<a;)r=t.getFrameLength(e),o.push(e.subarray(n,r)),e=e.slice(r),i+=r;return o}}]),t}(),j=function(){function t(e){m(this,t),this.listener={},this.type=""|e}return k(t,[{key:"on",value:function(e,n){return this.listener[e]||(this.listener[e]=[]),this.listener[e].push(n),!0}},{key:"off",value:function(e,n){if(this.listener[e]){var r=this.listener[e].indexOf(n);return r>-1&&this.listener[e].splice(r,1),!0}return!1}},{key:"offAll",value:function(){this.listener={}}},{key:"dispatch",value:function(e,n){return!!this.listener[e]&&(this.listener[e].map(function(r){r.apply(null,[n])}),!0)}}]),t}(),P=function(){function t(){m(this,t)}return k(t,null,[{key:"init",value:function(){var e;for(e in t.types={avc1:[],avcC:[],btrt:[],dinf:[],dref:[],esds:[],ftyp:[],hdlr:[],mdat:[],mdhd:[],mdia:[],mfhd:[],minf:[],moof:[],moov:[],mp4a:[],mvex:[],mvhd:[],sdtp:[],stbl:[],stco:[],stsc:[],stsd:[],stsz:[],stts:[],tfdt:[],tfhd:[],traf:[],trak:[],trun:[],trex:[],tkhd:[],vmhd:[],smhd:[]},t.types)t.types.hasOwnProperty(e)&&(t.types[e]=[e.charCodeAt(0),e.charCodeAt(1),e.charCodeAt(2),e.charCodeAt(3)]);var n=new Uint8Array([0,0,0,0,0,0,0,0,118,105,100,101,0,0,0,0,0,0,0,0,0,0,0,0,86,105,100,101,111,72,97,110,100,108,101,114,0]),r=new Uint8Array([0,0,0,0,0,0,0,0,115,111,117,110,0,0,0,0,0,0,0,0,0,0,0,0,83,111,117,110,100,72,97,110,100,108,101,114,0]);t.HDLR_TYPES={video:n,audio:r};var i=new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,12,117,114,108,32,0,0,0,1]),a=new Uint8Array([0,0,0,0,0,0,0,0]);t.STTS=t.STSC=t.STCO=a,t.STSZ=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0]),t.VMHD=new Uint8Array([0,0,0,1,0,0,0,0,0,0,0,0]),t.SMHD=new Uint8Array([0,0,0,0,0,0,0,0]),t.STSD=new Uint8Array([0,0,0,0,0,0,0,1]);var o=new Uint8Array([105,115,111,109]),u=new Uint8Array([97,118,99,49]),s=new Uint8Array([0,0,0,1]);t.FTYP=t.box(t.types.ftyp,o,s,o,u),t.DINF=t.box(t.types.dinf,t.box(t.types.dref,i))}},{key:"box",value:function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];for(var a,o=8,u=r.length,s=u;u--;)o+=r[u].byteLength;for((a=new Uint8Array(o))[0]=o>>24&255,a[1]=o>>16&255,a[2]=o>>8&255,a[3]=255&o,a.set(e,4),u=0,o=8;u<s;++u)a.set(r[u],o),o+=r[u].byteLength;return a}},{key:"hdlr",value:function(e){return t.box(t.types.hdlr,t.HDLR_TYPES[e])}},{key:"mdat",value:function(e){return t.box(t.types.mdat,e)}},{key:"mdhd",value:function(e,n){return t.box(t.types.mdhd,new Uint8Array([0,0,0,0,0,0,0,2,0,0,0,3,e>>24&255,e>>16&255,e>>8&255,255&e,n>>24,n>>16&255,n>>8&255,255&n,85,196,0,0]))}},{key:"mdia",value:function(e){return t.box(t.types.mdia,t.mdhd(e.timescale,e.duration),t.hdlr(e.type),t.minf(e))}},{key:"mfhd",value:function(e){return t.box(t.types.mfhd,new Uint8Array([0,0,0,0,e>>24,e>>16&255,e>>8&255,255&e]))}},{key:"minf",value:function(e){return e.type==="audio"?t.box(t.types.minf,t.box(t.types.smhd,t.SMHD),t.DINF,t.stbl(e)):t.box(t.types.minf,t.box(t.types.vmhd,t.VMHD),t.DINF,t.stbl(e))}},{key:"moof",value:function(e,n,r){return t.box(t.types.moof,t.mfhd(e),t.traf(r,n))}},{key:"moov",value:function(e,n,r){for(var i=e.length,a=[];i--;)a[i]=t.trak(e[i]);return t.box.apply(null,[t.types.moov,t.mvhd(r,n)].concat(a).concat(t.mvex(e)))}},{key:"mvex",value:function(e){for(var n=e.length,r=[];n--;)r[n]=t.trex(e[n]);return t.box.apply(null,[t.types.mvex].concat(r))}},{key:"mvhd",value:function(e,n){var r=new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,2,e>>24&255,e>>16&255,e>>8&255,255&e,n>>24&255,n>>16&255,n>>8&255,255&n,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,255,255,255,255]);return t.box(t.types.mvhd,r)}},{key:"sdtp",value:function(e){var n,r,i=e.samples||[],a=new Uint8Array(4+i.length);for(r=0;r<i.length;r++)n=i[r].flags,a[r+4]=n.dependsOn<<4|n.isDependedOn<<2|n.hasRedundancy;return t.box(t.types.sdtp,a)}},{key:"stbl",value:function(e){return t.box(t.types.stbl,t.stsd(e),t.box(t.types.stts,t.STTS),t.box(t.types.stsc,t.STSC),t.box(t.types.stsz,t.STSZ),t.box(t.types.stco,t.STCO))}},{key:"avc1",value:function(e){var n,r,i,a=[],o=[];for(n=0;n<e.sps.length;n++)i=(r=e.sps[n]).byteLength,a.push(i>>>8&255),a.push(255&i),a=a.concat(Array.prototype.slice.call(r));for(n=0;n<e.pps.length;n++)i=(r=e.pps[n]).byteLength,o.push(i>>>8&255),o.push(255&i),o=o.concat(Array.prototype.slice.call(r));var u=t.box(t.types.avcC,new Uint8Array([1,a[3],a[4],a[5],255,224|e.sps.length].concat(a).concat([e.pps.length]).concat(o))),s=e.width,f=e.height;return t.box(t.types.avc1,new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,s>>8&255,255&s,f>>8&255,255&f,0,72,0,0,0,72,0,0,0,0,0,0,0,1,18,98,105,110,101,108,112,114,111,46,114,117,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,24,17,17]),u,t.box(t.types.btrt,new Uint8Array([0,28,156,128,0,45,198,192,0,45,198,192])))}},{key:"esds",value:function(e){var n=e.config.byteLength,r=new Uint8Array(26+n+3);return r.set([0,0,0,0,3,23+n,0,1,0,4,15+n,64,21,0,0,0,0,0,0,0,0,0,0,0,5,n]),r.set(e.config,26),r.set([6,1,2],26+n),r}},{key:"mp4a",value:function(e){var n=e.audiosamplerate;return t.box(t.types.mp4a,new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,e.channelCount,0,16,0,0,0,0,n>>8&255,255&n,0,0]),t.box(t.types.esds,t.esds(e)))}},{key:"stsd",value:function(e){return e.type==="audio"?t.box(t.types.stsd,t.STSD,t.mp4a(e)):t.box(t.types.stsd,t.STSD,t.avc1(e))}},{key:"tkhd",value:function(e){var n=e.id,r=e.duration,i=e.width,a=e.height,o=e.volume;return t.box(t.types.tkhd,new Uint8Array([0,0,0,7,0,0,0,0,0,0,0,0,n>>24&255,n>>16&255,n>>8&255,255&n,0,0,0,0,r>>24,r>>16&255,r>>8&255,255&r,0,0,0,0,0,0,0,0,0,0,0,0,o>>0&255,o%1*10>>0&255,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,i>>8&255,255&i,0,0,a>>8&255,255&a,0,0]))}},{key:"traf",value:function(e,n){var r=t.sdtp(e),i=e.id;return t.box(t.types.traf,t.box(t.types.tfhd,new Uint8Array([0,0,0,0,i>>24,i>>16&255,i>>8&255,255&i])),t.box(t.types.tfdt,new Uint8Array([0,0,0,0,n>>24,n>>16&255,n>>8&255,255&n])),t.trun(e,r.length+16+16+8+16+8+8),r)}},{key:"trak",value:function(e){return e.duration=e.duration||4294967295,t.box(t.types.trak,t.tkhd(e),t.mdia(e))}},{key:"trex",value:function(e){var n=e.id;return t.box(t.types.trex,new Uint8Array([0,0,0,0,n>>24,n>>16&255,n>>8&255,255&n,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1]))}},{key:"trun",value:function(e,n){var r,i,a,o,u,s,f=e.samples||[],l=f.length,c=12+16*l,h=new Uint8Array(c);for(n+=8+c,h.set([0,0,15,1,l>>>24&255,l>>>16&255,l>>>8&255,255&l,n>>>24&255,n>>>16&255,n>>>8&255,255&n],0),r=0;r<l;r++)a=(i=f[r]).duration,o=i.size,u=i.flags,s=i.cts,h.set([a>>>24&255,a>>>16&255,a>>>8&255,255&a,o>>>24&255,o>>>16&255,o>>>8&255,255&o,u.isLeading<<2|u.dependsOn,u.isDependedOn<<6|u.hasRedundancy<<4|u.paddingValue<<1|u.isNonSync,61440&u.degradPrio,15&u.degradPrio,s>>>24&255,s>>>16&255,s>>>8&255,255&s],12+16*r);return t.box(t.types.trun,h)}},{key:"initSegment",value:function(e,n,r){t.types||t.init();var i,a=t.moov(e,n,r);return(i=new Uint8Array(t.FTYP.byteLength+a.byteLength)).set(t.FTYP),i.set(a,t.FTYP.byteLength),i}}]),t}(),ee=1,L=function(){function t(){m(this,t)}return k(t,[{key:"flush",value:function(){this.mp4track.len=0,this.mp4track.samples=[]}},{key:"isReady",value:function(){return!(!this.readyToDecode||!this.samples.length)||null}}],[{key:"getTrackID",value:function(){return ee++}}]),t}(),te=function(t){D(n,t);var e=E(n);function n(r){var i;return m(this,n),(i=e.call(this)).readyToDecode=!1,i.nextDts=0,i.dts=0,i.mp4track={id:L.getTrackID(),type:"audio",channelCount:0,len:0,fragmented:!0,timescale:r,duration:r,samples:[],config:"",codec:""},i.samples=[],i.aac=new V(C(i)),i}return k(n,[{key:"resetTrack",value:function(){this.readyToDecode=!1,this.mp4track.codec="",this.mp4track.channelCount="",this.mp4track.config="",this.mp4track.timescale=this.timescale,this.nextDts=0,this.dts=0}},{key:"remux",value:function(r){if(r.length>0)for(var i=0;i<r.length;i++){var a=r[i],o=a.units,u=o.byteLength;this.samples.push({units:o,size:u,duration:a.duration}),this.mp4track.len+=u,this.readyToDecode||this.aac.setAACConfig()}}},{key:"getPayload",value:function(){if(!this.isReady())return null;var r,i,a=new Uint8Array(this.mp4track.len),o=0,u=this.mp4track.samples;for(this.dts=this.nextDts;this.samples.length;){var s=this.samples.shift();s.units,(i=s.duration)<=0?(v("remuxer: invalid sample duration at DTS: ".concat(this.nextDts," :").concat(i)),this.mp4track.len-=s.size):(this.nextDts+=i,r={size:s.size,duration:i,cts:0,flags:{isLeading:0,isDependedOn:0,hasRedundancy:0,degradPrio:0,dependsOn:1}},a.set(s.units,o),o+=s.size,u.push(r))}return u.length?new Uint8Array(a.buffer,0,this.mp4track.len):null}}]),n}(L),re=function(t){D(n,t);var e=E(n);function n(r){var i;return m(this,n),(i=e.call(this)).readyToDecode=!1,i.nextDts=0,i.dts=0,i.mp4track={id:L.getTrackID(),type:"video",len:0,fragmented:!0,sps:"",pps:"",fps:30,width:0,height:0,timescale:r,duration:r,samples:[]},i.samples=[],i.h264=new G(C(i)),i}return k(n,[{key:"resetTrack",value:function(){this.readyToDecode=!1,this.mp4track.sps="",this.mp4track.pps="",this.nextDts=0,this.dts=0}},{key:"remux",value:function(r){var i,a=g(r);try{for(a.s();!(i=a.n()).done;){var o,u=i.value,s=[],f=0,l=g(u.units);try{for(l.s();!(o=l.n()).done;){var c=o.value;this.h264.parseNAL(c)&&(s.push(c),f+=c.getSize())}}catch(h){l.e(h)}finally{l.f()}s.length>0&&this.readyToDecode&&(this.mp4track.len+=f,this.samples.push({units:s,size:f,keyFrame:u.keyFrame,duration:u.duration}))}}catch(h){a.e(h)}finally{a.f()}}},{key:"getPayload",value:function(){if(!this.isReady())return null;var r,i,a=new Uint8Array(this.mp4track.len),o=0,u=this.mp4track.samples;for(this.dts=this.nextDts;this.samples.length;){var s=this.samples.shift(),f=s.units;if((i=s.duration)<=0)v("remuxer: invalid sample duration at DTS: ".concat(this.nextDts," :").concat(i)),this.mp4track.len-=s.size;else{this.nextDts+=i,r={size:s.size,duration:i,cts:0,flags:{isLeading:0,isDependedOn:0,hasRedundancy:0,degradPrio:0,isNonSync:s.keyFrame?0:1,dependsOn:s.keyFrame?2:1}};var l,c=g(f);try{for(c.s();!(l=c.n()).done;){var h=l.value;a.set(h.getData(),o),o+=h.getSize()}}catch(p){c.e(p)}finally{c.f()}u.push(r)}}return u.length?new Uint8Array(a.buffer,0,this.mp4track.len):null}}]),n}(L),ne=function(t){D(n,t);var e=E(n);function n(r){var i;return m(this,n),(i=e.call(this,"remuxer")).initialized=!1,i.trackTypes=[],i.tracks={},i.seq=1,i.env=r,i.timescale=1e3,i.mediaDuration=0,i}return k(n,[{key:"addTrack",value:function(r){r!=="video"&&r!=="both"||(this.tracks.video=new re(this.timescale),this.trackTypes.push("video")),r!=="audio"&&r!=="both"||(this.tracks.audio=new te(this.timescale),this.trackTypes.push("audio"))}},{key:"reset",value:function(){var r,i=g(this.trackTypes);try{for(i.s();!(r=i.n()).done;){var a=r.value;this.tracks[a].resetTrack()}}catch(o){i.e(o)}finally{i.f()}this.initialized=!1}},{key:"destroy",value:function(){this.tracks={},this.offAll()}},{key:"flush",value:function(){if(this.initialized){var r,i=g(this.trackTypes);try{for(i.s();!(r=i.n()).done;){var a=r.value,o=this.tracks[a],u=o.getPayload();if(u&&u.byteLength){var s={type:a,payload:M(P.moof(this.seq,o.dts,o.mp4track),P.mdat(u)),dts:o.dts};a==="video"&&(s.fps=o.mp4track.fps),this.dispatch("buffer",s);var f=(l=o.dts/this.timescale,c=void 0,h=void 0,p=void 0,b=void 0,b="",c=Math.floor(l),(h=parseInt(c/3600,10)%24)>0&&(b+=(h<10?"0"+h:h)+":"),b+=((p=parseInt(c/60,10)%60)<10?"0"+p:p)+":"+((c=c<0?0:c%60)<10?"0"+c:c));v("put segment (".concat(a,"): dts: ").concat(o.dts," frames: ").concat(o.mp4track.samples.length," second: ").concat(f)),o.flush(),this.seq++}}}catch(y){i.e(y)}finally{i.f()}}else this.isReady()&&(this.dispatch("ready"),this.initSegment(),this.initialized=!0,this.flush());var l,c,h,p,b}},{key:"initSegment",value:function(){var r,i=[],a=g(this.trackTypes);try{for(a.s();!(r=a.n()).done;){var o=r.value,u=this.tracks[o];if(this.env=="browser"){var s={type:o,payload:P.initSegment([u.mp4track],this.mediaDuration,this.timescale)};this.dispatch("buffer",s)}else i.push(u.mp4track)}}catch(l){a.e(l)}finally{a.f()}if(this.env=="node"){var f={type:"all",payload:P.initSegment(i,this.mediaDuration,this.timescale)};this.dispatch("buffer",f)}v("Initial segment generated.")}},{key:"isReady",value:function(){var r,i=g(this.trackTypes);try{for(i.s();!(r=i.n()).done;){var a=r.value;if(!this.tracks[a].readyToDecode||!this.tracks[a].samples.length)return!1}}catch(o){i.e(o)}finally{i.f()}return!0}},{key:"remux",value:function(r){var i,a=g(this.trackTypes);try{for(a.s();!(i=a.n()).done;){var o=i.value,u=r[o];o==="audio"&&this.tracks.video&&!this.tracks.video.readyToDecode||u.length>0&&this.tracks[o].remux(u)}}catch(s){a.e(s)}finally{a.f()}this.flush()}}]),n}(j),ie=function(t){D(n,t);var e=E(n);function n(r,i){var a;return m(this,n),(a=e.call(this,"buffer")).type=i,a.queue=new Uint8Array,a.cleaning=!1,a.pendingCleaning=0,a.cleanOffset=30,a.cleanRanges=[],a.sourceBuffer=r,a.sourceBuffer.addEventListener("updateend",function(){a.pendingCleaning>0&&(a.initCleanup(a.pendingCleaning),a.pendingCleaning=0),a.cleaning=!1,a.cleanRanges.length&&a.doCleanup()}),a.sourceBuffer.addEventListener("error",function(){a.dispatch("error",{type:a.type,name:"buffer",error:"buffer error"})}),a}return k(n,[{key:"destroy",value:function(){this.queue=null,this.sourceBuffer=null,this.offAll()}},{key:"doCleanup",value:function(){if(this.cleanRanges.length){var r=this.cleanRanges.shift();v("".concat(this.type," remove range [").concat(r[0]," - ").concat(r[1],")")),this.cleaning=!0,this.sourceBuffer.remove(r[0],r[1])}else this.cleaning=!1}},{key:"initCleanup",value:function(r){try{if(this.sourceBuffer.updating)return void(this.pendingCleaning=r);if(this.sourceBuffer.buffered&&this.sourceBuffer.buffered.length&&!this.cleaning){for(var i=0;i<this.sourceBuffer.buffered.length;++i){var a=this.sourceBuffer.buffered.start(i),o=this.sourceBuffer.buffered.end(i);r-a>this.cleanOffset&&a<(o=r-this.cleanOffset)&&this.cleanRanges.push([a,o])}this.doCleanup()}}catch(u){x("Error occured while cleaning ".concat(this.type," buffer - ").concat(u.name,": ").concat(u.message))}}},{key:"doAppend",value:function(){if(this.queue.length&&this.sourceBuffer&&!this.sourceBuffer.updating)try{this.sourceBuffer.appendBuffer(this.queue),this.queue=new Uint8Array}catch(i){var r="unexpectedError";i.name==="QuotaExceededError"?(v("".concat(this.type," buffer quota full")),r="QuotaExceeded"):(x("Error occured while appending ".concat(this.type," buffer - ").concat(i.name,": ").concat(i.message)),r="InvalidStateError"),this.dispatch("error",{type:this.type,name:r,error:"buffer error"})}}},{key:"feed",value:function(r){this.queue=M(this.queue,r)}}]),n}(j);return function(t){D(n,t);var e=E(n);function n(r){var i;return m(this,n),(i=e.call(this,"jmuxer")).isReset=!1,i.options=Object.assign({},{node:"",mode:"both",flushingTime:500,maxDelay:500,clearBuffer:!0,fps:30,readFpsFromTrack:!1,debug:!1,onReady:function(){},onError:function(){}},r),i.env=(typeof process=="undefined"?"undefined":B(process))==="object"&&typeof window=="undefined"?"node":"browser",i.options.debug&&(O=console.log,I=console.error),i.options.fps||(i.options.fps=30),i.frameDuration=1e3/i.options.fps|0,i.remuxController=new ne(i.env),i.remuxController.addTrack(i.options.mode),i.initData(),i.remuxController.on("buffer",i.onBuffer.bind(C(i))),i.env=="browser"&&(i.remuxController.on("ready",i.createBuffer.bind(C(i))),i.initBrowser()),i}return k(n,[{key:"initData",value:function(){this.lastCleaningTime=Date.now(),this.kfPosition=[],this.kfCounter=0,this.pendingUnits={},this.remainingData=new Uint8Array,this.startInterval()}},{key:"initBrowser",value:function(){typeof this.options.node=="string"&&this.options.node==""&&x("no video element were found to render, provide a valid video element"),this.node=typeof this.options.node=="string"?document.getElementById(this.options.node):this.options.node,this.mseReady=!1,this.setupMSE()}},{key:"createStream",value:function(){var r=this.feed.bind(this),i=this.destroy.bind(this);return this.stream=new N.Duplex({writableObjectMode:!0,read:function(a){},write:function(a,o,u){r(a),u()},final:function(a){i(),a()}}),this.stream}},{key:"setupMSE",value:function(){if(window.MediaSource=window.MediaSource||window.WebKitMediaSource,!window.MediaSource)throw"Oops! Browser does not support media source extension.";this.isMSESupported=!!window.MediaSource,this.mediaSource=new MediaSource,this.url=URL.createObjectURL(this.mediaSource),this.node.src=this.url,this.mseEnded=!1,this.mediaSource.addEventListener("sourceopen",this.onMSEOpen.bind(this)),this.mediaSource.addEventListener("sourceclose",this.onMSEClose.bind(this)),this.mediaSource.addEventListener("webkitsourceopen",this.onMSEOpen.bind(this)),this.mediaSource.addEventListener("webkitsourceclose",this.onMSEClose.bind(this))}},{key:"endMSE",value:function(){if(!this.mseEnded)try{this.mseEnded=!0,this.mediaSource.endOfStream()}catch{x("mediasource is not available to end")}}},{key:"feed",value:function(r){var i,a,o,u=!1,s={video:[],audio:[]};if(r&&this.remuxController){if(o=r.duration?parseInt(r.duration):0,r.video){r.video=M(this.remainingData,r.video);var f=X(G.extractNALu(r.video),2);if(i=f[0],a=f[1],this.remainingData=a||new Uint8Array,!(i.length>0))return void x("Failed to extract any NAL units from video data:",a);s.video=this.getVideoFrames(i,o),u=!0}if(r.audio){if(!((i=V.extractAAC(r.audio)).length>0))return void x("Failed to extract audio data from:",r.audio);s.audio=this.getAudioFrames(i,o),u=!0}u?this.remuxController.remux(s):x("Input object must have video and/or audio property. Make sure it is a valid typed array")}}},{key:"getVideoFrames",value:function(r,i){var a,o=this,u=[],s=[],f=0,l=!1,c=!1;this.pendingUnits.units&&(u=this.pendingUnits.units,c=this.pendingUnits.vcl,l=this.pendingUnits.keyFrame,this.pendingUnits={});var h,p=g(r);try{for(p.s();!(h=p.n()).done;){var b=h.value,y=new w(b);y.type()!==w.IDR&&y.type()!==w.NDR||G.parseHeader(y),u.length&&c&&(y.isfmb||!y.isvcl)&&(s.push({units:u,keyFrame:l}),u=[],l=!1,c=!1),u.push(y),l=l||y.isKeyframe(),c=c||y.isvcl}}catch(S){p.e(S)}finally{p.f()}if(u.length)if(i)if(c)s.push({units:u,keyFrame:l});else{var U=s.length-1;U>=0&&(s[U].units=s[U].units.concat(u))}else this.pendingUnits={units:u,keyFrame:l,vcl:c};return a=i?i/s.length|0:this.frameDuration,f=i?i-a*s.length:0,s.map(function(S){S.duration=a,f>0&&(S.duration++,f--),o.kfCounter++,S.keyFrame&&o.options.clearBuffer&&o.kfPosition.push(o.kfCounter*a/1e3)}),v("jmuxer: No. of frames of the last chunk: ".concat(s.length)),s}},{key:"getAudioFrames",value:function(r,i){var a,o,u=[],s=0,f=g(r);try{for(f.s();!(o=f.n()).done;){var l=o.value;u.push({units:l})}}catch(c){f.e(c)}finally{f.f()}return a=i?i/u.length|0:this.frameDuration,s=i?i-a*u.length:0,u.map(function(c){c.duration=a,s>0&&(c.duration++,s--)}),u}},{key:"destroy",value:function(){if(this.stopInterval(),this.stream&&(this.remuxController.flush(),this.stream.push(null),this.stream=null),this.remuxController&&(this.remuxController.destroy(),this.remuxController=null),this.bufferControllers){for(var r in this.bufferControllers)this.bufferControllers[r].destroy();this.bufferControllers=null,this.endMSE()}this.node=!1,this.mseReady=!1,this.videoStarted=!1,this.mediaSource=null}},{key:"reset",value:function(){if(this.stopInterval(),this.isReset=!0,this.node.pause(),this.remuxController&&this.remuxController.reset(),this.bufferControllers){for(var r in this.bufferControllers)this.bufferControllers[r].destroy();this.bufferControllers=null,this.endMSE()}this.initData(),this.env=="browser"&&this.initBrowser(),v("JMuxer was reset")}},{key:"createBuffer",value:function(){if(this.mseReady&&this.remuxController&&this.remuxController.isReady()&&!this.bufferControllers)for(var r in this.bufferControllers={},this.remuxController.tracks){var i=this.remuxController.tracks[r];if(!n.isSupported("".concat(r,'/mp4; codecs="').concat(i.mp4track.codec,'"')))return x("Browser does not support codec"),!1;var a=this.mediaSource.addSourceBuffer("".concat(r,'/mp4; codecs="').concat(i.mp4track.codec,'"'));this.bufferControllers[r]=new ie(a,r),this.bufferControllers[r].on("error",this.onBufferError.bind(this))}}},{key:"startInterval",value:function(){var r=this;this.interval=setInterval(function(){r.options.flushingTime?r.applyAndClearBuffer():r.bufferControllers&&r.cancelDelay()},this.options.flushingTime||1e3)}},{key:"stopInterval",value:function(){this.interval&&clearInterval(this.interval)}},{key:"cancelDelay",value:function(){if(this.node.buffered&&this.node.buffered.length>0&&!this.node.seeking){var r=this.node.buffered.end(0);r-this.node.currentTime>this.options.maxDelay/1e3&&(console.log("delay"),this.node.currentTime=r-.001)}}},{key:"releaseBuffer",value:function(){for(var r in this.bufferControllers)this.bufferControllers[r].doAppend()}},{key:"applyAndClearBuffer",value:function(){this.bufferControllers&&(this.releaseBuffer(),this.clearBuffer())}},{key:"getSafeClearOffsetOfBuffer",value:function(r){for(var i,a=this.options.mode==="audio"&&r||0,o=0;o<this.kfPosition.length&&!(this.kfPosition[o]>=r);o++)i=this.kfPosition[o];return i&&(this.kfPosition=this.kfPosition.filter(function(u){return u<i&&(a=u),u>=i})),a}},{key:"clearBuffer",value:function(){if(this.options.clearBuffer&&Date.now()-this.lastCleaningTime>1e4){for(var r in this.bufferControllers){var i=this.getSafeClearOffsetOfBuffer(this.node.currentTime);this.bufferControllers[r].initCleanup(i)}this.lastCleaningTime=Date.now()}}},{key:"onBuffer",value:function(r){this.options.readFpsFromTrack&&r.fps!==void 0&&this.options.fps!=r.fps&&(this.options.fps=r.fps,this.frameDuration=Math.ceil(1e3/r.fps),v("JMuxer changed FPS to ".concat(r.fps," from track data"))),this.env=="browser"?this.bufferControllers&&this.bufferControllers[r.type]&&this.bufferControllers[r.type].feed(r.payload):this.stream&&this.stream.push(r.payload),this.options.flushingTime===0&&this.applyAndClearBuffer()}},{key:"onMSEOpen",value:function(){this.mseReady=!0,URL.revokeObjectURL(this.url),typeof this.options.onReady=="function"&&this.options.onReady.call(null,this.isReset)}},{key:"onMSEClose",value:function(){this.mseReady=!1,this.videoStarted=!1}},{key:"onBufferError",value:function(r){if(r.name=="QuotaExceeded")return v("JMuxer cleaning ".concat(r.type," buffer due to QuotaExceeded error")),void this.bufferControllers[r.type].initCleanup(this.node.currentTime);r.name=="InvalidStateError"?(v("JMuxer is reseting due to InvalidStateError"),this.reset()):this.endMSE(),typeof this.options.onError=="function"&&this.options.onError.call(null,r)}}],[{key:"isSupported",value:function(r){return window.MediaSource&&window.MediaSource.isTypeSupported(r)}}]),n}(j)})})(Q);var ye=Q.exports;export{ye as J,fe as r};
