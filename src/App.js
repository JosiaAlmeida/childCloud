import logo from "./logo.svg";
import "./App.css";

import { Menu } from "./components/menu";
import { Banner } from "./components/banner";
import { CardIcones } from "./components/CardIcones";
import { CardImage } from "./components/CardImage";
import { PessoasDizem } from "./components/pessoasDizem";
import { Lapis } from "./components/lapis";

import calendar from "./assets/calendar-month-outline.svg";
import message from "./assets/message.svg";
import newsPaper from "./assets/newspaper.svg";
import formatList from "./assets/format-list-bulleted-rounded.svg";
import grid from "./assets/grid-3x3-gap.svg";
import people_circle from "./assets/people-circle.svg";
import people from "./assets/people-add.svg";
import boxCheck from "./assets/text-box-check-outline.svg";
import pig from "./assets/piggy-bank.svg";
import documentAdd from "./assets/document-add-line-duotone.svg";
import dotGrid from "./assets/dot-grid-line.svg";
import tabPlus from "./assets/tab-plus.svg";

import imageTwoChild from "./assets/bg-showcase-1.jpg";
import imageTwoChild2 from "./assets/bg-showcase-2.jpg";
import imageTwoChild3 from "./assets/bg-showcase-3.jpg";

import pessoas1 from "./assets/testimonials-1.jpg";
import pessoas2 from "./assets/testimonials-3.jpg";
import pessoas3 from "./assets/testimonials-4.jpg";

function App() {
  const IconesText = [
    {
      img: calendar,
      title: "Calendário",
      text: "Veja eventos por turma ou criança, incluindo murais extras, horários, temas e muito mais!",
    },
    {
      img: message,
      title: "Mensagens",
      text: "Envie uma mensagem para todos os pais com um clique em um botão. Mensagens privadas também são uma opção!",
    },
    {
      img: newsPaper,
      title: "Notícia",
      text: "As notícias da escola e da turma podem ser compartilhadas com os pais!",
    },
    {
      img: formatList,
      title: "Lembretes",
      text: "Defina lembretes diários ou semanais para uma classe ou criança!",
    },
    {
      img: grid,
      title: "Galeria",
      text: "Carregue eventos escolares. Veja os anuários das aulas online!",
    },
    {
      img: people_circle,
      title: "Contactos",
      text: "Acesso a todos os detalhes de contato do professor, dos pais!",
    },
    {
      img: people,
      title: "Assiduidade",
      text: "Veja a frequência individual das crianças por período!",
    },
    {
      img: boxCheck,
      title: "Dever de casa",
      text: "Carregue a lição de casa para os pais verem e aprovarem uma vez feito!",
    },
    {
      img: pig,
      title: "Faturamento",
      text: "Lembretes de cobrança on-line e pagamento de mensalidades escolares sem papel para os pais!",
    },
    {
      img: documentAdd,
      title: "Relatórios",
      text: "Importe automaticamente incidentes, atendimento, conquistas, detenção, progresso, resultados de testes!",
    },
    {
      img: dotGrid,
      title: "Atividades",
      text: "Registre diariamente as conquistas, progressos, incidentes, anotações, ações de cada criança!",
    },
    {
      img: tabPlus,
      title: "Quadro de avisos",
      text: "Instantâneo de notícias, lembretes, mensagens e eventos! Configure alertas de notificação do quadro de avisos!",
    },
  ];
  const Card_Image = [
    {
      img: imageTwoChild,
      title: "Acompanhar o progresso do seu filho do Grau N ao 12.º Ano:",
      description:
        "O ChildCloud é um sistema de gerenciamento de software tudo-em-um, fácil de usar, que rastreia o progresso de uma criança, relata incidentes, captura check-ins on-line, fotos, mensagens, calendário e muito mais.",
    },
    {
      img: imageTwoChild2,
      title: "Acompanhar o progresso do seu filho do Grau N ao 12.º Ano:",
      description:
        "O ChildCloud é um sistema de gerenciamento de software tudo-em-um, fácil de usar, que rastreia o progresso de uma criança, relata incidentes, captura check-ins on-line, fotos, mensagens, calendário e muito mais.",
    },
    {
      img: imageTwoChild3,
      title: "Acompanhar o progresso do seu filho do Grau N ao 12.º Ano:",
      description:
        "O ChildCloud é um sistema de gerenciamento de software tudo-em-um, fácil de usar, que rastreia o progresso de uma criança, relata incidentes, captura check-ins on-line, fotos, mensagens, calendário e muito mais.",
    },
  ];
  const pessoasDizem = [
    {
      img: pessoas1,
      title: "Brett Pearson - Diretor da Escola Preparatória Forres",
      description:
        '"O ChildCloud é simples na aparência, fácil de usar e tem uma infinidade de recursos. Eu recomendaria muito o sistema."',
    },
    {
      img: pessoas2,
      title: "Shelley Bergman - Diretora Pequena Gente Montessori",
      description:
        '"Estou confiante em dizer que posso recomendar o ChildCloud. Ele fornece uma solução para pais ocupados acompanharem a vida escolar de seus filhos."',
    },
    {
      img: pessoas3,
      title: "Mandy Arora - Princípio Pequenas Estrelas Montessori",
      description:
        '"Nos divertimos muito com a nossa Sala de Aula Virtual. Obrigado ChildCloud por todo o seu apoio. "',
    },
  ];
  return (
    <div className="App">
      <Menu />
      <Banner />
      <div className="container row">
        {IconesText.map((item) => (
          <>
            <CardIcones {...item} />
          </>
        ))}
      </div>
      <div>
        {Card_Image.map((item) => (
          <>
            <CardImage {...item} />
          </>
        ))}
      </div>
      <PessoasDizem data={pessoasDizem} />
      <Lapis />
    </div>
  );
}

export default App;
