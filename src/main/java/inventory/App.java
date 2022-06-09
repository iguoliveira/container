package inventory;

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.IOException;
import java.time.LocalDateTime;

public class App {

    JFrame frame;

    JPanel input_container;

    JLabel username_label;
    JTextField username_input;

    JLabel password_label;
    JTextField password_input;

    JButton signin;
    JButton login;

    App(){
        Log.addToLog("Program Start at "+ LocalDateTime.now() + "\n");

        frame = new JFrame();
        frame.setTitle("Login");
        frame.setSize(250,200);
        frame.setLocationRelativeTo(null);
        frame.setResizable(false);

        input_container = new JPanel();
        input_container.setLayout(new FlowLayout());
        frame.add(input_container);

        username_label = new JLabel("Username");
        input_container.add(username_label);

        username_input = new JTextField();
        username_input.setPreferredSize(new Dimension(225,25));
        input_container.add(username_input);

        password_label = new JLabel("Password");
        input_container.add(password_label);

        password_input = new JTextField();
        password_input.setPreferredSize(new Dimension(225, 25));
        input_container.add(password_input);

        signin = new JButton("Sign In");
        signin.setForeground(Color.WHITE);
        signin.setBackground(Color.decode("#632218"));
        signin.setBorder(BorderFactory.createEmptyBorder(4, 4, 4, 4));
        signin.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                if(e.getSource() == signin){
                    Signin signin_user = new Signin();
                }
            }
        });

        input_container.add(signin);

        login = new JButton("Login");
        login.setForeground(Color.WHITE);
        login.setBackground(Color.decode("#632218"));
        login.setBorder(BorderFactory.createEmptyBorder(4, 4, 4, 4));
        login.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                if(e.getSource() == login){
                    try {
                        if(Usuario.isUserRegistered(username_input.getText(), password_input.getText())){
                            Log.addToLog("User " + username_input.getText() + " had login in the system at " + LocalDateTime.now() + "\n");
                            MenuOptions menu = new MenuOptions();
                        }
                    } catch (IOException ex) {
                        ex.printStackTrace();
                    }
                }
            }
        });
        input_container.add(login);

        frame.setVisible(true);
    }
}