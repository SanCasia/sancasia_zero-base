/// <reference path="../../../../node_modules/sancasia_zero-core/obj/sancasia_zero.core.d.ts" />
/// <reference path="../../../../obj/sancasia_zero.base.d.ts" />

namespace sczBase.demo.helloWorld.partTwo
{
  export class PlayerActionSystem
      extends sczBase.GamePlayActionSystemBase
  {
    protected eventbus: sczCore.EventBus;

    public constructor(eventbus: sczCore.EventBus)
    {
      super([sczBase.VelocityComponent], eventbus);
    }

    // when "startMoveUp" ...
    public startMoveUp(_: number, [velocity]: [sczBase.VelocityComponent])
    {
      // set velocity in the Y direction to ...
      velocity.velocityY = -200;
    }

    // when "stopMoveUp"
    public stopMoveUp(_: number, [velocity]: [sczBase.VelocityComponent])
    {
      // set velocity in the Y direction to ...
      velocity.velocityY = 0;
    }

    // etc.
    public startMoveDown(_: number, [velocity]: [sczBase.VelocityComponent])
    {
      velocity.velocityY = 200;
    }

    public stopMoveDown(_: number, [velocity]: [sczBase.VelocityComponent])
    {
      velocity.velocityY = 0;
    }

    public startMoveLeft(_: number, [velocity]: [sczBase.VelocityComponent])
    {
      velocity.velocityX = -200;
    }

    public stopMoveLeft(_: number, [velocity]: [sczBase.VelocityComponent])
    {
      velocity.velocityX = 0;
    }

    public startMoveRight(_: number, [velocity]: [sczBase.VelocityComponent])
    {
      velocity.velocityX = 200;
    }

    public stopMoveRight(_: number, [velocity]: [sczBase.VelocityComponent])
    {
      velocity.velocityX = 0;
    }
  }
}
