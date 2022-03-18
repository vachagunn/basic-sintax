export function romanToInteger(str) {
    let result = 0;
    /*
    Напишите код, преобразующий число из римской записи в арабскую.
    На вход вы получите строку, ответом должно быть число.
     */
    let arrSymbols = str.split(/[+*\/-]/g);

    for (let i = 0; i < arrSymbols.length; i++) {
        arrSymbols[i].replace(/[MDLV]|C[MD]?|X[CL]?|I[XV]?/g, function (i) {
            result += {
                M: 1000,
                CM: 900,
                D: 500,
                CD: 400,
                C: 100,
                XC: 90,
                L: 50,
                XL: 40,
                X: 10,
                IX: 9,
                V: 5,
                IV: 4,
                III: 3,
                II: 2,
                I: 1,
            }[i];
        });
    }
    return result;
}
