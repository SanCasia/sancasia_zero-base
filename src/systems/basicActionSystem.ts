/// <reference path="../../node_modules/sancasia_zero-core/obj/sancasia_zero.core.d.ts" />

namespace sczBase
{
  export class    BasicActionSystem
      extends     ActionSystemBase
  {
    protected actionHandler: BasicActionHandler;

    constructor(
        actionHandler: BasicActionHandler,
        requires: Array<Function>,
        eventbus: sczCore.EventBus,
        event: sczCore.EngineEvent)
    {
      super(requires, eventbus, event);
      this.actionHandler = actionHandler;
    }

    protected queueMenuAction(_: void): void
    {
      this.actionQueue.push(
        {call: this.actionHandler.menu, args: []});
    }

    protected queueReturnAction(_: void): void
    {
      this.actionQueue.push(
        {call: this.actionHandler.return, args: []});
    }

    protected queueStartAction(_: void): void
    {
      this.actionQueue.push(
        {call: this.actionHandler.start, args: []});
    }

    protected queueStopAction(_: void): void
    {
      this.actionQueue.push(
        {call: this.actionHandler.stop, args: []});
    }

    protected queueQuickSaveAction(_: void): void
    {
      this.actionQueue.push(
        {call: this.actionHandler.quickSave, args: []});
    }

    protected queueQuickLoadAction(_: void): void
    {
      this.actionQueue.push(
        {call: this.actionHandler.quickLoad, args: []});
    }

    public activate(): void
    {
      this.eventbus.subscribe(
          BasicAction.MENU_ACTION,
          this.queueMenuAction);

      this.eventbus.subscribe(
          BasicAction.RETURN_ACTION,
          this.queueReturnAction);

      this.eventbus.subscribe(
          BasicAction.START_ACTION,
          this.queueStartAction);

      this.eventbus.subscribe(
          BasicAction.STOP_ACTION,
          this.queueStopAction);

      this.eventbus.subscribe(
          BasicAction.QUICK_SAVE_ACTION,
          this.queueQuickSaveAction);

      this.eventbus.subscribe(
          BasicAction.QUICK_LOAD_ACTION,
          this.queueQuickLoadAction);

      super.activate();
    }

    public deactivate(): void
    {
      this.eventbus.unsubscribe(
          BasicAction.MENU_ACTION,
          this.queueMenuAction);

      this.eventbus.unsubscribe(
          BasicAction.RETURN_ACTION,
          this.queueReturnAction);

      this.eventbus.unsubscribe(
          BasicAction.START_ACTION,
          this.queueStartAction);

      this.eventbus.unsubscribe(
          BasicAction.STOP_ACTION,
          this.queueStopAction);

      this.eventbus.unsubscribe(
          BasicAction.QUICK_SAVE_ACTION,
          this.queueQuickSaveAction);

      this.eventbus.unsubscribe(
          BasicAction.QUICK_LOAD_ACTION,
          this.queueQuickLoadAction);

      super.deactivate();
    }
  }

  export enum BasicAction
  {
      MENU_ACTION = "MENU_ACTION",
      RETURN_ACTION = "RETURN_ACTION",
      START_ACTION = "START_ACTION",
      STOP_ACTION = "STOP_ACTION",
      QUICK_SAVE_ACTION = "QUICK_SAVE_ACTION",
      QUICK_LOAD_ACTION = "QUICK_LOAD_ACTION",
  }
}
