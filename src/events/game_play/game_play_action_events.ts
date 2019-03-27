/// <reference path="../../../node_modules/sancasia_zero-core/obj/sancasia_zero.core.d.ts" />

namespace sczBase
{
  export class StartMoveUpActionEvent implements sczCore.ActionEvent
  {
    static Name = "ACITON_EVENT::GAME_PLAY_ACTION::START_MOVE_UP";
    name = StartMoveUpActionEvent.Name;
    occurrenceTime = new Date();
  }

  export class StopMoveUpActionEvent implements sczCore.ActionEvent
  {
    static Name = "ACITON_EVENT::GAME_PLAY_ACTION::STOP_MOVE_UP";
    name = StopMoveUpActionEvent.Name;
    occurrenceTime = new Date();
  }

  export class StartMoveDownActionEvent implements sczCore.ActionEvent
  {
    static Name = "ACITON_EVENT::GAME_PLAY_ACTION::START_MOVE_DOWN";
    name = StartMoveDownActionEvent.Name;
    occurrenceTime = new Date();
  }

  export class StopMoveDownActionEvent implements sczCore.ActionEvent
  {
    static Name = "ACITON_EVENT::GAME_PLAY_ACTION::STOP_MOVE_DOWN";
    name = StopMoveDownActionEvent.Name;
    occurrenceTime = new Date();
  }

  export class StartMoveLeftActionEvent implements sczCore.ActionEvent
  {
    static Name = "ACITON_EVENT::GAME_PLAY_ACTION::START_MOVE_LEFT";
    name = StartMoveLeftActionEvent.Name;
    occurrenceTime = new Date();
  }

  export class StopMoveLeftActionEvent implements sczCore.ActionEvent
  {
    static Name = "ACITON_EVENT::GAME_PLAY_ACTION::STOP_MOVE_LEFT";
    name = StopMoveLeftActionEvent.Name;
    occurrenceTime = new Date();
  }

  export class StartMoveRightActionEvent implements sczCore.ActionEvent
  {
    static Name = "ACITON_EVENT::GAME_PLAY_ACTION::START_MOVE_RIGHT";
    name = StartMoveRightActionEvent.Name;
    occurrenceTime = new Date();

  }

  export class StopMoveRightActionEvent implements sczCore.ActionEvent
  {
    static Name = "ACITON_EVENT::GAME_PLAY_ACTION::STOP_MOVE_RIGHT";
    name = StopMoveRightActionEvent.Name;
    occurrenceTime = new Date();
  }
}
