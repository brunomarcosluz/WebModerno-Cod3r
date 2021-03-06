// estudo sobre a estrutura de controle Switch em Javascript

/* O Switch assim como as outras estruturas vistas até agora tais como
If Else e Else if são estruturas de controle com o única intenção de múltiplas decisões
funciona como se estivessemos dando uma inteligência para o nosso código .

Lembre-se! O switch diferente do If ele não retorna falso ou verdadeiro
ele retorna um tipo seja essa string, int ou float.

veja como o switch funciona abaixo com a função imprimirResultado: */

const imprimirResultado = function (nota) {
    switch (Math.floor(nota)){
        case 10: // está vazio então o switch procurará no case 9
        case 9:
            console.log('Parabéns!');
            console.log('você está no Quadro de Honra!');
            break;
        case 8: case 7:
            console.log('Aprovado');
            console.log('A melhora é contínua!');
            break;
        case 6: case 5: case 4:
            console.log('Recuperação');
            console.log('Ainda há tempo de melhorar!');
            break;
        case 3: case 2: case 1: case 0: // podemos colocar vários cases em uma única linha!
            console.log('Reprovado');
            console.log('Busque novos métodos e se dedique!');
            break;
        default:
            console.log('nota inválida');
            console.log('o sistema só aceita números inteiros');
            break; // aqui o break não é tão necessário podemos dispensá-lo
    }
}

imprimirResultado(10)
imprimirResultado(8)
imprimirResultado(4)
imprimirResultado(0)

/* O Break é a palavra reservada usada para sair do bloco caso a condição seja a 
desejada, caso não tenha o break o switch irá executar todos os blocos de código */