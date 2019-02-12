function greeter(person: string) {
    return "Hello, " + person;
}

let user = [0, 1, 2];

document.body.innerHTML = greeter(user);

// use command tsc greeter.ts will show this:
// greeter.ts: 7: 35 - error TS2345: Argument of type 'number[]' is not assignable to parameter of type 'string'.