const category_model = (`
    create table if not exists category(
    id serial primary key,
    name varchar(50)
    );   
`)

module.exports = category_model