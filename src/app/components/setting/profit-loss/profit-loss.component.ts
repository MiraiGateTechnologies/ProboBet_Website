import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-profit-loss',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './profit-loss.component.html',
  styleUrl: './profit-loss.component.css'
})
export class ProfitLossComponent implements OnInit{
  profitAndLossStatement:boolean = true;
  profitAndLossSportWise =false;
  profitAndLossMarket = false;
  gettingSportData:any=[];
  gettingSportMarket:any[]=[]
  profitLossData:any[] = [
      {  event: 'Cricket',ProfitLoss: '-100' },
      {  event: 'Casino',ProfitLoss: '738' },
      {  event: 'Football',ProfitLoss: '738' },
      {  event: 'Mines',ProfitLoss: '738' },
      {  event: 'Heliux',ProfitLoss: '738' },
    ];

  sportWiseData:any[]=[
    {id:1, settledDate:'2023-02-28 21:45:00', MarketId:'CR123', gameType:'Casino',runnerName:'Commission',narration:'Commission of Avaitor on 40',betType:'Win',commission:12,net:-0.32,marketName:'PL of Fancy: Bangladesh Premier League / Khulna Tigers v Chattogram Challengers / 20 Over KT, Result: 127',profitAndLoss:'230'},
    {id:2, settledDate:'2023-05-15 09:30:00', MarketId:'CR123', gameType:'Cricket', marketName:'Indian Premier League / Mumbai Indians v Chennai Super Kings / 20 Over MI, Result: 180',runnerName:'Commission',narration:'Commission of Avaitor on 40',betType:'Place',commission:12,net:-0.32, profitAndLoss:'-500'},
    {id:3, settledDate:'2023-02-28 21:45:00', MarketId:'CS456', gameType:'Casino', marketName:'Blackjack Tournament',runnerName:'Commission',narration:'Commission of Avaitor on 40', betType:'Win',commission:12,net:-0.32,profitAndLoss:'-200'},
    {id:4, settledDate:'2023-08-10 19:00:00', MarketId:'FT789', gameType:'Football', marketName:'English Premier League / Manchester United v Liverpool FC',runnerName:'Commission',narration:'Commission of Avaitor on 40',betType:'Exacta',commission:12,net:-0.32, profitAndLoss:'1000'},
    {id:5, settledDate:'2023-11-20 15:20:00', MarketId:'MN012', gameType:'Mines', marketName:'Gold Rush',runnerName:'Commission',narration:'Commission of Avaitor on 40',betType:'Win',commission:12,net:-0.32, profitAndLoss:'-50'},
    {id:6, settledDate:'2023-07-05 12:15:00', MarketId:'HL345', gameType:'Heliux', marketName:'Sky Race',runnerName:'Commission',narration:'Commission of Avaitor on 40', betType:'Win',commission:12,net:-0.32,profitAndLoss:'-300'},
    {id:7, settledDate:'2023-04-18 14:00:00', MarketId:'CR678', gameType:'Cricket', marketName:'Australian Big Bash League / Sydney Sixers v Melbourne Stars / 20 Over SS, Result: 160',runnerName:'Commission',narration:'Commission of Avaitor on 40',betType:'Trifecta',commission:12,net:-0.32, profitAndLoss:'700'},
    {id:8, settledDate:'2023-04-18 14:00:00', MarketId:'CR678', gameType:'Cricket', marketName:'Australian Big Bash League / Sydney Sixers v Melbourne Stars / 20 Over SS, Result: 160',runnerName:'Commission',narration:'Commission of Avaitor on 40',betType:'Quinella',commission:12,net:-0.32, profitAndLoss:'700'},
    {id:9, settledDate:'2023-09-30 20:45:00', MarketId:'FT987', gameType:'Football', marketName:'UEFA Champions League / Real Madrid v FC Barcelona',runnerName:'Commission',narration:'Commission of Avaitor on 40',betType:'Win',commission:12,net:-0.32, profitAndLoss:'-300'},
    {id:10, settledDate:'2023-01-10 23:30:00', MarketId:'CS321', gameType:'Casino', marketName:'Roulette',betType:'Win',commission:12,net:-0.32, profitAndLoss:'100'},
    {id:11, settledDate:'2023-10-12 10:00:00', MarketId:'MN567', gameType:'Mines', marketName:'Diamond Hunt',betType:'Win',commission:12,net:-0.32, profitAndLoss:'-150'},
    {id:12, settledDate:'2023-06-25 16:10:00', MarketId:'CR234', gameType:'Cricket', marketName:'England vs India Test Match / Day 3',betType:'Win',commission:12,net:-0.32, profitAndLoss:'200'}
  ]

  ngOnInit(): void{
    this.profitAndLossStatement = true;
    this.profitAndLossSportWise = false;
    this.profitAndLossMarket = false;

  }
  calculateTotal(): string | number {
    // Calculate total from the profitLossData array
    let total = 0;
    this.profitLossData.forEach(item => {
      if (!isNaN(Number(item.ProfitLoss))) {
        total += Number(item.ProfitLoss);
      }
    });
    return total;
  }
  profitLossEvent(selectedGame:any){
    if(selectedGame != ''|| selectedGame ==undefined){
      this.profitAndLossSportWise= true;
      this.profitAndLossStatement = false;
      this.profitAndLossMarket = false;
      this.sportWiseData.filter(res=>{
         if (selectedGame == res.gameType){
           this.gettingSportData.push(res);
         }
      })
    }
  }
  profitAndLossStatementBack(){
    this.profitAndLossMarket = false;
    this.profitAndLossStatement = true;
    this.profitAndLossSportWise= false;
  }
  profitAndLossMarketBack(){
    this.profitAndLossMarket = false;
    this.profitAndLossStatement = false;
    this.profitAndLossSportWise= true;
  }

  marketWise(selectedMarket:any){
    this.profitAndLossMarket = true;
    this.profitAndLossStatement = false;
    this.profitAndLossSportWise= false;
    console.log(selectedMarket)
    this.sportWiseData.filter(res=>{
      if (selectedMarket == res.id){
        this.gettingSportMarket.push(res);
      }
    })
  }


  goBack(){
    window.history.back()
  }

}
