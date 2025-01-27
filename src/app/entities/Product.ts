// src\app\entities\Product.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('produtos') // Nome da tabela no banco permanece em minúsculas
class produtos {
    @PrimaryGeneratedColumn('increment')
    id_produto: number;

    @Column('varchar', { length: 100, nullable: false })
    nome: string;

    @Column('text')
    descricao: string;

    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
    valor: number;

    @Column({ type: 'int', nullable: false })
    quantidade_atual: number;
}

export default produtos;
