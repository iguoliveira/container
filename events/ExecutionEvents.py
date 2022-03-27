from windows.MainWindow import MainWindow as m
from windows.ButtonWindow import ButtonWindow as b
from PySimpleGUI import PySimpleGUI as g
from execises.FirstList import FirstList as f

class ExecutionEvents:
    wInitial, wExerc = m.initialWindow(0), None
    methods = {
        0 : f.exercise01(0),
        1 : f.exercise02(0),
        2 : f.exercise03(0),
        3 : f.exercise04(0),
        4 : f.exercise05(0),
        5 : f.exercise06(0)
    }

    buttons = ["Exercicio 1", "Exercicio 2"]
    count = 1

    while True:
        window, event, values = g.read_all_windows()
        if (window == wInitial and event == g.WIN_CLOSED) or (window == wExerc and event == g.WIN_CLOSED):
            break

        elif window == wInitial and event == "Add":
            count += 1
            wInitial.extend_layout(wInitial['container'], [[g.Button('Exercicio {}'.format(count))]])

        elif window == wExerc and event == "Back":
            wExerc.hide()
            wInitial.un_hide()

        else:
            for i in range(len(buttons)):
                if window == wInitial and event == buttons[i]:
                    wExerc = b.buttonWindow(0, methods.get(i))
                    wInitial.hide()