import type { Meta, StoryObj } from "@storybook/react";
import { ArticleCard } from "./ArticleCard";

type T = typeof ArticleCard;

export default {
  component: ArticleCard,
} satisfies Meta<T>;

export const Default: StoryObj<T> = {
  args: {
    title: "Night of relative calm in France but riot tensions persist",
    text: "Defiant gatherings were held outside town halls across France on July 3 following a wave of rioting triggered by the fatal police shooting of a teenager of North African descent. The number of arrests fell from thousands to fewer than 160 overnight, offering some relief for President Emmanuel Macron in his fight to reimpose order, just months after rolling protests over an unpopular pension reform.The death of the 17-year-old, who had Algerian and Moroccan parents, has tapped a deep vein of anti-police resentment in banlieues ― poor and racially mixed suburbs of major French cities where Muslim communities of North African descent in particular have long accused police of racial profiling and violent tactics.",
  },
};
