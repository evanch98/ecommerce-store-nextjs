"use client";

import { Color, Size } from "@/types";

interface MobileFiltersProps {
  sizes: Size[];
  colors: Color[];
}

const MobileFilters: React.FC<MobileFiltersProps> = ({ sizes, colors }) => {
  return <div>MobileFilters</div>;
};

export default MobileFilters;
