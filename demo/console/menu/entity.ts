/// <reference path="../../../node_modules/sancasia_zero-core/obj/sancasia_zero.core.d.ts" />
/// <reference path="../../../obj/sancasia_zero.base.d.ts" />

namespace sczBase.demo.action.menu
{
  export class MenuState
    extends sczCore.Entity
  {
    constructor(id: number, demoRepository: DemoRepository)
    {
      super(id)

      let menu = new MenuComponent(MenuFactory.create(demoRepository));
      this.addComponent(menu);
      let game = new GameStateComponent();
      this.addComponent(game);
      let settings = new GameSettingsComponent();
      this.addComponent(settings);
    }

    public menuReturn(): void
    {
      let menu = <MenuComponent>this.getComponent(MenuComponent);
      menu.ret();
      this.updateComponent(menu);
    }

    public getGameState(): GameState
    {
      let game = <GameStateComponent>this.getComponent(GameStateComponent);
      return new GameState(game.score);
    }

    public getMenu()
    {
      let menu = <MenuComponent>this.getComponent(MenuComponent);
      return menu;
    }

    public getDifficulty(): Difficulty
    {
      let settings = <GameSettingsComponent>this.getComponent(GameSettingsComponent);
      return settings.difficulty;
    }

    public getVolume(): number
    {
      let settings = <GameSettingsComponent>this.getComponent(GameSettingsComponent);
      return settings.volume;
    }

    public setDifficulty(difficulty: Difficulty): void
    {
      let settings = <GameSettingsComponent>this.getComponent(GameSettingsComponent);
      settings.difficulty = difficulty;
      this.updateComponent(settings);
    }

    public setVolume(volume: number): void
    {
      let settings = <GameSettingsComponent>this.getComponent(GameSettingsComponent);
      settings.volume = volume;
      this.updateComponent(settings);
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

  export class MenuComponent
    extends sczCore.Component
  {
    constructor(menu: MenuEntry)
    {
      super();

      this.menu = menu;
      this.stack = [menu];
    }

    public readonly menu: MenuEntry;
    public stack: MenuEntry[];
    public cursorPosition: number = 0;

    public getCurrentMenu(): MenuEntry
    {
      if(this.stack.length == 0)
        return this.menu
      return this.stack[this.stack.length -1];
    }

    public ret(): void
    {
      let current = this.stack.pop();
      let ret = this.stack[this.stack.length -1];
      this.cursorPosition = ret.children.indexOf(current);
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
    public difficulty: Difficulty = Difficulty.Medium;
    public volume: number = 100;
  }
}
