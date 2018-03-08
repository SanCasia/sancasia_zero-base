/// <reference path="../../node_modules/sancasia_zero-core/obj/sancasia_zero.core.d.ts" />

namespace sczBase
{
  export class    BasicActionSystem
      extends     ActionSystemBase
  {
    protected handlerRegistry: Map<Function, ((message: any) => void)>;
    protected actionHandler: BasicActionHandler;

    constructor(
        actionHandler: BasicActionHandler,
        requires: Array<Function>,
        eventbus: sczCore.EventBus,
        event: sczCore.EngineEvent)
    {
      super(requires, eventbus, event);
      this.actionHandler = actionHandler;
      this.handlerRegistry = new Map<Function, ((message: any) => void)>();
    }

    protected bindToActionHandler(
      eventType: any,
      eventHandler: (
        (deltatime: number,
          requires: sczCore.Component[],
          ...args: any[]) => void))
    {
      this.handlerRegistry.set(
        eventHandler,
        (...args: any[]) => {
          this.actionQueue.push({
            call: eventHandler.bind(this.actionHandler),
            args: args
          });
        }
      );

      this.eventbus.subscribe(
          eventType,
          this.handlerRegistry.get(eventHandler));
    }

    protected unbindFromActionHandler(
      eventType: any,
      eventHandler: (
        (deltatime: number,
          requires: sczCore.Component[],
          ...args: any[]) => void))
    {
      this.eventbus.unsubscribe(
          eventType,
          this.handlerRegistry.get(eventHandler));

      this.handlerRegistry.delete(eventHandler);
    }

    public activate(): void
    {
      // basic actions
      this.bindToActionHandler(
          BasicAction.Menu,
          this.actionHandler.menu);

      this.bindToActionHandler(
          BasicAction.Return,
          this.actionHandler.return);

      this.bindToActionHandler(
          BasicAction.Start,
          this.actionHandler.start);

      this.bindToActionHandler(
          BasicAction.Stop,
          this.actionHandler.stop);

      this.bindToActionHandler(
          BasicAction.QuickSave,
          this.actionHandler.quickSave);

      this.bindToActionHandler(
          BasicAction.QuickLoad,
          this.actionHandler.quickLoad);

      // menu actions
      this.bindToActionHandler(
          BasicAction.Select,
          this.actionHandler.select);

      this.bindToActionHandler(
          BasicAction.Unselect,
          this.actionHandler.unselect);

      this.bindToActionHandler(
          BasicAction.Undo,
          this.actionHandler.undo);

      this.bindToActionHandler(
          BasicAction.Redo,
          this.actionHandler.redo);

      // menu navigation
      this.bindToActionHandler(
          BasicAction.Up,
          this.actionHandler.up);

      this.bindToActionHandler(
          BasicAction.Down,
          this.actionHandler.down);

      this.bindToActionHandler(
          BasicAction.Left,
          this.actionHandler.left);

      this.bindToActionHandler(
          BasicAction.Right,
          this.actionHandler.right);

      this.bindToActionHandler(
          BasicAction.Top,
          this.actionHandler.top);

      this.bindToActionHandler(
          BasicAction.Bottom,
          this.actionHandler.bottom);

      this.bindToActionHandler(
          BasicAction.Previous,
          this.actionHandler.previous);

      this.bindToActionHandler(
          BasicAction.Next,
          this.actionHandler.next);

      this.bindToActionHandler(
          BasicAction.Back,
          this.actionHandler.back);

      super.activate();
    }

    public deactivate(): void
    {
      // basic actions
      this.unbindFromActionHandler(
          BasicAction.Menu,
          this.actionHandler.menu);

      this.unbindFromActionHandler(
          BasicAction.Return,
          this.actionHandler.return);

      this.unbindFromActionHandler(
          BasicAction.Start,
          this.actionHandler.start);

      this.unbindFromActionHandler(
          BasicAction.Stop,
          this.actionHandler.stop);

      this.unbindFromActionHandler(
          BasicAction.QuickSave,
          this.actionHandler.quickSave);

      this.unbindFromActionHandler(
          BasicAction.QuickLoad,
          this.actionHandler.quickLoad);

      // menu actions
      this.unbindFromActionHandler(
          BasicAction.Select,
          this.actionHandler.select);

      this.unbindFromActionHandler(
          BasicAction.Unselect,
          this.actionHandler.unselect);

      this.unbindFromActionHandler(
          BasicAction.Undo,
          this.actionHandler.undo);

      this.unbindFromActionHandler(
          BasicAction.Redo,
          this.actionHandler.redo);

      // menu navigation
      this.unbindFromActionHandler(
          BasicAction.Up,
          this.actionHandler.up);

      this.unbindFromActionHandler(
          BasicAction.Down,
          this.actionHandler.down);

      this.unbindFromActionHandler(
          BasicAction.Left,
          this.actionHandler.left);

      this.unbindFromActionHandler(
          BasicAction.Right,
          this.actionHandler.right);

      this.unbindFromActionHandler(
          BasicAction.Top,
          this.actionHandler.top);

      this.unbindFromActionHandler(
          BasicAction.Bottom,
          this.actionHandler.bottom);

      this.unbindFromActionHandler(
          BasicAction.Previous,
          this.actionHandler.previous);

      this.unbindFromActionHandler(
          BasicAction.Next,
          this.actionHandler.next);

      this.unbindFromActionHandler(
          BasicAction.Back,
          this.actionHandler.back);

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
    Top = "BASIC_ACTION::TOP",
    Bottom = "BASIC_ACTION::BUTTOM",
    Previous = "BASIC_ACTION::PREVIOUS",
    Next = "BASIC_ACTION::NEXT",
    Back = "BASIC_ACTION::BACK"

  }
}
