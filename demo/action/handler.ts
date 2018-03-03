/// <reference path="../../node_modules/sancasia_zero-core/obj/sancasia_zero.core.d.ts" />
/// <reference path="../../obj/sancasia_zero.base.d.ts" />

namespace sczBase.demo.action
{
  export class DemoActionHandler
      extends sczBase.BasicActionHandlerBase
  {
    public menu(_: sczCore.Component[])
    {
      console.log("menu");
    }

    public return(_: sczCore.Component[])
    {
      console.log("return");
    }

    public start(_: sczCore.Component[])
    {
      console.log("start");
    }

    public stop(_: sczCore.Component[])
    {
      console.log("stop");
    }

    public quickSave(_: sczCore.Component[])
    {
      console.log("save");
    }

    public quickLoad(_: sczCore.Component[])
    {
      console.log("load");
    }
  }
}
