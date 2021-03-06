/*export obj = {
    type User = {
    nick: string,
    status: string,
    id: number
};
*/
export function getStatusPoint(status: string): number {
    switch(status) {
        case 'dostępny':
            return 0;
        case 'zaraz-wracam':
            return 1;
        case 'niedostępny':
            return 3;
        case 'zajęty':
            return 2
        default:
            return -1;
    }
};