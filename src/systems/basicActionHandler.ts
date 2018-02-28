/// <reference path="../../node_modules/sancasia_zero-core/obj/sancasia_zero.core.d.ts" />

namespace sczBase
{
  export interface BasicActionHandler
  {
    // basics
    menu(requires: Array<sczCore.Component>): void;
    return(requires: Array<sczCore.Component>): void;
    start(requires: Array<sczCore.Component>): void;
    stop(requires: Array<sczCore.Component>): void;
    quickSave(requires: Array<sczCore.Component>): void;
    quickLoad(requires: Array<sczCore.Component>): void;
}

  export class BasicActionHandlerBase implements BasicActionHandler
  {
    // basic actions
    menu(_: sczCore.Component[]): void {}
    return(_: sczCore.Component[]): void {}
    start(_: sczCore.Component[]): void {}
    stop(_: sczCore.Component[]): void {}
    quickSave(_: sczCore.Component[]): void {}
    quickLoad(_: sczCore.Component[]): void {}
  }
}
