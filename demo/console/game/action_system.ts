/// <reference path="../../../node_modules/sancasia_zero-core/obj/sancasia_zero.core.d.ts" />
/// <reference path="../../../obj/sancasia_zero.base.d.ts" />

namespace sczBase.demo.action.game
{
  export class GameActionSystem
    extends GamePlayActionSystemBase
    //extends PlayerActionSystemBase
  {
    public constructor(
      eventbus: sczCore.EventBus)
    {
      super([GameStateComponent, GameSettingsComponent], eventbus);
    }

    public startMoveUp(
      _deltaTime: number,
      [game, settings]: [GameStateComponent, GameSettingsComponent])
    {
      switch(settings.difficulty)
      {
        case Difficulty.Easy:
          game.score++;
        case Difficulty.Medium:
          game.score++;
        case Difficulty.Hard:
          game.score++;
      }
    }

    public startMoveDown(
      _deltaTime: number,
      [game, settings]: [GameStateComponent, GameSettingsComponent])
    {
      switch(settings.difficulty)
      {
        case Difficulty.Hard:
          game.score--;
        case Difficulty.Medium:
          game.score--;
        case Difficulty.Easy:
          game.score--;
      }
    }
  }

  export class HudActionSystem
      extends HudActionSystemBase
  {
    protected demoRepository: DemoRepository;
    protected currentScene: GameScene;
    game: sczCore.Game;
    menuSceneId: number;

    public constructor(
    demoRepository: DemoRepository,
    currentScene: GameScene,
    game: sczCore.Game, menuSceneId: number,
      eventbus: sczCore.EventBus)
    {
      super([GameStateComponent], eventbus);
      this.currentScene = currentScene;
      this.game = game;
      this.menuSceneId = menuSceneId;
      this.demoRepository = demoRepository;
    }

    public menu(
      _deltaTime: number,
      [_]: [GameStateComponent],
      _actionEvent: sczCore.ActionEvent)
    {
      this.currentScene.deactivate();
      this.game.getScene(this.menuSceneId).activate();
    }

    public quickSave(_: number, [state]: [GameStateComponent])
    {
      let game = new action.GameState(state.score);
      this.demoRepository.saveGame("Quick Save", game);
    }

    public quickLoad(_: number, [state]: [GameStateComponent])
    {
      let save = this.demoRepository.loadGame("Quick Save");
      state.score = save.score;
    }
  }
}
