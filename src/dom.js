window.dom = {
    create(string){
        const container= document.createElement('template');
        container.innerHTML = string.trim();
        return container.content.firstChild;
    },
    after(node,node2){
        node.parentNode.insertBefore(node2,node.nextSibling);
    },
    before(node,node2){
        node.parentNode.insertBefore(node2,node);
    },
    append(parent,node){
        parent.appendChild(node);
    },
    warp(node,parent){
        dom.before(node,parent);
        dom.append(parent,node);
    },
    remove(node){
        node.parentNode.removeChild(node);
        return node;
    },
    empty(node){
        const array = [];
        let x = node.firstChild;
        while(x){
            array.push(dom.remove(node.firstChild));
            x = node.firstChild;
        }
        return array;
    },
    attr(node,name,value){
        if(arguments.length === 2){
            return node.getAttribute(name);
        }else if(arguments.length === 3){
            node.setAttribute(name,value);
        }
    },
    text(node,string){ //适配
        if(innerText in node){
            if(arguments.length === 1){
                return node.innerText;
            }else if(arguments.length === 2){
                node.innerText = string;
            }
        }else{
            if(arguments.length === 1){
                return node.textContent;
            }else if(arguments.length === 2){
                node.textContent = string;
            }
        }
    },
    html(node,string){
        if(arguments.length === 1){
            return node.innerHTML;
        }else if(arguments.length === 2){
            node.innerHTML = string;
        }
    },
    style(node,name,value){
        if(arguments.length === 2){
            if(name instanceof Object){
                for(key in name){
                    node.style[key] = name[key];
                }
            }else if(typeof name === String){
                return node.style[name];
            }
        }else if(arguments.length === 3){
            node.style[name] = value;
        }
    },
    class:{
        add(node,className){
            node.classList.add(className);
        },
        remove(node,className){
            node.classList.remove(className);
        },
        has(node,className){
            return node.classList.contains(className);
        }
    },
    on(node,eventName,fn){
        node.addEventListener(eventName,fn);
    },
    off(node,eventName,fn){
        node.removeEventListener(eventName,fn);
    },
    find(selector,node){
        return (node || document).querySelectorAll(selector);
    },
    parent(node){
        return node.parentNode;
    },
    children(node){
        return node.children;
    },
    siblings(node){
        return Array.from(node.parentNode.children).filter( n=> n!==node);
    },
    next(node){
        let next = node.nextSibling;
        while(next && next.nodeType === 3){
            next = next.nextSibling;
        }
        return next;
    },
    previous(node){
        let previous = node.previousSibling;
        while(previous && previous.nodeType === 3){
            previous = previous.previousSibling;
        }
        return previous;
    },
    each(nodeList,fn){
        for(let i = 0; i < nodeList.length; i++){
            fn.call(null,nodeList[i]);
        }
    },
    index(node){
        const x = dom.children(node.parentNode);
        let i;
        for(i=0; i < x.length; i++){
            if(x[i] === node){
                break;
            }
        }
        return i;
    }
}