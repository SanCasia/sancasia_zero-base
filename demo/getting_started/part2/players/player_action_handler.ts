/// <reference path="../../../../node_modules/sancasia_zero-core/obj/sancasia_zero.core.d.ts" />
/// <reference path="../../../../obj/sancasia_zero.base.d.ts" />

namespace sczBase.demo.helloWorld.partTwo
{
  export class PlayerActionHandler
      extends sczBase.BasicActionHandlerBase
  {
    protected eventbus: sczCore.EventBus;

    public constructor(eventbus: sczCore.EventBus)
    {
      super();
      this.eventbus = eventbus;
    }

    public up(_: number, [translate]: [sczBase.TranslateComponent])
    {
      translate.positionY -= 10;
    }

    public down(_: number, [translate]: [sczBase.TranslateComponent])
    {
      translate.positionY += 10;
    }

    public left(_: number, [translate]: [sczBase.TranslateComponent])
    {
      translate.positionX -= 10;
    }

    public right(_: number, [translate]: [sczBase.TranslateComponent])
    {
      translate.positionX += 10;
    }
  }
}
