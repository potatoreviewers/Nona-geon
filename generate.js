function generate() {
    const a = Math.floor(Math.random() * 1000);
    const b = Math.floor(Math.random() * 1000);
    const x = Math.floor(Math.random() * 1000);
    const y = Math.floor(Math.random() * 1000);

    const c = a*x + b*y;
    return {
        "a": a,
        "b": b,
        "c": c
    };
}