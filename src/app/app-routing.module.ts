import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [
    RouterModule.forRoot([], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' })
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
