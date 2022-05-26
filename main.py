from PyQt5 import uic
from PyQt5 import QtWidgets
from functools import partial
from random import randint

class MainWindow:
    def __init__(self):
        app = QtWidgets.QApplication([])
        self.main = uic.loadUi('telas/centralofGames.ui')
        self.tictactoe = uic.loadUi('telas/tictactoe.ui')
        self.hangman = uic.loadUi('telas/hangman.ui')

        self.main.btnTictactoe.clicked.connect(self.openTictactoe)
        self.main.btnHangman.clicked.connect(self.openHangman)

        self.main.show()
        app.exec()

    vez = 0

    def openTictactoe(self):
        buttons = [self.tictactoe.btn1,self.tictactoe.btn2,self.tictactoe.btn3,self.tictactoe.btn4,self.tictactoe.btn5,self.tictactoe.btn6,self.tictactoe.btn7,self.tictactoe.btn8,self.tictactoe.btn9]
        for i in buttons:
            i.clicked.connect(partial(self.changeText, i))
        self.main.destroy()
        self.tictactoe.show()

    def changeText(self, btn):
        if self.vez % 2 == 0:
            if btn.text() == "":
                self.tictactoe.label_2.setText("VEZ DO 'O'")
                btn.setText("X")
                btn.setStyleSheet("color: red;")
        else:
            if btn.text() == "":
                self.tictactoe.label_2.setText("VEZ DO 'X'")
                btn.setText("O")
                btn.setStyleSheet("color: green")

        if self.playerXWon():
            self.tictactoe.label_2.setText("O JOGADOR 'X' VENCEU")
            self.tictactoe.label_2.setStyleSheet("color: red")

        elif self.playerOWon():
            self.tictactoe.label_2.setText("O JOGADOR 'O' VENCEU")
            self.tictactoe.label_2.setStyleSheet("color: green")
        elif self.vez >= 8:
            self.tictactoe.label_2.setText("DEU VELHA")
        self.vez += 1

    def playerXWon(self):
        buttons = [
            [self.tictactoe.btn1, self.tictactoe.btn2, self.tictactoe.btn3],
            [self.tictactoe.btn4, self.tictactoe.btn5, self.tictactoe.btn6],
            [self.tictactoe.btn7, self.tictactoe.btn8, self.tictactoe.btn9]
        ]

        if buttons[0][0].text() == "X" and buttons[0][1].text() == "X" and buttons[0][2].text() == "X":
            return True
        elif buttons[1][0].text() == "X" and buttons[1][1].text() == "X" and buttons[1][2].text() == "X":
            return True
        elif buttons[2][0].text() == "X" and buttons[2][1].text() == "X" and buttons[2][2].text() == "X":
            return True

        elif buttons[0][0].text() == "X" and buttons[1][0].text() == "X" and buttons[2][0].text() == "X":
            return True
        elif buttons[0][1].text() == "X" and buttons[1][1].text() == "X" and buttons[2][1].text() == "X":
            return True
        elif buttons[0][2].text() == "X" and buttons[1][2].text() == "X" and buttons[2][2].text() == "X":
            return True

        elif buttons[0][0].text() == "X" and buttons[1][1].text() == "X" and buttons[2][2].text() == "X":
            return True
        elif buttons[0][2].text() == "X" and buttons[1][1].text() == "X" and buttons[2][0].text() == "X":
            return True

    def playerOWon(self):
        buttons = [
            [self.tictactoe.btn1, self.tictactoe.btn2, self.tictactoe.btn3],
            [self.tictactoe.btn4, self.tictactoe.btn5, self.tictactoe.btn6],
            [self.tictactoe.btn7, self.tictactoe.btn8, self.tictactoe.btn9]
        ]

        if buttons[0][0].text() == "O" and buttons[0][1].text() == "O" and buttons[0][2].text() == "O":
            return True
        elif buttons[1][0].text() == "O" and buttons[1][1].text() == "O" and buttons[1][2].text() == "O":
            return True
        elif buttons[2][0].text() == "O" and buttons[2][1].text() == "O" and buttons[2][2].text() == "O":
            return True

        elif buttons[0][0].text() == "O" and buttons[1][0].text() == "O" and buttons[2][0].text() == "O":
            return True
        elif buttons[0][1].text() == "O" and buttons[1][1].text() == "O" and buttons[2][1].text() == "O":
            return True
        elif buttons[0][2].text() == "O" and buttons[1][2].text() == "O" and buttons[2][2].text() == "O":
            return True

        elif buttons[0][0].text() == "O" and buttons[1][1].text() == "O" and buttons[2][2].text() == "O":
            return True
        elif buttons[0][2].text() == "O" and buttons[1][1].text() == "O" and buttons[2][0].text() == "O":
            return True



    # Another Game
    def openHangman(self):
        self.hangman.input.setHidden(True)
        self.hangman.chutar.clicked.connect(self.guessWord)
        self.main.destroy()
        self.hangman.show()

    firstTime = True
    word = {}
    completedWord = []
    keys = []
    choosedWord = ''
    text = ''
    errorCount = 0
    def guessWord(self):
        if self.firstTime:
            self.hangman.input.setHidden(False)
            self.hangman.chutar.setText("Chutar")
            self.word = self.returnWord()
            self.keys = list(self.word.keys())
            self.choosedWord = self.keys[0]
            self.hangman.dica.setText(self.word[self.keys[0]])
            self.firstTime = False
        else:
            letter = self.hangman.input.text()
            if(self.verifyLetter(letter) or self.verifyLetter(letter) == "SIM"):
                print(self.text)
            else:
                self.errorCount += 1

            self.errorPrint(self.errorCount)
            print(self.choosedWord)
        # choosedWord = f[0]
        # sel.hangman.dica.setText(self.returnWord[f[0]])
        # letter = self.hangman.input.text()
        # self.hangman.fundoAkainu.setHidden(True)

    def returnWord(self):
        words = [{"batata":"tuberculo"}, {"minecraft":"jogo"}, {"cachorro":"animal"}, {"gato":"animal"}, {"garrafa":"objeto"}, {"pistola":"arma"}]
        return words[randint(0, len(words))]

    def verifyLetter(self, letter):
        count = 0
        for i in self.choosedWord:
            if letter == i:
                for x in self.choosedWord:
                    if x == letter:
                        self.completedWord.append(letter)
                self.choosedWord = self.choosedWord.replace(letter, "")
                break
            else:
                count +=1

        if self.won():
            return "SIM"

        if count >= len(self.choosedWord):
            return False
        else:
            print("ACERTO A LETRA")
            return True

    def won(self):
        if len(self.choosedWord) == 0:
            return True
        else:
            return False

    def errorPrint(self, value):
        if value == 1:
            self.hangman.fundoCabeca.setHidden(True)
        elif value == 2:
            self.hangman.fundoTorco.setHidden(True)
        elif value == 3:
            self.hangman.fundoBraco.setHidden(True)
        elif value == 4:
            self.hangman.FundoBraco2.setHidden(True)
        elif value == 5:
            self.hangman.fundoPerna.setHidden(True)
        elif value == 6:
            self.hangman.fundoPerna2.setHidden(True)
            self.hangman.fundoAkainu.setHidden(True)

if __name__ == '__main__':
    c = MainWindow()