# bow

an ergonomic language for function composition that targets js

## functions

- kinds: full, root, medium, final

- inputs: generics, parameters, arguments

- runtimes: type, parameter, argument

### kinds

#### full

- traditional function

- can declare generics and arguments

- declares result type

- implements argument runtime logic

#### root

- the starting block for function composition

- can declare generics, parameters, and arguments

- declares result type

- implements argument runtime logic

#### medium

- an interposed block for multi-layered function composition

- can declare additional generics and parameters

- declares base root function

- can provide generics to root function

- provides parameters

#### final

- the terminal block of function composition

- declares base function (root or medium)

- can provide generics to base function

- provides parameters

### inputs

#### generics

#### parameters

#### arguments

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