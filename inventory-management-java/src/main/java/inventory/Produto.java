package inventory;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.*;

public class Produto {
    Produto() {}

    public static void addProduct(String nome, String quantidade) {
        txtFormatation.saveProductData(nome, quantidade);
    }

    public static void changeQtdProduct(String key, String value) {
        Path path = Paths.get("./src/main/java/inventory/Product.txt");

        try{
            List<String> allItems = Files.readAllLines(path, StandardCharsets.UTF_8);
            HashMap<String, String> dictItems = new HashMap<>();
            int i = 0;
            String aux = "";

            for(String values : allItems){
                if(i % 2 == 0){
                    dictItems.put(values, "");
                    aux = values;
                    i++;
                }else{
                    dictItems.replace(aux, values);
                    i++;
                }
            }

            dictItems.replace(key, value);
            Files.delete(path);
            for ( Map.Entry<String, String> entry : dictItems.entrySet() ) {
                String keys = entry.getKey();
                String values = entry.getValue();
                txtFormatation.saveProductData(keys, values);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static HashMap<String, String> getItemsFromTxt() throws IOException {
        Path path = Paths.get("./src/main/java/inventory/Product.txt");
        List<String> allItems = Files.readAllLines(path, StandardCharsets.UTF_8);
        HashMap<String, String> dictItems = new HashMap<>();
        int i = 0;
        String aux = "";

        for(String values : allItems){
            if(i % 2 == 0){
                dictItems.put(values, "");
                aux = values;
                i++;
            }else{
                dictItems.replace(aux, values);
                i++;
            }
        }
        return dictItems;
    }

    public static void removeProduct(String key) {
        Path path = Paths.get("./src/main/java/inventory/Product.txt");

        try{
            List<String> allItems = Files.readAllLines(path, StandardCharsets.UTF_8);
            HashMap<String, String> dictItems = new HashMap<>();
            int i = 0;
            String aux = "";

            for(String values : allItems){
                if(i % 2 == 0){
                    dictItems.put(values, "");
                    aux = values;
                    i++;
                }else{
                    dictItems.replace(aux, values);
                    i++;
                }
            }
            dictItems.remove(key);
            Files.delete(path);
            for ( Map.Entry<String, String> entry : dictItems.entrySet() ) {
                String keys = entry.getKey();
                String values = entry.getValue();
                txtFormatation.saveProductData(keys, values);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static String printRight(HashMap<String, String> value){
        String finalPhrase = "";
        int i = 0;
        for ( Map.Entry<String, String> entry : value.entrySet() ) {
            if(i > 2){
                finalPhrase = finalPhrase.concat("\n");
                i = 0;
            }
            String keys = entry.getKey();
            String values = entry.getValue();
            finalPhrase = finalPhrase.concat(keys + " = " + values + ", ");
            i++;
        }
        return finalPhrase;
    }
}
