/// <reference path="../../../node_modules/sancasia_zero-core/obj/sancasia_zero.core.d.ts" />
/// <reference path="../../../obj/sancasia_zero.base.d.ts" />

namespace sczBase.demo.action.game
{
  export class ConsoleRenderSystem
      extends sczCore.SystemBase
  {
    protected changeCheck: number;

    public constructor(
      eventbus: sczCore.EventBus)
    {
      super([GameStateComponent], eventbus, sczCore.EngineEvent.Render);
      this.changeCheck = -1;
    }

    protected processEntity(
      _deltaTime: number, [game]: [GameStateComponent]): void
    {
      this.draw(game)
    }

    private draw(game: GameStateComponent): void
    {
      if(this.changeCheck == game.score)
        return;
      this.changeCheck = game.score;

      console.clear();
      console.log("[menu, quick save, quick load]");
      console.log("[ esc      f6          f5    ]")
      console.log("score: ", game.score);
    }

    public deactivate()
    {
      super.deactivate();

      this.changeCheck = -1;
    }
  }
}
