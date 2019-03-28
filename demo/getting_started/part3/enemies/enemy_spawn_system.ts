/// <reference path="../../../../node_modules/sancasia_zero-core/obj/sancasia_zero.core.d.ts" />
/// <reference path="../../../../obj/sancasia_zero.base.d.ts" />

namespace sczBase.demo.helloWorld.partThree
{
  export class EnemySpawnSystem extends sczCore.SystemBase
  {
    private game: sczCore.Game;
    private systems: sczCore.System[];
    private enemyFactory: EnemyFactory;
    private lanes: Array<{position: number, cooldown: number}>;

    constructor(
      game: sczCore.Game,
      systems: sczCore.System[],
      enemyFactory: EnemyFactory)
    {
        super(
          // define what we expect enemies to consist of
          [TranslateComponent],
          game.getEventBus(),
          // define when this system should be executed
          sczCore.EngineEvent.PreComputation);

        this.game = game;
        this.systems = systems;
        this.enemyFactory = enemyFactory;

        // define possible lanes
        this.lanes = [
            {position:  50, cooldown: 0},
            {position: 150, cooldown: 0},
            {position: 250, cooldown: 0},
            {position: 350, cooldown: 0}];
    }

    public process = (deltaTime: number): void =>
    {
      if(this.entities.size < 10)
      {
        // spawn chance: in avarage once a second
        if(Math.random() * 1000 < deltaTime)
        {
          // spawn enemy
          this.spawn();
        }
      }

      // continue processing registered entities
      for(let entity of this.entities.values())
      {
        let cache = <[TranslateComponent]> entity.getCache(this);
        this.processEntity(deltaTime, cache, entity.getId());
        entity.updateCache(this, cache);
      };
    }

    protected processEntity(
      _: number,
      [translate]: [TranslateComponent],
      entityId?: number): void
    {
      // check if out of view
      if(translate.position.y > 900)
      {
        // despawn enemy
        this.despawn(entityId);
      }
    }

    // spawns an enemy in a random lane
    private spawn(): void
    {
      // lane selection
      let laneNumber = Math.round(Math.random() * 3);
      let lane = this.lanes[laneNumber];

      // cooldown: max one spawn per lane per second
      let now = new Date().getTime()
      let delta = now - lane.cooldown;
      if(delta > 1000)
      {
        // reset cooldwon counter
        lane.cooldown = now;

        // create enemy using a dedicated factory
        let id = Math.floor(Math.random() * 10**12);
        let enemy = this.enemyFactory.create(
            id, {x: lane.position, y: -100});

        // add the enemy to the game
        this.game.addEntity(enemy);
        // register enemy to the appropriate systems
        for(let system of this.systems)
        {
          system.registerEntity(enemy);
        }

        this.registerEntity(enemy);
      }
    }

    // despawns the enemy
    private despawn(entityId: number): void
    {
      // deregister enemy from its systems
      for(let system of this.systems)
      {
        system.deregisterEntity(entityId);
      }

      this.deregisterEntity(entityId);
      // remove enemy from the game
      this.game.removeEntity(entityId);
    }
  }
}
