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
      let renderSystem = new CanvasRenderSystem(context, eventbus);
      this.addProp(renderSystem);

      let velocitySystem = new sczBase.VelocitySystem(eventbus);
      this.addProp(velocitySystem);

      let interpreter = new sczBase.GamePlayActionInterpreter(eventbus);
      this.addProp(interpreter);

      let actionSystem = new PlayerActionSystem(eventbus);
      this.addProp(actionSystem);

      let playerId = 0;
      let playerPosition = {x: 200, y: 700}
      let player = PlayerFactory.create(playerId, playerPosition);
      let playerSystems = [actionSystem, velocitySystem, renderSystem];
      for(let playerSystem of playerSystems)
      {
        playerSystem.registerEntity(player);
      }

      let npcSystems = Array<sczCore.System>(renderSystem, velocitySystem);
      let npcDespawnSystem = new NpcDespawnSystem(eventbus, npcSystems)
      this.addProp(npcDespawnSystem);
      npcSystems.push(npcDespawnSystem);

      // create the npc spawn prop
      //  which is responsible for spawning NPCs
      let npcSpawnSystem = new NpcSpawnProp(eventbus, npcSystems);
      this.addProp(npcSpawnSystem);
    }
  }
}
