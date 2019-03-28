/// <reference path="../../../node_modules/sancasia_zero-core/obj/sancasia_zero.core.d.ts" />
/// <reference path="../../../obj/sancasia_zero.base.d.ts" />

namespace sczBase.demo.helloWorld.partTwo
{
  export class Battlefield extends sczCore.SceneBase
  {
    public constructor(id: number, game: sczCore.Game)
    {
      let eventbus = game.getEventBus();
      super(id, eventbus);

      // same old canvas rendering system
      let canvas = <HTMLCanvasElement> document.getElementById("canvas");
      let context = canvas.getContext('2d');
      let translateService = new TranslateService(game);
      let renderSystem =
          new CanvasRenderSystem(
              context,
              translateService,
              eventbus);
      this.addProp(renderSystem);

      // velocity system: handles movement based on velocity component
      let velocitySystem = new sczBase.VelocitySystem(eventbus);
      this.addProp(velocitySystem);

      // default game play action interpreter: maps input to action
      // e.g. "W" -> move up, spacebar -> jump
      let interpreter = new sczBase.GamePlayActionInterpreter(eventbus);
      this.addProp(interpreter);

      // our action system which handels actions like jump or move up
      let actionSystem = new PlayerActionSystem(eventbus);
      this.addProp(actionSystem);

      // create the player factory
      let playerGraphic = "players/player.svg";
      let playerGraphicSize = {x: 200, y:200};
      let playerFactory = new PlayerFactory(playerGraphic, playerGraphicSize);

      // spawn the player
      let playerId = 0;
      let playerPosition = {x: 200, y: 700}
      let systems = [renderSystem, actionSystem, velocitySystem];
      let player = playerFactory.create(playerId, playerPosition, systems);
      game.addEntity(player);
    }
  }
}
