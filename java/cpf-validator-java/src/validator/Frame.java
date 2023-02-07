package validator;

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.ArrayList;

public class Frame {

    JFrame frame;
    JPanel inputArea;
    JTextField input;
    JButton button;
    JPanel outputArea;
    JTextArea text;

    public Frame(){
        frame = new JFrame();
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(400, 300);
        frame.setLayout(new GridLayout(2,2,0,0));
        frame.setBackground(Color.gray);

        inputArea = new JPanel();
        inputArea.setPreferredSize(new Dimension(300,150));
        inputArea.setBackground(Color.white);
        frame.add(inputArea);

        input = new JTextField();
        input.setPreferredSize(new Dimension(150,25));
        inputArea.add(input);

        button = new JButton("Validate");
        inputArea.add(button);

        outputArea = new JPanel();
        outputArea.setPreferredSize(new Dimension(300,150));
        outputArea.setBackground(Color.pink);
        frame.add(outputArea);

        text = new JTextArea();
        text.setPreferredSize(new Dimension(300,100));
        outputArea.add(text);

        button.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                if(e.getSource() == button) {
                    boolean firstStep = false;
                    boolean secStep = false;
                    ArrayList<Integer> cpf = new ArrayList<>();

                    String cpfString = input.getText();

                    for (int i = 0; i < cpfString.length(); i++) {
                        cpf.add(Integer.parseInt(cpfString.charAt(i) + ""));
                    }
                    if(cpf.size() == 11){
                        int multi = 10;
                        double soma = 0;
                        for (int num : cpf) {
                            soma += num * multi;
                            multi -= 1;
                            if (multi <= 1) {
                                break;
                            }
                        }

                        int multi2 = 11;
                        double soma2 = 0;
                        for (int num : cpf) {
                            soma2 += num * multi2;
                            multi2 -= 1;
                            if (multi2 <= 1) {
                                break;
                            }
                        }

                        double total = (soma * 10) % 11;
                        double total2 = (soma2 * 10) % 11;

                        if (total == 10) {
                            total = 0;
                        }

                        if (total == cpf.get(9)) {
                            firstStep = true;
                        }

                        if (total2 == cpf.get(10)) {
                            secStep = true;
                        }

                        if (firstStep && secStep) {
                            text.setText("O CPF: " + cpf.get(0) + "" + cpf.get(1) + "" + cpf.get(2) + "." + cpf.get(3) + "" + cpf.get(4) + "" + cpf.get(5) + "." + cpf.get(6) + "" + cpf.get(7) + "" + cpf.get(8) + "-" + cpf.get(9) + "" + cpf.get(10) + " eh valido");
                        } else {
                            text.setText("CPF INVALIDO");
                        }
                    }
                    else if(cpf.size() == 9){

                        int multi = 10;
                        double soma = 0;
                        for (int num : cpf) {
                            soma += num * multi;
                            multi -= 1;
                            if (multi <= 1) {
                                break;
                            }
                        }

                        double total = (soma * 10) % 11;
                        if (total == 10) {
                            total = 0;
                        }
                        int totalInt = (int) total;
                        cpf.add(totalInt);

                        int multi2 = 11;
                        double soma2 = 0;
                        for (int num : cpf) {
                            soma2 += num * multi2;
                            multi2 -= 1;
                            if (multi2 <= 1) {
                                break;
                            }
                        }
                        double total2 = (soma2 * 10) % 11;
                        int totalInt2 = (int) total2;
                        cpf.add(totalInt2);

                        text.setText("" + cpf.get(0) + "" + cpf.get(1) + "" + cpf.get(2) + "." + cpf.get(3) + "" + cpf.get(4) + "" + cpf.get(5) + "." + cpf.get(6) + "" + cpf.get(7) + "" + cpf.get(8) + "-" + cpf.get(9) + "" + cpf.get(10));
                    }
                }
            }
        });

        frame.setResizable(false);
        frame.setVisible(true);
    }
}