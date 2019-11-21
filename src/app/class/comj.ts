export class COMJ {
    private comjId : string;
    private comjNo : string;
    private comjFullName : string;
    private comjDivnName : string;
    private comjPosition : string;
    private comjCenterName: string;

    set setComjId(value:string) {
        this.comjId = value;
    }
    get getComjId(): string{
        return this.comjId;
    }

    set setComjNo(value:string) {
        this.comjNo = value;
    }
    get getComjNo(): string{
        return this.comjNo;
    }
    
    set setComjFullName(value:string){
        this.comjFullName = value;
    }
    get getComjFullName(): string{
        return this.comjFullName;
    }

    set setComjPosition(value:string){
        this.comjPosition = value;
    }
    get getComjPosition(): string{
        return this.comjPosition;
    }

    set setComjDivnName(value:string){
        this.comjDivnName = value;
    }
    get getComjDivnName(): string{
        return this.comjDivnName;
    }

    set setComjCenterName(value:string){
        this.comjCenterName = value;
    }
    get getComjCenterName(): string{
        return this.comjCenterName;
    }
}
