type FunctionDeclaration =
  | FullFunctionDeclaration
  | RootFunctionDeclaration
  | MediumFunctionDeclaration
  | FinalFunctionDeclaration

interface FinalFunctionDeclaration extends __BaseFunctionDeclaration<'final'> {}

interface MediumFunctionDeclaration
  extends
    __BaseFunctionDeclaration<'medium'>,
    __GenericFunctionDeclaration,
    __BuildFunctionDeclaration {}

interface __BaseFunctionDeclaration<ThisDeclarationKind>
  extends __FunctionDeclaration<ThisDeclarationKind> {
  declarationBaseName: string
  declarationBaseGenericInputs: unknown
  declarationBaseBuildInputs: unknown
}

interface RootFunctionDeclaration
  extends
    __FunctionDeclaration<'root'>,
    __GenericFunctionDeclaration,
    __BuildFunctionDeclaration,
    __RunFunctionDeclaration {}

interface FullFunctionDeclaration
  extends
    __FunctionDeclaration<'full'>,
    __GenericFunctionDeclaration,
    __RunFunctionDeclaration {}

interface __FunctionDeclaration<ThisDeclarationKind> {
  declarationKind: ThisDeclarationKind
  declarationName: string
}

interface __RunFunctionDeclaration {
  declarationRunInputs: unknown
  declarationRunResult: unknown
  declarationRunLogic: unknown
}

interface __GenericFunctionDeclaration {
  declarationGenericInputs: unknown
}

interface __BuildFunctionDeclaration {
  declarationBuildInputs: unknown
}

const foo = 'asdfasd'
