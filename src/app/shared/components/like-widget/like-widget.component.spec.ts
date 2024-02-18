import { ComponentFixture, TestBed } from "@angular/core/testing";
import { LikeWidgetComponent } from "./like-widget.component";
import { UniqueIdService } from "../../services/unique-id/unique-id.service";
import { LikeWidgetModule } from "./like-widget.module";

describe(LikeWidgetComponent.name, () => {
  let fixture: ComponentFixture<LikeWidgetComponent> = null;
  let instance: LikeWidgetComponent = null;
  beforeEach(async () => {
    await TestBed.configureTestingModule({ //configura um modulo de testes para o componente em questao
      imports: [LikeWidgetModule]
    }).compileComponents() //compila o componente sendo testado, resolvendo seu template, css e etc

    fixture = TestBed.createComponent(LikeWidgetComponent); //Este metodo retorna um ComponentFixture<LikeWidgetComponent>
    instance = fixture.componentInstance;
  })

  it('It should create component', () => {
    expect(instance).toBeTruthy();
  })

  it('Should auto-generate ID when id input property is missing', () => {
    fixture.detectChanges(); //dispara o mecanismo de change detection e dispara o lifecicle hook ngOnInit do componente
    expect(instance.id).toBeTruthy();
  })

  it('Should NOT auto-generate ID when id input property is present', () => {
    const someId = 'someId';
    instance.id = someId;
    fixture.detectChanges(); //dispara o mecanismo de change detection e dispara o lifecicle hook ngOnInit do componente
    expect(instance.id).toBe(someId);
  })

  it(`${LikeWidgetComponent.prototype.likes} should trigger emission when called`, () => {
    spyOn(instance.liked, 'emit') //objeto e metodo do objeto a ser 'espionado'
    fixture.detectChanges()
    instance.like()
    expect(instance.liked.emit).toHaveBeenCalled()
  })
})
