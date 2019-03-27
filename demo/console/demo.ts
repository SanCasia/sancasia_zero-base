/// <reference path="../../node_modules/sancasia_zero-core/obj/sancasia_zero.core.d.ts" />
/// <reference path="../../obj/sancasia_zero.base.d.ts" />

namespace sczBase.demo.action
{
  export class ActionDemo
  {
    public static Main(): void
    {
      let demo = new sczCore.Game();
      let eventBus = demo.getEventBus();
      let demoRepository = new DemoRepository();
      let menuSceneId = IdGenerator.next();
      let gameSceneId = IdGenerator.next();

      let menuScene = new menu.MenuScene(
        menuSceneId,
        demoRepository,
        demo, gameSceneId,
        eventBus);
      demo.addScene(menuScene);

      let gameScene = new game.GameScene(
        gameSceneId, demoRepository,
        demo, menuSceneId,
        eventBus);
      demo.addScene(gameScene);

      // start the game engine
      demo.start();

      // activate the scene
      gameScene.activate();
    }
  }
}
