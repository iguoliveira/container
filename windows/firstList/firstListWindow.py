from PySimpleGUI import PySimpleGUI as g

class ButtonWindow:

    #Button One
    def buttonWindow1(self):
        g.theme('DarkBlue4')

        linha = [
            [g.Text("Enter with your name")],
            [g.Input(key="name")],
            [g.Button("Execute")],
            [g.Output(size=(60,15))]
        ]

        layout = [
            [g.Button('Back')],
            [g.Frame("Exercicio", layout=linha, key='container')]
        ]

        window = g.Window('Exercicio', layout=layout, size=(250, 250))


        while True:
            event, values = window.read()
            if event == "Back" or event == g.WINDOW_CLOSED:
                break

            elif event == "Execute":
                print("-" * 50)
                print("Minusculo: " + values["name"].lower())
                print("Letras sem espacos: "+ str(len(values["name"].replace(" ",""))))
                print("Letras com espacos: "+ str(len(values["name"])))
                print("Letras do primeiro nome: " + str(len(values["name"].split()[0])) )
                print("-" * 50)

        window.close()

    #Button Two
    def buttonWindow2(self):
        g.theme('DarkBlue4')

        linha = [
            [g.Text("Enter with a number")],
            [g.Input(key="number")],
            [g.Button("Execute")],
            [g.Output(size=(60,15))]
        ]

        layout = [
            [g.Button('Back')],
            [g.Frame("Exercicio", layout=linha, key='container')]
        ]

        window = g.Window('Exercicio', layout=layout, size=(250, 250))


        while True:
            event, values = window.read()
            if event == "Back" or event == g.WINDOW_CLOSED:
                break

            elif int(values["number"]) >= 1000 and int(values["number"]) <= 9999 and event == "Execute":
                print("-" * 50)
                print("Unidade: " + values["number"][len(values["number"])-1])
                print("Dezena: " + values["number"][len(values["number"])-2])
                print("Centena: " + values["number"][len(values["number"])-3])
                print("Milhar: " + values["number"][len(values["number"])-4])
                print("-" * 50)

            else:
                print("\n" * 30)
                print("INVALID")

        window.close()

    # Button Three
    def buttonWindow3(self):
        g.theme('DarkBlue4')

        linha = [
            [g.Text("Enter with a city name")],
            [g.Input(key="name")],
            [g.Button("Execute")],
            [g.Output(size=(60, 15))]
        ]

        layout = [
            [g.Button('Back')],
            [g.Frame("Exercicio", layout=linha, key='container')]
        ]

        window = g.Window('Exercicio', layout=layout, size=(250, 250))

        while True:
            event, values = window.read()
            if event == "Back" or event == g.WINDOW_CLOSED:
                break

            elif values["name"].split()[0].lower() == "santo":
                print("Comeca com Santo\n")

            else:
                print("Nao comeca com Santo\n")

        window.close()

    # Button Four
    def buttonWindow4(self):
        g.theme('DarkBlue4')

        linha = [
            [g.Text("Enter with your name")],
            [g.Input(key="name")],
            [g.Button("Execute")],
            [g.Output(size=(60, 15))]
        ]

        layout = [
            [g.Button('Back')],
            [g.Frame("Exercicio", layout=linha, key='container')]
        ]

        window = g.Window('Exercicio', layout=layout, size=(250, 250))

        while True:
            event, values = window.read()
            if event == "Back" or event == g.WINDOW_CLOSED:
                break

            elif event == "Execute":
                print("-" * 50)
                for i in range(len(values["name"])):
                    print(values["name"][::-1][i].upper())
                print("-" * 50)

        window.close()