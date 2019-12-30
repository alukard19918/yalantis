export const LIST_MONTH = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];


export function getCssClassName(count) {
    let listCounterAndCssClassName = {
        0: 'grey',
        1: 'grey',
        2: 'grey',
        3: 'blue',
        4: 'blue',
        5: 'blue',
        6: 'blue',
        7: 'green',
        8: 'green',
        9: 'green',
        10: 'green',
    };

    if (listCounterAndCssClassName[count] === undefined) {
        return 'red';
    }

    return listCounterAndCssClassName[count];
}