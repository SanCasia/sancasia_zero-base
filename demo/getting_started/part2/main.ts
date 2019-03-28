/// <reference path="../../../node_modules/sancasia_zero-core/obj/sancasia_zero.core.d.ts" />
/// <reference path="../../../obj/sancasia_zero.base.d.ts" />

namespace sczBase.demo.helloWorld.partTwo
{
  export class HelloWorld
  {
    public static main()
    {
      let game = new sczCore.Game();

      // create the scene in which the triangle will exist
      let battlefield = new Battlefield(0, game);

      game.start();
      battlefield.activate();
    }
  }
}
