function receivesAFunction(cb) {
    return cb();
}

function returnsANamedFunction() {
    return function named() {
        console.log('My name is Lo.');
    }
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log('returns an anonymous function');
    }
}