from PySimpleGUI import PySimpleGUI as g


class ButtonWindow02:

    #Button Eight
    def buttonWindow8(self):
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

            elif event == "Execute":
                print("-" * 50)
                numUser = int(values["number"])
                for i in range(10):
                    print("{} x {} = {}".format(numUser, (i+1), (numUser*(i+1))))
                print("-" * 50)

        window.close()

    #Button Nine
    def buttonWindow9(self):
        g.theme('DarkBlue4')

        linha = [
            [g.Text("Enter with a number")],
            [g.Input(key="number")],
            [g.Button("Get")],
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

            elif event == "Get":
                listNum = []
                
                if len(listNum) >= 6:
                    count = 0
                    for i in listNum:
                        if i % 2 == 0:
                            count += i
                    print("-" * 50)
                    print("Soma total eh: " + count)
                    print("-" * 50)
                    listNum.clear()
                else:
                    listNum.append(int(values["number"]))

        window.close()