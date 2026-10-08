create database saep_pediatria;
use saep_pediatria;

create table responsaveis (
	id int primary key not null auto_increment,
    nome varchar(150) not null,
    telefone char(12) not null unique,
    cpf char(11) not null unique
);

create table filhos (
	id int primary key not null auto_increment,
    nome varchar(150) not null,
    data_nascimento date not null,
    id_responsavel int,
    constraint fk_responsavel_id foreign key (id_responsavel) references responsaveis(id) on delete cascade
);

create table agendamentos (
	id int primary key not null auto_increment,
    data_consulta date not null,
    motivo varchar(150) not null,
    id_filho int,
    constraint fk_filho_id foreign key (id_filho) references filhos(id) on delete cascade
);

insert into responsaveis (nome, telefone, cpf) values
('Carlos Eduardo da Silva', '4798762-1627', '53852701487'),
('Ana Maria Braga', '3496781-0986', '18402418798'),
('Gabrielli Lima', '1298501-0173', '69381037809');

insert into filhos (nome, data_nascimento, id_responsavel) values
('Luiz Moraes da Silva', '2003-08-23', 1),
('Gustavo Braga', '2005-06-29', 2),
('Gisele Lima', '2004-10-10', 3);

insert into agendamentos (data_consulta, motivo, id_filho) values
('2026-04-18', 'Infecção no joelho', 1),
('2026-05-01', 'Machucado no braço', 2),
('2026-06-05', 'Infecção no ouvido', 3);