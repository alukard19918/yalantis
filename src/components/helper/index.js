export const LIST_MONTH = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

export function isDate(date) {
    return (new Date(date) !== "Invalid Date" && !isNaN(new Date(date)));
}

export function getListObjects(response) {
    let listUsersToState = [];
    let usersByMonth = getUsersByMonthList();

    response.map(user => {
        if (isDate(user.dob)) {
            let month = Number(user.dob.substr(5, 2));
            const monthIndex = month - 1;

            listUsersToState.push(user);
            usersByMonth[monthIndex]['count']++;
            usersByMonth[monthIndex]['children'].push(user);
        }

        return user;
    });

    return {listUsersToState, usersByMonth}
}

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

export function getUsersByMonthList() {
    const usersByMonth = {};

    for (let i = 0; i <= 11; i++) {
        usersByMonth[i] = {
            children: [],
            className: '',
            count: 0,
            monthName: LIST_MONTH[i],
        };
    }

    return usersByMonth;
}