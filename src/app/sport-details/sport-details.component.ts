import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HostListener, OnDestroy, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';
import {NgbModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';
// import {ToastrService} from 'ngx-toastr';
import {of, Subscription, timer} from 'rxjs';
import {catchError, filter, switchMap} from 'rxjs/operators';
import { LoadingService } from '../service/loading.service';
import { SportService } from '../service/sport.service';
import {liveCricketMatch, MatchOdds, OddsModel, SessionOdds} from './OddsModel';
import { PlaceBetsComponent } from './place-bets/place-bets.component';

@Component({
  selector: 'app-sport-details',
  standalone: true,
  imports: [CommonModule,PlaceBetsComponent,NgbModule],
  templateUrl: './sport-details.component.html',
  styleUrl: './sport-details.component.css'
})

export class SportDetailsComponent implements OnDestroy {
  matchcode:any;
  isOld = false;
  public innerWidth: any;
  oddsModel: OddsModel[]=[];
  checkOdds = true;
  cricketMatch = liveCricketMatch;
  mainSession: SessionOdds[]=[];
  team1:string = ''||'Team 1';
  team2:string=''||'Team 2';
  ballOnlySession: SessionOdds[] = [];
  ballByBall: SessionOdds[] = [];
  MatchOdds:MatchOdds[]=[]
  oddsLink: any;
  maxMatch: any;
  liveStatus: any;
  sessionPM: any;
  matchBets: any = [];
  sessionBet: any = [{name:'abc',nrun:23,nrate:43,yrun:23,yrate:54}];
  sessionBets: any = [];

  Matchods: any;
  subscription: Subscription;
  active = 1;
  id: any;
  streamLink: any;
  bitsposition: any = [];
  matchTitle = '';
  streamTv: boolean = false;
  filteredSessionBets: any = [];
  errorMessage: string = '';
  // @HostListener('window:resize', ['$event'])
  // onResize(event) {
  //     this.innerWidth = event.target.innerWidth;
  // }

  constructor(
      public router: Router,
      private route: ActivatedRoute,
      // private headerService: HeaderService,
      private modalService: NgbModal,
      private sportServive:SportService,
      // public matchDetail: MatchDetailService,
      // private toastr: ToastrService,
      // private dashsvc: DashboardService,
      public sanitizer: DomSanitizer,
  ) {
      // this.innerWidth = window.innerWidth;
      this.subscription = new Subscription();
      this.matchcode = this.route.snapshot.paramMap.get('matchcode');
      // headerService.getMsg();
  }

  ngOnInit(): void {
    this.SportDetails();

  }
  goBack(){
    window.history.back()
  }

  SportDetails(){
    this.filteredSessionBets = setInterval(() => {
    if(this.matchcode != undefined ||this.matchcode != ''){
      this.sportServive.getSportDetails(this.matchcode).subscribe({
        next:(res)=>{
          this.MatchOdds = res.matchOdds.slice(0,2);
          this.sessionBets = res.sessionOdds;
          this.team1 = res.score.team1;
          this.team2 = res.score.team2;
          this.sessionBets.filter((item:any,index:any)=> index %2 ==0)
        },error:(error) =>{
          this.errorMessage = error;
        }
      })
    }
  }, 900);
  }




  open(mode: string, data: any) {
      let rate;
      let run = 0;
      let type = 0;
      switch (mode) {
          case 'K':
              rate = data.krate;
              type = 0;
              break;
          case 'L':
              rate = data.lrate;
              type = 0;
              break;
          case 'YES':
              rate = data.yrate;
              run = data.yrun;
              type = 1;
              break;
          case 'NO':
              rate = data.nrate;
              run = data.nrun;
              type = 1;
              break;
      }
      // console.log(rate)
      if (rate > 0) {
          const modalRef = this.modalService.open(PlaceBetsComponent, {
              centered: true,
              windowClass: 'custom-modal-content'
          });
          (<PlaceBetsComponent> modalRef.componentInstance).data = {
              mode,
              rate: rate,
              type: type,
              team: data.team ?? data.name,
              sid: data.id,
              run: run,
              match_code: this.id,
          };
          modalRef.result.then((result: any) => {
              if (result == 1) {
                  // this.position();
              }
          });
      } else {
          // this.toastr.error('Rate must be grater than zero');
      }
  }



  ngOnDestroy() {
    clearInterval(this.filteredSessionBets); // Corrected: Pass the interval ID directly
    this.subscription.unsubscribe();
  }


  onRightClick(mode: string, data: any) {
      this.open(mode, data);
      return false;
  }


  toDecimal(value: any): string {
      return parseFloat(value).toFixed(2);
  }

  private filterData(sessions: SessionOdds[]): void {

      const mainSession: SessionOdds[] = [];
      const onlySession: SessionOdds[] = [];
      const ballSession: SessionOdds[] = [];

      sessions.forEach((value, index, array) => {
          if (value.name.includes('ONLY')) {
              onlySession.push(value);
          } else if (value.name.includes('BALL RUN')) {
              ballSession.push(value);
          } else {
              mainSession.push(value);
          }
      });

      this.mainSession = mainSession;
      this.ballByBall = ballSession.sort((a, b) => (a.name < b.name ? -1 : 1));
      this.ballOnlySession = onlySession.sort((a, b) => (a.name < b.name ? -1 : 1));

  }

}
