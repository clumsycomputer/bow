# bow

an ergonomic language for function composition that targets js

## functions

- kinds: full, root, medium, final

- inputs: types, parameters, arguments

- runtimes: type, parameter, argument

### kinds

#### full

- traditional function

- can use types & arguments

- cannot use parameters

- implements argument runtime logic

#### root

- the starting block for function composition

- can use types, parameters, and arguments

- implements argument runtime logic

#### medium

- an interposed block for multi-layered function composition

- can use types & parameters

- cannot use arguments

- implements parameter runtime logic

#### final

- the terminal block of function composition

- can use types & parameters

- cannot use arguments

- implements parameter runtime logic

### inputs

### examples

```bow
root add[aaa: number, bbb: number] => number (
  return aaa + bbb
)

medium addTwo ::add [aaa: 2]

final addTwoPlusFour ::addTwo [bbb: 4]

addTwoPlusFour()
```

## types

## js / ts interop

## prior art

- typescript

- elm

- rescript

- reason

- closurescript