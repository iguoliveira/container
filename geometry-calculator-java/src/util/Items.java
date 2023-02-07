package util;

import calculations.Calculations;
import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class Items {
    Calculations calcMet = new Calculations();

    public void newFrameAttributes(JFrame frame){
        frame.setSize(200,200);
        frame.setResizable(false);
        frame.setLocation(1150,380);
    }

    public void newPanelAttributes(JPanel panel){
        panel.setLayout(new FlowLayout());
        panel.setPreferredSize(new Dimension(200,200));
        panel.setBackground(Color.pink);
    }

    public void newTextfieldAttributes(JTextField text){
        text.setPreferredSize(new Dimension(72,25));
    }

    public void newLabelAttributes(JLabel label){
        label.setPreferredSize(new Dimension(200,15));
    }

    public void newButtonAttributes(JButton button){
        button.setBackground(Color.lightGray);
    }

    public void newTextareaAttributes(JTextArea area){
        area.setEditable(false);
        area.setPreferredSize(new Dimension(190,45));
    }

    public void addItems(JFrame frame, JPanel panel, JLabel label, JTextField field, JTextField field2, JButton button, JTextArea area){
        frame.add(panel);
        panel.add(label);
        panel.add(field);
        panel.add(field2);
        panel.add(button);
        panel.add(area);
    }

    public void eventButton(int num, JButton button, JTextField input1, JTextField input2, JTextArea area){
        button.addActionListener(new ActionListener() {

            @Override
            public void actionPerformed(ActionEvent e) {

                if(num == 0){
                    area.setText("Area: " + calcMet.calcQuadrado(Double.parseDouble(input1.getText()),Double.parseDouble(input2.getText()))[0] +
                            "\n" + "Perimetro: " + calcMet.calcQuadrado(Double.parseDouble(input1.getText()),Double.parseDouble(input2.getText()))[1]);
                }

                if(num == 1){
                    area.setText("Area: " + calcMet.calcCirculo(Double.parseDouble(input1.getText())));
                }

                if(num == 2){
                    area.setText("Area: " + calcMet.calcTriangulo(Double.parseDouble(input1.getText())));
                }

                if(num == 3){
                    area.setText("Area: " + calcMet.calcHexagono(Double.parseDouble(input1.getText())));
                }

                if(num == 4){
                    area.setText("Area: " + calcMet.calcRetangulo(Double.parseDouble(input1.getText()),Double.parseDouble(input2.getText())) +
                            "\n" + "Perimetro: " + calcMet.calcRetangulo(Double.parseDouble(input1.getText()),Double.parseDouble(input2.getText())));
                }

                if(num == 5){
                    area.setText("Area: " + calcMet.calcCubo(Double.parseDouble(input1.getText()))[0] +
                            "\n" + "Perimetro: " + calcMet.calcCubo(Double.parseDouble(input1.getText()))[1]);
                }

                if(num == 6){
                    area.setText("Area: " + calcMet.calcEsfera(Double.parseDouble(input1.getText()))[0] +
                            "\n" + "Perimetro: " + calcMet.calcEsfera(Double.parseDouble(input1.getText()))[1]);
                }

                if(num == 7){
                    area.setText("Area: " + calcMet.calcCone(Double.parseDouble(input1.getText()),Double.parseDouble(input2.getText()))[0] +
                            "\n" + "Perimetro: " + calcMet.calcCone(Double.parseDouble(input1.getText()),Double.parseDouble(input2.getText()))[1]);
                }

                if(num == 8){
                    area.setText("Area: " + calcMet.calcPiramide(Double.parseDouble(input1.getText()),Double.parseDouble(input2.getText()))[0] +
                            "\n" + "Perimetro: " + calcMet.calcPiramide(Double.parseDouble(input1.getText()),Double.parseDouble(input2.getText()))[1]);
                }

                if(num == 9){
                    area.setText("Area: " + calcMet.calcCilindro(Double.parseDouble(input1.getText()),Double.parseDouble(input2.getText()))[0] +
                            "\n" + "Perimetro: " + calcMet.calcCilindro(Double.parseDouble(input1.getText()),Double.parseDouble(input2.getText()))[1]);
                }

                if(num == 10){
                    area.setText("Area: " + calcMet.calcParalelepipedo(Double.parseDouble(input1.getText()),Double.parseDouble(input2.getText()))[0] +
                            "\n" + "Perimetro: " + calcMet.calcParalelepipedo(Double.parseDouble(input1.getText()),Double.parseDouble(input2.getText()))[1]);
                }
            }
        });
    }
}
