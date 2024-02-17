import { TestBed } from "@angular/core/testing";
import { LikeWidgetComponent } from "./like-widget.component";

describe(LikeWidgetComponent.name, () => {
  let component: LikeWidgetComponent = null;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ //configura um modulo de testes para o componente em questao
      declarations: [LikeWidgetComponent]
    }).compileComponents() //compila o componente sendo testado, resolvendo seu template, css e etc
  })

  it('', () => {})
})
