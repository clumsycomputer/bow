export type GrammarToken = StaticToken | LiteralToken | IdentifierToken;

export type StaticToken = WhitespaceToken | KeywordToken | SymbolToken;

export interface WhitespaceToken
  extends __StaticToken<GrammarTokenKind.whitespace> {}

export interface KeywordToken extends __StaticToken<GrammarTokenKind.keyword> {}

export interface SymbolToken extends __StaticToken<GrammarTokenKind.symbol> {}

export interface __StaticToken<ThisTokenKind>
  extends __GrammarToken<ThisTokenKind> {
  tokenText: string;
  tokenBytes: Uint8Array;
}

export type LiteralToken = StringLiteralToken | NumberLiteralToken;

export interface StringLiteralToken
  extends __LiteralToken<GrammarTokenKind.stringLiteral> {}

export interface NumberLiteralToken
  extends __LiteralToken<GrammarTokenKind.numberLiteral> {}

interface __LiteralToken<ThisTokenKind> extends __GrammarToken<ThisTokenKind> {}

export interface IdentifierToken
  extends __GrammarToken<GrammarTokenKind.identifier> {}

interface __GrammarToken<ThisTokenKind> {
  tokenKind: ThisTokenKind;
  tokenId: number;
  tokenTerminatorMap: TokenTerminatorMap;
}

interface TokenTerminatorMap {
  [sourceByte: number]: TokenTerminatorMap | null;
}

export enum GrammarTokenKind {
  whitespace,
  keyword,
  symbol,
  stringLiteral,
  numberLiteral,
  identifier,
}
