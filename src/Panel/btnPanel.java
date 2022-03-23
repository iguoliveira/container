package Panel;

import util.Items;
import calculations.Calculations;
import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.ArrayList;

public class btnPanel extends JPanel {

    Items it = new Items();
    Calculations calcMet = new Calculations();
    JPanel panel;
    ArrayList<JButton> buttons = new ArrayList<>();
    String[] namesForms = {"Quadrado", "Circulo", "Retangulo", "Triangulo", "Cone", "Hexagono", "Piramide", "Paralele", "Losangulo", "Cubo", "Esfera"};

    public btnPanel(){
        panel = new JPanel();
        panel.setPreferredSize(new Dimension());
        panel.setLayout(new GridLayout(4,4,10,10));

        for(int i = 0; i < 12; i++){
            if(i == 11){
                buttons.add(new JButton("Sair"));
                panel.add(buttons.get(i));
            }else{
                buttons.add(new JButton(namesForms[i]));
                panel.add(buttons.get(i));
            }
        }

        for(int i = 0; i < buttons.toArray().length; i++){
            buttons.get(i).addActionListener(new ActionListener() {
                JFrame frameCalc;
                JPanel calc;
                JTextField inputArea;
                JTextField inputPerim;
                JLabel titulo;
                JCheckBox area;
                JCheckBox perim;
                JButton calculate;
                JTextArea result;

                @Override
                public void actionPerformed(ActionEvent e) {
                    for(int x = 0; x < buttons.toArray().length; x++){

                        if(e.getSource() == buttons.get(x)){

                            if(buttons.indexOf(buttons.get(x)) == 0){
                                frameCalc = new JFrame();
                                it.newFrameAttributes(frameCalc);

                                calc = new JPanel();
                                it.newPanelAttributes(calc);

                                titulo = new JLabel("Valores", SwingConstants.CENTER);
                                it.newLabelAttributes(titulo);

                                inputArea = new JTextField();
                                it.newTextfieldAttributes(inputArea);

                                inputPerim = new JTextField();
                                it.newTextfieldAttributes(inputPerim);

                                area = new JCheckBox("Area");
                                it.newCheckboxAttributes(area);

                                perim = new JCheckBox("Perimetro");
                                it.newCheckboxAttributes(perim);

                                calculate = new JButton("Do it");
                                it.newButtonAttributes(calculate);

                                result = new JTextArea();
                                it.newTextareaAttributes(result);

                                it.addItems(frameCalc, calc, titulo, inputArea, inputPerim, area, perim, calculate, result);

                                it.eventButton(calculate, inputArea, inputPerim, result);
                                frameCalc.setVisible(true);
                            }
                        }
                    }
                }
            });
        }
    }

    public void addToFrame(JFrame frame){
        frame.add(panel);
    }
}
