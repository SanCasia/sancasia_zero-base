/// <reference path="../../node_modules/sancasia_zero-core/obj/sancasia_zero.core.d.ts" />

namespace sczBase
{
  export class CanvasRenderSystem extends sczCore.SystemBase
  {
    private translateService: TranslateService;
    private context: CanvasRenderingContext2D;

    constructor(
      context: CanvasRenderingContext2D,
      translateService: TranslateService,
      eventBus: sczCore.EventBus)
    {
        super(
          [TranslateComponent, SpriteComponent],
          eventBus,
          sczCore.EngineEvent.Render);

        this.context = context;
        this.translateService = translateService;
    }

    public process = (deltaTime: number): void =>
    {
      this.context.clearRect(
        0, 0,
        this.context.canvas.width,
        this.context.canvas.height);

      let entities = [...this.entities.values()];
      entities.sort((a: sczCore.Entity, b: sczCore.Entity) =>
      {
        let compA = <TranslateComponent> a.getComponent(TranslateComponent);
        let compB = <TranslateComponent> b.getComponent(TranslateComponent);
        return compA.position.z - compB.position.z;
      });

      for(let entity of entities)
      {
        let cache =
          <[TranslateComponent, SpriteComponent]> entity.getCache(this);
        this.processEntity(deltaTime, cache);
        entity.updateCache(this, cache);
      };
    }

    protected processEntity(
      _: number,
      [translate, sprite]: [TranslateComponent, SpriteComponent]): void
    {
      let position = this.translateService.getAbsolutePosition(translate);
      let size = this.translateService.getAbsoluteSize(translate);
      let rotation = this.translateService.getAbsoluteRotation(translate);
      let center = translate.center;

      this.context.save();

      this.context.translate(position.x, position.y);
      this.context.scale(size.x, size.y);
      this.context.rotate(rotation*Math.PI/180);


      this.context.drawImage(
        sprite.sprite,
        - center.x,
        - center.y,
        sprite.size.x,
        sprite.size.y);

      this.context.restore();
    }
  }
}
