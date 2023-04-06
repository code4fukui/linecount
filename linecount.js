import { dir2array } from "https://js.sabae.cc/dir2array.js";

const exts = [".c", ".h"];
//const exts = [".c"];

const ss = await dir2array("./");
const dirs = {};
for (const fn of ss) {
  const ext = fn.substring(fn.lastIndexOf("."));
  if (exts.indexOf(ext) < 0) continue;
  const dir = fn.substring(0, fn.lastIndexOf("/"));
  const file = await Deno.stat(fn);
  const size = file.size;
  const lines = (await Deno.readTextFile(fn)).split("\n").length;
  const o = dirs[dir];
  if (o) {
    o.size += size;
    o.lines += lines;
  } else {
    dirs[dir] = { size, lines }
  }
}
for (const dir in dirs) {
  const o = dirs[dir];
  //console.log(dir, o.size, o.lines);
  console.log(dir, o.lines);
}
