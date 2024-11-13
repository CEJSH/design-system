import run from "@ej/esbuild-config";
import pkg from "./package.json" assert { type: "json" };

run({ pkg });
