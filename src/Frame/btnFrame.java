package Frame;

import Panel.btnPanel;
import javax.swing.*;

public class btnFrame extends JFrame {

    JFrame frame;
    btnPanel panel = new btnPanel();
    public btnFrame(){
        frame = new JFrame();
        frame.setSize(350,300);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setResizable(false);
        panel.addToFrame(frame);

        frame.setVisible(true);
    }
}
