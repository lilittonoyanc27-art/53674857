export type GameMode = 'solo' | 'duo';

export type Topic = 'restaurante' | 'supermercado' | 'mezclado';

export type Player = 'Gayane' | 'Razmik';

export interface CardOption {
  es: string;
  arm: string;
}

export interface ScrambledWord {
  id: string;
  word: string;
  arm: string;
}

export interface CardAnswerData {
  sentenceEs: string;
  sentenceArm: string;
  scrambledWords: ScrambledWord[];
}

export interface CardData {
  id: number;
  level?: 'A1' | 'A2';
  topic: 'restaurante' | 'supermercado';
  titleEs: string;
  titleArm: string;
  situation: string;
  situationArm: string;
  options: [CardOption, CardOption, CardOption, CardOption];
  modelAnswer?: {
    sentenceEs: string;
    sentenceArm: string;
  };
}

export interface PlayerStats {
  Gayane: number;
  Razmik: number;
}
