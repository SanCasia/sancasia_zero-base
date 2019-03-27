/// <reference path="../../../node_modules/sancasia_zero-core/obj/sancasia_zero.core.d.ts" />
/// <reference path="./menu_action_interpreter_base.ts" />

namespace sczBase
{
  export class MenuActionInterpreter
      extends  MenuActionInterpreterBase
  {
    public constructor(eventbus: sczCore.EventBus)
    {
      super(eventbus);
    }

    public activate()
    {
      super.activate();
      document.addEventListener('keyup', this.keyUpInterpreter);
      document.addEventListener('keydown', this.keyDownInterpreter);
    }

    public deactivate()
    {
      super.deactivate();
      document.removeEventListener('keyup', this.keyUpInterpreter);
      document.removeEventListener('keydown', this.keyDownInterpreter);
    }

    protected keyDownInterpreter = (event: KeyboardEvent): void =>
    {
      event.preventDefault();
    }

    protected keyUpInterpreter = (event: KeyboardEvent): void =>
    {
      event.preventDefault();

      // why not switch?
      /*
        because "break" exits the switch statement,
        therefore skipping other meanings of a specific key code.
        To make it work with `switch` one could
        A) find something like `continue` instead of `break` (not found)
        B) instead of sorting by functionality, sorting by key code
        C) use one swithc per functionality
      */

      /* B)
      switch(event.keyCode)
      {
        case 19: // pause
          super.publishMenuAction();
        case 27: // esc
          super.publishMenuAction();
          super.publishReturnAction();
        case ...

      }
      */

      /* C)
      // toggle menu
      switch(event.keyCode)
      {
        case 19:  // pause
        case 27:  // esc
        case 80:  // "p"
          super.publishMenuAction();
      }

      // return
      switch(event.keyCode)
      {
        case 8:   // backspace
        case 27:  // esc
        case 46:  // delete
          super.publishReturnAction();
      }
      */

      // menu:
      //  pause, esc, "p"
      if(event.keyCode ==  19 || event.keyCode ==  27 || event.keyCode ==  80)
      {
        super.publishCloseMenuAction();
      }

      // return:
      //  backspace, esc, delete
      if(event.keyCode ==  8 || event.keyCode ==  27 || event.keyCode ==  46)
      {
        super.publishReturnAction();
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
        super.publishPreviousMenuAction();
      }

      // next:
      //  alt + arrow_right, ctl + arrow_right
      if(event.altKey && event.keyCode == 39
          || event.ctrlKey && event.keyCode == 39)
      {
        super.publishNextMenuAction();
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
