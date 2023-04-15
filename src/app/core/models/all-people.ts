import { People } from "./people";

export interface AllPeople {
  count: number,
	next: string | null,
	previous: string | null,
	results: Array<People>
}
