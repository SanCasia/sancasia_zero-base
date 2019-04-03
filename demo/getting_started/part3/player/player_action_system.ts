/// <reference path="../../../../node_modules/sancasia_zero-core/obj/sancasia_zero.core.d.ts" />
/// <reference path="../../../../obj/sancasia_zero.base.d.ts" />

namespace sczBase.demo.helloWorld.partThree
{
  export class PlayerActionSystem
      extends sczBase.GamePlayActionSystemBase
  {
    protected eventbus: sczCore.EventBus;

    public constructor(eventbus: sczCore.EventBus)
    {
      super([sczBase.VelocityComponent], eventbus);
    }

    public startMoveUp(_: number, [velocity]: [sczBase.VelocityComponent])
    {
      velocity.velocityY = -100;
    }

    public stopMoveUp(_: number, [velocity]: [sczBase.VelocityComponent])
    {
      velocity.velocityY = 0;
    }

    public startMoveDown(_: number, [velocity]: [sczBase.VelocityComponent])
    {
      velocity.velocityY = 50;
    }

    public stopMoveDown(_: number, [velocity]: [sczBase.VelocityComponent])
    {
      velocity.velocityY = 0;
    }

    public startMoveLeft(_: number, [velocity]: [sczBase.VelocityComponent])
    {
      velocity.velocityX = -50;
    }

    public stopMoveLeft(_: number, [velocity]: [sczBase.VelocityComponent])
    {
      velocity.velocityX = 0;
    }

    public startMoveRight(_: number, [velocity]: [sczBase.VelocityComponent])
    {
      velocity.velocityX = 50;
    }

    public stopMoveRight(_: number, [velocity]: [sczBase.VelocityComponent])
    {
      velocity.velocityX = 0;
    }
  }
}
