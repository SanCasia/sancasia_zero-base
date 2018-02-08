# SanCasia Zero: Base
SanCasia Version Zero Base: The Base of SanCasia Zero

SanCasia Zero (SCZ) is based on the principles Entity Component Systems (ECS)[1].
SCZ is by far not the only game engine which is based upon an ECS but it also relays on an EventBus for communication to further decouple dependencies. These two concepts combined allow an interesting degree of independence between the software components.

SanCasia Zero is a proof of concept and therefore performance is currently not a concern.

## npm
`SanCasia Zero: Base` is available via npm.

``` bash
npm install --save sancasia_zero-base
```

## Getting Started
SanCasia Zero: Base implements the most commonly needed systems and components currently including a canvas based render system. If you are interested in the inner workings of this game engine or want to have a practical example of a ECS consider visiting [SanCasia Zero: Core](https://github.com/SanCasia/sancasia_zero-core).

If you want to understand how develop basic games with the SanCasia game engine,  I recommend you to read this article, as well as taking a look at the source code and associated test cases.

The following examples are located under `demo/hello_world`.

### Hello World
The first thing you probably want to do is to have something displayed on screen.
We will be drawing a triangle in the center of the window.

To achieve this we will need to define the main function.

To keep things nice and simple we can further divide the main into two distinct parts. The first part is rather common and can be found in other examples with few  to no changes. Its main job is to create and start the engine:
``` typescript
public static main()
{  
  // create the new game object
  // this is initializing a new event bus as well as a new engine
  let game = new sczCore.Game();

  // create the scene in which the triangle should exist
  let scene = new sczCore.SceneBase(0, game.getEventBus());
  // add the scene to the game
  game.addScene(scene);

  // create the canvas render system
  //  it expects the context of a canvas as the first argument
  let canvas = <HTMLCanvasElement> document.getElementById("canvas");
  let context = canvas.getContext('2d');
  //  and a translate service as the second
  let translateService = new TranslateService(game);
  let renderSystem =
      new CanvasRenderSystem(
          context,
          translateService,
          game.getEventBus());

  // add the render system to the game
  //  the render system is responsible for our drawing jobs
  game.addSystem(
      scene.getId(),
      renderSystem);

  // TODO: Game Specific Code

  // lets start the engine!
  game.start();
  // ... and activate the scene!
  game.activateScene(scene.getId());
}
```
This code first creates a new game, adds all the needed scenes and systems, defines a place holder for further code and in the end it starts the game and activates the scene.

The other part contains the game specific code and will replace the place holder in the first part:
``` typescript
// Game Specific Code
// defining the triangle
let triangle = new sczCore.Entity(0);
let translate = new sczBase.TranslateComponent();
let sprite = new sczBase.SpriteComponent();

// define the position
translate.positionX = 100;
translate.positionY = 100;

// define the size
translate.sizeX = 1;
translate.sizeY = 1;

// define rotation
translate.rotation = 0;

// define center
translate.centerX = 0;
translate.centerY = 0;

// define the parent
translate.parentId = -1;

// define sprite
sprite.sprite = new Image();
sprite.sprite.src = "triangle.svg";

// inform about original dimensions of sprite
sprite.sizeX = 200;
sprite.sizeY = 144.225;

// add components to entity
triangle.addComponent(translate);
triangle.addComponent(sprite);

// add triangle to the game
game.addEntity(triangle);

// register the triangle to the render system
game.registerEntity(
    scene.getId(),
    CanvasRenderSystem,
    triangle.getId());
```
