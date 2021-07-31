import { Guid } from "guid-typescript";

export interface  SourceModel {
	id: Guid;
	type: string;
	address: string;
}