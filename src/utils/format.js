export function format(value){
    if (typeof value !== 'number' || isNaN(value)) {
        return '0'; // Devuelve un valor predeterminado
    }
    return value.toLocaleString('es-CL')
}