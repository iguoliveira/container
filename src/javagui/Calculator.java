package javagui;

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.ArrayList;

public class Calculator{
    JFrame frame;
    JPanel buttons;
    JPanel display;
    JTextArea text;

    ArrayList<JButton> values = new ArrayList<>();
    ArrayList<String> chars = new ArrayList<>();

    char operation;
    double firstNumber, secondNumber,result;

    Calculator(){
        frame = new JFrame();
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(300,350);

        display = new JPanel();
        display.setLayout(new BorderLayout());
        display.setPreferredSize(new Dimension(0,50));
        display.setBackground(Color.white);

        text = new JTextArea();
        display.add(text);

        buttons = new JPanel();
        buttons.setBackground(Color.darkGray);
        buttons.setLayout(new GridLayout(6,6,5,5));

        for(int i = 0; i <= 17; i++){
            if(i >= 0 && i <= 8){
                values.add(new JButton(""+(i+1)));
                chars.add(Integer.toString((i+1)));
            }
            else if(i == 9){
                values.add(new JButton("0"));
                chars.add("0");
            }
            else if(i == 10){
                values.add(new JButton("<-"));
                chars.add("<-");
            }
            else if(i == 11){
                values.add(new JButton("."));
                chars.add(".");
            }
            else if(i == 12){
                values.add(new JButton("÷"));
                chars.add("÷");
            }
            else if(i == 13){
                values.add(new JButton("X"));
                chars.add("x");
            }
            else if(i == 14){
                values.add(new JButton("-"));
                chars.add("-");
            }
            else if(i == 15){
                values.add(new JButton("+"));
                chars.add("+");
            }
            else if(i == 16){
                values.add(new JButton("CA"));
                chars.add("ca");
            }

            else if(i == 17){
                values.add(new JButton("="));
                chars.add("=");
            }
        }

        for(int i = 0; i < values.toArray().length; i++){
            if(i >= 0 && i <= 9){
                values.get(i).setBackground(new Color(0xf57dcf));
            }

            if(i == 10 || i == 16){
                values.get(i).setBackground(new Color(0xeb5264));
            }

            if(i >= 12 && i <= 15){
                values.get(i).setBackground(new Color(0x7177f5));
            }

            if(i == 11 || i == 17){
                values.get(i).setBackground(new Color(0xf0f07a));

            }

            buttons.add((Component) values.toArray()[i]);
        }

        for(int i = 0; i < values.toArray().length; i++){
            values.get(i).addActionListener(new ActionListener() {

                @Override
                public void actionPerformed(ActionEvent e) {
                    for(int x = 0; x < values.toArray().length; x++){

                        if(e.getSource() == values.get(x)){

                            if(values.indexOf(values.get(x)) >= 0 && values.indexOf(values.get(x)) <= 9){
                                text.append(chars.get(x));
                            }

                            else if(values.indexOf(values.get(x)) == 10){
                                String displayText = text.getText();
                                text.setText("");
                                for(int j = 0; j < displayText.length()-1; j++){
                                    text.setText(text.getText()+displayText.charAt(j));
                                }
                            }

                            else if(values.indexOf(values.get(x)) == 11){
                                text.append(".");
                            }

                            else if(values.indexOf(values.get(x)) >= 12 && values.indexOf(values.get(x)) <= 15){
                                firstNumber = Double.parseDouble(text.getText());
                                text.setText("");
                                String stringToChar = chars.get(x);
                                operation = stringToChar.charAt(0);
                            }

                            else if(values.indexOf(values.get(x)) == 16){
                                text.setText("");
                            }

                            else if(values.indexOf(values.get(x)) == 17){
                                secondNumber = Double.parseDouble(text.getText());

                                switch (operation){
                                    case'÷':
                                        result = firstNumber / secondNumber;
                                        break;
                                    case'x':
                                        result = firstNumber * secondNumber;
                                        break;
                                    case'-':
                                        result = firstNumber - secondNumber;
                                        break;
                                    case'+':
                                        result = firstNumber + secondNumber;
                                        break;
                                }
                                text.setText(""+result);
                            }
                        }
                    }
                }
            });
        }

        frame.add(display, BorderLayout.NORTH);
        frame.add(buttons);
        frame.setResizable(false);
        frame.setVisible(true);
    }
}