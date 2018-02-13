# SanCasia Zero: Base
SanCasia Version Zero Base: The Base of SanCasia Zero

SanCasia Zero (SCZ) is based on the Entity Component System (ECS) [1] principles.
SCZ is by far not the only game engine which is based upon an ECS but it also relays on an EventBus for communication to further decouple dependencies. These two concepts combined allow an interesting degree of independence between the software components.

SanCasia Zero is a proof of concept and therefore performance is currently not a concern.

## npm
`SanCasia Zero: Base` is available via npm.

``` bash
npm install --save sancasia_zero-base
```

## Getting Started
SanCasia Zero: Base implements the most commonly needed systems and components currently including a canvas based render system. If you are interested in the inner workings of this game engine or want to have a practical example of a ECS consider visiting [SanCasia Zero: Core](https://github.com/SanCasia/sancasia_zero-core).

If you want to understand how to develop basic games with the SanCasia game engine,  I recommend you read this article, as well as taking a look at the source code and associated test cases.

The source code of this series is located under `demo/getting_started/`.

[Part One: Hello World](https://github.com/SanCasia/sancasia_zero-base/wiki/Part-One:-Hello-World)  
[Part Two: User Input Required](https://github.com/SanCasia/sancasia_zero-base/wiki/Part-Two:-User-Input-Required)  
[Part Three: What About Enemies](https://github.com/SanCasia/sancasia_zero-base/wiki/Part-Three:-What-About-Enemies)
