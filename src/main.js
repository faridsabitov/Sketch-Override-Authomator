import sketch from 'sketch'
let UI = require('sketch/ui') ;

let selection = sketch.getSelectedDocument().selectedLayers
let symbols = selection.layers.filter(layer => layer.type == sketch.Types.SymbolMaster)
let symbol = null;

if(selection.length == 1 && selection.layers[0].type == "SymbolMaster"){
  symbol = selection.layers[0];  
} else {
  UI.message('Please select the symbol on the "Symbols" page to manage overrides 🤓')
}

// Need to understand why nested symbols are not working
// need to disable styles too
// if user selected layer need to find the parent and disable it if it's a symbol
// try if it will work from the artboard page


export function enableAll(){
  if(symbol){
    for(let g = 0; g < symbol.overrides.length; g++) {
      symbol.overrides[g].editable = true
    }
  }
}

export function enableDynamic(){
  if(symbol){
    for(let g = 0; g < symbol.overrides.length; g++) {
      if (symbol.overrides[g].sketchObject.affectedLayer().name().includes("{") && symbol.overrides[g].sketchObject.affectedLayer().name().includes("{")) {
        symbol.overrides[g].editable = true;
      } else {
        symbol.overrides[g].editable = false;
      }
    }
  }
}

export function disableAll(){
  if(symbol){
    for(let g = 0; g < symbol.overrides.length; g++) {
      symbol.overrides[g].editable = false
    }
  }
}

export function howWorks(){
  NSWorkspace.sharedWorkspace().openURL(NSURL.URLWithString("https://medium.com/@faridsabitov"));
}