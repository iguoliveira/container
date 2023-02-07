#include <iostream>
#include <string.h>
#include <locale.h>
#include "cadastro.h"

void listar(){
    for(int y=0;y<100;y++){
        if(c[y].id == 0){break;}
        if(c[y].id < 0){
            printf("USUARIO EXCLUIDO\n");
        }else{
            printf("%i",c[y].id);
            printf(", %s",c[y].nome);
            printf(", %s",c[y].email);
            printf(", %s",c[y].rua);
            printf(", %i",c[y].num);
            printf(", %s",c[y].complem);
            printf(", %s",c[y].bairro);
            printf(", %i",c[y].cep);
            printf(", %s",c[y].cidade);
            printf(", %s",c[y].estado);
            printf(", %s",c[y].pais);
            printf(", %i",c[y].telefone);
            printf(", %i",c[y].ddd);
            printf(", %i",c[y].dia);
            printf(", %i",c[y].mes);
            printf(", %i",c[y].ano);
            printf(", %s\n",c[y].obs);
        }
    }
}