/// <reference path="../../node_modules/sancasia_zero-core/obj/sancasia_zero.core.d.ts" />

namespace sczBase
{
  export class VelocitySystem extends sczCore.SystemBase
  {
    constructor(
      eventBus: sczCore.EventBus)
    {
        super(
          [TranslateComponent, VelocityComponent],
          eventBus,
          sczCore.EngineEvent.PreComputation);
    }

    protected processEntity(
      deltaTime: number,
      [translate, velocity]: [TranslateComponent, VelocityComponent]): void
    {
      let deltaSeconds = deltaTime / 1000;
      velocity.velocityX += velocity.accelerationX * deltaSeconds;
      translate.positionX += velocity.velocityX * deltaSeconds;

      velocity.velocityY += velocity.accelerationY * deltaSeconds;
      translate.positionY += velocity.velocityY * deltaSeconds;
    }
  }
}
