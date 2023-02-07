from PySimpleGUI import PySimpleGUI as g

class MainWindow:
    def initialWindow(self):
        g.theme('DarkTeal')

        linha = [
            [g.Button('Exercicio 1'), g.Button('Exercicio 2'), g.Button('Exercicio 3'), g.Button('Exercicio 4')],
            [g.Button('Exercicio 5'), g.Button('Exercicio 6'), g.Button('Exercicio 7'), g.Button('Exercicio 8')],
            [g.Button('Exercicio 9'), g.Button('Exercicio 10'), g.Button('Exercicio 11'), g.Button('Exercicio 12')],
        ]

        layout = [
            [g.Text('Created by Igor Oliveira')],
            [g.Frame('Exercicios', layout=linha, key='container')]
        ]

        return g.Window('Central de Exercicios', layout=layout, size=(450, 450), finalize=True)
