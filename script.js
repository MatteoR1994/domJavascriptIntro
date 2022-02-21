/**** Build a table ****/

function tableFromObjects() {
    const mountains = [
        { name: 'Kilimanjaro', height: 5895, place: 'Tanzania' },
        { name: 'Everest', height: 8848, place: 'Nepal' },
        { name: 'Mount Fuji', height: 3776, place: 'Japan' },
        { name: 'Vaalserberg', height: 323, place: 'Netherlands' },
        { name: 'Denali', height: 6168, place: 'United States' },
        { name: 'Popocatepetl', height: 5465, place: 'Mexico' },
        { name: 'Mont Blanc', height: 4808, place: 'Italy/France' }
    ];

    const table = document.createElement('table')

    const objectsKeys = Object.keys(mountains[0]);
    const headerRow = document.createElement('tr');
    for (const key of objectsKeys) {
        const lineHeader = createTdTag(key.toUpperCase(), 'th');
        headerRow.appendChild(lineHeader);
    }
    table.appendChild(headerRow);

    for (const mount of mountains) {
        const tableRow = document.createElement('tr');
        for (const key in mount) {
            if (Object.hasOwnProperty.call(mount, key)) {
                const value = mount[key];
                const td = createTdTag(value);
                if (!isNaN(value)) {
                    td.style.textAlign = 'right';
                }
                tableRow.appendChild(td);
            }
        }
        table.appendChild(tableRow);
    }

    const divContainer = document.getElementById('mountains-container');
    divContainer.appendChild(table);
}

function createTdTag(value, cellType = 'td') {
    let tdh = cellType === 'th' ? document.createElement('th') : document.createElement('td');
    const span = document.createElement('span');
    const textNode = document.createTextNode(value);
    span.appendChild(textNode);
    tdh.appendChild(span);
    return tdh;
}

//-------------------------------------------------------------------------------------------------------------//

/**** Elements by tag name ****/

function byTagName(node, tagName) {
    let found = [];
    
    function explore(node) {
        let children = node.childNodes;
        for (let i = 0; i < children.length; i++) {
            if (children[i].nodeType === document.ELEMENT_NODE) {
                if (children[i].nodeName.toLowerCase() === tagName.toLowerCase()) {
                     found.push(children[i]);
                }
                explore(children[i]);
            }
        }
    }
    explore(node);
    return found;
}

console.log(byTagName(document.body, "h1").length);

console.log(byTagName(document.body, "span").length);

let para = document.querySelector("p");
console.log(byTagName(para, "span").length);