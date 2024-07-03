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

- declares base function, (root or medium)

- can provide generics to base function

- provides partial parameters

#### final

- the terminal block of function composition

- declares base function (root or medium)

- can provide generics to base function

- provides remaining parameters

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

## code generation

- [https://romgrk.com/posts/optimizing-javascript](https://romgrk.com/posts/optimizing-javascript)

- [https://mrale.ph/blog/2015/01/11/whats-up-with-monomorphism.html](https://mrale.ph/blog/2015/01/11/whats-up-with-monomorphism.html)

- [http://asmjs.org/spec/latest/](http://asmjs.org/spec/latest/)

## prior art

- typescript

- elm

- rescript

- reason

- closurescript
