package delivery;

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class AddItemsToMenu extends JFrame{
    //    Container
    JPanel container;

    //    Add Label, Input and Button
    JLabel name;
    JTextField nameInput;
    JLabel value;
    JTextField valueInput;
    JButton add;

    AddItemsToMenu(){
        this.setTitle("Adicionar no Cardapio");
        this.setSize(250,200);
        this.setResizable(false);

        container = new JPanel();
        this.add(container);

        name = new JLabel("Nome do Lanche");
        container.add(name);

        nameInput = new JTextField();
        nameInput.setPreferredSize(new Dimension(150, 25));
        container.add(nameInput);

        value = new JLabel("Valor do Lanche");
        container.add(value);

        valueInput = new JTextField();
        valueInput.setPreferredSize(new Dimension(200, 25));
        container.add(valueInput);

        add = new JButton("Adicionar Lanche");
        add.setBackground(Color.ORANGE);
        add.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                if(e.getSource() == add){
                    MenuOptions.addToMenu(nameInput.getText(), Double.parseDouble(valueInput.getText()));
                }
            }
        });
        container.add(add);

        this.setVisible(true);
    }
}