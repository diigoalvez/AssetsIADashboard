export class ChartData {

    private _Y: number;
    public get Y(): number {
        return this._Y;
    }
    public set Y(v: number) {
        this._Y = v;
    }
    
    private _X: string;
    public get X(): string {
        return this._X;
    }
    public set X(v: string) {
        this._X = v;
    }
}