import { KeywordToken, SymbolToken, WhitespaceToken, __StaticToken } from './GrammarToken.ts';

export const {
    validStaticTokens,
    spaceToken,
    horizontalTabToken,
    lineFeedToken,
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
        validWhitespaceTokens as [WhitespaceToken, WhitespaceToken, WhitespaceToken];
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
    return {
        validStaticTokens,
        spaceToken,
        horizontalTabToken,
        lineFeedToken,
    };
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
