(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{300:function(_,t,s){"use strict";s.r(t);var v=s(14),a=Object(v.a)({},(function(){var _=this,t=_._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h2",{attrs:{id:"_1-面试题-如何理解-js-的异步"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-面试题-如何理解-js-的异步"}},[_._v("#")]),_._v(" 1.面试题：如何理解 JS 的异步？")]),_._v(" "),t("p",[_._v("参考答案：\nJS是一门单线程的语言，这是因为它运行在浏览器的渲染主线程中，而渲染主线程只有一个。\n而渲染主线程承担着诸多的工作，渲染页面、执行 JS 都在其中运行。\n如果使用同步的方式，就极有可能导致主线程产生阻塞，从而导致消息队列中的很多其他任务无法得到执行。这样一来，一方面会导致繁忙的主线程白白的消耗时间，另一方面导致页面无法及时更新，给用户造成卡死现象。\n所以浏览器采用异步的方式来避免。具体做法是当某些任务发生时，比如计时器、网络、事件监听，主线程将任务交给其他线程去处理，自身立即结束任务的执行，转而执行后续代码。  当其他线程完成时，将事件传递的回调函数包装成任务，加入到消息队列的末尾排队，等待主线程调度执行。\n在这种异步模式下，浏览器永不阻塞，从而最大限度的保证了单线程的流畅运行。")]),_._v(" "),t("h2",{attrs:{id:"_2-面试题-阐述一下-js-的事件循环"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-面试题-阐述一下-js-的事件循环"}},[_._v("#")]),_._v(" 2.面试题：阐述一下 JS 的事件循环")]),_._v(" "),t("p",[_._v("参考答案：")]),_._v(" "),t("p",[_._v("事件循环又叫做消息循环，是浏览器渲染主线程的工作方式。")]),_._v(" "),t("p",[_._v("在 Chrome 的源码中，它开启一个不会结束的 for 循环，每次循环从消息队列中取出第一个任务执行，而其他线程只需要在合适的时候将任务加入到队列末尾即可。")]),_._v(" "),t("p",[_._v("过去把消息队列简单分为宏队列和微队列，这种说法目前已无法满足复杂的浏览器环境，取而代之的是一种更加灵活多变的处理方式。")]),_._v(" "),t("p",[_._v("根据 W3C 官方的解释，每个任务有不同的类型，同类型的任务必须在同一个队列，不同的任务可以属于不同的队列。不同任务队列有不同的优先级，在一次事件循环中，由浏览器自行决定取哪一个队列的任务。但浏览器必须有一个微队列，微队列的任务一定具有最高的优先级，必须优先调度执行。")]),_._v(" "),t("h2",{attrs:{id:"_3-面试题-js-中的计时器能做到精确计时吗-为什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-面试题-js-中的计时器能做到精确计时吗-为什么"}},[_._v("#")]),_._v(" 3.面试题：JS 中的计时器能做到精确计时吗？为什么？")]),_._v(" "),t("p",[_._v("参考答案：")]),_._v(" "),t("p",[_._v("不行，因为：")]),_._v(" "),t("ol",[t("li",[_._v("计算机硬件没有原子钟，无法做到精确计时")]),_._v(" "),t("li",[_._v("操作系统的计时函数本身就有少量偏差，由于 JS 的计时器最终调用的是操作系统的函数，也就携带了这些偏差")]),_._v(" "),t("li",[_._v("按照 W3C 的标准，浏览器实现计时器时，如果嵌套层级超过 5 层，则会带有 4 毫秒的最少时间，这样在计时时间少于 4 毫秒时又带来了偏差")]),_._v(" "),t("li",[_._v("受事件循环的影响，计时器的回调函数只能在主线程空闲时运行，因此又带来了偏差")])])])}),[],!1,null,null,null);t.default=a.exports}}]);