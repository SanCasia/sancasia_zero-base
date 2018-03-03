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

    // basic actions
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

    // menu actions
    protected publishSelectAction(): void
    {
      this.eventbus.publish(
        BasicAction.Select, []);
    }

    protected publishUnselectAction(): void
    {
      this.eventbus.publish(
        BasicAction.Unselect, []);
    }

    protected publishUndoAction(): void
    {
      this.eventbus.publish(
        BasicAction.Undo, []);
    }

    protected publishRedoAction(): void
    {
      this.eventbus.publish(
        BasicAction.Redo, []);
    }

    // menu navigation
    protected publishUpAction(): void
    {
      this.eventbus.publish(
        BasicAction.Up, []);
    }

    protected publishDownAction(): void
    {
      this.eventbus.publish(
        BasicAction.Down, []);
    }

    protected publishLeftAction(): void
    {
      this.eventbus.publish(
        BasicAction.Left, []);
    }

    protected publishRightAction(): void
    {
      this.eventbus.publish(
        BasicAction.Right, []);
    }

    protected publishTopAction(): void
    {
      this.eventbus.publish(
        BasicAction.Top, []);
    }

    protected publishBottomAction(): void
    {
      this.eventbus.publish(
        BasicAction.Bottom, []);
    }

    protected publishPreviousAction(): void
    {
      this.eventbus.publish(
        BasicAction.Previous, []);
    }

    protected publishNextAction(): void
    {
      this.eventbus.publish(
        BasicAction.Next, []);
    }

    protected publishBackAction(): void
    {
      this.eventbus.publish(
        BasicAction.Back, []);
    }
  }
}
