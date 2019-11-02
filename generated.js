(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var table = document.querySelector('table');
var addTimerButton = document.querySelector('#addTimerButton');

function List(){
    var items = [];
    this.itemTemplate = {};
    this.eventListeners = {};
    this.add = function(inputItem){
        if (inputItem == undefined) { inputItem = {}; }
        inputItem.id = uuidv4();
        items.push(inputItem);
        (this.eventListeners.add) ? _.eventListeners.add.map(function(eventListener){ eventListener(); }) : null;
        (this.eventListeners.onchange) ? _.eventListeners.onchange.map(function(eventListener){ eventListener(); }) : null;
    };
    this.remove = function(inputId){ 
        items = items.filter(function(item){         
            var isTrue = (item.id !== inputId);
            return isTrue; 
        }); 
    };
    this.addEventListener = function(eventListenerType, eventListener){ 
        switch(eventListenerType){
            case "onchange":
            case "add":
                if (this.eventListeners[eventListenerType] == undefined){
                    this.eventListeners[eventListenerType] = [];
                }
                this.eventListeners[eventListenerType].push(eventListener);
                break;
            default: break;    
        }
    };
    this.listEventListeners = function(){
        var eventListenersString = "";
        for (var key in eventListeners){
            eventListenersString += key + "\n";
        }
        return eventListenersString;
    };
};

function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

var list1 = new List();
var list2 = new List();

list1.add('hi');
list2.add('world');
list1.items.map(function(item){console.log(item)});


addTimerButton.onclick = function(event){
    var row, cell, button;
    console.log(event);
    row = table.insertRow(-1);
    cell = row.insertCell(-1);
    cell.className="end-time";
    cell.innerHTML="end time";
    cell = row.insertCell(-1);
    cell.className="elapsed-time";
    cell.innerHTML="elapsed-time";
    cell = row.insertCell(-1);
    cell.className="start-timer-cell";
    button = document.createElement('button');
    button.className="start-timer-button";
    button.innerHTML="start";
    cell.appendChild(button);
    cell = row.insertCell(-1);
    cell.className="delete-timer-button";
    button = document.createElement('button');
    button.className="delete-timer-button";
    button.innerHTML="delete";
    cell.appendChild(button);
}












},{}]},{},[1]);
