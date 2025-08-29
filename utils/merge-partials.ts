import fs from "fs";
import path from "path";

export function mergePackageJson(targetDir: string, partials: string[]) {
  const basePath = path.join(targetDir, "package.json");

  const merged = partials.reduce((acc, partialPath) => {
    if (!fs.existsSync(partialPath)) return acc;
    const partial = JSON.parse(fs.readFileSync(partialPath, "utf8"));

    // Merge dependencies, devDependencies, peerDependencies, scripts
    for (const key of [
      "dependencies",
      "devDependencies",
      "peerDependencies",
      "scripts",
    ]) {
      if (partial[key]) {
        acc[key] = {
          ...(acc[key] ?? {}),
          ...partial[key],
        };
      }
    }

    // Merge everything else shallowly
    for (const [k, v] of Object.entries(partial)) {
      if (
        [
          "dependencies",
          "devDependencies",
          "peerDependencies",
          "scripts",
        ].includes(k)
      )
        continue;
      if (typeof v === "object" && !Array.isArray(v)) {
        acc[k] = { ...(acc[k] ?? {}), ...v };
      } else {
        acc[k] = v;
      }
    }

    return acc;
  }, {});

  fs.writeFileSync(basePath, JSON.stringify(merged, null, 2));
  return merged;
}
