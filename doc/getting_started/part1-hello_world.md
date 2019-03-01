# Part One: Hello World
The first thing you probably want to do is to have something displayed on your screen.
We will be drawing a triangle in the center of the window.

To achieve this we will need to define the main function.

To keep things nice and simple we can further divide the `main` into two distinct parts. The first part is rather common and can be found in other examples with few differences. Its main job is to create and start the engine:
``` typescript
public static main()
{
  // create the new game object
  //  this is initialising a new event bus as well as a new engine
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
This code first creates a new game, then adds all the needed scenes and systems, defines a place holder for further code and in the end it starts the game and activates the scene.

The next part contains the game specific code and will replace the place holder of the first part:
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

// add components to the entity
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
Here a new entity is created. It is given a translate component which defines position as well as size and rotation and a sprite component which defines the look. In the end the component is registered to the canvas render system.

Done! That's it!
All you need now is a HTML page to host this code as well as the main canvas and the graphic and you're ready to go!
