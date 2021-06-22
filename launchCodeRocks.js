
function launchOutput(entry) {
    output = "";
    if (entry % 2 === 0){
        output += "Launch";
    } 
    if (entry % 3 === 0){
        output += "Code";
    }
    if (entry % 5 === 0){
        output += " Rocks";
    }
    if (output === " Rocks"){
      output = output.trim();
    }

    if (entry%2 !== 0 && entry%3 !== 0 && entry%5 !== 0){
        output += "Rutabagas! That doesn't work";
    }
    output += '!'
    if (output === "Launch Rocks!"){
        output += " (CRASH!!!!)";
    }

    return output;
}

module.exports = launchOutput;