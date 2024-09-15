import { Funcionario } from './Funcionario.js'


export class Operador extends Funcionario{
    constructor(nome, salario){
        super(nome),
        this.salario = salario
    }
    getSalario(){
        return this.salario
    }
}