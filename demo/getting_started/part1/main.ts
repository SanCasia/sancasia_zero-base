/// <reference path="../../../node_modules/sancasia_zero-core/obj/sancasia_zero.core.d.ts" />
/// <reference path="../../../obj/sancasia_zero.base.d.ts" />

namespace sczBase.demo.helloWorld.partOne
{
  export class HelloWorld
  {
    public static main()
    {
      // create the new game object
      // this is initializing a new event bus as well as a new engine
      let game = new sczCore.Game();

      // create the scene in which the triangle will exist
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

      // add the render system to the scene
      //  the render system is responsible for our drawing jobs
      scene.addProp(renderSystem);

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
      renderSystem.registerEntity(triangle);

      // lets start the engine!
      game.start();
      // ... and activate the scene!
      game.activateScene(scene.getId());
    }
  }
}
