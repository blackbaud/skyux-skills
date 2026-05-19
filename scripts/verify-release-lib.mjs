export function parseTag(tag) {
  // Tag shape: <skill-name>-v<version>. Skill names may contain hyphens.
  // Split on the LAST occurrence of "-v" to recover the version suffix.
  const idx = tag.lastIndexOf('-v');
  if (idx < 1 || idx + 2 >= tag.length) {
    return { ok: false, error: `Tag does not match <name>-v<version>: ${tag}` };
  }
  const name = tag.slice(0, idx);
  const version = tag.slice(idx + 2);
  if (!name || !version) {
    return { ok: false, error: `Tag does not match <name>-v<version>: ${tag}` };
  }
  return { ok: true, name, version };
}

export function checkVersion(marketplace, skillName, expectedVersion) {
  const plugin = marketplace.plugins.find((p) => p.name === skillName);
  if (!plugin) {
    return { ok: false, error: `Plugin ${skillName} not found in marketplace.json` };
  }
  if (plugin.version !== expectedVersion) {
    return {
      ok: false,
      error: `Version mismatch for ${skillName}: marketplace=${plugin.version}, expected=${expectedVersion}`,
    };
  }
  return { ok: true };
}

export function checkOtherPluginsUnchanged(current, parent, skillName) {
  const others = current.plugins.filter((p) => p.name !== skillName);
  for (const c of others) {
    const p = parent.plugins.find((x) => x.name === c.name);
    if (p && p.version !== c.version) {
      return {
        ok: false,
        error: `Unexpected version change for ${c.name}: ${p.version} -> ${c.version}`,
      };
    }
  }
  return { ok: true };
}
