let employee = {
    name: "Smith",
    profesion: "Agent",
    age: 42,
    weapons: ["gun", "machine-gun", "kelly"]
};

console.log(employee);

let serialized = JSON.stringify(employee);

console.log(serialized);

// des-serializar el objeto

//si el formato no es válido,
//JSON.parse producirá una excepción
// serializado = serializado + '}';

let read;

try {
    read = JSON.parse(serialized);
} catch (err) {
    console.log('could not read "serialized"');
}

if (typeof read != 'undefined') {
    console.log('something read');
} else {
    console.log('nothing read');
}

for (let i = 0; i < employee.weapons.length; i++) {
    let weapon = employee.weapons[i];
    console.log(employee.name + (weapon == 'kelly' ? ' has a beautiful ' : ' reloads ') + weapon);
}