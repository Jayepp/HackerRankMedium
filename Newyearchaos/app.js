
function minimumBribes(q) {
    let bribes = 0;
    let chaotic = false;

    for (let i = 0; i < q.length; i++) {
       
        if (q[i] - (i + 1) > 2) {
            chaotic = true;
            break;
        }

        
        for (let j = Math.max(0, q[i] - 2); j < i; j++) {
            if (q[j] > q[i]) {
                bribes++;
            }
        }
    }

    if (chaotic) {
        console.log("Too chaotic");
    } else {
        console.log(bribes);
    }
}