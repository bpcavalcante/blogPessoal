import { Tema } from './Tema';

export class Postagem{
    public id: number;
    public titulo: string;
    public texto: string;
    public postagem: string;
    public data: Date;
    public Tema: Tema;
}