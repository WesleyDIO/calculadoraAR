import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { calculadoraComponente } from "./calculadora.component";
import { botaoModule } from "../botao/botao.module";

@NgModule({
    declarations:[
     calculadoraComponente
    ],
    imports:[
     CommonModule,
     botaoModule
    ],
    exports:[
     calculadoraComponente
    ]
})
export class calculadoraModule{

}