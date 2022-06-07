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
        self.jokenpo = uic.loadUi('telas/jokenpo.ui')

        self.main.btnTictactoe.clicked.connect(self.openTictactoe)
        self.main.btnHangman.clicked.connect(self.openHangman)
        self.main.btnJokenpo.clicked.connect(self.openJokenPo)

        self.main.show()
        app.exec()

    def openTictactoe(self):
        self.main.btnTictactoe.setEnabled(False)
        buttons = [self.tictactoe.btn1,self.tictactoe.btn2,self.tictactoe.btn3,self.tictactoe.btn4,self.tictactoe.btn5,self.tictactoe.btn6,self.tictactoe.btn7,self.tictactoe.btn8,self.tictactoe.btn9]
        for i in buttons:
            i.clicked.connect(partial(self.changeText, i))
        self.tictactoe.show()

    def disableButtons(self, buttons):
        for i in buttons:
            for j in i:
                j.setEnabled(False)

    vez = 0
    def changeText(self, btn):
        if self.vez % 2 == 0:
            if btn.text() == "":
                self.tictactoe.label_2.setText("VEZ DO 'O'")
                btn.setText("X")
                btn.setStyleSheet("color: red;")
                btn.setEnabled(False)
        else:
            if btn.text() == "":
                self.tictactoe.label_2.setText("VEZ DO 'X'")
                btn.setText("O")
                btn.setStyleSheet("color: green")
                btn.setEnabled(False)

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
        win = False
        buttons = [
            [self.tictactoe.btn1, self.tictactoe.btn2, self.tictactoe.btn3],
            [self.tictactoe.btn4, self.tictactoe.btn5, self.tictactoe.btn6],
            [self.tictactoe.btn7, self.tictactoe.btn8, self.tictactoe.btn9]
        ]

        if buttons[0][0].text() == "X" and buttons[0][1].text() == "X" and buttons[0][2].text() == "X":
            win = True
        elif buttons[1][0].text() == "X" and buttons[1][1].text() == "X" and buttons[1][2].text() == "X":
            win = True
        elif buttons[2][0].text() == "X" and buttons[2][1].text() == "X" and buttons[2][2].text() == "X":
            win = True
        elif buttons[0][0].text() == "X" and buttons[1][0].text() == "X" and buttons[2][0].text() == "X":
            win = True
        elif buttons[0][1].text() == "X" and buttons[1][1].text() == "X" and buttons[2][1].text() == "X":
            win = True
        elif buttons[0][2].text() == "X" and buttons[1][2].text() == "X" and buttons[2][2].text() == "X":
            win = True
        elif buttons[0][0].text() == "X" and buttons[1][1].text() == "X" and buttons[2][2].text() == "X":
            win = True
        elif buttons[0][2].text() == "X" and buttons[1][1].text() == "X" and buttons[2][0].text() == "X":
            win = True

        if win:
            self.disableButtons(buttons)
            return True

    def playerOWon(self):
        win = False
        buttons = [
            [self.tictactoe.btn1, self.tictactoe.btn2, self.tictactoe.btn3],
            [self.tictactoe.btn4, self.tictactoe.btn5, self.tictactoe.btn6],
            [self.tictactoe.btn7, self.tictactoe.btn8, self.tictactoe.btn9]
        ]

        if buttons[0][0].text() == "O" and buttons[0][1].text() == "O" and buttons[0][2].text() == "O":
            win = True
        elif buttons[1][0].text() == "O" and buttons[1][1].text() == "O" and buttons[1][2].text() == "O":
            win = True
        elif buttons[2][0].text() == "O" and buttons[2][1].text() == "O" and buttons[2][2].text() == "O":
            win = True
        elif buttons[0][0].text() == "O" and buttons[1][0].text() == "O" and buttons[2][0].text() == "O":
            win = True
        elif buttons[0][1].text() == "O" and buttons[1][1].text() == "O" and buttons[2][1].text() == "O":
            win = True
        elif buttons[0][2].text() == "O" and buttons[1][2].text() == "O" and buttons[2][2].text() == "O":
            win = True
        elif buttons[0][0].text() == "O" and buttons[1][1].text() == "O" and buttons[2][2].text() == "O":
            win = True
        elif buttons[0][2].text() == "O" and buttons[1][1].text() == "O" and buttons[2][0].text() == "O":
            win = True

        if win:
            self.disableButtons(buttons)
            return True

    # Beginning of the hangman game
    def openHangman(self):
        self.main.btnHangman.setEnabled(False)
        self.hangman.input.setMaxLength(1)
        self.hangman.input.setHidden(True)
        self.hangman.chutar.clicked.connect(self.guessWord)
        self.hangman.show()

    firstTime = True
    word = {}
    keys = []
    guessedWords = []
    choosedWord = ''
    text = ''
    errorCount = 0
    empty = []
    def guessWord(self):
        if self.firstTime:
            self.hangman.input.setHidden(False)
            self.hangman.chutar.setText("Chutar")
            self.word = self.returnWord()
            self.keys = list(self.word.keys())
            self.choosedWord = self.keys[0]
            self.hangman.dica.setText("DICA: "+self.word[self.keys[0]])
            self.firstTime = False
            for i in range(len(self.keys[0])):
                self.empty.append("_")
            self.hangman.acertadas.setText(" ".join(self.empty))

        else:
            letter = self.hangman.input.text()
            letter = letter.lower()
            if letter != "":
                if not self.alreadyGuessed(letter):
                    self.hangman.input.setText("")
                    if not self.verifyLetter(letter):
                        self.errorCount += 1

                    self.errorPrint(self.errorCount)
                    self.guessedWords.append(letter)
                    self.hangman.letrasChutadas.setText(" ".join(self.guessedWords))
                else:
                    self.hangman.resp.setText("A letra " +letter+" ja foi chutada!")
                    self.hangman.input.setText("")
            else:
                self.hangman.resp.setText("Digite algo antes!")

    def alreadyGuessed(self, letter):
        for i in self.guessedWords:
            if letter.lower() == i.lower():
                return True
        return False

    def returnWord(self):
        words = [{"batata":"tuberculo"}, {"minecraft":"jogo"}, {"cachorro":"animal"}, {"gato":"animal"}, {"garrafa":"objeto"}, {"pistola":"arma"}]
        return words[randint(0, len(words))]

    def verifyLetter(self, letter):
        count = 0
        for i in self.choosedWord:
            if letter == i:
                for x in range(len(self.keys[0])):
                    if self.keys[0][x] == letter:
                        self.empty[x] = letter
                self.choosedWord = self.choosedWord.replace(letter, "")
                count -= 1
                break
            else:
                count += 1

        if count == len(self.choosedWord):
            return False
        elif len(self.choosedWord) == 0:
            self.hangman.acertadas.setText(" ".join(self.empty))
            self.hangman.dica.setText("VOCE GANHOU!")
            self.hangman.resp.setText("")
            self.hangman.chutar.setEnabled(False)
            return True
        else:
            self.hangman.resp.setText("LETRA CORRETA")
            self.hangman.acertadas.setText(" ".join(self.empty))
            return True

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
            self.hangman.acertadas.setText(" ".join(self.empty))
            self.hangman.dica.setText("VOCE PERDEU =(")
            self.hangman.resp.setText("Palavra: " + self.keys[0])
            self.hangman.chutar.setEnabled(False)

    #Beginning of the JokenPo
    def openJokenPo(self):
        self.main.btnJokenpo.setEnabled(False)
        buttons = [self.jokenpo.btn1, self.jokenpo.btn2, self.jokenpo.btn3]
        for i in buttons:
            i.clicked.connect(partial(self.playJokenPo,i))
        self.jokenpo.show()

    wonCount = 0
    defeatCount = 0
    def playJokenPo(self, button):
        choices = ["Pedra", "Papel", "Tesoura"]
        choosed = choices[randint(0,len(choices)-1)]
        player = button.text()
        if player == "PEDRA":
            if choosed == "Tesoura":
                self.jokenpo.decisao.setText("GANHOU! O oponente escolheu Tesoura")
                self.wonCount += 1
            elif choosed == "Papel":
                self.jokenpo.decisao.setText("PERDEU! O oponente escolheu Papel")
                self.defeatCount += 1
            elif choosed == "Pedra":
                self.jokenpo.decisao.setText("EMPATE! O oponente escolheu Pedra")

        elif player == "PAPEL":
            if choosed == "Tesoura":
                self.jokenpo.decisao.setText("PERDEU! O oponente escolheu Tesoura")
                self.defeatCount += 1
            elif choosed == "Papel":
                self.jokenpo.decisao.setText("EMPATE! O oponente escolheu Papel")
            elif choosed == "Pedra":
                self.jokenpo.decisao.setText("GANHOU! O oponente escolheu Pedra")
                self.wonCount += 1

        elif player == "TESOURA":
            if choosed == "Tesoura":
                self.jokenpo.decisao.setText("EMPATE! O oponente escolheu Tesoura")
            elif choosed == "Papel":
                self.jokenpo.decisao.setText("GANHOU! O oponente escolheu Papel")
                self.wonCount += 1
            elif choosed == "Pedra":
                self.jokenpo.decisao.setText("PERDEU! O oponente escolheu Pedra")
                self.defeatCount += 1

        self.jokenpo.contador.setText(f"{self.wonCount} x {self.defeatCount}")

        if self.wonCount >= 2:
            self.jokenpo.decisao.setText(f"GANHOU!")
            self.jokenpo.btn1.setEnabled(False)
            self.jokenpo.btn2.setEnabled(False)
            self.jokenpo.btn3.setEnabled(False)

        elif self.defeatCount >= 2:
            self.jokenpo.decisao.setText(f"PERDEU!")
            self.jokenpo.btn1.setEnabled(False)
            self.jokenpo.btn2.setEnabled(False)
            self.jokenpo.btn3.setEnabled(False)


if __name__ == '__main__':
    c = MainWindow()