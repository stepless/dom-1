let d = dom.create('<div><span>hi</span></div>');
let st = document.querySelector('.st');
dom.after(st,d);
let par = dom.create('<div></div>');
let di = document.createElement('div');
dom.warp(st,par);
let d1 = document.querySelector('.d1');
dom.remove(d1);
dom.attr(st,'title','hi');
let d2 = document.querySelector('.d2');
dom.style(d2,'backgroundColor','red');
dom.class.add(d2,'red');
console.log(dom.class.has(d2,'red'));
dom.class.remove(d2,'red');
dom.on(d2, 'click',() => console.log('点击了'))

let d3 = dom.find('.d2');
console.log(d3[0]);

let sp2 = dom.find('.sp2')[0];
console.log(dom.siblings(sp2));
console.log(dom.next(sp2));
console.log(dom.previous(sp2));
let sp1 = dom.find('.sp1')[0];
let travel = dom.find('.travel')[0];
dom.each(dom.children(travel),(n)=>dom.style(n,'color','red'));

console.log(dom.index(sp1));