import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TrainComponent } from "./train/train.component";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: "train", component: TrainComponent }])
  ],
  declarations: [TrainComponent]
})
export class TrainsModule {
}
