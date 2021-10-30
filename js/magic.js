//clear all

function clearAll() {
    document.getElementById('textarea').value = "";
}


// capitalize
let count = 1;
capitalize = () => {

    let teValue = document.getElementById('textarea').value;
    if (count % 2 != 0) {
        document.getElementById('textarea').value = teValue.toUpperCase();
    }
    else {
        document.getElementById('textarea').value = teValue.toLowerCase();
    }
    count++;

}


// reverse

reverse = () => {
    splitLine = document.getElementById('textarea').value.split('\n');
    const reversedText = splitLine.reverse().toString();

    console.log(reversedText);
    document.getElementById('textarea').value = reversedText.replaceAll(',', "\n");

}

//sort

sorting = () => {
    splitLine = document.getElementById('textarea').value.split('\n');
    let sorted = splitLine.sort().toString();
    document.getElementById('textarea').value = sorted.replaceAll(',', "\n");
}

// strip blank

stripblank = () => {
    splitLine = document.getElementById('textarea').value.split('\n');

    console.log(splitLine);

    for (let i = 0; i < splitLine.length; i++) {

        splitLine[i] = splitLine[i].trim();
        if (splitLine[i] == "") {
            splitLine.splice(i, 1);
            i = 0;
        }
    }

    console.log(splitLine);

    document.getElementById('textarea').value = splitLine.toString().replaceAll(',', "\n");


}

// add numbers

addNumbers = () => {

    splitLine = document.getElementById('textarea').value.split('\n');


    for (let i = 0; i < splitLine.length; i++) {
        let counter = i
        splitLine[i] = (counter + 1) + "." + splitLine[i] + "\n";
    }
    document.getElementById('textarea').value = splitLine.toString().replaceAll(',', '');
}

// randomize

shuffle = () => {
    splitLine = document.getElementById('textarea').value.split('\n');

    for (var i = splitLine.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = splitLine[i];
        splitLine[i] = splitLine[j];
        splitLine[j] = temp;
    }

    document.getElementById('textarea').value = splitLine.toString().replaceAll(',', "\n");


    console.log(splitLine);
}