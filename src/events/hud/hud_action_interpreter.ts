/// <reference path="../../../node_modules/sancasia_zero-core/obj/sancasia_zero.core.d.ts" />
/// <reference path="./hud_action_interpreter_base.ts" />

namespace sczBase
{
  export class HudActionInterpreter
      extends  HudActionInterpreterBase
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
      // menu:
      //  pause, esc, "p"
      if(event.keyCode ==  19 || event.keyCode ==  27 || event.keyCode ==  80)
      {
        super.publishMenuAction();
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
    }
  }
}
