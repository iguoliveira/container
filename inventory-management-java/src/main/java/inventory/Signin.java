package inventory;

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.time.LocalDateTime;

public class Signin{
        JFrame frame;

        JPanel input_container;

        JTextArea confirmation;

        JLabel username_label;
        JTextField username_input;

        JLabel password_label;
        JTextField password_input;

        JButton signin;

        Signin(){
            frame = new JFrame();
            frame.setTitle("Register");
            frame.setSize(250,200);
            frame.setLocationRelativeTo(null);
            frame.setResizable(false);

            input_container = new JPanel();
            input_container.setLayout(new FlowLayout());
            frame.add(input_container);

            confirmation = new JTextArea("");
            confirmation.setEditable(false);
            input_container.add(confirmation);

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
                        if(!username_input.getText().equals("")){
                            if(!password_input.getText().equals("")){
                                Log.addToLog("Usuario " + username_input.getText() + " had registered in " + LocalDateTime.now() + "\n");
                                confirmation.setText("USER " + username_input.getText() + " has been registered!");
                                Usuario.cadastrarUsuario(username_input.getText(), password_input.getText());
                                username_input.setText("");
                                password_input.setText("");
                            }
                        }
                    }
                }
            });
            input_container.add(signin);

            frame.setVisible(true);
    }
}
