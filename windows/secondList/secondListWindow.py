from threading import Thread
from PySimpleGUI import PySimpleGUI as g


class ButtonWindow02:

    #Button Eight. First Exercise of the list 02
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

    #Button Nine. Second Exercise of the list 02
    i = 0
    def buttonWindow9(self):
        g.theme('DarkBlue4')

        linha = [
            [g.Text("Enter with a number")],
            [g.Input(key="number")],
            [g.Text("Click Count: {}".format(str(self.i)), key='count')],
            [g.Button("Get")]
        ]

        layout = [
            [g.Button('Back')],
            [g.Frame("Exercicio", layout=linha, key='container')]
        ]

        window = g.Window('Exercicio', layout=layout, size=(250, 250))

        def detect_button():
            global i

            while True:
                if True:
                    i += 1
                    window.write_event_value('-COUNT-', i)

        Thread(target=detect_button, daemon=True).start()

        while True:
            event, values = window.read()
            if event == "Back" or event == g.WINDOW_CLOSED:
                break

            elif event == 'Get':
                count = values[event]
                print(count)
                window['count'].update(str(count))

        window.close()