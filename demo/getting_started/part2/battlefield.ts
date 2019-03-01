/// <reference path="../../../node_modules/sancasia_zero-core/obj/sancasia_zero.core.d.ts" />
/// <reference path="../../../obj/sancasia_zero.base.d.ts" />

namespace sczBase.demo.helloWorld.partTwo
{
  export class Battlefield extends sczCore.SceneBase
  {
    private interpreter: sczBase.BasicInputInterpreterBase;

    public constructor(id: number, game: sczCore.Game)
    {
      super(id, game.getEventBus());

      // create the canvas render system
      //  the render system is responsible for our drawing jobs
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

      // add the render system to this scene
      this.addSystem(renderSystem);

      // local interpreter...
      this.interpreter =
        new sczBase.DefaultBasicInputInterpreter(game.getEventBus());

      // action handler
      let handler = new PlayerActionHandler(
        game.getEventBus());

      // BAS
      let actionSystem = new sczBase.BasicActionSystem(
        handler,
        [sczBase.TranslateComponent],
        game.getEventBus(),
        sczCore.EngineEvent.PreComputation);

      this.addSystem(actionSystem);

      // create the player factory
      let playerFactory = new PlayerFactory(
          "players/player.svg",
          {x: 200, y:200});

      // spawn the player
      let player = playerFactory.create(0, {x: 200, y: 700});
      game.addEntity(player);

      actionSystem.registerEntity(player);
      renderSystem.registerEntity(player);
    }

    public activate()
    {
      super.activate();
      this.interpreter.activate();
    }


    public deactivate()
    {
      super.deactivate();
      this.interpreter.deactivate();
    }
  }
}
