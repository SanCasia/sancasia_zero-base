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

      game.addScene(new sczCore.SceneBase(0, game.getEventBus()));

      // add render system
      let canvas = <HTMLCanvasElement> document.getElementById("canvas");
      let context = canvas.getContext('2d');
      game.addSystem(
          0, new CanvasRenderSystem(
              context, translateService,
              game.getEventBus()));

      // add parts system
      game.addSystem(
          0, new PartSystem(
              game.getEventBus()));

      let centerX = document.body.clientWidth / 2;
      let centerY = document.body.clientHeight / 2;

      game.addEntity(
          PartFactory.create(
              0,
              "part.svg",
              {x: 300, y: 100},
              {x: centerX, y: centerY, z: 0},
              {x: 50, y: 50},
              {x: 0.5, y: 0.5}));
      game.registerEntity(0, CanvasRenderSystem, 0);
      game.registerEntity(0, PartSystem, 0);

      game.addEntity(
        PartFactory.create(
          10,
          "part.svg",
          {x: 300, y: 100},
          {x: centerX, y: centerY, z: 0},
          {x: 50, y: 50},
          {x: 0.5, y: -0.5}
        ));
      game.registerEntity(0, CanvasRenderSystem, 10);
      game.registerEntity(0, PartSystem, 10);

      game.addEntity(
        PartFactory.create(
          20,
          "part.svg",
          {x: 300, y: 100},
          {x: centerX, y: centerY, z: 0},
          {x: 50, y: 50},
          {x: -0.5, y: 0.5}
        ));
      game.registerEntity(0, CanvasRenderSystem, 20);
      game.registerEntity(0, PartSystem, 20);

      game.addEntity(
        PartFactory.create(
          30,
          "part.svg",
          {x: 300, y: 100},
          {x: centerX, y: centerY, z: 0},
          {x: 50, y: 50},
          {x: -0.5, y: -0.5}
        ));
      game.registerEntity(0, CanvasRenderSystem, 30);
      game.registerEntity(0, PartSystem, 30);

      for(let i = 1; i <= 5; i++)
      {
        game.addEntity(
          PartFactory.create(
            i,
            "part.svg",
            {x: 300, y: 100},
            {x: 250, y: 0, z: i},
            {x: 50, y: 50},
            {x: 0.75, y: 0.75},
            0, i-1
        ));
        game.registerEntity(0, CanvasRenderSystem, i);
        game.registerEntity(0, PartSystem, i);

        game.addEntity(
          PartFactory.create(
            i+10,
            "part.svg",
            {x: 300, y: 100},
            {x: 250, y: 0, z: i},
            {x: 50, y: 50},
            {x: 0.75, y: 0.75},
            0, i+9
        ));
        game.registerEntity(0, CanvasRenderSystem, i+10);
        game.registerEntity(0, PartSystem, i+10);

        game.addEntity(
          PartFactory.create(
            i+20,
            "part.svg",
            {x: 300, y: 100},
            {x: 250, y: 0, z: i},
            {x: 50, y: 50},
            {x: 0.75, y: 0.75},
            0, i+19
        ));
        game.registerEntity(0, CanvasRenderSystem, i+20);
        game.registerEntity(0, PartSystem, i+20);

        game.addEntity(
          PartFactory.create(
            i+30,
            "part.svg",
            {x: 300, y: 100},
            {x: 250, y: 0, z: i},
            {x: 50, y: 50},
            {x: 0.75, y: 0.75},
            0, i+29
        ));
        game.registerEntity(0, CanvasRenderSystem, i+30);
        game.registerEntity(0, PartSystem, i+30);
      }

      game.start();
      game.activateScene(0);
    }
  }
}
