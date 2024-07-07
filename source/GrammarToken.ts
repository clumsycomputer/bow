export interface WhitespaceToken extends __StaticToken<'whitespace'> {}

export interface KeywordToken extends __StaticToken<'keyword'> {}

export interface SymbolToken extends __StaticToken<'symbol'> {}

export interface __StaticToken<ThisTokenKind> extends __GrammarToken<ThisTokenKind> {
  tokenText: string;
  tokenBytes: Uint8Array;
}

export interface StringLiteralToken extends __LiteralToken<'stringLiteral'> {}

export interface NumberLiteralToken extends __LiteralToken<'numberLiteral'> {}

interface __LiteralToken<ThisTokenKind> extends __GrammarToken<ThisTokenKind> {}

export interface IdentifierToken extends __GrammarToken<'identifier'> {}

interface __GrammarToken<ThisTokenKind> {
  tokenKind: ThisTokenKind;
  tokenId: number;
}