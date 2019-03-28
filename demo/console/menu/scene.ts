/// <reference path="../../../node_modules/sancasia_zero-core/obj/sancasia_zero.core.d.ts" />
/// <reference path="../../../obj/sancasia_zero.base.d.ts" />

namespace sczBase.demo.action.menu
{
  export class MenuScene extends sczCore.SceneBase
  {
    readonly menuState: MenuState;
    protected demoRepository: DemoRepository;

    constructor(
      id: number,
      demoRepository: DemoRepository,
      game: sczCore.Game, gameSceneId: number,
      eventBus: sczCore.EventBus)
    {
      super(id, eventBus);
      this.demoRepository = demoRepository;
      this.menuState = new MenuState(IdGenerator.next(), demoRepository);

      let interpreter =
        new MenuActionInterpreter(eventBus);
      this.addProp(interpreter);

      let actionSystem = new MenuActionSystem(
        this, game, gameSceneId,
        eventBus);
      actionSystem.registerEntity(this.menuState);
      this.addProp(actionSystem);

      let renderSystem = new ConsoleRenderSystem(eventBus);
      renderSystem.registerEntity(this.menuState);
      this.addProp(renderSystem);
    }

    public activate()
    {
      super.activate();

      // load game state
      let game = this.demoRepository.getGame();
      let settings = this.demoRepository.getSettings();
      this.menuState.update(game, settings);
    }

    public deactivate()
    {
      super.deactivate();

      // store game state
      let settings = new SettingsState(
        this.menuState.getDifficulty(), this.menuState.getVolume());
      this.demoRepository.setSettings(settings);
    }
  }
}
