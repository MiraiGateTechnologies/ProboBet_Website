import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { HostListener, OnDestroy, OnInit} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';
import {NgbModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {of, Subscription, timer} from 'rxjs';
import {catchError, filter, switchMap} from 'rxjs/operators';
import { LoadingComponent } from '../components/loading/loading.component';
import {  SessionBet } from '../interface/sportdetails.interface';
import { SportService } from '../service/sport.service';
import { TopHeaderComponent } from '../top-header/top-header.component';
import {liveCricketMatch, MatchOdds, OddsModel, SessionOdds} from './OddsModel';
import { PlaceBetsComponent } from './place-bets/place-bets.component';

@Component({
  selector: 'app-sport-details',
  standalone: true,
  imports: [CommonModule,PlaceBetsComponent,NgbModule,LoadingComponent,TopHeaderComponent],
  templateUrl: './sport-details.component.html',
  styleUrl: './sport-details.component.css'
})

export class SportDetailsComponent implements OnDestroy {
  matchcode:any;
  isOld = false;
  activeTab: string = '';
  activeTabPrime:string = 'fancy';
  public innerWidth: any;
  private subscriptions = new Subscription();
  oddsModel: OddsModel[]=[];
  checkOdds = true;
  cricketMatch = liveCricketMatch;
  mainSession: SessionOdds[]=[];
  team1:string = ''||'Team 1';
  team2:string=''||'Team 2';
  ballOnlySession: SessionOdds[] = [];
  scoreDetails:any;
  ballByBall: SessionOdds[] = [];
  MatchOdds:MatchOdds[]=[]
  oddsLink: any;
  maxMatch: any;
  liveStatus: any;
  sessionPM: any;
  matchBets: any = [];
  sessionBets: any = [];
  private sanitizer =inject(DomSanitizer)
  streamLink:any='';
  isStreamAvailable: boolean = false;
  Matchods: any;
  subscription: Subscription;
  active = 1;
  id: any;
  bitsposition: any = [];
  matchTitle = '';
  streamTv: boolean = false;
  filteredSessionBets: any = [];
  bettDetails:SessionBet[] =[];
  errorMessage: string = '';
  loading:boolean =false;
  visibilityStates:any = {
    market: false,
    mybet: false,
    liveTv:false,
    score:false,
  };
  visibilityFancyAndPrime={
    fancy:true,
    prime:true,
  }

  showIframe: boolean = false;
  constructor(
      public router: Router,
      private route: ActivatedRoute,
      private modalService: NgbModal,
      private sportServive:SportService,
  ) {
      this.subscription = new Subscription();
      this.matchcode = this.route.snapshot.paramMap.get('matchcode');
  }

  ngOnInit(): void {
    this.subscriptions.add(this.SportDetails());
    this.subscriptions.add(this.getStreemData());

  }

  getStreemData() {
    const sub = this.sportServive.getPlaceCricketDetails(this.matchcode).subscribe({
      next: (res) => {
        this.bettDetails = res.sessionBet;
        if (res.streamLink) {
          this.streamLink = this.sanitizer.bypassSecurityTrustResourceUrl(res.streamLink);
        }
      }
    });
    return sub;
  }

  toggleVisibility(sectionKey: string): void {
    this.activeTab = sectionKey;
    const wasAlreadyVisible = this.visibilityStates[sectionKey];
    for (const key in this.visibilityStates) {
      if (this.visibilityStates.hasOwnProperty(key)) {
        this.visibilityStates[key] = false;
        this.getStreemData();
      }
    }
    this.visibilityStates[sectionKey] = !wasAlreadyVisible;
  }
  toggleVisibilityPrime(sectionKey: string): void {
    this.activeTabPrime = sectionKey;
    if(sectionKey == 'fancy' ){
      this.visibilityFancyAndPrime.fancy =true;
    }else if(sectionKey == 'prime'){
      this.visibilityFancyAndPrime.prime = true;
    }
  }

  goBack(){
    window.history.back()
  }
  truncateTitle(title: string): string {
    if (title.length > 28) {
      return title.substring(0, 25) + '...';
    } else {
      return title;
    }
  }
  SportDetails(){
    this.loading =true;
    this.filteredSessionBets = setInterval(() => {
      if(this.matchcode != undefined ||this.matchcode != ''){
        this.sportServive.getSportDetails(this.matchcode).subscribe({
          next:(res)=>{
          console.log(res.score)
          this.loading=false;
          this.MatchOdds = res.matchOdds.slice(0,2);
          this.sessionBets = res.sessionOdds;
          this.scoreDetails = res.score;
          this.team1 = res.score.team1;
          this.team2 = res.score.team2;
          this.sessionBets.filter((item:any,index:any)=> index %2 ==0)
        },error:(error) =>{
          this.loading =false;
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
      if (rate > 0) {
          const modalRef = this.modalService.open(PlaceBetsComponent, {

              windowClass: 'custom-modal-content'
          });
          (<PlaceBetsComponent> modalRef.componentInstance).data = {
              mode,
              rate: rate,
              type: type,
              team: data.team ?? data.name,
              sid: data.id,
              run: run,
              match_code: this.matchcode,
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
    this.subscriptions.unsubscribe();
    if (this.filteredSessionBets) {
        clearInterval(this.filteredSessionBets);
    }
  }


  onRightClick(mode: string, data: any) {
      this.open(mode, data);
      return false;
  }


  toDecimal(value: any): string {
      return parseFloat(value).toFixed(2);
  }



}
