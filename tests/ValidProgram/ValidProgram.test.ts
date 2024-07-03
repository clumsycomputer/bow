import * as Path from "https://deno.land/std@0.224.0/path/mod.ts";

const mainProgramFile = Path.join(import.meta.dirname!, './source/main.bow');
const mainProgramSource = Deno.readTextFileSync(mainProgramFile)
console.log(mainProgramSource)
