import {
  __StaticToken,
  KeywordToken,
  StaticToken,
  SymbolToken,
  WhitespaceToken,
} from './GrammarToken.ts';

export const {
  spaceToken,
  horizontalTabToken,
  lineFeedToken,
  staticTokenByteMap,
  initialIdentifierTokenByteMap,
  secondaryIdentifierTokenByteMap,
} = initializeGrammarTokens();

function initializeGrammarTokens() {
  const tokenTextEncoder = new TextEncoder();
  const validWhitespaceTokens = [
    ' ',
    '\t',
    '\n',
  ].map((someWhitespaceTokenText, whitespaceTokenIndex) =>
    getWhitespaceToken({
      tokenTextEncoder,
      tokenId: whitespaceTokenIndex,
      tokenText: someWhitespaceTokenText,
    })
  );
  const [spaceToken, horizontalTabToken, lineFeedToken] =
    validWhitespaceTokens as [
      WhitespaceToken,
      WhitespaceToken,
      WhitespaceToken,
    ];
  const validKeywordTokens = [
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
  ].map((someKeywordTokenText, keywordTokenIndex) =>
    getKeywordToken({
      tokenTextEncoder,
      tokenId: keywordTokenIndex + validWhitespaceTokens.length,
      tokenText: someKeywordTokenText,
    })
  );
  const validSymbolTokens = [
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
  ].map((someSymbolTokenText, symbolTokenIndex) =>
    getSymbolToken({
      tokenTextEncoder,
      tokenId: symbolTokenIndex + validWhitespaceTokens.length +
        validKeywordTokens.length,
      tokenText: someSymbolTokenText,
    })
  );
  const validStaticTokens = [
    ...validWhitespaceTokens,
    ...validKeywordTokens,
    ...validSymbolTokens,
  ];
  const staticTokenByteMap = validStaticTokens.reduce<StaticTokenByteMap>(
    (staticTokenMapResult, someStaticToken) => {
      updateStaticTokenByteMapResult({
        validWhitespaceTokens,
        targetStaticToken: someStaticToken,
        remainingStaticTokenBytes: someStaticToken.tokenBytes,
        focusedStaticTokenMapResult: staticTokenMapResult,
      });
      return staticTokenMapResult;
    },
    {},
  );
  const initialValidIdentifierCharacters = [
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
  const initialIdentifierTokenByteMap = initialValidIdentifierCharacters.reduce<
    Record<number, true>
  >(
    (
      initialIdentifierTokenByteMapResult,
      someInitialIdentifierTokenCharacter,
    ) => {
      initialIdentifierTokenByteMapResult[
        tokenTextEncoder.encode(someInitialIdentifierTokenCharacter)[0]!
      ] = true;
      return initialIdentifierTokenByteMapResult;
    },
    {},
  );
  const secondaryValidIdentifierCharacters = [
    ...initialValidIdentifierCharacters,
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
  const secondaryIdentifierTokenByteMap = secondaryValidIdentifierCharacters
    .reduce<Record<number, true>>(
      (
        secondaryIdentifierTokenByteMapResult,
        someSecondaryIdentifierTokenCharacter,
      ) => {
        secondaryIdentifierTokenByteMapResult[
          tokenTextEncoder.encode(someSecondaryIdentifierTokenCharacter)[0]!
        ] = true;
        return secondaryIdentifierTokenByteMapResult;
      },
      {},
    );
  return {
    spaceToken,
    horizontalTabToken,
    lineFeedToken,
    staticTokenByteMap,
    initialIdentifierTokenByteMap,
    secondaryIdentifierTokenByteMap,
  };
}

interface UpdateStaticTokenByteMapResultApi {
  validWhitespaceTokens: Array<WhitespaceToken>;
  focusedStaticTokenMapResult: StaticTokenByteMap;
  remainingStaticTokenBytes: Uint8Array;
  targetStaticToken: StaticToken;
}

function updateStaticTokenByteMapResult(
  api: UpdateStaticTokenByteMapResultApi,
) {
  const {
    remainingStaticTokenBytes,
    focusedStaticTokenMapResult,
    validWhitespaceTokens,
    targetStaticToken,
  } = api;
  const currentTokenByte = remainingStaticTokenBytes[0];
  if (currentTokenByte) {
    const nextFocusedStaticTokenMapResult =
      (focusedStaticTokenMapResult[currentTokenByte] ??
        {}) as StaticTokenByteMap;
    focusedStaticTokenMapResult[currentTokenByte] =
      nextFocusedStaticTokenMapResult;
    updateStaticTokenByteMapResult({
      validWhitespaceTokens,
      targetStaticToken,
      remainingStaticTokenBytes: remainingStaticTokenBytes.slice(1),
      focusedStaticTokenMapResult: nextFocusedStaticTokenMapResult,
    });
  } else {
    validWhitespaceTokens.forEach((someWhitespaceToken) => {
      focusedStaticTokenMapResult[someWhitespaceToken.tokenBytes[0]!] =
        targetStaticToken;
    });
  }
}

export interface StaticTokenByteMap {
  [tokenByte: number]: StaticTokenByteMap | StaticToken;
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
