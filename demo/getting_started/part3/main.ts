/// <reference path="../../../node_modules/sancasia_zero-core/obj/sancasia_zero.core.d.ts" />
/// <reference path="../../../obj/sancasia_zero.base.d.ts" />

namespace sczBase.demo.helloWorld.partThree
{
  export class HelloWorld
  {
    public static main()
    {
      let game = new sczCore.Game();
      let highway = new Highway(0, game);

      game.start();
      highway.activate();
    }
  }
}
