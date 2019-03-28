/// <reference path="../../../node_modules/sancasia_zero-core/obj/sancasia_zero.core.d.ts" />

namespace sczBase
{
  export abstract class GamePlayActionInterpreterBase
    extends sczCore.ActionInterpreter
  {
    protected publishStartMoveUpAction(): void
    {
      this.publishEvent(new StartMoveUpActionEvent());
    }

    protected publishStopMoveUpAction(): void
    {
      this.publishEvent(new StopMoveUpActionEvent());
    }

    protected publishStartMoveDownAction(): void
    {
      this.publishEvent(new StartMoveDownActionEvent());
    }

    protected publishStopMoveDownAction(): void
    {
      this.publishEvent(new StopMoveDownActionEvent());
    }

    protected publishStartMoveLeftAction(): void
    {
      this.publishEvent(new StartMoveLeftActionEvent());
    }

    protected publishStopMoveLeftAction(): void
    {
      this.publishEvent(new StopMoveLeftActionEvent());
    }

    protected publishStartMoveRightAction(): void
    {
      this.publishEvent(new StartMoveRightActionEvent());
    }

    protected publishStopMoveRightAction(): void
    {
      this.publishEvent(new StopMoveRightActionEvent());
    }
  }
}
