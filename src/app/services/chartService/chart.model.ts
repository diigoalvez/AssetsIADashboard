import { DataSet } from "./dataset.model";

export class ChartModel {
    private _Categories: string[];
    public get Categories(): string[] {
        return this._Categories;
    }
    public set Categories(v: string[]) {
        this._Categories = v;
    }

    private _DataSets: DataSet[];
    public get DataSets(): DataSet[] {
        return this._DataSets;
    }
    public set DataSets(v: DataSet[]) {
        this._DataSets = v;
    }
}