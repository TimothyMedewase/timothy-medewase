"use client";

import { ColumnDef } from "@tanstack/react-table";

export type Project = {
  title: string;
  description: string;
  long_description: string;
  technologies: string[];
  website: string;
  github: string;
};

export const columns: ColumnDef<Project>[] = [
  {
    accessorKey: "project",
    header: "Projects",
  },
];
