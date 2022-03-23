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

    public void newCheckboxAttributes(JCheckBox check){
        check.setBackground(Color.pink);
    }

    public void newButtonAttributes(JButton button){
        button.setBackground(Color.lightGray);
    }

    public void newTextareaAttributes(JTextArea area){
        area.setEditable(false);
        area.setPreferredSize(new Dimension(190,45));
    }

    public void addItems(JFrame frame, JPanel panel, JLabel label, JTextField field, JTextField field2, JCheckBox check, JCheckBox check2, JButton button, JTextArea area){
        frame.add(panel);
        panel.add(label);
        panel.add(field);
        panel.add(field2);
        panel.add(check);
        panel.add(check2);
        panel.add(button);
        panel.add(area);
    }

    public void eventButton(JButton button, JTextField input1, JTextField input2, JTextArea area){
        button.addActionListener(new ActionListener() {

            @Override
            public void actionPerformed(ActionEvent e) {
                double areaValue = Double.parseDouble(input1.getText());
                double perimValue = Double.parseDouble(input2.getText());
                area.setText("Area: " + calcMet.calcQuadrado(areaValue,perimValue)[0] +
                        "\n" + "Perimetro: " + calcMet.calcQuadrado(areaValue,perimValue)[1]);
            }
        });
    }
}
