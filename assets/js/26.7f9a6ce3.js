(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{434:function(a,v,e){"use strict";e.r(v);var _=e(2),t=Object(_.a)({},(function(){var a=this,v=a._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[v("p",[a._v("浏览器缓存是指浏览器在访问网页时，将网页的一些资源（如图片、CSS、JS等）存储在本地，以便下次访问同一个网页时，可以直接从本地缓存中读取，从而提高网页的加载速度和用户的体验。")]),a._v(" "),v("h3",{attrs:{id:"浏览器缓存的分类"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#浏览器缓存的分类"}},[a._v("#")]),a._v(" 浏览器缓存的分类")]),a._v(" "),v("p",[a._v("浏览器缓存可以分为两种类型："),v("strong",[a._v("强缓存")]),a._v("和"),v("strong",[a._v("协商缓存")]),a._v("。")]),a._v(" "),v("h2",{attrs:{id:"强缓存"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#强缓存"}},[a._v("#")]),a._v(" 强缓存")]),a._v(" "),v("p",[a._v("强缓存是指浏览器在第一次请求资源时，将资源的一些信息（如过期时间、缓存标识等）存储在本地，下次请求同一资源时，浏览器会先判断该资源是否过期，如果没有过期，则直接从本地缓存中读取；如果已过期，则重新向服务器发送请求。")]),a._v(" "),v("p",[a._v("强缓存可以通过设置HTTP响应头来控制，常用的有三个字段：Expires、Cache-Control和Pragma。")]),a._v(" "),v("ul",[v("li",[v("p",[a._v("Expires是一个时间戳，表示资源的过期时间，浏览器会根据该时间戳判断资源是否过期。例如，"),v("code",[a._v("Expires: Wed, 21 Oct 2020 07:28:00 GMT")]),a._v("。当浏览器发起请求时，会将系统时间与其对比，如果超出时间即缓存失效，其在三个字段中优先级最低。")])]),a._v(" "),v("li",[v("p",[a._v("Cache-Control是一个指令集，可以控制缓存的行为。常用的指令有：")]),a._v(" "),v("ul",[v("li",[a._v("max-age:"),v("code",[a._v("Cache-Control: max-age=3600")]),a._v("。表示资源的最大缓存时间，单位为秒。")]),a._v(" "),v("li",[a._v("no-cache："),v("code",[a._v("Cache-Control: no-cache")]),a._v("。表示缓存必须在使用之前重新验证，如果缓存资源过期或已更改，则必须从原始服务器重新获取最新版本。")]),a._v(" "),v("li",[a._v("no-store："),v("code",[a._v("Cache-Control: no-store")]),a._v("。表示禁止任何形式的缓存，包括本地和中间缓存，所有内容都必须从原始服务器请求。")]),a._v(" "),v("li",[a._v("public："),v("code",[a._v("Cache-Control: public")]),a._v("。表示服务器允许响应被中间缓存缓存，例如代理服务器。")]),a._v(" "),v("li",[a._v("private："),v("code",[a._v("Cache-Control: private")]),a._v("。表示响应只能被单个用户（如浏览器）缓存，而不能被中间缓存缓存。")])])]),a._v(" "),v("li",[v("p",[a._v("Pragma是HTTP/1.0中用于控制缓存的一组指令，与Cache-Control具有相似的作用，但已被弃用。Pragma指令通常用于在HTTP/1.0环境下控制缓存。其中Pragma: no-cache指令可以强制浏览器不使用强缓存或协商缓存，并要求每次都从原始服务器请求资源。在HTTP/1.1中，使用Cache-Control: no-cache指令来实现相同的目的，因此Pragma指令已经不再推荐使用。")])])]),a._v(" "),v("h2",{attrs:{id:"协商缓存"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#协商缓存"}},[a._v("#")]),a._v(" 协商缓存")]),a._v(" "),v("p",[a._v("协商缓存是指浏览器在第一次请求资源时，向服务器发送一个请求，询问该资源是否有更新，如果服务器返回的响应码是304，表示资源没有更新，则浏览器可以直接从本地缓存中读取；如果响应码不是304，则浏览器需要重新从服务器请求资源。")]),a._v(" "),v("p",[a._v("协商缓存可以通过设置HTTP请求头和响应头来控制，常用的有两个字段：If-Modified-Since/Last-Modified和If-None-Match/ETag。")]),a._v(" "),v("ul",[v("li",[v("p",[a._v("If-Modified-Since/Last-Modified是一个时间戳，表示上一次请求该资源时服务器返回的Last-Modified字段的值。当浏览器再次请求该资源时，会将该时间戳通过If-Modified-Since字段发送给服务器，询问该资源是否有更新。例如，"),v("code",[a._v("If-Modified-Since: Wed, 21 Oct 2020 07:28:00 GMT")]),a._v("。当字段相等时，返回304，并且加载浏览器缓存。")])]),a._v(" "),v("li",[v("p",[a._v("If-None-Match/ETag是一个字符串，表示上一次请求该资源时服务器返回的ETag字段的值。当浏览器再次请求该资源时，会将该字符串通过If-None-Match字段发送给服务器，询问该资源是否有更新。例如，"),v("code",[a._v('If-None-Match: "abc123"')]),a._v("。只有在服务器资源发生变化时，ETag字段才会发生改变，否则返回304。")])])]),a._v(" "),v("h2",{attrs:{id:"浏览器缓存的优缺点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#浏览器缓存的优缺点"}},[a._v("#")]),a._v(" 浏览器缓存的优缺点")]),a._v(" "),v("p",[a._v("浏览器缓存的优点是可以提高网页的加载速度和用户的体验，减少了服务器的负载和网络的流量。")]),a._v(" "),v("p",[a._v("浏览器缓存的缺点是可能会导致缓存不一致的问题。例如，当网页内容有更新时，如果浏览器缓存的资源没有及时更新，用户就会看到旧的内容。此时，可以通过设置缓存标识来解决缓存不一致的问题。")]),a._v(" "),v("h2",{attrs:{id:"结语"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#结语"}},[a._v("#")]),a._v(" 结语")]),a._v(" "),v("p",[a._v("浏览器缓存是前端开发中非常重要的一个概念，了解浏览器缓存的分类、控制方法和优缺点，可以帮助我们更好地优化网页的性能和用户体验。")])])}),[],!1,null,null,null);v.default=t.exports}}]);