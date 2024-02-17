import { ComponentFixture, TestBed } from "@angular/core/testing";
import { LikeWidgetComponent } from "./like-widget.component";
import { UniqueIdService } from "../../services/unique-id/unique-id.service";
import { LikeWidgetModule } from "./like-widget.module";

describe(LikeWidgetComponent.name, () => {
  let fixture: ComponentFixture<LikeWidgetComponent> = null;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ //configura um modulo de testes para o componente em questao
      imports: [LikeWidgetModule]
    }).compileComponents() //compila o componente sendo testado, resolvendo seu template, css e etc

    fixture = TestBed.createComponent(LikeWidgetComponent); //Este metodo retorna um ComponentFixture<LikeWidgetComponent>
  })

  it('It should create component', () => {
    const instance = fixture.componentInstance;
    expect(instance).toBeTruthy();
  })

  it('Should auto-generate ID when id input property is missing', () => {
    const instance = fixture.componentInstance;
    fixture.detectChanges(); //dispara o mecanismo de change detection e dispara o lifecicle hook ngOnInit do componente
    expect(instance.id).toBeTruthy();
  })
})
