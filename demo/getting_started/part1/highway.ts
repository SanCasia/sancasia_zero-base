/// <reference path="../../../node_modules/sancasia_zero-core/obj/sancasia_zero.core.d.ts" />
/// <reference path="../../../obj/sancasia_zero.base.d.ts" />

namespace sczBase.demo.helloWorld.partOne
{
  // we extend SceneBase which will handel some things for us.
  export class Highway extends sczCore.SceneBase
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
}
