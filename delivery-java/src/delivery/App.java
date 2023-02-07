package delivery;

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class App {
    // Main Frame
    JFrame frame;

    // Containers
    JPanel usersContainer;
    JPanel restaurantContainer;

    // Users Buttons
    JButton cadUsuario;
    JButton cadRestaurante;

    // Restaurant Buttons
    JButton restaurant;

    App(){

        // Main Frame
        frame = new JFrame();
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(400,350);
        frame.setLayout(new BorderLayout());
        frame.setResizable(false);

        // Users Items Container
        usersContainer = new JPanel();
        usersContainer.setLayout(new FlowLayout());
        usersContainer.setPreferredSize(new Dimension(200, 300));
        usersContainer.setBackground(Color.pink);
        frame.add(BorderLayout.WEST, usersContainer);

        cadUsuario = new JButton("Cadastro de Usuario");
        // Register User Button Action
        cadUsuario.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                if(e.getSource() == cadUsuario){
                    CadastrarUsuario cad = new CadastrarUsuario();
                }
            }
        });

        usersContainer.add(cadUsuario);

        cadRestaurante = new JButton("Cadastrar Restaurante");
        cadRestaurante.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                if(e.getSource() == cadRestaurante){
                    CadastrarRestaurante cad = new CadastrarRestaurante();
                }
            }
        });
        usersContainer.add(cadRestaurante);

        // Restaurant Items Container
        restaurantContainer = new JPanel();
        restaurantContainer.setLayout(new FlowLayout());
        restaurantContainer.setPreferredSize(new Dimension(200, 300));
        restaurantContainer.setBackground(Color.blue);
        frame.add(BorderLayout.EAST, restaurantContainer);

        restaurant = new JButton("BK");
        restaurant.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                if(e.getSource() == restaurant){
                    Restaurant rest = new Restaurant();
                }
            }
        });
        restaurantContainer.add(restaurant);

        frame.setVisible(true);
    }
}
