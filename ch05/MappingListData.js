const users = [
    { id: 'u1', name: 'Max', age: 35 },
    { id: 'u2', name: 'Anna', age: 32 }
] ;

const userNames = users.map( user => user.name ) ;
console.log(userNames) ;
// userNames = [ 'Max', 'Anna' ] ;