import { Component, OnInit } from '@angular/core';
import { Feedback } from 'src/model/feedback';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {
  listaFeedback : Feedback[] = []; 

  constructor(private db: AngularFirestore, 
    private router : Router) {
    }

  ngOnInit() {
     
    
    this.db.collection('feedbacks').snapshotChanges().subscribe(response=>{ 

      this.listaFeedback = []; 

      
      response.forEach(doc=>{ 
      
        let f = new Feedback(); 
        f.setFeedback(doc.payload.doc.data(),doc.payload.doc.id); 

        this.listaFeedback.push(f);

      },err=>{ 
        console.log(err);
      })

    });
  }
  
 
  goPage(idValue : string){
    
    this.router.navigate(['feedback-detalhes',{id : idValue}]);
  } 

}
