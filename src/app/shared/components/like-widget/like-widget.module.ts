import { CommonModule } from "@angular/common";
import { EventEmitter, Input, NgModule, Output } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { LikeWidgetComponent } from "./like-widget.component";
import { UniqueIdService } from "../../services/unique-id/unique-id.service";

@NgModule({
  declarations: [LikeWidgetComponent],
  imports: [CommonModule],
  exports: [LikeWidgetComponent],
  providers: [UniqueIdService]
})
export class LikeWidgetModule {


}
