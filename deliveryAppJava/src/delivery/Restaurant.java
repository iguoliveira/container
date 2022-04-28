package delivery;

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.security.Permission;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

public class Restaurant extends JFrame {

//    Main Panel
    JPanel options;

//    Menu Button
    JButton menu;

//    Order Button
    JButton pedido;

//    Add Items in Menu
    JButton addItems;

//    Remove Items from Menu
    JButton removeItems;

//    Print Menu
    JTextArea printMenu;

    Restaurant(){
        this.setTitle("Bem Vindo");
        this.setSize(300,400);
        this.setResizable(false);

        options = new JPanel();
        options.setLayout(new FlowLayout());
        this.add(options);

        menu = new JButton("Cardapio");
        menu.setPreferredSize(new Dimension(200,30));
        menu.setBackground(Color.pink);
        menu.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                if(e.getSource() == menu){
                    get_menu().forEach((key, value) ->{
                        printMenu.append("Valor: " + value + " | " + "Lanche: " + key + "\n");
                    });
                }
            }
        });
        options.add(menu);

        pedido = new JButton("Fazer Pedido");
        pedido.setPreferredSize(new Dimension(200,30));
        pedido.setBackground(Color.pink);
        pedido.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                if(e.getSource() == pedido){
                    Pedido ped = new Pedido();
                }
            }
        });
        options.add(pedido);

        addItems = new JButton("Adicionar Itens");
        addItems.setPreferredSize(new Dimension(200,30));
        addItems.setBackground(Color.pink);
        options.add(addItems);

        removeItems = new JButton("Remover Itens");
        removeItems.setPreferredSize(new Dimension(200,30));
        removeItems.setBackground(Color.pink);
        options.add(removeItems);

        printMenu = new JTextArea();
        printMenu.setPreferredSize(new Dimension(200, 200));
        options.add(printMenu);

        this.setVisible(true);
    }

    public HashMap get_menu(){
        HashMap<String, Double> menu = new HashMap<>();
        menu.put("Quarteirao", 25.23);
        menu.put("BkLancheFeliz", 30.00);
        menu.put("seila", 10.00);
        return menu;
    }
}
