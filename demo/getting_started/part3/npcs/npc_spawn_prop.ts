/// <reference path="../../../../node_modules/sancasia_zero-core/obj/sancasia_zero.core.d.ts" />
/// <reference path="../../../../obj/sancasia_zero.base.d.ts" />

namespace sczBase.demo.helloWorld.partThree
{
  class Lane
  {
    public position: number;
    public velocity: number;
    public cooldown: number;
    public lastItem: number;

    constructor(position: number, velocity: number)
    {
      this.position = position;
      this.velocity = velocity;
      this.cooldown = 1000 * (500 / velocity);
      this.lastItem = 0;
    }
  }

  export class NpcSpawnProp extends sczCore.PropBase
  {
    private systems: sczCore.System[];
    private npcFactory: NpcFactory;
    private lanes: Array<Lane>;


    constructor(
      eventbus: sczCore.EventBus,
      systems: sczCore.System[],
      npcFactory: NpcFactory)
    {
      super(eventbus, sczCore.EngineEvent.PostComputation)
      this.systems = systems;
      this.npcFactory = npcFactory;

      // define possible lanes
      this.lanes = [
        new Lane(50,  100),
        new Lane(150, 150),
        new Lane(250, 150),
        new Lane(350, 200)];
    }

    public process(deltaTime: number): void
    {
      // spawn chance: on average once a second
      if(Math.random() * 1000 < deltaTime)
      {
        // spawn npc
        this.spawn();
      }
    }

    // spawns an npc in a random lane
    private spawn(): void
    {
      // lane selection
      let laneNumber = Math.floor(Math.random() * this.lanes.length);
      let lane = this.lanes[laneNumber];

      // cooldown: max one spawn per lane per second
      let now = new Date().getTime()
      let delta = now - lane.lastItem;
      if(delta > lane.cooldown)
      {
        // reset cooldwon counter
        lane.lastItem = now;

        // create npc using a dedicated factory
        let id = Math.floor(Math.random() * 10**12);
        let position = {x: lane.position, y: -100};
        this.npcFactory.create(
          id,
          position,
          lane.velocity,
          this.systems);
      }
    }
  }
}
