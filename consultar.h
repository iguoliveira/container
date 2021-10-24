#include <iostream>
#include <string.h>
#include <math.h>
#include <locale.h>
#include "cadastro.h"
#ifndef CONSULTAR_H
#define CONSULTAR_H

int op2, consultId;
char consultNome[20],consultTelefone[30],consultDDD[30],consultCidade[30],consultBairro[30],consultDia[30],consultMes[30];

void ConsultaId(){
		printf("Digite o ID: ");
		scanf("%i",&consultId);
		
		for(int i=0;i<100;i++){
			if(consultId==c[i].id){
				puts("-------------------------------");
				puts("Voce achou os seguintes dados: ");
				printf("ID: %i \n",c[i].id);
				printf("Nome: %s\n",c[i].nome);
				printf("E-mail: %s\n",c[i].email);
				printf("Endereco: (Rua %s, N %i, Complemento: %s \n)",c[i].rua,c[i].num,c[i],c[i].complem);
				puts("-------------------------------");
			}
		}	 
}
void ConsultaNome(){
		printf("Digite o primeiro nome: ");
		scanf("%s",&consultNome);

		for(int i=0;i<100;i++){
			if(strcmp(consultNome,c[i].nome) == 0){
				puts("-------------------------------");
				puts("Voce achou os seguintes dados: ");
				printf("ID: %i \n",c[i].id);
				printf("Nome: %s\n",c[i].nome);
				printf("E-mail: %s\n",c[i].email);
				printf("Endereco: (Rua %s, N %i, Complemento: %s \n)",c[i].rua,c[i].num,c[i],c[i].complem);
				puts("-------------------------------");
			}
		}
}

void ConsultaTelefone(){
		printf("Digite o numero do telefone: ");
		scanf("%s",&consultTelefone);

		for(int i=0;i<100;i++){
			if(strcmp(consultTelefone,c[i].telefone) == 0){
				puts("-------------------------------");
				puts("Voce achou os seguintes dados: ");
				printf("ID: %i \n",c[i].id);
				printf("Nome: %s\n",c[i].nome);
				printf("E-mail: %s\n",c[i].email);
				printf("Endereco: (Rua %s, N %i, Complemento: %s \n)",c[i].rua,c[i].num,c[i],c[i].complem);
				puts("-------------------------------");
			}
		}
}

void ConsultaDDD(){
		printf("Digite o seu DDD: ");
		scanf("%s",&consultDDD);

		for(int i=0;i<100;i++){
			if(strcmp(consultDDD,c[i].ddd) == 0){
				puts("-------------------------------");
				puts("Voce achou os seguintes dados: ");
				printf("ID: %i \n",c[i].id);
				printf("Nome: %s\n",c[i].nome);
				printf("E-mail: %s\n",c[i].email);
				printf("Endereco: (Rua %s, N %i, Complemento: %s \n)",c[i].rua,c[i].num,c[i],c[i].complem);
				puts("-------------------------------");
			}
		}
}

void ConsultaCidade(){
		printf("Digite o nome da cidade: ");
		scanf("%s",&consultCidade);

		for(int i=0;i<100;i++){
			if(strcmp(consultCidade,c[i].cidade) == 0){
				puts("-------------------------------");
				puts("Voce achou os seguintes dados: ");
				printf("ID: %i \n",c[i].id);
				printf("Nome: %s\n",c[i].nome);
				printf("E-mail: %s\n",c[i].email);
				printf("Endereco: (Rua %s, N %i, Complemento: %s \n)",c[i].rua,c[i].num,c[i],c[i].complem);
				puts("-------------------------------");
			}
		}
}

void ConsultaBairro(){
		printf("Digite o nome do bairro: ");
		scanf("%s",&consultBairro);

		for(int i=0;i<100;i++){
			if(strcmp(consultBairro,c[i].bairro) == 0){
				puts("-------------------------------");
				puts("Voce achou os seguintes dados: ");
				printf("ID: %i \n",c[i].id);
				printf("Nome: %s\n",c[i].nome);
				printf("E-mail: %s\n",c[i].email);
				printf("Endereco: (Rua %s, N %i, Complemento: %s \n)",c[i].rua,c[i].num,c[i],c[i].complem);
				puts("-------------------------------");
			}
		}
}

void ConsultaDia(){
		printf("Digite o dia do seu aniversario: ");
		scanf("%s",&consultDia);

		for(int i=0;i<100;i++){
			if(strcmp(consultDia,c[i].dia) == 0){
				puts("-------------------------------");
				puts("Voce achou os seguintes dados: ");
				printf("ID: %i \n",c[i].id);
				printf("Nome: %s\n",c[i].nome);
				printf("E-mail: %s\n",c[i].email);
				printf("Endereco: (Rua %s, N %i, Complemento: %s \n)",c[i].rua,c[i].num,c[i],c[i].complem);
				puts("-------------------------------");
			}
		}
}

void ConsultaMes(){
		printf("Digite o mes do seu aniversario: ");
		scanf("%s",&consultMes);

		for(int i=0;i<100;i++){
			if(strcmp(consultMes,c[i].mes) == 0){
				puts("-------------------------------");
				puts("Voce achou os seguintes dados: ");
				printf("ID: %i \n",c[i].id);
				printf("Nome: %s\n",c[i].nome);
				printf("E-mail: %s\n",c[i].email);
				printf("Endereco: (Rua %s, N %i, Complemento: %s \n)",c[i].rua,c[i].num,c[i],c[i].complem);
				puts("-------------------------------");
			}
		}
}

void consultar(){
		system("Color 0C");
		puts("------------ CONSULTAR -------------");
		puts("Escolha uma maneira para procura: \n");
		puts("[1] - ID");
		puts("[2] - Nome");
		puts("[3] - Bairro");
		puts("[4] - Cidade");
		puts("[5] - Telefone");
		puts("[6] - DDD");
		puts("[7] - Dia do Aniversario");
		puts("[8] - Mes do Aniversario");
		puts("[0] - Voltar");
		
		do{
			printf("Opcao: ");
			scanf("%i",&op2);
			switch(op2){
				case 1:
					ConsultaId();
				break;
				case 2:
					ConsultaNome();
				break;
				case 3:
					ConsultaBairro();
				break;
				case 4:
					ConsultaCidade();
				break;
				case 5:
					ConsultaTelefone();
				break;
				case 6:
					ConsultaDDD();
				break;
				case 7:
					ConsultaDia();
				break;
				case 8:
					ConsultaMes();
				break;
				default:
				break;
			}
		}while(op2!=0);
}
#endif