create database BrejaFinder;
use BrejaFinder;
/*drop database BrejaFinder;*/

create table Estabelecimento(
id_estabelecimento int not null auto_increment,
nome_estabelecimento varchar(25)not null,
cnpj_estabelecimento int not null,
numero_estabelecimento varchar(14)not null,
email_estabelecimento varchar(50)not null,
local_estabelecimento varchar(100)not null,
primary key(id_estabelecimento)
);

create table Evento(
id_evento int not null auto_increment,
nome_evento varchar(50) not null,
descricao_evento varchar(500) not null,
local_evento varchar(100) not null,
horario_inicio varchar(25)not null,
horario_termino varchar(25)not null,
valor_entrada double,

fotos_evento varchar(100) not null,
id_estabelecimento int not null,
primary key (id_evento),
foreign key(id_estabelecimento)references Estabelecimento(id_estabelecimento)

);

create table Avaliacao(
id_avaliacao int not null auto_increment,
nota_avaliacao int,
comentario_avaliacao varchar(50),
primary key(id_avaliacao)
);
create table Usuario(
cpf int(11)not null,
nome_usuario varchar(50)not null,
idade int,
email varchar(50)not null,
sexo varchar(10),
foto_usuario varchar(100),
primary key(cpf)
);

create table Usuario_Evento(
id_Usuario int(11) not null,
id_Evento int not null,
foreign key(id_Usuario)references Usuario(cpf),
foreign key(id_Evento)references Evento(id_evento)
);

create table Evento_Avaliacao(
id_Evento int not null,
id_Avaliacao int not null,
foreign key(id_Evento)references Evento(id_evento),
foreign key(id_Avaliacao)references Avaliacao(id_avaliacao)
);