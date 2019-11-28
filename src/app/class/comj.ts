export class COMJ {
    private comjId : string;
    private comjNo : string;
    private comjFullName : string;
    private comjDivnId : string;
    private comjDivnName : string;
    private comjPosition : string;
    private comjCenterName: string;
    private regCardDT: string;
    private regCardBy: string;
    private cardExp: string;
    private comjUsername: string;
    private comjPassword: string;
    private status: string;

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

    set setComjDivnId(value:string){
        this.comjDivnId = value;
    }
    get getComjDivnId(): string{
        return this.comjDivnId;
    }
    
    set setComjCenterName(value:string){
        this.comjCenterName = value;
    }
    get getComjCenterName(): string{
        return this.comjCenterName;
    }

    set setRegCardDT(value:string){
        this.regCardDT = value;
    }
    get getRegCardDT(): string{
        return this.regCardDT;
    }
    set setRegCardBy(value:string){
        this.regCardBy = value;
    }
    get getRegCardBy(): string{
        return this.regCardBy;
    }
    
    set setCardExp(value:string){
        this.cardExp = value;
    }
    get getCardExp(): string{
        return this.cardExp;
    }

    set setComjUsername(value:string){
        this.comjUsername = value;
    }
    get getComjUsername(): string{
        return this.comjUsername;
    }

    set setComjPassword(value:string){
        this.comjPassword = value;
    }
    get getComjPassword(): string{
        return this.comjPassword;
    }

    set setStatus(value:string){
        this.status = value;
    }
    get getStatus(): string{
        return this.status;
    }
}
