/// <reference path="../../../node_modules/sancasia_zero-core/obj/sancasia_zero.core.d.ts" />
/// <reference path="../../../obj/sancasia_zero.base.d.ts" />

namespace sczBase.demo.helloWorld.partThree
{
  export class Highway extends sczCore.SceneBase
  {
    public constructor(id: number, game: sczCore.Game)
    {
      let eventbus = game.getEventBus();
      super(id, eventbus);

      let canvas = <HTMLCanvasElement> document.getElementById("canvas");
      let context = canvas.getContext('2d');
      let translateService = new TranslateService(game);
      let renderSystem =
          new CanvasRenderSystem(
              context,
              translateService,
              eventbus);
      this.addProp(renderSystem);

      let velocitySystem = new sczBase.VelocitySystem(eventbus);
      this.addProp(velocitySystem);

      let interpreter = new sczBase.GamePlayActionInterpreter(eventbus);
      this.addProp(interpreter);

      let actionSystem = new PlayerActionSystem(eventbus);
      this.addProp(actionSystem);

      // create the player factory
      let playerGraphic = "players/player.svg";
      let playerGraphicSize = {x: 200, y:200};
      let playerFactory = new PlayerFactory(playerGraphic, playerGraphicSize);

      // spawn the player
      let playerId = 0;
      let playerPosition = {x: 200, y: 700}
      let playerSystems = [actionSystem, velocitySystem, renderSystem];
      let player = playerFactory.create(
        playerId, playerPosition, playerSystems);
      game.addEntity(player);


      let npcSystems = Array<sczCore.System>(renderSystem, velocitySystem);
      let npcDespawnSystem = new NpcDespawnSystem(eventbus, npcSystems)
      this.addProp(npcDespawnSystem);
      npcSystems.push(npcDespawnSystem);

      // create the enemy factory
      let npcGraphic = "npcs/npc.svg";
      let npcGraphicSize = {x: 200, y:200};
      let npcFactory = new NpcFactory(npcGraphic, npcGraphicSize);

      // create the enemy spawn prop
      //  which is responsible for spawning enemies
      let enemySpawnSystem = new NpcSpawnProp(
        eventbus, npcSystems, npcFactory);
      this.addProp(enemySpawnSystem);
    }
  }
}
