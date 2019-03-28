/// <reference path="../../../node_modules/sancasia_zero-core/obj/sancasia_zero.core.d.ts" />

namespace sczBase
{
  export class    GamePlayActionSystemBase
      extends     sczCore.ActionSystem
  {
    constructor(
        requires: Array<Function>,
        eventbus: sczCore.EventBus)
    {
      super(
        requires,
        [ StartMoveUpActionEvent.Name,
          StopMoveUpActionEvent.Name,
          StartMoveDownActionEvent.Name,
          StopMoveDownActionEvent.Name,
          StartMoveLeftActionEvent.Name,
          StopMoveLeftActionEvent.Name,
          StartMoveRightActionEvent.Name,
          StopMoveRightActionEvent.Name],
        eventbus);
    }

    protected processEntity(
      deltaTime: number,
      components: sczCore.Component[],
      actionEvent: sczCore.ActionEvent): void
    {
      switch(actionEvent.name)
      {
        case StartMoveUpActionEvent.Name:
          this.startMoveUp(deltaTime, components, actionEvent);
          break;
        case StopMoveUpActionEvent.Name:
          this.stopMoveUp(deltaTime, components, actionEvent);
          break;
        case StartMoveDownActionEvent.Name:
          this.startMoveDown(deltaTime, components, actionEvent);
          break;
        case StopMoveDownActionEvent.Name:
          this.stopMoveDown(deltaTime, components, actionEvent);
          break;
        case StartMoveLeftActionEvent.Name:
          this.startMoveLeft(deltaTime, components, actionEvent);
          break;
        case StopMoveLeftActionEvent.Name:
          this.stopMoveLeft(deltaTime, components, actionEvent);
          break;
        case StartMoveRightActionEvent.Name:
          this.startMoveRight(deltaTime, components, actionEvent);
          break;
        case StopMoveRightActionEvent.Name:
          this.stopMoveRight(deltaTime, components, actionEvent);
          break;
      }
    }

    public startMoveUp(
      _deltaTime: number,
      _components: sczCore.Component[],
      _actionEvent: sczCore.ActionEvent)
    {}

    public stopMoveUp(
      _deltaTime: number,
      _components: sczCore.Component[],
      _actionEvent: sczCore.ActionEvent)
    {}

    public startMoveDown(
      _deltaTime: number,
      _components: sczCore.Component[],
      _actionEvent: sczCore.ActionEvent)
    {}

    public stopMoveDown(
      _deltaTime: number,
      _components: sczCore.Component[],
      _actionEvent: sczCore.ActionEvent)
    {}

    public startMoveLeft(
      _deltaTime: number,
      _components: sczCore.Component[],
      _actionEvent: sczCore.ActionEvent)
    {}

    public stopMoveLeft(
      _deltaTime: number,
      _components: sczCore.Component[],
      _actionEvent: sczCore.ActionEvent)
    {}

    public startMoveRight(
      _deltaTime: number,
      _components: sczCore.Component[],
      _actionEvent: sczCore.ActionEvent)
    {}

    public stopMoveRight(
      _deltaTime: number,
      _components: sczCore.Component[],
      _actionEvent: sczCore.ActionEvent)
    {}
  }
}
