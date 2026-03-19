

let rows = 10;

for(let i=rows; i>0; i--) {
    let pattern = "";

    for(let j=0; j<i; j++) {
        pattern = pattern + "*";
    }

    console.log(pattern);
}

