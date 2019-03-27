/// <reference path="../../../node_modules/sancasia_zero-core/obj/sancasia_zero.core.d.ts" />

namespace sczBase
{
  export class    HudActionSystemBase
      extends     sczCore.ActionSystem
  {
    constructor(
        requires: Array<Function>,
        eventbus: sczCore.EventBus)
    {
      super(
        requires,
        [ MenuActionEvent.Name,
          StartActionEvent.Name,
          StopActionEvent.Name,
          NextActionEvent.Name,
          PreviousActionEvent.Name,
          QuickSaveActionEvent.Name,
          QuickLoadActionEvent.Name],
        eventbus);
    }

    protected processEntity(
      deltaTime: number,
      components: sczCore.Component[],
      actionEvent: sczCore.ActionEvent): void
    {
      switch(actionEvent.name)
      {
        case MenuActionEvent.Name:
          this.menu(deltaTime, components, actionEvent);
          break;
        case StartActionEvent.Name:
          this.start(deltaTime, components, actionEvent);
          break;
        case StopActionEvent.Name:
          this.stop(deltaTime, components, actionEvent);
          break;
        case NextActionEvent.Name:
          this.next(deltaTime, components, actionEvent);
          break;
        case PreviousActionEvent.Name:
          this.previous(deltaTime, components, actionEvent);
          break;
        case QuickSaveActionEvent.Name:
          this.quickSave(deltaTime, components, actionEvent);
          break;
        case QuickLoadActionEvent.Name:
          this.quickLoad(deltaTime, components, actionEvent);
          break;
      }
    }
    public menu(
      _deltaTime: number,
      _components: sczCore.Component[],
      _actionEvent: sczCore.ActionEvent)
    {}

    public start(
      _deltaTime: number,
      _components: sczCore.Component[],
      _actionEvent: sczCore.ActionEvent)
    {}

    public stop(
      _deltaTime: number,
      _components: sczCore.Component[],
      _actionEvent: sczCore.ActionEvent)
    {}

    public next(
      _deltaTime: number,
      _components: sczCore.Component[],
      _actionEvent: sczCore.ActionEvent)
    {}

    public previous(
      _deltaTime: number,
      _components: sczCore.Component[],
      _actionEvent: sczCore.ActionEvent)
    {}

    public quickSave(
      _deltaTime: number,
      _components: sczCore.Component[],
      _actionEvent: sczCore.ActionEvent)
    {}

    public quickLoad(
      _deltaTime: number,
      _components: sczCore.Component[],
      _actionEvent: sczCore.ActionEvent)
    {}
  }
}
