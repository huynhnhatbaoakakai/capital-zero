import type { Transaction }  from "./models/transaction";


export const incomeTransaction : Transaction = {
        id:'tx-001', 
        type: 'income' , 
        amountVnd : 1000000 ,
        occurredOn : '2026-10-23' ,
        sourceAccountId: null , 
        destinationAccountId: 'spending' , 
        categoryId : 'allowance' , 
        

}

export const expenseTransaction : Transaction = {
        id:'tx-002', 
        type: 'expense' , 
        amountVnd : 17000 ,
        occurredOn : '2026-10-23' ,
        sourceAccountId: 'spending' , 
        destinationAccountId: null , 
        categoryId : 'food' , 
}

export const savingsTransfer : Transaction = {
        id:'tx-003', 
        type: 'transfer' , 
        amountVnd : 300000 ,
        occurredOn : '2026-10-23' ,
        sourceAccountId: 'spending' , 
        destinationAccountId: 'savings' , 
        categoryId : null , 
}