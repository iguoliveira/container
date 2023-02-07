package delivery;

import java.util.HashMap;

public class MenuOptions {
    static HashMap<String, Double> menu = new HashMap<>();
    public MenuOptions(){
        menu.put("Quarteirao", 25.23);
        menu.put("BkLancheFeliz", 30.00);
        menu.put("seila", 10.00);
    }

    public HashMap<String, Double> get_menu(){
        return menu;
    }

    public static void addToMenu(String name, double price){
        menu.put(name, price);
    }

    public static void RemoveFromMenu(String name){
        menu.remove(name);
    }
}
