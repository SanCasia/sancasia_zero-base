/// <reference path="../../../node_modules/sancasia_zero-core/obj/sancasia_zero.core.d.ts" />
/// <reference path="../../../obj/sancasia_zero.base.d.ts" />

namespace sczBase.demo.helloWorld.partOne
{
  export class HelloWorld
  {
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
  }
}
