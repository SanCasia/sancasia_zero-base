/// <reference path="../../../node_modules/sancasia_zero-core/obj/sancasia_zero.core.d.ts" />
/// <reference path="../../../obj/sancasia_zero.base.d.ts" />

namespace sczBase.demo.helloWorld.partOne
{
  export class Highway extends sczCore.SceneBase
  {
    public constructor(id: number, game: sczCore.Game)
    {
      let eventbus = game.getEventBus();
      super(id, eventbus);

      // constructing canvas render system ...
      // get reference to the canvas tag of the index.html
      let canvas = <HTMLCanvasElement> document.getElementById("canvas");
      // extracting context from tag
      let context = canvas.getContext('2d');
      // initialising dependency on translate service
      let translateService = new TranslateService(game);
      // putting it all together:
      let renderSystem =
        new CanvasRenderSystem(
          context,
          translateService,
          eventbus);
      // adding new system to scene
      this.addProp(renderSystem);

      // create the player with our factory
      let playerId = 0;
      let player = PlayerFactory.create(playerId);
      renderSystem.registerEntity(player);
    }
  }
}
