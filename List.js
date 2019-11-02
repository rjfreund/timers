function List(){};
List.prototype.items = [];
List.prototype.itemTemplate = {};
List.prototype.eventListeners = {};
List.prototype.add = function(inputItem){
    if (inputItem == undefined) { inputItem = {}; }
    inputItem.id = uuidv4();
    List.prototype.items.push(inputItem);
    (List.prototype.eventListeners.add) ? _.eventListeners.add.map(function(eventListener){ eventListener(); }) : null;
    (List.prototype.eventListeners.onchange) ? _.eventListeners.onchange.map(function(eventListener){ eventListener(); }) : null;
};
List.prototype.remove = function(inputId){ 
    List.prototype.items = List.prototype.items.filter(function(item){         
        var isTrue = (item.id !== inputId);
        return isTrue; 
    }); 
};
List.prototype.addEventListener = function(eventListenerType, eventListener){ 
    switch(eventListenerType){
        case "onchange":
        case "add":
            if (List.prototype.eventListeners[eventListenerType] == undefined){
                List.prototype.eventListeners[eventListenerType] = [];
            }
            List.prototype.eventListeners[eventListenerType].push(eventListener);
            break;
        default: break;    
    }
};
List.prototype.listEventListeners = function(){
    var eventListenersString = "";
    for (var key in eventListeners){
        eventListenersString += key + "\n";
    }
    return eventListenersString;
};

function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

export default List;