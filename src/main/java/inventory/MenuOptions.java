package inventory;

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class MenuOptions extends JFrame{

    JPanel panel;

    JButton addProduct;
    JButton listProduct;
    JButton editProduct;
    JButton rmvProduct;

    MenuOptions(){
        this.setTitle("Menu Options");
        this.setSize(350,300);
        this.setResizable(false);

        panel = new JPanel();
        panel.setLayout(new FlowLayout());
        this.add(panel);

        addProduct = new JButton("Add a Product");
        addProduct.setForeground(Color.WHITE);
        addProduct.setBackground(Color.decode("#632218"));
        addProduct.setBorder(BorderFactory.createEmptyBorder(4, 4, 4, 4));
        addProduct.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                if(e.getSource() == addProduct){
                    addProduct prod = new addProduct();
                }
            }
        });
        panel.add(addProduct);

        listProduct = new JButton("List All Products");
        listProduct.setForeground(Color.WHITE);
        listProduct.setBackground(Color.decode("#632218"));
        listProduct.setBorder(BorderFactory.createEmptyBorder(4, 4, 4, 4));
        listProduct.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                if(e.getSource() == listProduct){
                    ListProducts list = new ListProducts();
                }
            }
        });
        panel.add(listProduct);

        editProduct = new JButton("Edit Product");
        editProduct.setForeground(Color.WHITE);
        editProduct.setBackground(Color.decode("#632218"));
        editProduct.setBorder(BorderFactory.createEmptyBorder(4, 4, 4, 4));
        editProduct.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                if(e.getSource() == editProduct){
                    EditProducts edit = new EditProducts();
                }
            }
        });
        panel.add(editProduct);

        rmvProduct = new JButton("Remove Product");
        rmvProduct.setForeground(Color.WHITE);
        rmvProduct.setBackground(Color.decode("#632218"));
        rmvProduct.setBorder(BorderFactory.createEmptyBorder(4, 4, 4, 4));
        panel.add(rmvProduct);

        this.setVisible(true);
    }
}
