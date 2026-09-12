import { Eye, Flame, HeartPulse, Shield, WandSparkles } from "lucide-react";

export const MAGIC_ABILITIES = [
  {
    id: "heal",
    label: "HEAL",
    title: "Light gathers where it was broken.",
    copy: "The healing horn does not erase a wound. It teaches the body how to remember its original shape.",
    icon: HeartPulse,
    color: "#9bc5a0",
  },
  {
    id: "protect",
    label: "PROTECT",
    title: "A circle becomes a boundary.",
    copy: "Protective magic draws a quiet perimeter around what matters, asking the dark to wait outside.",
    icon: Shield,
    color: "#9ca9e8",
  },
  {
    id: "reveal",
    label: "REVEAL",
    title: "The hidden takes a breath.",
    copy: "Reveal is the oldest spell in the archive: a constellation appears, and suddenly the room has another door.",
    icon: Eye,
    color: "#9ec5d0",
  },
  {
    id: "transform",
    label: "TRANSFORM",
    title: "Nothing keeps one shape forever.",
    copy: "Transformation is not disguise. It is the permission to become closer to what was waiting underneath.",
    icon: WandSparkles,
    color: "#d0a978",
  },
];

export const DISCIPLINES = [
  ["01", "HEALING MAGIC", "For the body, the memory of warmth."],
  ["02", "ASTRAL MAGIC", "For the mind, the grammar of distant light."],
  ["03", "ELEMENTAL MAGIC", "For the will, the weather inside the blood."],
  ["04", "MEMORY MAGIC", "For the heart, what refuses to disappear."],
];

export const MagicEndIcon = Flame;
