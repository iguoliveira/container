from windows.MainWindow import MainWindow as m
from windows.ButtonWindow import ButtonWindow as b
from PySimpleGUI import PySimpleGUI as g
from execises.FirstList import FirstList as f

class ExecutionEvents:
    wInitial, wExerc = m.initialWindow(0), None

    count = 1
    while True:
        window, event, values = g.read_all_windows()
        if (window == wInitial and event == g.WIN_CLOSED) or (window == wExerc and event == g.WIN_CLOSED):
            break

        elif window == wInitial and event == "Add":
            count += 1
            wInitial.extend_layout(wInitial['container'], [[g.Button('Exercicio {}'.format(count))]])

        elif window == wInitial and event == "Exercicio 1":
            wExerc = b.buttonWindow(0,f.exercise01(0))
            wInitial.hide()

        elif window == wExerc and event == "Back":
            wExerc.hide()
            wInitial.un_hide()
