/// <reference path="../../../node_modules/sancasia_zero-core/obj/sancasia_zero.core.d.ts" />
/// <reference path="../../../obj/sancasia_zero.base.d.ts" />

namespace sczBase.demo.action.game
{
  export class GameScene extends sczCore.SceneBase
  {
    protected gameState: GameState;
    protected demoRepository: DemoRepository;

    constructor(
      id: number,
      demoRepository: DemoRepository,
      game: sczCore.Game, menuSceneId: number,
      eventBus: sczCore.EventBus)
    {
      super(id, eventBus);
      this.demoRepository = demoRepository;

      // entity
      this.gameState = new GameState(IdGenerator.next());

      // interpreter
      let hudInterpreter =
      new HudActionInterpreter(eventBus);
      this.addProp(hudInterpreter);

      let gamePlayInterpreter =
        new GamePlayActionInterpreter(eventBus);
      this.addProp(gamePlayInterpreter);

      // game action system
      let gameActionSystem = new GameActionSystem(eventBus);
      gameActionSystem.registerEntity(this.gameState);
      this.addProp(gameActionSystem);

      // hud action system
      let hudActionSystem = new HudActionSystem(
        demoRepository,
        this, game, menuSceneId,
        eventBus);
      hudActionSystem.registerEntity(this.gameState);
      this.addProp(hudActionSystem);

      // render system
      let renderSystem = new ConsoleRenderSystem(eventBus);
      renderSystem.registerEntity(this.gameState);
      this.addProp(renderSystem);
    }

    public activate()
    {
      super.activate();

      // load game state
      let game = this.demoRepository.getGame();
      let settings = this.demoRepository.getSettings();
      this.gameState.update(game, settings)
    }

    public deactivate()
    {
      super.deactivate();

      // store game state
      let score = this.gameState.getScore();
      this.demoRepository.setScore(score);
    }
  }
}
