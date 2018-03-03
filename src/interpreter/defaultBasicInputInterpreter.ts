/// <reference path="../../node_modules/sancasia_zero-core/obj/sancasia_zero.core.d.ts" />

namespace sczBase
{
  export class DefaultBasicInputInterpreter
      extends  BasicInputInterpreterBase
  {
    public constructor(eventbus: sczCore.EventBus)
    {
      super(eventbus);
    }

    public activate()
    {
      document.addEventListener('keyup', this.keyUpInterpreter);
      document.addEventListener('keydown', this.keyDownInterpreter);
    }

    public deactivate()
    {
      document.removeEventListener('keyup', this.keyUpInterpreter);
      document.removeEventListener('keydown', this.keyDownInterpreter);
    }

    protected keyDownInterpreter = (event: KeyboardEvent): void =>
    {
      event.preventDefault();
    }

    protected keyUpInterpreter = (event: KeyboardEvent): void =>
    {
      // menu:
      //  pause, esc, "p"
      if(event.keyCode ==  19 || event.keyCode ==  27 || event.keyCode ==  80)
      {
        super.publishMenuAction();
      }

      // return:
      //  backspace, esc, delete
      if(event.keyCode ==  8 || event.keyCode ==  27 || event.keyCode ==  46)
      {
        super.publishReturnAction();
      }

      // start:
      //  enter, space
      if(event.keyCode ==  13 || event.keyCode ==  32)
      {
        super.publishStartAction()
      }

      // stop:
      //  backspace, pause, esc, delete, "p"
      if(event.keyCode ==  8 || event.keyCode ==  19 || event.keyCode ==  27
          || event.keyCode ==  46 || event.keyCode ==  80)
      {
        super.publishStopAction();
      }

      // quick save:
      //  "f6"
      if(event.keyCode ==  117)
      {
        super.publishQuickSaveAction();
      }

      // quick load:
      //  "f5"
      if(event.keyCode ==  116)
      {
        super.publishQuickLoadAction();
      }

      // select:
      //  enter, space
      if(event.keyCode ==  13 || event.keyCode ==  32)
      {
        super.publishSelectAction();
      }

      // unselect:
      //  enter, space
      if(event.keyCode ==  13 || event.keyCode ==  32)
      {
        super.publishUnselectAction();
      }

      // undo:
      //  ctl + z
      if(event.ctrlKey && event.keyCode == 90)
      {
        super.publishUndoAction();
      }

      // redo:
      //  ctl + shift + z
      if(event.ctrlKey && event.shiftKey && event.keyCode == 90)
      {
        super.publishRedoAction();
      }

      // up:
      //  arrow_up, "w"
      if(event.keyCode == 38 || event.keyCode == 87)
      {
        super.publishUpAction();
      }

      // down:
      //  arrow_down, "s"
      if(event.keyCode == 40 || event.keyCode == 83)
      {
        super.publishDownAction();
      }

      // left:
      //  arrow_left, "a"
      if(event.keyCode == 37 || event.keyCode == 65)
      {
        super.publishLeftAction();
      }

      // right:
      //  arrow_right, "d"
      if(event.keyCode == 39 || event.keyCode == 68)
      {
        super.publishRightAction();
      }

      // top:
      //  home
      if(event.keyCode == 36)
      {
        super.publishTopAction();
      }

      // bottom:
      //  end
      if(event.keyCode == 35)
      {
        super.publishBottomAction();
      }

      // previous:
      //  backspace, alt + arrow_left, ctl + arrow_left
      if(event.keyCode == 8
          || event.altKey && event.keyCode == 37
          || event.ctrlKey && event.keyCode == 37)
      {
        super.publishPreviousAction();
      }

      // next:
      //  alt + arrow_right, ctl + arrow_right
      if(event.altKey && event.keyCode == 39
          || event.ctrlKey && event.keyCode == 39)
      {
        super.publishNextAction();
      }


      // back:
      //  backspace, alt + arrow_left, ctl + arrow_left
      if(event.keyCode == 8
          || event.altKey && event.keyCode == 37
          || event.ctrlKey && event.keyCode == 37)
      {
        super.publishBackAction();
      }
    }
  }
}
