const productModel = `
    create table if not exists product(
    id serial primary key,
    category_id int,
    name varchar(50),
    price numeric(10, 2) not null,
    count smallint default 1 ,
    foreign key (category_id) 
    references category(id)
    on delete set null
    );
`

module.exports = productModel