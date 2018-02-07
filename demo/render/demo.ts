/// <reference path="../../node_modules/sancasia_zero-core/obj/sancasia_zero.core.d.ts" />
/// <reference path="../../obj/sancasia_zero.base.d.ts" />

namespace sczBase.demo.render
{
  export class RenderDemo
  {
    public static Main(): void
    {
      let game = new sczCore.Game();
      let translateService = new TranslateService(game);

      let scene = new sczCore.SceneBase(0, game.getEventBus());
      game.addScene(scene);

      // add render system
      let canvas = <HTMLCanvasElement> document.getElementById("canvas");
      let context = canvas.getContext('2d');
      game.addSystem(
          scene.getId(),
          new CanvasRenderSystem(
              context, translateService,
              game.getEventBus()));

      // add parts system
      game.addSystem(
          scene.getId(),
          new PartSystem(
              game.getEventBus()));

      // define common values
      let centerX = document.body.clientWidth / 2;
      let centerY = document.body.clientHeight / 2;
      let center = {x: centerX, y: centerY, z: 0};
      let sizes = [
          {x:  0.5, y:  0.5},
          {x:  0.5, y: -0.5},
          {x: -0.5, y:  0.5},
          {x: -0.5, y: -0.5}];

      // list of the original parts
      let masters: number[] = [];

      // assemble the origial parts
      for(let i = 0; i < sizes.length; i++)
      {
        // create part via factory
        let master = PartFactory.create(
            i * 10,
            center,
            sizes[i]);

        // add part to game
        game.addEntity(master);

        // register part in render system
        game.registerEntity(
            scene.getId(),
            CanvasRenderSystem,
            master.getId());

        // register part in part system
        game.registerEntity(
            scene.getId(),
            PartSystem,
            master.getId());

        masters.push(master.getId());
      }

      // assemble part chains for each master
      for(let masterId of masters)
      {
        for(let i = 1; i <= 5; i++)
        {
          let id = i + masterId;
          let position = {x: 250, y: 0, z: i};
          let factor = {x: 0.75, y: 0.75};

          // create part via part factory
          let part =
              PartFactory.create(
                  id,
                  position,
                  factor,
                  id-1);

          // add part to game
          game.addEntity(part);

          // register part to render system
          game.registerEntity(
              scene.getId(),
              CanvasRenderSystem,
              part.getId());

          // register part to part system
          game.registerEntity(
              scene.getId(),
              PartSystem,
              part.getId());
        }
      }

      // start the game engine
      game.start();

      // activate the scene
      game.activateScene(scene.getId());
    }
  }
}
