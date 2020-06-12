import Knex from 'knex';

export async function seed(knex: Knex){
    await knex('items').insert([
        { tittle: 'Lâmpada', image: 'lampadas.svg' },
        { tittle: 'Pilhas e Baterias', image: 'bateria.svg' },
        { tittle: 'Papéis e Papelão', image: 'papeis-papelao.svg' },
        { tittle: 'Resíduoas Eletrônicos', image: 'eletronicos.svg' },
        { tittle: 'Resíduos Orgânicos', image: 'organicos.svg' },
        { tittle: 'Óleo de Cozinha', image: 'oleo.svg' },
    ]);
};