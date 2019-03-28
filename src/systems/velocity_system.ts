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
      velocity.velocityX += velocity.accelerationX * deltaTime;
      translate.positionX += velocity.velocityX;

      velocity.velocityY += velocity.accelerationY * deltaTime;
      translate.positionY += velocity.velocityY;
    }
  }
}
