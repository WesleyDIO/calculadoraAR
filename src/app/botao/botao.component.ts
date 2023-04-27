
import { Component, Output, EventEmitter, Input  } from "@angular/core";


@Component({
    selector:'botao',
    templateUrl:'./botao.component.html'
})

export class botaoComponente{
        
    @Input()
    conteudo : string

    @Output()
    botaoClick = new EventEmitter()
    
    clickBotao():void{
       let visor : HTMLInputElement = document.querySelector('#visor')
       let ultimoDigito = visor.value.substring(visor.value.length -1, visor.value.length)
       let conteudo = this.conteudo

       
       
       if(conteudo != '=' && conteudo!='del'){

        if(ultimoDigito!= '+' && ultimoDigito!='-' && ultimoDigito!='*' && ultimoDigito != '/'){

            visor.value+=conteudo

        }else if (  conteudo!='*' && conteudo!='/' && conteudo!='='){

            visor.value+=conteudo
        
        }else{
            visor.value = this.susbtituirOperador(visor.value, conteudo)
        }

       }else if (conteudo=='='){
        visor.value = eval(visor.value)
       }else if(conteudo=='del'){
        visor.value = this.deletar(visor.value)
       }

        console.log("ultimo dig " + ultimoDigito)
        console.log("conteudo " + this.conteudo)
        this.botaoClick.emit()
    }

    susbtituirOperador(conteudo:string, novoDigito){

        let conteudoSplit = conteudo.split("")

        conteudoSplit[conteudo.length - 1] = novoDigito

        conteudo = conteudoSplit.join('')

        return conteudo
    }

    deletar(conteudo:string){
        let conteudoSplit = conteudo.split("")

        conteudoSplit[conteudo.length - 1] = ''

        conteudo = conteudoSplit.join('')

        return conteudo
    }
}