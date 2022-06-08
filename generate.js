function generate() {
    const a = Math.floor(Math.random() * 1000);
    const b = Math.floor(Math.random() * 1000);
    const c = Math.floor(Math.random() * 1000);
    return {
        "a": a,
        "b": b,
        "c": c
    };
}