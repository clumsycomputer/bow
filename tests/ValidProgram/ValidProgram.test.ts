import * as Path from 'https://deno.land/std@0.224.0/path/mod.ts';

const mainProgramFile = Path.join(import.meta.dirname!, './source/main.bow');
const mainProgramSource = Deno.readFileSync(mainProgramFile);
console.log(mainProgramSource);

enum TokenKind {
  // keywords
  FullKeyword,
  RootKeyword,
  MediumKeyword,
  FinalKeyword,
  ReturnKeyword,
  StringKeyword,
  NumberKeyword,
  TrueKeyword,
  FalseKeyword,
  NullKeyword,
  IfKeyword,
  ElseKeyword,
  ForKeyword,
  WhileKeyword,
  ConstKeyword,
  LetKeyword,
  TryKeyword,
  CatchKeyword,
  // symbols
  OpenParenthesisSymbol,
  CloseParenthesisSymbol,
  OpenBracketSymbol,
  CloseBracketSymbol,
  OpenCurlyBraceSymbol,
  CloseCurlyBraceSymbol,
  OpenAngleBracketSymbol,
  CloseAngleBracketSymbol,
  ColonSymbol,
  CommaSymbol,
  PlusSymbol,
  MinusSymbol,
  AsteriskSymbol,
  SlashSymbol,
  PercentSymbol,
  DotSymbol,
  EqualSymbol,
  // // composite symbols
  DoubleColonSymbol,
  EqualEqualSymbol,
  OpenAngleBracketEqualSymbol,
  CloseAngleBracketEqualSymbol,
  AmpersandAmpersandSymbol,
  BarBarSymbol,
  EqualCloseAngleBracketSymbol,
  // literal
  StringLiteral,
  NumberLiteral,
  // identifier
  Identifier,
}

/**
 * Lexical Analysis (Lexing):
 *
 * Tokenization:
 * - Input: The TypeScript compiler takes the source code as input, which is typically a string of characters.
 * - Process: Lexical analysis involves reading this input character by character and grouping them into tokens based on predefined lexical rules.
 * - Tokens: Tokens represent the smallest units of meaningful code, such as keywords (if, for, return), identifiers (variable names), literals (numbers, strings), operators (+, -, =, etc.), and punctuation marks (braces, commas, semicolons).
 *
 * Lexer (Tokenizer):
 * - Implementation: TypeScript's lexer (or tokenizer) is responsible for implementing the rules that recognize and classify characters into tokens.
 * - Stateful Parsing: The lexer maintains internal state to differentiate between different types of tokens and sequences, such as distinguishing between an identifier and a keyword like function.
 *
 * Token Stream:
 * - Output: As the lexer processes the input, it generates a stream of tokens. Each token contains information such as its type (keyword, identifier, operator, etc.) and its position in the source code (line number, column number).
 * - Handling Comments and Whitespace: The lexer typically ignores whitespace and comments during tokenization, as they are not essential for further processing by the parser.
 *
 * Syntax Analysis (Parsing):
 *
 * Parsing Tokens:
 * - Input: The parser receives the stream of tokens produced by the lexer as input.
 * - Purpose: Syntax analysis involves constructing a hierarchical structure known as an Abstract Syntax Tree (AST) from these tokens. The AST represents the syntactic structure and relationships between elements of the source code.
 *
 * Grammar Rules:
 * - Grammar Definition: TypeScript's parser adheres to a formal grammar that defines how tokens can be combined to form valid TypeScript expressions, statements, and declarations.
 * - Recursive Descent Parsing: TypeScript uses a recursive descent parser, where each grammar rule corresponds to a function that recursively calls other functions to match tokens according to the grammar rules.
 *
 * Building the AST:
 * - Node Creation: During parsing, the parser creates nodes in the AST for each syntactic element of the TypeScript code, such as expressions, statements, functions, classes, etc.
 * - Tree Structure: The AST reflects the nested structure of the source code, with nodes representing higher-level constructs that encompass their respective children nodes (sub-expressions, sub-statements, etc.).
 *
 * Error Handling:
 * - Syntax Errors: If the parser encounters tokens that do not match the expected grammar rules, it raises syntax errors. These errors indicate where the source code violates the language syntax.
 * - Recovery: Modern parsers often include mechanisms to recover from syntax errors gracefully, allowing the compiler to continue parsing and potentially identify additional errors in subsequent code sections.
 */
