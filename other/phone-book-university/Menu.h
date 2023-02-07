#include <iostream>
#include <string.h>
#include <locale.h>
#include "cadastro.h"
#include "consultar.h"
#include "listar.h"

int op;
void criarMenu(){
		system("cls");
		system("Color 0C");
		puts(" ---------------------------");
		puts(" |          MENU           |");  
		puts(" |_________________________|");  
		puts(" |  [1] - Cadastrar        |");
		puts(" |  [2] - Consultar        |");
		puts(" |  [3] - Listar           |");
		puts(" |  [4] - Excluir          |");
		puts(" |  [0] - Sair             |");
		puts(" ---------------------------");
			
		do{
			printf("> Digite a opcao desejada: ");
			scanf("%i",&op);
			system("cls");
			switch(op){
				case 1:
					dadosCad();
				break;
				case 2:
					consultar();
				break;
				case 3:
					listar();
				break;
				case 4:
					excluirUser();
				break;
				default:
				break;
			}
		}while(op!=0);
}