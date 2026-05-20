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

export function checkVersionChangesHaveReleaseTags(current, parent, releaseTags) {
  const expectedVersions = new Map();

  for (const tag of releaseTags) {
    const parsed = parseTag(tag);
    if (!parsed.ok) {
      continue;
    }

    const existingVersion = expectedVersions.get(parsed.name);
    if (existingVersion && existingVersion !== parsed.version) {
      return {
        ok: false,
        error: `Conflicting release tags for ${parsed.name}: ${existingVersion}, ${parsed.version}`,
      };
    }

    expectedVersions.set(parsed.name, parsed.version);
  }

  for (const c of current.plugins) {
    const p = parent.plugins.find((x) => x.name === c.name);
    if (p && p.version !== c.version) {
      const expectedVersion = expectedVersions.get(c.name);
      if (!expectedVersion) {
        return {
          ok: false,
          error: `Unexpected version change for ${c.name}: ${p.version} -> ${c.version}`,
        };
      }
      if (expectedVersion !== c.version) {
        return {
          ok: false,
          error: `Version mismatch for ${c.name}: marketplace=${c.version}, tag=${expectedVersion}`,
        };
      }
    }
  }
  return { ok: true };
}
