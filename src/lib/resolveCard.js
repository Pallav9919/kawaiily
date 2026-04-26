import { getTemplate } from "../templates/registry";

// Returns the effective template config for rendering, given mode + data.
// Falls back gracefully.
export function resolveCardConfig({ mode, templateId, overrides, custom }) {
  if (mode === "scratch" && custom) return custom;
  const tpl = getTemplate(templateId);
  if (mode === "tweak" && overrides) {
    const o = overrides;
    return {
      cat: tpl.category,
      lang: tpl.lang,
      cover: {
        palette: o.palette || tpl.cover.palette,
        decoration: o.decoration || tpl.cover.decoration,
        titleFont: o.titleFont || tpl.cover.titleFont,
        title: o.title != null ? o.title : tpl.cover.title,
        emoji: o.emoji || tpl.cover.emoji,
      },
      inside: {
        palette: o.insidePalette || tpl.inside.palette,
        decoration: o.insideDecoration || tpl.inside.decoration,
        font: o.insideFont || tpl.inside.font,
      },
      reveal: o.reveal || tpl.reveal,
    };
  }
  return {
    cat: tpl.category,
    lang: tpl.lang,
    cover: tpl.cover,
    inside: tpl.inside,
    reveal: tpl.reveal,
  };
}

// Build the scratch starter config from a template (so "From Scratch" can pre-fill).
export function templateAsCustom(templateId) {
  const tpl = getTemplate(templateId);
  return {
    cat: tpl.category,
    lang: tpl.lang,
    cover: { ...tpl.cover },
    inside: { ...tpl.inside },
    reveal: tpl.reveal,
  };
}
