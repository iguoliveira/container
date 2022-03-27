class FirstList:
    def exercise01(self):
        nome = "LINDOMAR"
        return f"Nome em maiusculo: {nome.upper()}"

    def exercise02(self):
        numero = "1834"
        return f"Unidade: {numero[3]} \n" + f"Dezena: {numero[2]} \n" + f"Centena: {numero[1]} \n" + f"Milhar: {numero[0]}"

    def exercise03(self):
        name = "Sao Jose Carlos Todos Possiveis"
        splittedName = name.split()
        if splittedName[0] != "Santos":
            return f"Cidade: {name} \n" f"Näo comeca com Santos"

    def exercise04(self):
        name = "LINDOMAR"
        for i in range(len(name)):
            print(name[i])

    def exercise05(self):
        print("seila como fazer isso em gui")

    def exercise06(self):
        print("seila como fazer isso em gui")