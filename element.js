function newElm(type){
  return document.createElement(type);
}

function newArticle (cont){
 let a = newElm("article");
  a.innerHTML = cont;
  return a;
}


function newSection (cont){
 let a = newElm("section");
  a.innerHTML = cont;
  return a;
}

function newDiv (cont){
 let a = newElm("div");
  a.innerHTML = cont;
  return a;
}


function newPara (cont){
 let a = newElm("p");
  a.innerHTML = cont;
  return a;
}


function newIframe (cont){
 let a = newElm("iframe");
  a.srcdoc = cont;
  return a;
}

function newFigure (cont){
 let a = newElm("figure");
  a.innerHTML = cont;
  return a;
}

function newBtn (cont){
 let a = newElm("button");
  a.innerHTML = cont;
  return a;
}

function newPre (cont){
 let a = newElm("pre");
  a.innerHTML = cont;
  return a;
}

function newSpan (cont){
 let a = newElm("span");
  a.innerHTML = cont;
  return a;
}

function newHeader (cont){
 let a = newElm("header");
  a.innerHTML = cont;
  return a;
}

function newH (cont, level){
 let a = newElm("h" + level);
  a.innerHTML = cont;
  return a;
}

function newFooter (cont){
 let a = newElm("footer");
  a.innerHTML = cont;
  return a;
}

function newUl (cont){
 let a = newElm("ul");
  a.innerHTML = cont;
  return a;
}
function newList (cont){
 let a = newElm("li");
  a.innerHTML = cont;
  return a;
}

function newNav (cont){
 let a = newElm("nav");
  a.innerHTML = cont;
  return a;
}

function newTextField (cont){
 let a = newElm("input");
  a.value = cont;
  return a;
}


function newTextArea (cont){
 let a = newElm("textArea");
  a.innerHTML = cont;
  return a;
}
