const accounts = [
    { Id: "001", Name: "Google", Industry: "Technology", Revenue: 500000 },
    { Id: "002", Name: "ABB", Industry: "Banking", Revenue: 80000 },
    { Id: "003", Name: "Amazon", Industry: "Technology", Revenue: 1200000 },
    { Id: "004", Name: "LocalShop", Industry: "Retail", Revenue: 9000 }
];

const technologyAccounts = accounts.filter(account => account.Industry === "Technology");

const formattedAccounts = accounts.map(account => ({
    label: account.Name,
    value: account.Id
}));


const abbAccount = accounts.find(account => account.Name === "ABB");


const highRevenueAccounts = accounts.filter(account => account.Revenue > 100000);


console.log("Technology:", technologyAccounts);
console.log("Formatted:", formattedAccounts);
console.log("ABB:", abbAccount);
console.log("High Revenue Accounts:", highRevenueAccounts);
