package delivery;

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.HashMap;

public class Pedido extends JFrame{
    ArrayList<Double> prices = new ArrayList<>();

    //    Container
    JPanel container;

//    Pedido Label, Input and Button
    JLabel label;
    JTextField menu;
    JTextField printPrice;
    JButton submit;
    JButton finish;

    Pedido(){
        this.setTitle("Cardapio");
        this.setSize(250,200);
        this.setResizable(false);

        container = new JPanel();
        this.add(container);

        label = new JLabel("Pedido: ");
        container.add(label);

        menu = new JTextField();
        menu.setPreferredSize(new Dimension(150, 25));
        container.add(menu);

        printPrice = new JTextField();
        printPrice.setPreferredSize(new Dimension(200, 25));
        printPrice.setEditable(false);
        container.add(printPrice);

        submit = new JButton("Fazer Pedido");
        submit.setBackground(Color.ORANGE);
        submit.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                if(e.getSource() == submit){
                    MenuOptions m = new MenuOptions();
                    fazerPedido(m.get_menu(), menu.getText());
                    printPrice.setText("Valores: "+prices);
                }
            }
        });
        container.add(submit);

        finish = new JButton("Finalizar Pedido");
        finish.setBackground(Color.ORANGE);
        finish.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                if(e.getSource() == finish){
                    double total = 0;
                    for(int i = 0; i < prices.size(); i++){
                        total += prices.get(i);
                    }
                    DecimalFormat df = new DecimalFormat("##.##");

                    printPrice.setText(Usuario.getUserData(0) +", o valor total ficou: R$"+df.format(total));
                }
            }
        });
        container.add(finish);

        this.setVisible(true);
    }

    public ArrayList<Double> fazerPedido(HashMap<String, Double> dictionary, String itemName){
        dictionary.forEach((key, value) ->{
            if(itemName.equals(key)){
                prices.add(dictionary.get(itemName));
            }
        });
        return prices;
    }
}
