from PySimpleGUI import PySimpleGUI as g

class ButtonWindow:
    def buttonWindow(self, nome):
        g.theme('DarkBlue4')

        linha = [
            [g.Text(nome, key='textbox')]
        ]

        layout = [
            [g.Button('Back')],
            [g.Frame("Exercicio", layout=linha, key='container')]
        ]

        return g.Window('Exercicio', layout=layout, size=(250, 250), finalize=True)