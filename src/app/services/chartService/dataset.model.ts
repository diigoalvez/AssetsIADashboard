import { ChartData } from "./data.model";

export class DataSet {
    private _Label: string;
    public get Label(): string {
        return this._Label;
    }
    public set Label(v: string) {
        this._Label = v;
    }

    private _Type: string;
    public get Type(): string {
        return this._Type;
    }
    public set Type(v: string) {
        this._Type = v;
    }

    private _Data: ChartData[];
    public get Data(): ChartData[] {
        return this._Data;
    }
    public set Data(v: ChartData[]) {
        this._Data = v;
    }

}