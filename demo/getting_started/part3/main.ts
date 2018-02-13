/// <reference path="../../../node_modules/sancasia_zero-core/obj/sancasia_zero.core.d.ts" />
/// <reference path="../../../obj/sancasia_zero.base.d.ts" />

namespace sczBase.demo.helloWorld.partThree
{
  export class HelloWorld
  {
    public static main()
    {
      // create the new game object
      // this is initializing a new event bus as well as a new engine
      let game = new sczCore.Game();

      // create the scene in which the triangle will exist
      let battlefield = new Battlefield(0, game);
      // add the scene to the game
      game.addScene(battlefield);

      // lets start the engine!
      game.start();
      // ... and activate the scene!
      game.activateScene(battlefield.getId());
    }
  }
}
