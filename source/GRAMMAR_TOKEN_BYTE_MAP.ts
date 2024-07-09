import {
  __StaticToken,
  GrammarTokenKind,
  KeywordToken,
  SymbolToken,
  WhitespaceToken,
} from './GrammarToken.ts';

const VALID_WHITESPACE_CHARACTERS = [
  ' ',
  '\t',
  '\n',
];

const VALID_KEYWORDS = [
  'full',
  'root',
  'medium',
  'final',
  'return',
  'if',
  'else',
  'for',
  'while',
  'const',
  'let',
  'try',
  'catch',
  'string',
  'number',
  'true',
  'false',
  'null',
];

const VALID_SYMBOLS = [
  '<',
  '>',
  '[',
  ']',
  '(',
  ')',
  '{',
  '}',
  ':',
  ',',
  '=',
  '+',
  '-',
  '*',
  '/',
  '%',
  '&&',
  '||',
  '==',
  '>=',
  '<=',
  '=>',
];

const VALID_INITIAL_IDENTIFIER_CHARACTERS = [
  '_',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

const VALID_SECONDARY_IDENTIFIER_CHARACTERS = [
  ...VALID_INITIAL_IDENTIFIER_CHARACTERS,
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
];

export const { GRAMMAR_TOKEN_BYTE_MAP } = makeGrammarTokenByteMap();

function makeGrammarTokenByteMap() {
  const tokenTextEncoder = new TextEncoder();
  const validWhitespaceTokens = VALID_WHITESPACE_CHARACTERS.map((
    someWhitespaceTokenText,
    whitespaceTokenIndex,
  ) =>
    getWhitespaceToken({
      tokenTextEncoder,
      tokenId: whitespaceTokenIndex,
      tokenText: someWhitespaceTokenText,
    })
  );
  const validKeywordTokens = VALID_KEYWORDS.map((
    someKeywordTokenText,
    keywordTokenIndex,
  ) =>
    getKeywordToken({
      tokenTextEncoder,
      tokenId: keywordTokenIndex + validWhitespaceTokens.length,
      tokenText: someKeywordTokenText,
    })
  );
  const validSymbolTokens = VALID_SYMBOLS.map((
    someSymbolTokenText,
    symbolTokenIndex,
  ) =>
    getSymbolToken({
      tokenTextEncoder,
      tokenId: symbolTokenIndex + validWhitespaceTokens.length +
        validKeywordTokens.length,
      tokenText: someSymbolTokenText,
    })
  );
  const grammarTokenByteMapResult: GrammarTokenByteMap = {};
  for (const someValidKeywordToken of validKeywordTokens) {
  }
  return {
    GRAMMAR_TOKEN_BYTE_MAP: grammarTokenByteMapResult,
  };
}

export interface GrammarTokenByteMap {
  [sourceByte: number]: GrammarTokenByteMap | GrammarTokenKind;
}

interface GetWhitespaceTokenApi extends
  Pick<
    __GetStaticTokenApi<unknown>,
    'tokenId' | 'tokenText' | 'tokenTextEncoder'
  > {}

function getWhitespaceToken(api: GetWhitespaceTokenApi): WhitespaceToken {
  const { tokenId, tokenText, tokenTextEncoder } = api;
  return __getStaticToken({
    __tokenKind: 'whitespace',
    tokenId,
    tokenText,
    tokenTextEncoder,
  });
}

interface GetKeywordTokenApi extends
  Pick<
    __GetStaticTokenApi<unknown>,
    'tokenId' | 'tokenText' | 'tokenTextEncoder'
  > {}

function getKeywordToken(api: GetKeywordTokenApi): KeywordToken {
  const { tokenId, tokenText, tokenTextEncoder } = api;
  return __getStaticToken({
    __tokenKind: 'keyword',
    tokenId,
    tokenText,
    tokenTextEncoder,
  });
}

interface GetSymbolTokenApi extends
  Pick<
    __GetStaticTokenApi<unknown>,
    'tokenId' | 'tokenText' | 'tokenTextEncoder'
  > {}

function getSymbolToken(api: GetSymbolTokenApi): SymbolToken {
  const { tokenId, tokenText, tokenTextEncoder } = api;
  return __getStaticToken({
    __tokenKind: 'symbol',
    tokenId,
    tokenText,
    tokenTextEncoder,
  });
}

interface __GetStaticTokenApi<ThisTokenKind>
  extends Pick<__StaticToken<ThisTokenKind>, 'tokenId' | 'tokenText'> {
  __tokenKind: ThisTokenKind;
  tokenTextEncoder: TextEncoder;
}

function __getStaticToken<ThisTokenKind>(
  api: __GetStaticTokenApi<ThisTokenKind>,
) {
  const { __tokenKind, tokenId, tokenText, tokenTextEncoder } = api;
  return {
    tokenKind: __tokenKind,
    tokenId,
    tokenText,
    tokenBytes: tokenTextEncoder.encode(tokenText),
  };
}
