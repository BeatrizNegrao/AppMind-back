// A entidade é o espelho da tabela usuarios no banco de dados  
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
// Aqui colocamos as informações de atributos da table usuarios
@Entity('usuarios')
class usuarios {
    @PrimaryGeneratedColumn('increment') // indica que temos uma coluna com chave primaria como id do tipo inteiro
    id_usuarios: number;

    @Column ('varchar', { length: 100, nullable: false }) // indica que temos uma coluna de nome do tipo varchar, amarzenamento de 100 e não pode ser null 
    nome: string;

    @Column ('varchar', { length: 100, nullable: false })  // indica que temos uma coluna de email do tipo varchar, amarzenamento de 100 e não pode ser null 
    email: string;

    @Column ('varchar', { length: 200, nullable:false })  // indica que temos uma coluna de senha do tipo varchar,  amarzenamento de 200 e não pode ser null 
    senha: string;
}

export default usuarios;

