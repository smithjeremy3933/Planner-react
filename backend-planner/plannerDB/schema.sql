drop database if exists plannerDB;
create database plannerDB;

use plannerDB;

create table Notes (
id int not null auto_increment,
note varchar(70) not null,
primary key(id)
);

create table Quotes (
id int not null auto_increment,
quote varchar(150) not null,
author varchar(50) not null,
primary key(id)
);

create table todos (
    id int not null auto_increment,
    todo_note varchar(70) not null,
    todos_time varchar(70) not null,
    primary key(id)
);