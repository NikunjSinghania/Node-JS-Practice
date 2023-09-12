function ch(name) {
    console.log(name);
}

function higherOrderFn(fn) {
    fn('NAME')
}

higherOrderFn(ch)