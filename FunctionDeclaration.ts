 /**
  * @example
  * ##### addition
  * ```
  * full add(aaa: number, bbb: number) => number {
  *   return aaa + bbb
  * }
  * 
  * add(aaa: 2, bbb: 4)
  * ```
  * 
  * @example
  * ##### addition _(only parameters)_
  * ```
  * root add[aaa: number, bbb: number] => number (
  *   return aaa + bbb 
  * )
  * 
  * medium addTwo ::add[aaa: 2]
  * 
  * final addTwoPlusFour ::addTwo [bbb: 4]
  * 
  * addTwoPlusFour()
  * ```
  * 
  * @example
  * ##### addition _(parameters & arguments)_
  * ```
  * root add[aaa: number](bbb: number) => number (
  *   return aaa + bbb
  * )
  * 
  * final addTwo ::add [aaa: 2]
  * 
  * addTwo(4)
  * ```
  */
type FunctionDeclaration = FullFunctionDeclaration | RootFunctionDeclaration | MediumFunctionDeclaration | FinalFunctionDeclaration


interface FinalFunctionDeclaration extends 
    __BasedFunctionDeclaration<'final'> {}
 
interface MediumFunctionDeclaration extends 
    __BasedFunctionDeclaration<'medium'>,
    __GenericFunctionDeclaration, 
    __ParameterFunctionDeclaration {}

interface __BasedFunctionDeclaration<ThisDeclarationKind> extends 
    __FunctionDeclaration<ThisDeclarationKind> {
    declarationBaseName: unknown;
    declarationBaseParameters: unknown;
}

interface RootFunctionDeclaration extends 
    __FunctionDeclaration<'root'>, 
    __GenericFunctionDeclaration, 
    __ParameterFunctionDeclaration,
    __RuntimeFunctionDeclaration {}

interface FullFunctionDeclaration extends 
    __FunctionDeclaration<'full'>, 
    __RuntimeFunctionDeclaration,
    __GenericFunctionDeclaration {}

interface __FunctionDeclaration<ThisDeclarationKind> {
    declarationKind: ThisDeclarationKind;
    declarationName: string;
}

interface __RuntimeFunctionDeclaration {
    declarationArguments: unknown;
    declarationResult: unknown;
    declarationRuntimeLogic: unknown;
}

interface __GenericFunctionDeclaration {
    declarationGenerics: unknown;
}

interface __ParameterFunctionDeclaration {
    declarationParameters: unknown;
}