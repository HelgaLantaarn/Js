let book1 = {
    tittle: '12 chairs',
    pageCount: 256,
    genre: 'novel',
    authors: [{name:'ilya ilf', age: 128}, {name:'yevgen petrov', age: 122}]
};
let book2 = {
    tittle: 'Golden calf',
    pageCount: 289,
    genre: 'novel',
    authors: [{name:'ilya ilf', age: 128}, {name:'yevgen petrov', age: 122}]
};
let book3 = {
    tittle: 'Angelika',
    pageCount: 256,
    genre: 'novel',
    authors: [{name:'ann golon', age: 104}, {name:'serge golon', age: 122}]
};

const users = [
    {name: 'ivan', username: 'ivan123', password: 'pass123'},
    {name: 'maria', username: 'maria123', password: 'maria123'},
    {name: 'lida', username: 'lida123', password: 'lida123'},
    {name: 'jan', username: 'jan123', password: 'jan123'},
    {name: 'jana', username: 'jana123', password: 'janapass123'},
    {name: 'vika', username: 'vika123', password: 'vika123'},
    {name: 'anton', username: 'anton123', password: 'anton123'},
    {name: 'vova', username: 'vova123', password: 'vova123'},
    {name: 'igor', username: 'igor123', password: 'igor123'},
];
users.forEach(user=> console.log(user.password));
