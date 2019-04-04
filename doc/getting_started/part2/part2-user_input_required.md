# Part Two: User Input Required
A computer game is no fun without the possibility to influence what is happening. To allow that, we will be working with user input and implement the ability to control the player. Three things are needed to make this work smoothly. An `Interpreter` is used to unify different types of input devices like keyboard, game pad etc. After the interpretation of the raw input the unified action are communicated to an `ActionSystem`. We will create our own `PlayerActionSystem` to implement movement. We will also be using the supplied `VelocitySystem` and `VelocityComponent` to record and propagate the state changes.

## Velocity System
To use a system we have to add it to our `Scene`. This should be done in our implementation `Highway` as follows.  
```typescript
// velocity system: handles movement based on velocity component
let velocitySystem = new sczBase.VelocitySystem(eventbus);
this.addProp(velocitySystem);
```
The `VelocitySystem` is a simple but often needed `System` which can be found in `sczBase`. All it does is updating a `TranslateComponent` based on the values in a `VelocityComponent`. You can read the code if you are interested in knowing how to write your own `System`.

## Input Interpreter
Adding an input interpreter is also very easy. All we need to do is selecting the appropriate class from `sczBase` and add it as prop to our `Highway`.
We will want to use the `GamePlayActionInterpreter` because it implements the needed input interpretation to move our player.
```typescript
// default game play action interpreter: maps input to action
// e.g. "W" -> move up, spacebar -> jump
let interpreter = new sczBase.GamePlayActionInterpreter(eventbus);
this.addProp(interpreter);
```

## Action System
The most complicated part is the implementation of our own `ActionSystem`.  
Luckily, `sczBase` provides a easy to use base implementation which we can `extend` and finally override the functions of interest.  

```typescript
class PlayerActionSystem
    extends sczBase.GamePlayActionSystemBase
{
  protected eventbus: sczCore.EventBus;

  public constructor(eventbus: sczCore.EventBus)
  {
    super([sczBase.VelocityComponent], eventbus);
  }

  // when "startMoveUp" ...
  public startMoveUp(_: number, [velocity]: [sczBase.VelocityComponent])
  {
    // set velocity in the Y direction to ...
    velocity.velocityY = -200;
  }

  // when "stopMoveUp"
  public stopMoveUp(_: number, [velocity]: [sczBase.VelocityComponent])
  {
    // set velocity in the Y direction to ...
    velocity.velocityY = 0;
  }

  // etc.
}
```

## Update Spawn
The only thing left to do is to make sure our player is registered with all the necessary systems.  A small change to the `PlayerFactory`s `create` call is enough.
```typescript
// spawn the player
let playerId = 0;
let playerPosition = {x: 200, y: 700}
let player = PlayerFactory.create(playerId, playerPosition);

let systems = [renderSystem, actionSystem, velocitySystem];
for(let system of systems)
{
  system.registerEntity(player);
}
```

## Result
After saving and compiling:  
![part two demo gif](part2.gif)
