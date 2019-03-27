/// <reference path="../../node_modules/sancasia_zero-core/obj/sancasia_zero.core.d.ts" />
/// <reference path="../../obj/sancasia_zero.base.d.ts" />

namespace sczBase.demo.action
{
  export class IdGenerator
  {
    private static IdCounter = 0;
    static next(): number
    {
      return this.IdCounter++;
    }
  }

  export enum Difficulty
  {
    Easy,
    Medium,
    Hard
  }

  export class SettingsState
  {
    public difficulty: Difficulty;
    public volume: number;
    constructor(difficulty: Difficulty, volume: number)
    {
      this.difficulty = difficulty;
      this.volume = volume;
    }
  }

  export class GameState
  {
    public score: number;
    constructor(score: number = 0)
    {
      this.score = score;
    }
  }

  export class DemoRepository
  {
    protected settings: SettingsState;
    protected game: GameState;
    protected saves: Map<string, GameState>

    constructor()
    {
      this.settings = new SettingsState(Difficulty.Medium, 100);
      this.game = new GameState(0);
      this.saves = new Map<string, GameState>();
    }

    public getGame(): GameState
    {
      return new GameState(
        this.game.score);
    }

    public getSettings(): SettingsState
    {
      return new SettingsState(
        this.settings.difficulty,
        this.settings.volume
      );
    }

    public setSettings(settings: SettingsState): void
    {
      this.settings.difficulty = settings.difficulty;
      this.settings.volume = settings.volume;
    }

    public setScore(score: number): void
    {
      this.game.score = score;
    }

    saveGame(saveName: string, gameState: GameState): void {
      this.saves.set(saveName, gameState);
    }

    getSavesNames(): Array<string> {
      return Array.from(this.saves.keys());
    }

    loadGame(saveName: string): GameState {
      let save = this.saves.get(saveName);
      this.game = save;

      return this.getGame();
    }
  }
}
