export interface TeamBet{
  team1:string;
  team2:string;
  back:number;
  totalBetPlayerBack:string;
  lay:number;
  totalBetPlayerLay:string;

}



export const liveCricketMatch :TeamBet[]=[
  {team1:'Afghanistan U19',team2:' USA U19 ',back:1.99,totalBetPlayerBack:'1cr+',lay:45,totalBetPlayerLay:'2cr+'},
  {team1:'India',team2:'Australia', back:1.99,totalBetPlayerBack:'1cr+',lay:45,totalBetPlayerLay:'2cr+'},
  {team1:'South Africa',team2:'England',back:1.99,totalBetPlayerBack:'1cr+',lay:45,totalBetPlayerLay:'2cr+'},
  {team1:'WestIndies',team2:'SriLanka',back:1.99,totalBetPlayerBack:'1cr+',lay:45,totalBetPlayerLay:'2cr+'},
]


