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
    __RuntimeFunctionDeclaration  {}

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