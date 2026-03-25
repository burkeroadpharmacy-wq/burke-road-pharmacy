/**
 * ConditionIcon
 *
 * Maps condition icon keys (from conditions.ts) to professional Lucide SVG icons.
 * Replaces the previous emoji-based approach for a consistent, professional appearance.
 */
import {
  Activity,
  ShieldPlus,
  Sparkles,
  Baby,
  PawPrint,
  Dna,
  User,
  HeartPulse,
  Zap,
  Smile,
  Stethoscope,
  Brain,
  Pill,
  FlaskConical,
  Syringe,
  Clock,
  Truck,
  ClipboardList,
  Phone,
  type LucideProps,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  activity: Activity,
  "shield-plus": ShieldPlus,
  sparkles: Sparkles,
  baby: Baby,
  "paw-print": PawPrint,
  dna: Dna,
  user: User,
  "heart-pulse": HeartPulse,
  zap: Zap,
  smile: Smile,
  stethoscope: Stethoscope,
  brain: Brain,
  pill: Pill,
  flask: FlaskConical,
  syringe: Syringe,
  clock: Clock,
  truck: Truck,
  clipboard: ClipboardList,
  phone: Phone,
};

interface ConditionIconProps extends LucideProps {
  name: string;
}

export default function ConditionIcon({ name, ...props }: ConditionIconProps) {
  const Icon = iconMap[name] ?? Activity;
  return <Icon {...props} />;
}
