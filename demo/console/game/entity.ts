/// <reference path="../../../node_modules/sancasia_zero-core/obj/sancasia_zero.core.d.ts" />
/// <reference path="../../../obj/sancasia_zero.base.d.ts" />

namespace sczBase.demo.action.game
{
  export class GameState extends sczCore.Entity
  {
    constructor(id: number)
    {
      super(id)

      let game = new GameStateComponent();
      this.addComponent(game);
      let settings = new GameSettingsComponent();
      this.addComponent(settings);
    }

    public getScore(): number
    {
      let game = <GameStateComponent>this.getComponent(GameStateComponent);
      return game.score;
    }

    public update(game: action.GameState, settings: action.SettingsState): void
    {
      let gameComponent = <GameStateComponent>this.getComponent(GameStateComponent);
      gameComponent.score = game.score;
      this.updateComponent(gameComponent);

      let settingsComponent = <GameSettingsComponent>this.getComponent(GameSettingsComponent);
      settingsComponent.difficulty = settings.difficulty;
      settingsComponent.volume = settings.volume;
      this.updateComponent(settingsComponent);
    }
  }

  export class GameStateComponent
    extends sczCore.Component
  {
    public score: number = 0;
  }

  export class GameSettingsComponent
    extends sczCore.Component
  {
    public difficulty: Difficulty;
    public volume: number;
  }
}
