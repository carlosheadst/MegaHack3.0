create database BrejaFinder;
use BrejaFinder;
/*drop database BrejaFinder;*/

create table Estabelecimento(
id int not null auto_increment,
nome varchar(25)not null,
cnpj int not null,
senha int not null,
numero varchar(14)not null,
email varchar(50)not null,
local varchar(100)not null,
primary key(id)
);

create table Evento(
id int not null auto_increment,
nome varchar(50) not null,
descricao varchar(500) not null,
local varchar(100) not null,
horario_inicio varchar(25)not null,
horario_termino varchar(25)not null,
valor_entrada double,
id_estabelecimento int not null,
primary key (id),
foreign key(id_estabelecimento)references Estabelecimento(id)
);

create table Avaliacao(
id int not null auto_increment,
nota int,
comentario varchar(50),
primary key(id)
);

create table Usuario(
cpf int(11)not null,
nome varchar(50)not null,
idade int,
email varchar(50)not null,
sexo varchar(10),
primary key(cpf)
);

create table Usuario_Evento(
id_Usuario int(11) not null,
id_Evento int not null,
foreign key(id_Usuario)references Usuario(cpf),
foreign key(id_Evento)references Evento(id)
);

create table Evento_Avaliacao(
id_Evento int not null,
id_Avaliacao int not null,
foreign key(id_Evento)references Evento(id),
foreign key(id_Avaliacao)references Avaliacao(id)
);