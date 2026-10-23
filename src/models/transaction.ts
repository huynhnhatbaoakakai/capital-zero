export type Transaction = {
    id:string , 
    type : 'income' |'expense' |'transfer',
    amountVnd : number ,
    occurredOn : string ,
    sourceAccountId:string | null , 
    destinationAccountId: string |null , 
    categoryId :string | null , 
    note?  : string  


}

