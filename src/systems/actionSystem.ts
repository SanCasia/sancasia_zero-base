/// <reference path="../../node_modules/sancasia_zero-core/obj/sancasia_zero.core.d.ts" />

namespace sczBase
{

  export class    ActionSystemBase
      implements  sczCore.System
  {
    protected entities: Map<number, sczCore.Entity>;
    protected eventbus: sczCore.EventBus;
    protected event: sczCore.EngineEvent;
    protected _isActive: boolean;
    protected requires: Array<Function>;
    protected actionQueue: Array<{call: Function, args: Array<any>}>

    public get isActive(): boolean
    {
      return this._isActive;
    }

    constructor(
        requires: Array<Function>,
        eventbus: sczCore.EventBus,
        event: sczCore.EngineEvent)
    {
      this.requires = requires;
      this.actionQueue = new Array<{call: Function, args: Array<any>}>();

      this.entities = new Map<number, sczCore.Entity>();
      this.eventbus = eventbus;
      this.event = event;
    }

    public activate(): void
    {
      this.eventbus.subscribe(
          this.event,
          this.process);
      this._isActive = true;
    }

    public deactivate(): void
    {
      this.eventbus.unsubscribe(
          this.event,
          this.process);
      this._isActive = false;
    }

    public registerEntity(entity: sczCore.Entity): void
    {
      if(this.hasEntityRegistered(entity.getId()))
      {
        throw new Error(`entity [${entity.getId()}] already registered`);
      }
      entity.createCache(this, this.requires);
      this.entities.set(entity.getId(), entity);
    }

    public hasEntityRegistered(entityId: number): boolean
    {
      return this.entities.has(entityId);
    }

    public deregisterEntity(entityId: number): void
    {
      let entity = this.entities.get(entityId);
      entity.deleteCache(this);
      this.entities.delete(entityId);
    }

    public process = (deltaTime: number): void =>
    {
      for(let action of this.actionQueue)
      {
        for(let entity of this.entities.values())
        {
          let cache = entity.getCache(this);
          action.call(deltaTime, cache, ...action.args);
          entity.updateCache(this, cache);
        };
      }
    }
  }
}
