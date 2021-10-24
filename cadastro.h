#include <iostream>
#include <string.h>
#include <locale.h>
#ifndef CADASTRO_H
#define CADASTRO_H

typedef struct Cadastros{
	int id;
	char nome[30];
	char email[20];
	char rua[30];
	int num;
	char complem[20];
	char bairro[20];
	int cep;
	char cidade[10];
	char estado[10];
	char pais[10];
	char telefone[30];
	char ddd[30];
	char dia[30];
	char mes[30];
	char ano[30];
	char obs[30];	
}Cadastros;
Cadastros c[100];

int opcaoDesejada=1,idEscolhido;
char noInput[30] = "0";

void dadosCad(){
		for(int i=0;i<100;i++){
			puts("---------- CADASTRE-SE -----------");
			c[i].id = i+1;
			printf("\n> Seu ID: %i\n",c[i].id);
			fflush(stdin);
			printf("> Digite seu nome: ");
			gets(c[i].nome);
			fflush(stdin);
			printf("> Digite seu e-mail: ");
			gets(c[i].email);
			fflush(stdin);
			printf("> Digite o nome da sua rua: ");
			gets(c[i].rua);
			fflush(stdin);
			printf("> Digite o numero do seu endereco: ");
			scanf("%i",&c[i].num);
			fflush(stdin);
			printf("> Digite seu complemento: ");
			gets(c[i].complem);
			fflush(stdin);
			printf("> Digite seu bairro: ");
			gets(c[i].bairro);
			fflush(stdin);
			printf("> Digite seu CEP: ");
			scanf("%i",&c[i].cep);
			fflush(stdin);
			printf("> Digite sua cidade: ");
			gets(c[i].cidade);
			fflush(stdin);
			printf("> Digite seu estado: ");
			gets(c[i].estado);
			fflush(stdin);
			printf("> Digite seu pais: ");
			gets(c[i].pais);
			fflush(stdin);
			printf("> Digite seu DDD: ");
			gets(c[i].ddd);
			fflush(stdin);
			printf("> Digite seu numero de telefone: ");
			gets(c[i].telefone);
			fflush(stdin);
			printf("> Digite o dia do seu aniversario: ");
			gets(c[i].dia);
			fflush(stdin);
			printf("> Digite o mes do seu aniversario: ");
			gets(c[i].mes);
			fflush(stdin);
			printf("> Digite o ano do seu aniversario: ");
			gets(c[i].ano);
			fflush(stdin);
			printf("\n> Caso tenha alguma observacao, digite aqui: ");
			gets(c[i].obs);
			fflush(stdin);
			printf("\nCADASTRO REALIZADO! ");
			printf("---------------------------");
			printf("\nDeseja continuar? se sim, digite 1, se nao, digite 0: ");
			scanf("%i",&opcaoDesejada);
			if(opcaoDesejada!=1){break;}
		}
}

void excluirUser(){
	printf("Digite o ID escolhido: ");
	scanf("%i",&idEscolhido);
	for(int i=0;i<100;i++){
		if(idEscolhido==c[i].id){
			c[i].id = -10;
		}
	}
	printf("O usuario de ID %i foi excluido!\n",idEscolhido);
}
#endif