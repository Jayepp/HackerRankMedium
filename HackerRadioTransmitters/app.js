function hackerlandRadioTransmitters(x, k) {
    x.sort((a, b) => a - b);
    let i = 0, n = x.length, transmitters = 0;

    while (i < n) {
        transmitters++;
        let loc = x[i] + k;
        while (i < n && x[i] <= loc) i++;
        i--;
        loc = x[i] + k;
        while (i < n && x[i] <= loc) i++;
    }

    return transmitters;
}
