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
        BasicAction.MENU_ACTION, []);
    }

    protected publishReturnAction(): void
    {
      this.eventbus.publish(
        BasicAction.RETURN_ACTION, []);
    }

    protected publishStartAction(): void
    {
      this.eventbus.publish(
        BasicAction.START_ACTION, []);
    }

    protected publishStopAction(): void
    {
      this.eventbus.publish(
        BasicAction.STOP_ACTION, []);
    }

    protected publishQuickSaveAction(): void
    {
      this.eventbus.publish(
        BasicAction.QUICK_SAVE_ACTION, []);
    }

    protected publishQuickLoadAction(): void
    {
      this.eventbus.publish(
        BasicAction.QUICK_LOAD_ACTION, []);
    }
  }
}
