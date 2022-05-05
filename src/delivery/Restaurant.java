package delivery;

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

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
                    MenuOptions m = new MenuOptions();
                    printMenu.setText("");
                    m.get_menu().forEach((key, value) ->{
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
        addItems.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                if(e.getSource() == addItems){
                    AddItemsToMenu add = new AddItemsToMenu();
                }
            }
        });
        options.add(addItems);

        removeItems = new JButton("Remover Itens");
        removeItems.setPreferredSize(new Dimension(200,30));
        removeItems.setBackground(Color.pink);
        removeItems.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                if(e.getSource() == removeItems){
                    RemoveItemsFromMenu r = new RemoveItemsFromMenu();
                }
            }
        });
        options.add(removeItems);

        printMenu = new JTextArea();
        printMenu.setPreferredSize(new Dimension(200, 200));
        options.add(printMenu);

        this.setVisible(true);
    }
}
