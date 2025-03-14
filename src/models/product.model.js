const productModel = `
    create table if not exists products(
    id serial primary key,
    name varchar(50),
    price numeric(10, 2) not null,
    count smallint default 1    
    );
`

module.exports = productModel