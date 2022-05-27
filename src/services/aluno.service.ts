import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { API_CONFIG } from "../config/api.config";
import { AlunoDTO } from "../models/aluno.dto";

@Injectable()
export class AlunoService {

    constructor(public http: HttpClient){
    }

    findAllByIdadeCrescente() : Observable<AlunoDTO[]>{
        return this.http.get<AlunoDTO[]>(`${API_CONFIG.baseUrl}/alunos`)
    }

    gerarExcel(): Observable<any>{
        return this.http.post(`${API_CONFIG.baseUrl}/alunos/gerarExcel`, {})
    }
}