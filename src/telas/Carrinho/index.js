import React from "react";
import { FlatList } from 'react-native';
import Item from "./item";
import StatusCarrinho from "../../componentes/StatusCarrinho";


const servicos = [
    {
        id: 1,
        nome: "Banho",
        preco: 79.9,
        descricao: "Não de banho no se gato! Ma se necessario nos damos.",
        quantidade: 1
    },
    {
        id: 2,
        nome: "Vacina V4",
        preco: 89.9,
        descricao: "Uma dose da vacina V4, Seu gato precisa de duas.",
        quantidade: 2
    },
    {
        id: 3,
        nome: "Vacina Antirrábica",
        preco: 99.9,
        descricao: "Uma dose da vacina antirrábica. Seu gato precisa de 1 por ano.",
        quantidade: 1
    }
];


export default function Carrinho() {
    const total = servicos.reduce((soma, {preco, quantidade}) => soma + (preco * quantidade), 0);

    return <>
    <StatusCarrinho total={total}/>
        <FlatList
            data={servicos}
            renderItem={({ item }) => <Item {...item} />}
            keyExtractor={({ id }) => String(id)}
        />
    </>
}