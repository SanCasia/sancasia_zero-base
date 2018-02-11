/// <reference path="../../../../node_modules/sancasia_zero-core/obj/sancasia_zero.core.d.ts" />
/// <reference path="../../../../obj/sancasia_zero.base.d.ts" />

namespace sczBase.demo.helloWorld.partThree
{
  export class EnemyMovementSystem extends sczCore.SystemBase
  {
    constructor(eventBus: sczCore.EventBus)
    {
        super(
          [TranslateComponent],
          eventBus,
          sczCore.EngineEvent.Computation);
    }

    protected processEntity(
      deltaTime: number,
      [translate]: [TranslateComponent]): void
    {
      // move enemy by 100 pixel per second
      translate.positionY += deltaTime * 0.1;
    }
  }
}
