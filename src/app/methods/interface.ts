import { StaticImageData } from "next/image";

interface SubPoint {
  point: string;
}

interface ProgramOverview {
  point: string;
  sub?: SubPoint[]; // Sub-points are optional
}

interface Benefit {
  point: string;
  sub?: SubPoint[]; // Sub-points are optional
}

interface Commitment {
  point: string;
}

interface Note {
  point: string;
}

export interface Course {
  heading: string;
  description: string;
  programOverview: ProgramOverview[];
  benefits: Benefit[];
  Commitment?: Commitment[]; // Optional property
  Note?: Note[]; // Optional property
  icon: StaticImageData;
}
