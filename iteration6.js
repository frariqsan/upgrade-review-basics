const arrayNames = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'];

function swap(array, a ,b) {
    if (array[a] && array[b]) {
        let aux = array[b];
        array[b] = array[a];
        array[a] = aux;

        return array;
    }
    return array;
}
console.log(swap(arrayNames,1,4));
console.log(swap(arrayNames,2,3));