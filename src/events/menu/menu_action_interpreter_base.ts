/// <reference path="../../../node_modules/sancasia_zero-core/obj/sancasia_zero.core.d.ts" />

namespace sczBase
{
  export abstract class MenuActionInterpreterBase
    extends sczCore.ActionInterpreter
  {

    protected publishCloseMenuAction(): void
    {
      this.publishEvent(new CloseMenuActionEvent());
    }

    protected publishReturnAction(): void
    {
      this.publishEvent(new ReturnActionEvent());
    }

    protected publishSelectAction(): void
    {
      this.publishEvent(new SelectActionEvent());
    }

    protected publishUnselectAction(): void
    {
      this.publishEvent(new UnselectActionEvent());
    }

    protected publishUndoAction(): void
    {
      this.publishEvent(new UndoActionEvent());
    }

    protected publishRedoAction(): void
    {
      this.publishEvent(new RedoActionEvent());
    }

    protected publishUpAction(): void
    {
      this.publishEvent(new UpActionEvent());
    }

    protected publishDownAction(): void
    {
      this.publishEvent(new DownActionEvent());
    }

    protected publishLeftAction(): void
    {
      this.publishEvent(new LeftActionEvent());
    }

    protected publishRightAction(): void
    {
      this.publishEvent(new RightActionEvent());
    }

    protected publishTopAction(): void
    {
      this.publishEvent(new TopActionEvent());
    }

    protected publishBottomAction(): void
    {
      this.publishEvent(new BottomActionEvent());
    }

    protected publishNextMenuAction(): void
    {
      this.publishEvent(new NextMenuActionEvent());
    }

    protected publishPreviousMenuAction(): void
    {
      this.publishEvent(new PreviousMenuActionEvent());
    }

    protected publishBackAction(): void
    {
      this.publishEvent(new BackActionEvent());
    }
  }
}
