(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{QfWi:function(t,o,n){"use strict";n.r(o);n("RYXX")},RYXX:function(t,o){var n=["#FFFFFF","#2196F3","#4CAF50","#FF9800","#009688","#795548"],e=document.querySelector('button[data-action="start"]'),i=document.querySelector('button[data-action="stop"]'),a={isActive:!1,onColorChange:function(){this.isActive||(this.isActive=!0,this.intervalId=setInterval((function(){var t,o,e=(t=0,o=n.length,Math.floor(Math.random()*(o-t+1)+t));document.body.style.backgroundColor=n[e]}),1e3))},onStopColorChange:function(){clearInterval(this.intervalId),this.isActive=!1,document.body.style.backgroundColor=n[0]}};e.addEventListener("click",a.onColorChange.bind(a)),i.addEventListener("click",a.onStopColorChange.bind(a))}},[["QfWi",1]]]);
//# sourceMappingURL=main.1af0937473a05d1e231e.js.map