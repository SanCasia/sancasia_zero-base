/// <reference path="../../../node_modules/sancasia_zero-core/obj/sancasia_zero.core.d.ts" />
/// <reference path="./game_play_action_interpreter_base.ts" />

namespace sczBase
{
  export class GamePlayActionInterpreter
      extends  GamePlayActionInterpreterBase
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

    protected keyUpInterpreter = (event: KeyboardEvent): void =>
    {
      event.preventDefault();
      // up:
      //  arrow_up, "w"
      if(event.keyCode == 38 || event.keyCode == 87)
      {
        super.publishStopMoveUpAction();
      }

      // down:
      //  arrow_down, "s"
      if(event.keyCode == 40 || event.keyCode == 83)
      {
        super.publishStopMoveDownAction();
      }

      // left:
      //  arrow_left, "a"
      if(event.keyCode == 37 || event.keyCode == 65)
      {
        super.publishStopMoveLeftAction();
      }

      // right:
      //  arrow_right, "d"
      if(event.keyCode == 39 || event.keyCode == 68)
      {
        super.publishStopMoveRightAction();
      }
    }

    protected keyDownInterpreter = (event: KeyboardEvent): void =>
    {
      if(event.repeat) return;
      event.preventDefault();
      // up:
      //  arrow_up, "w"
      if(event.keyCode == 38 || event.keyCode == 87)
      {
        super.publishStartMoveUpAction();
      }

      // down:
      //  arrow_down, "s"
      if(event.keyCode == 40 || event.keyCode == 83)
      {
        super.publishStartMoveDownAction();
      }

      // left:
      //  arrow_left, "a"
      if(event.keyCode == 37 || event.keyCode == 65)
      {
        super.publishStartMoveLeftAction();
      }

      // right:
      //  arrow_right, "d"
      if(event.keyCode == 39 || event.keyCode == 68)
      {
        super.publishStartMoveRightAction();
      }
    }
  }
}
