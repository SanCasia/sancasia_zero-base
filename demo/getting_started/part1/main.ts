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

      // create our scene where we create and draw the player
      let highway = new Highway(0, game);

      // lets start the engine!
      game.start();
      // ... and activate the scene!
      highway.activate();
    }
  }
}
