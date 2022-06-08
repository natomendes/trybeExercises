import { Component } from "react";
import './Content.css'
const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

export default class Content extends Component {
  contentList = ({ conteudo, bloco, status }, index) => {
    return (
      <div className="content" key={index}>
        <p>O contéudo é: {conteudo}</p>
        <p>Status: {status}</p>
        <p>Bloco: {bloco}</p>
      </div>
    )
  }

  render() {
    return <section className="contents">
      {conteudos.map((content, index) => this.contentList(content, index))}
    </section>
  }
}