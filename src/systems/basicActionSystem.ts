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

    // basic actions
    protected queueMenuAction = (_: void): void =>
    {
      this.actionQueue.push(
        {call: this.actionHandler.menu, args: []});
    }

    protected queueReturnAction = (_: void): void =>
    {
      this.actionQueue.push(
        {call: this.actionHandler.return, args: []});
    }

    protected queueStartAction = (_: void): void =>
    {
      this.actionQueue.push(
        {call: this.actionHandler.start, args: []});
    }

    protected queueStopAction = (_: void): void =>
    {
      this.actionQueue.push(
        {call: this.actionHandler.stop, args: []});
    }

    protected queueQuickSaveAction = (_: void): void =>
    {
      this.actionQueue.push(
        {call: this.actionHandler.quickSave, args: []});
    }

    protected queueQuickLoadAction = (_: void): void =>
    {
      this.actionQueue.push(
        {call: this.actionHandler.quickLoad, args: []});
    }

    // menu actions
    protected queueSelectAction = (_: void): void =>
    {
      this.actionQueue.push(
        {call: this.actionHandler.select, args: []});
    }

    protected queueUnselectAction = (_: void): void =>
    {
      this.actionQueue.push(
        {call: this.actionHandler.unselect, args: []});
    }

    protected queueUndoAction = (_: void): void =>
    {
      this.actionQueue.push(
        {call: this.actionHandler.undo, args: []});
    }

    protected queueRedoAction = (_: void): void =>
    {
      this.actionQueue.push(
        {call: this.actionHandler.redo, args: []});
    }

    // menu navigation
    protected queueUpAction = (_: void): void =>
    {
      this.actionQueue.push(
        {call: this.actionHandler.up, args: []});
    }

    protected queueDownAction = (_: void): void =>
    {
      this.actionQueue.push(
        {call: this.actionHandler.down, args: []});
    }

    protected queueLeftAction = (_: void): void =>
    {
      this.actionQueue.push(
        {call: this.actionHandler.left, args: []});
    }

    protected queueRightAction = (_: void): void =>
    {
      this.actionQueue.push(
        {call: this.actionHandler.right, args: []});
    }

    protected queuePreviousAction = (_: void): void =>
    {
      this.actionQueue.push(
        {call: this.actionHandler.previous, args: []});
    }

    protected queueNextAction = (_: void): void =>
    {
      this.actionQueue.push(
        {call: this.actionHandler.next, args: []});
    }

    protected queueBackAction = (_: void): void =>
    {
      this.actionQueue.push(
        {call: this.actionHandler.back, args: []});
    }

    public activate(): void
    {
      // basic actions
      this.eventbus.subscribe(
          BasicAction.Menu,
          this.queueMenuAction);

      this.eventbus.subscribe(
          BasicAction.Return,
          this.queueReturnAction);

      this.eventbus.subscribe(
          BasicAction.Start,
          this.queueStartAction);

      this.eventbus.subscribe(
          BasicAction.Stop,
          this.queueStopAction);

      this.eventbus.subscribe(
          BasicAction.QuickSave,
          this.queueQuickSaveAction);

      this.eventbus.subscribe(
          BasicAction.QuickLoad,
          this.queueQuickLoadAction);

      // menu actions
      this.eventbus.subscribe(
          BasicAction.Select,
          this.queueSelectAction);

      this.eventbus.subscribe(
          BasicAction.Unselect,
          this.queueUnselectAction);

      this.eventbus.subscribe(
          BasicAction.Undo,
          this.queueUndoAction);

      this.eventbus.subscribe(
          BasicAction.Redo,
          this.queueRedoAction);

      // menu navigation
      this.eventbus.subscribe(
          BasicAction.Up,
          this.queueUpAction);

      this.eventbus.subscribe(
          BasicAction.Down,
          this.queueDownAction);

      this.eventbus.subscribe(
          BasicAction.Left,
          this.queueLeftAction);

      this.eventbus.subscribe(
          BasicAction.Right,
          this.queueRightAction);

      this.eventbus.subscribe(
          BasicAction.Previous,
          this.queuePreviousAction);

      this.eventbus.subscribe(
          BasicAction.Next,
          this.queueNextAction);

      this.eventbus.subscribe(
          BasicAction.Back,
          this.queueBackAction);

      super.activate();
    }

    public deactivate(): void
    {
      // basic actions
      this.eventbus.unsubscribe(
          BasicAction.Menu,
          this.queueMenuAction);

      this.eventbus.unsubscribe(
          BasicAction.Return,
          this.queueReturnAction);

      this.eventbus.unsubscribe(
          BasicAction.Start,
          this.queueStartAction);

      this.eventbus.unsubscribe(
          BasicAction.Stop,
          this.queueStopAction);

      this.eventbus.unsubscribe(
          BasicAction.QuickSave,
          this.queueQuickSaveAction);

      this.eventbus.unsubscribe(
          BasicAction.QuickLoad,
          this.queueQuickLoadAction);

      // menu actions
      this.eventbus.unsubscribe(
          BasicAction.Select,
          this.queueSelectAction);

      this.eventbus.unsubscribe(
          BasicAction.Unselect,
          this.queueUnselectAction);

      this.eventbus.unsubscribe(
          BasicAction.Undo,
          this.queueUndoAction);

      this.eventbus.unsubscribe(
          BasicAction.Redo,
          this.queueRedoAction);

      // menu navigation
      this.eventbus.unsubscribe(
          BasicAction.Up,
          this.queueUpAction);

      this.eventbus.unsubscribe(
          BasicAction.Down,
          this.queueDownAction);

      this.eventbus.unsubscribe(
          BasicAction.Left,
          this.queueLeftAction);

      this.eventbus.unsubscribe(
          BasicAction.Right,
          this.queueRightAction);

      this.eventbus.unsubscribe(
          BasicAction.Previous,
          this.queuePreviousAction);

      this.eventbus.unsubscribe(
          BasicAction.Next,
          this.queueNextAction);

      this.eventbus.unsubscribe(
          BasicAction.Back,
          this.queueBackAction);

      super.deactivate();
    }
  }

  export enum BasicAction
  {
    Menu = "BASIC_ACTION::MENU",
    Return = "BASIC_ACTION::RETURN",
    Start = "BASIC_ACTION::START",
    Stop = "BASIC_ACTION::STOP",
    QuickSave = "BASIC_ACTION::QUICK_SAVE",
    QuickLoad = "BASIC_ACTION::QUICK_LOAD",

    Select = "BASIC_ACTION::SELECT",
    Unselect = "BASIC_ACTION::UNSELECT",
    Undo = "BASIC_ACTION::UNDO",
    Redo = "BASIC_ACTION::Red",

    Up = "BASIC_ACTION::UP",
    Down = "BASIC_ACTION::DOWN",
    Left = "BASIC_ACTION::LEFT",
    Right = "BASIC_ACTION::RIGHT",
    Previous = "BASIC_ACTION::PREVIOUS",
    Next = "BASIC_ACTION::NEXT",
    Back = "BASIC_ACTION::BACK"

  }
}
