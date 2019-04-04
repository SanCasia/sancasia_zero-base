# Part One: Hello World
`SanCasia Zero` is a general purpose layered 2D game engine, which requires some initial work to get started. We tried to keep thinks as straightforward as possible so keep with us for this first part.

## Basics
`SanCasia Zero` is running in the browser and relies heavily on SVG graphics.
Take a look at the `index.html` file. It's simple and highly reusable, to the point, where it doesn't need to be changed for this entire series.  

Also provided is an SVG graphic named `player.svg`:  
<img src="player.svg" width="100px">  
This is the graphic we will be drawing in this part.  
Feel free to edit or completely replace it!

Third, the main function in `main.ts`. This is the starting point of our game and sets up some initial objects that we will need:  

```typescript
public static main()
{
  // create the game object
  // this is initializing an event bus as well as an engine
  let game = new sczCore.Game();

  // create our scene
  // the scene is responsible for drawing the player
  let highway = new Highway(0, game.getEventBus());

  // lets start the engine!
  game.start();
  // ... and activate the scene!
  highway.activate();
}
```
We haven't implemented the `Highway` just yet...
## Scene
A `Scene` is a organisational concept and used to group related `Props` and `Entities`. Generally speaking, we will want to have a `Scene` for every independent part of our game. In our case we call our first `Scene` `Highway` simply because it will be descriptive of what it will show the user.  
For now though we will start drawing our player.
```typescript
// we extend SceneBase which will handel some things for us.
class Highway extends sczCore.SceneBase
{
  public constructor(id: number, eventbus: sczCore.EventBus)
  {
    // calling the super constructor.
    super(id, eventbus);

    // constructing canvas render system ...
    // get reference to the canvas tag of the index.html
    let canvas = <HTMLCanvasElement> document.getElementById("canvas");
    // extracting context from tag
    let context = canvas.getContext('2d');
    // putting it all together:
    let renderSystem = new sczBase.CanvasRenderSystem(context, eventbus);
    // adding new system to scene
    this.addProp(renderSystem);

    // create the player with our factory
    let playerId = 0;
    let player = PlayerFactory.create(playerId);
    renderSystem.registerEntity(player);
  }
}
```
As you can see, we utilise the provided `CanvasRenderSystem` which is very handy for drawing objects onto a `Canvas`.  
Still missing is the implementation of the `PlayerFactory`...

## Factory
It is best practice to hide complicated object creation code inside a factory. The `PlayerFactory` is responsible to assemble an `Entity` with all `Components` needed to fulfill the responsibilities of a `player`. In our case we only want to draw the player and so all `properties` (s)he needs are a position (`TranslateComponent`) and a visual representation (`SpriteComponent`):

```typescript
class PlayerFactory
{
  public static create(id: number): sczCore.Entity
  {
    // create a new entity which will be our player
    let player = new sczCore.Entity(id);

    // define the translate component
    let translate = new sczBase.TranslateComponent();
    translate.positionX = 100;    // position, x coordinate
    translate.positionY = 550;    // position, y coordinate
    translate.sizeFactorX = 1;    // relative size in x dimension
    translate.sizeFactorY = 1;    // relative size in y dimension
    translate.centerFactorX = 0;  // center of rotation, x value
    translate.centerFactorY = 0;  // center of rotation, y value
    translate.rotation = 0;       // rotation of the entity
    player.addComponent(translate);

    // define sprite
    let sprite = new sczBase.SpriteComponent();
    sprite.sprite = new Image();  // new image
    sprite.sprite.src = "player/player.svg";  // image location
    sprite.sizeX = 200;           // image size x
    sprite.sizeY = 144.225;       // image size y
    player.addComponent(sprite);

    return player;
  }
}
```
## Result
With that we are done! Compile and run:  
![result](part1.png)
