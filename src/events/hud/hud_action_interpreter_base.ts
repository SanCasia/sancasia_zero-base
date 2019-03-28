/// <reference path="../../../node_modules/sancasia_zero-core/obj/sancasia_zero.core.d.ts" />

namespace sczBase
{
  export abstract class HudActionInterpreterBase
    extends sczCore.ActionInterpreter
  {
    protected publishMenuAction(): void
    {
      this.publishEvent(new MenuActionEvent());
    }

    protected publishStartAction(): void
    {
      this.publishEvent(new StartActionEvent());
    }

    protected publishNextAction(): void
    {
      this.publishEvent(new NextActionEvent());
    }

    protected publishPreviousAction(): void
    {
      this.publishEvent(new PreviousActionEvent());
    }

    protected publishStopAction(): void
    {
      this.publishEvent(new StopActionEvent());
    }

    protected publishQuickSaveAction(): void
    {
      this.publishEvent(new QuickSaveActionEvent());
    }

    protected publishQuickLoadAction(): void
    {
      this.publishEvent(new QuickLoadActionEvent());
    }
  }
}
