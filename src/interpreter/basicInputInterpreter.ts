/// <reference path="../../node_modules/sancasia_zero-core/obj/sancasia_zero.core.d.ts" />

namespace sczBase
{
  export abstract class BasicInputInterpreterBase
  {
    protected eventbus: sczCore.EventBus;

    public constructor(eventbus: sczCore.EventBus)
    {
      this.eventbus = eventbus;
    }

    public abstract activate(): void;
    public abstract deactivate(): void;

    protected publishMenuAction(): void
    {
      this.eventbus.publish(
        BasicAction.Menu, []);
    }

    protected publishReturnAction(): void
    {
      this.eventbus.publish(
        BasicAction.Return, []);
    }

    protected publishStartAction(): void
    {
      this.eventbus.publish(
        BasicAction.Start, []);
    }

    protected publishStopAction(): void
    {
      this.eventbus.publish(
        BasicAction.Stop, []);
    }

    protected publishQuickSaveAction(): void
    {
      this.eventbus.publish(
        BasicAction.QuickSave, []);
    }

    protected publishQuickLoadAction(): void
    {
      this.eventbus.publish(
        BasicAction.QuickLoad, []);
    }
  }
}
