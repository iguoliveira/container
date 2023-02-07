package delivery;

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class RemoveItemsFromMenu extends JFrame{
    //    Container
    JPanel container;

    //    Pedido Label, Input and Button
    JLabel info;
    JLabel name;
    JTextField nameInput;
    JButton remove;

    RemoveItemsFromMenu(){
        this.setTitle("Remove Items");
        this.setSize(250,200);
        this.setResizable(false);

        container = new JPanel();
        this.add(container);

        info = new JLabel("Nao pode remover os 3 principais!");
        container.add(info);

        name = new JLabel("Item Name");
        container.add(name);

        nameInput = new JTextField();
        nameInput.setPreferredSize(new Dimension(200, 25));
        container.add(nameInput);

        remove = new JButton("Finalizar Pedido");
        remove.setBackground(Color.ORANGE);
        remove.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                if(e.getSource() == remove){
                    MenuOptions.RemoveFromMenu(nameInput.getText());
                }
            }
        });
        container.add(remove);

        this.setVisible(true);
    }
}
