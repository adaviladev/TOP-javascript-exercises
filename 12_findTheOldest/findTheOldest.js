const findTheOldest = function(array) {
    //Acceder al array
    //Por cada persona, determinar su edad
    // restar yearOfDeath - yearOfBirth
    // si no hay yearOfDeath, usar fecha actual
    //Ordenar las edades de mayor a menor
    //Seleccionar la persona con más edad



    // for (let i = 0; i < array.length; i++) {
    //     let age = 0
    //     age = array[i].yearOfDeath - array[i].yearOfBirth
    //     console.log(`${array[i].name} is ${age} years old.`)



    // }

    const oldest = array.sort((a, b) => {
        let ageA;
        if (a.yearOfDeath) {
            ageA = a.yearOfDeath - a.yearOfBirth;
        } else {
            const currentYear = new Date().getFullYear();
            ageA = currentYear - a.yearOfBirth;
        };

        let ageB;
        if (b.yearOfDeath) {
            ageB = b.yearOfDeath - b.yearOfBirth;
        } else {
            const currentYear = new Date().getFullYear();
            ageB = currentYear - b.yearOfBirth;
        }
        return ageB - ageA;
    });

    const oldestPerson = oldest[0];
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
