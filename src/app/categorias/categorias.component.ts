import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { Usuario } from '../model/Usuario';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  produto: Produto = new Produto

  categoria: Categoria = new Categoria()
  listaCategorias: Categoria[]
  idCategoria: number
  contadorArvore = environment.contadorArvore

  usuario: Usuario = new Usuario()
  idUsuario = environment.cpf

  key = 'data'
  reverse = true

  pesquisa: string
  

  constructor(private produtoService: ProdutoService, 
    private categoriaService: CategoriaService, 
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    window.scroll(0,0)
    this.findAllCategorias()
    let id = this.route.snapshot.params['id']
    this.findByIdProduto
  }

  findByIdProduto(idProduto: number) {
    this.produtoService.getByIdProduto(idProduto).subscribe((resp: Produto) => {
      this.produto = resp
    })
  }

  findAllCategorias() {
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[]) =>{
      this.listaCategorias = resp
    })
  }

  findByIdCategoria() {
    this.categoriaService.getByIdCategoria(this.idCategoria).subscribe((resp: Categoria) => {
      this.categoria
    })
  }
}
