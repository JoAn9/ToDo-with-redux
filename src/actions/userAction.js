export function createUser(name, band) {
    return {
        type: 'CREATE_USER',
        name,
        band
    };
}