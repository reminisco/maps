export default function (store = {
    maps: [
        {
            id: 1,
            number: 3,
            name: 'THe Road',
            assigned: false,
        },
        {
            id: 2,
            number: 2,
            name: 'The Other Road',
            assigned: false,
        },
        {
            id: 3,
            number: 4,
            name: 'A Road',
            assigned: false,
        },
        {
            id: 4,
            number: 1,
            name: 'The Long Road',
            assigned: true,
            assignment: {
                user: 1
            }
        }
    ],
    user: {
        id: 1,
        name: 'Warrick Hill'
    }
}, action) {
    return store;
}