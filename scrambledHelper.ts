import { CardData, ScrambledWord, CardAnswerData } from './types.ts';
import { translateSpanishWord } from './dictionary.ts';
import { SHORT_ANSWERS } from './shortAnswers.ts';

/**
 * Deterministically shuffles an array based on a numeric seed.
 * Guarantees that for length > 1, the returned order is never identical to the input order.
 */
function deterministicShuffle<T>(items: T[], seed: number): T[] {
  if (items.length <= 1) return [...items];

  const copy = [...items];
  let s = (seed * 1103515245 + 12345) & 0x7fffffff;

  for (let i = copy.length - 1; i > 0; i--) {
    s = (s * 1103515245 + 12345) & 0x7fffffff;
    const j = Math.floor((s / 0x7fffffff) * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  // Ensure it is not in the exact original order
  let isIdentical = true;
  for (let i = 0; i < items.length; i++) {
    if (copy[i] !== items[i]) {
      isIdentical = false;
      break;
    }
  }

  if (isIdentical && copy.length > 1) {
    // Swap first and last elements to ensure scrambled presentation
    [copy[0], copy[copy.length - 1]] = [copy[copy.length - 1], copy[0]];
  }

  return copy;
}

/**
 * Extracts the short target answer sentence (strictly 2–5 words) and generates
 * scrambled word chips with individual Armenian translations.
 */
export function getCardAnswerData(card: CardData): CardAnswerData {
  const short = SHORT_ANSWERS[card.id];
  const sentenceEs = card.modelAnswer?.sentenceEs || short?.es || card.options[0].es;
  const sentenceArm = card.modelAnswer?.sentenceArm || short?.arm || card.options[0].arm;

  // Split sentence into words, stripping punctuation marks
  const rawWords = sentenceEs
    .replace(/[¡!¿?,.:;()"“”]/g, " ")
    .split(/\s+/)
    .map(w => w.trim())
    .filter(Boolean);

  const wordObjects: ScrambledWord[] = rawWords.map((word, idx) => ({
    id: `${card.id}-${idx}-${word.toLowerCase()}`,
    word,
    arm: translateSpanishWord(word) || word
  }));

  const scrambledWords = deterministicShuffle(wordObjects, card.id);

  return {
    sentenceEs,
    sentenceArm,
    scrambledWords
  };
}
