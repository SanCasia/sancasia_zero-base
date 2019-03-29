/// <reference path="../../../../node_modules/sancasia_zero-core/obj/sancasia_zero.core.d.ts" />
/// <reference path="../../../../obj/sancasia_zero.base.d.ts" />

namespace sczBase.demo.helloWorld.partThree
{
  export class NpcDespawnSystem extends sczCore.SystemBase
  {
    private systems: sczCore.System[];

    constructor(
      eventbus: sczCore.EventBus,
      systems: sczCore.System[])
    {
      super(
        // define what we expect enemies to consist of
        [EntityComponent, TranslateComponent],
        eventbus,
        // define when this system should be executed
        sczCore.EngineEvent.PreComputation);

      this.systems = systems;
    }

    protected processEntity(
      _: number,
      [entity, translate]: [EntityComponent, TranslateComponent]): void
    {
      // check if out of view
      if(translate.position.y > 900)
      {
        // despawn enemy
        this.despawn(entity.reference);
      }
    }

    // despawns the enemy
    private despawn(entity: sczCore.Entity): void
    {
      for(let system of this.systems)
      {
        system.deregisterEntity(entity.getId());
      }

      // added to list
      //this.deregisterEntity(entity.getId());
    }
  }
}
