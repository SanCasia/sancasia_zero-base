/// <reference path="../../../node_modules/sancasia_zero-core/obj/sancasia_zero.core.d.ts" />

namespace sczBase
{
  export class    MenuActionSystemBase
      extends     sczCore.ActionSystem
  {
    constructor(
        requires: Array<Function>,
        eventbus: sczCore.EventBus)
    {
      super(
        requires,
        [ CloseMenuActionEvent.Name,
          ReturnActionEvent.Name,
          SelectActionEvent.Name,
          UnselectActionEvent.Name,
          UndoActionEvent.Name,
          RedoActionEvent.Name,
          UpActionEvent.Name,
          DownActionEvent.Name,
          LeftActionEvent.Name,
          RightActionEvent.Name,
          TopActionEvent.Name,
          BottomActionEvent.Name,
          NextMenuActionEvent.Name,
          PreviousMenuActionEvent.Name,
          BackActionEvent.Name ],
        eventbus);
    }

    protected processEvent(
      deltaTime: number,
      components: sczCore.Component[],
      actionEvent: sczCore.ActionEvent): void
    {
      switch(actionEvent.name)
      {
        case CloseMenuActionEvent.Name:
          this.closeMenu(deltaTime, components, actionEvent);
          break;
        case ReturnActionEvent.Name:
          this.ret(deltaTime, components, actionEvent);
          break;
        case SelectActionEvent.Name:
          this.select(deltaTime, components, actionEvent);
          break;
        case UnselectActionEvent.Name:
          this.unselect(deltaTime, components, actionEvent);
          break;
        case UndoActionEvent.Name:
          this.undo(deltaTime, components, actionEvent);
          break;
        case RedoActionEvent.Name:
          this.redo(deltaTime, components, actionEvent);
          break;
        case UpActionEvent.Name:
          this.up(deltaTime, components, actionEvent);
          break;
        case DownActionEvent.Name:
          this.down(deltaTime, components, actionEvent);
          break;
        case LeftActionEvent.Name:
          this.left(deltaTime, components, actionEvent);
          break;
        case RightActionEvent.Name:
          this.right(deltaTime, components, actionEvent);
          break;
        case TopActionEvent.Name:
          this.top(deltaTime, components, actionEvent);
          break;
        case BottomActionEvent.Name:
          this.bottom(deltaTime, components, actionEvent);
          break;
        case NextMenuActionEvent.Name:
          this.nextMenu(deltaTime, components, actionEvent);
          break;
        case PreviousMenuActionEvent.Name:
          this.previousMenu(deltaTime, components, actionEvent);
          break;
        case BackActionEvent.Name:
          this.back(deltaTime, components, actionEvent);
          break;
      }
    }

    public closeMenu(
      _deltaTime: number,
      _components: sczCore.Component[],
      _actionEvent: sczCore.ActionEvent)
    {}

    public ret(
      _deltaTime: number,
      _components: sczCore.Component[],
      _actionEvent: sczCore.ActionEvent)
    {}

    public select(
      _deltaTime: number,
      _components: sczCore.Component[],
      _actionEvent: sczCore.ActionEvent)
    {}

    public unselect(
      _deltaTime: number,
      _components: sczCore.Component[],
      _actionEvent: sczCore.ActionEvent)
    {}

    public undo(
      _deltaTime: number,
      _components: sczCore.Component[],
      _actionEvent: sczCore.ActionEvent)
    {}

    public redo(
      _deltaTime: number,
      _components: sczCore.Component[],
      _actionEvent: sczCore.ActionEvent)
    {}

    public up(
      _deltaTime: number,
      _components: sczCore.Component[],
      _actionEvent: sczCore.ActionEvent)
    {}

    public down(
      _deltaTime: number,
      _components: sczCore.Component[],
      _actionEvent: sczCore.ActionEvent)
    {}

    public left(
      _deltaTime: number,
      _components: sczCore.Component[],
      _actionEvent: sczCore.ActionEvent)
    {}

    public right(
      _deltaTime: number,
      _components: sczCore.Component[],
      _actionEvent: sczCore.ActionEvent)
    {}

    public top(
      _deltaTime: number,
      _components: sczCore.Component[],
      _actionEvent: sczCore.ActionEvent)
    {}

    public bottom(
      _deltaTime: number,
      _components: sczCore.Component[],
      _actionEvent: sczCore.ActionEvent)
    {}

    public nextMenu(
      _deltaTime: number,
      _components: sczCore.Component[],
      _actionEvent: sczCore.ActionEvent)
    {}

    public previousMenu(
      _deltaTime: number,
      _components: sczCore.Component[],
      _actionEvent: sczCore.ActionEvent)
    {}

    public back(
      _deltaTime: number,
      _components: sczCore.Component[],
      _actionEvent: sczCore.ActionEvent)
    {}
  }
}
