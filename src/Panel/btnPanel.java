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
    String[] namesForms = {"□", "○", "△", "⬡", "▭", "◨", "◑", "◁", "◮", "◎", "▱"};

    public btnPanel(){
        panel = new JPanel();
        panel.setPreferredSize(new Dimension());
        panel.setLayout(new GridLayout(4,4,10,10));
        panel.setBackground(new Color(0x000000));

        for(int i = 0; i < 11; i++){
            buttons.add(new JButton(namesForms[i]));
            buttons.get(i).setBackground(new Color(0xe03f3f));
            buttons.get(i).setBorder(BorderFactory.createEmptyBorder());
            buttons.get(i).setFocusable(false);
            panel.add(buttons.get(i));
        }

        for(int i = 0; i < buttons.toArray().length; i++){
            buttons.get(i).addActionListener(new ActionListener() {
                JFrame frameCalc;
                JPanel calc;
                JTextField inputArea;
                JTextField inputPerim;
                JLabel titulo;
                JButton calculate;
                JTextArea result;

                @Override
                public void actionPerformed(ActionEvent e) {
                    for(int x = 0; x < buttons.toArray().length; x++){

                        if(e.getSource() == buttons.get(x)){

                            for(int j = 0; j < buttons.toArray().length; j++){

                                if(buttons.indexOf(buttons.get(x)) == j){
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

                                    calculate = new JButton("Do it");
                                    it.newButtonAttributes(calculate);

                                    result = new JTextArea();
                                    it.newTextareaAttributes(result);

                                    it.addItems(frameCalc, calc, titulo, inputArea, inputPerim, calculate, result);

                                    it.eventButton(j, calculate, inputArea, inputPerim, result);

                                    frameCalc.setVisible(true);
                                }
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
