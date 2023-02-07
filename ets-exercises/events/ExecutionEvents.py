from windows.MainWindow import MainWindow as m
from windows.firstList.firstListWindow import ButtonWindow as b
from windows.secondList.secondListWindow import ButtonWindow02 as b2
from PySimpleGUI import PySimpleGUI as g

class ExecutionEvents:
    wInitial = m.initialWindow(0)

    while True:
        window, event, values = g.read_all_windows()

        #Exit the program
        if window == wInitial and event == g.WIN_CLOSED:
            break

        #Button click
        else:
            while True:
                if window == wInitial and event == "Exercicio 1":
                    b.buttonWindow1(0)
                    break
                elif window == wInitial and event == "Exercicio 2":
                    b.buttonWindow2(0)
                    break

                elif window == wInitial and event == "Exercicio 3":
                    b.buttonWindow3(0)
                    break

                elif window == wInitial and event == "Exercicio 4":
                    b.buttonWindow4(0)
                    break

                elif window == wInitial and event == "Exercicio 5":
                    b.buttonWindow5(0)
                    break

                elif window == wInitial and event == "Exercicio 6":
                    b.buttonWindow6(0)
                    break

                elif window == wInitial and event == "Exercicio 7":
                    b.buttonWindow7(0)
                    break

                elif window == wInitial and event == "Exercicio 8":
                    b2.buttonWindow8(0)
                    break

                elif window == wInitial and event == "Exercicio 9":
                    b2.buttonWindow9(0)
                    break