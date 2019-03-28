/// <reference path="../../../node_modules/sancasia_zero-core/obj/sancasia_zero.core.d.ts" />
/// <reference path="../../../obj/sancasia_zero.base.d.ts" />

namespace sczBase.demo.helloWorld.partThree
{
  export class Battlefield extends sczCore.SceneBase
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
      let playerFactory = new PlayerFactory(
          "players/player.svg",
          {x: 200, y:200});

      // spawn the player
      let playerId = 0;
      let playerPosition = {x: 200, y: 700}
      let systems = [actionSystem, velocitySystem, renderSystem];
      let player = playerFactory.create(playerId, playerPosition, systems);
      game.addEntity(player);


      // create the enemy movement system and add it to the scene
      let enemyMovementSystem = new EnemyMovementSystem(game.getEventBus());
      this.addProp(enemyMovementSystem);


      // create the enemy factory
      let enemyFactory = new EnemyFactory(
          "enemies/enemy.svg",
          {x: 200, y:200});

      // create the enemy spawn system
      //  which is responsible for spawning enemies
      let enemySpawnSystem = new EnemySpawnSystem(
          game,
          [renderSystem, enemyMovementSystem],
           enemyFactory);
      this.addProp(enemySpawnSystem);
    }
  }
}
