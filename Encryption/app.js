function encryption(s) {
    s = s.replace(/\s/g, '');
    let L = s.length;
    let rows = Math.floor(Math.sqrt(L));
    let cols = Math.ceil(Math.sqrt(L));
    if (rows * cols < L) rows++;

    let result = [];
    for (let c = 0; c < cols; c++) {
        let word = '';
        for (let r = 0; r < rows; r++) {
            let index = r * cols + c;
            if (index < L) word += s[index];
        }
        result.push(word);
    }
    return result.join(' ');

    
}