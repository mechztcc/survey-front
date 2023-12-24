import { Injectable } from '@angular/core';
import { IAdvantageCardInformation } from '../types/advantage.interface';

@Injectable({
  providedIn: 'root',
})
export class AdvantageListStepsService {
  selected: number = 0;
  advantages: IAdvantageCardInformation[] = [
    {
      image: 'animated2.gif',
      title: 'Crie Enquetes em Instantes',
      text: `Com nossa interface intuitiva e simples, você pode criar enquetes
    personalizadas em questão de minutos. Escolha entre uma variedade de
    opções de perguntas, adicione imagens ou vídeos e compartilhe seu
    questionário exclusivo com o mundo em um piscar de olhos.`,
      alignment: 'left',
    },
    {
      image: 'animated1.gif',
      title: 'Explore Resultados Detalhados',
      text: `Acompanhe as respostas conforme elas chegam! Visualize dados claros e concisos em tempo real. Gráficos interativos ajudarão você a entender melhor as tendências e opiniões. Além disso, nossas ferramentas analíticas avançadas oferecem uma visão detalhada para ajudá-lo a tirar conclusões precisas.`,
      alignment: 'left',
    },
    {
      image: 'animated3.gif',
      title: 'Compartilhe e Engaje',
      text: `Compartilhe suas enquetes facilmente em mídias sociais ou convide pessoas diretamente por e-mail. O poder está em suas mãos para alcançar um grande público e coletar uma gama diversificada de opiniões.`,
      alignment: 'left',
    },
  ];
  
  constructor() {}
}
