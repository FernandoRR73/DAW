const contarParametros = (...args) => {
    return args.length;
};

console.log(`el numero de parametros introducidos es ${contarParametros(1,2,3, 3,5,6)}` );
console.log(`el numero de parametros introducidos es ${contarParametros('a', 'as', '12', 'a asd',12)}`);