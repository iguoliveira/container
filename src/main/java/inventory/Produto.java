package inventory;

import javax.swing.*;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.*;

public class Produto {
    private String nome;
    private int quantidade;
    private ArrayList<String> sas = new ArrayList<>();

    Produto(String nome, int quantidade) {
        this.nome = nome;
        this.quantidade = quantidade;
    }

    ArrayList<ArrayList<String>> produtosListados = new ArrayList<>();

    boolean hasNext = true;

    Produto() {

    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public int getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(int quantidade) {
        this.quantidade = quantidade;
    }

    public static void addProduct(String nome, String quantidade) {
        txtFormatation.saveProductData(nome, quantidade);
    }

    public static ArrayList<ArrayList<String>> changeQtdProduct(int index, String value) {
        Path path = Paths.get("./src/main/java/inventory/Product.txt");
        try{
            List<String> allItems = Files.readAllLines(path, StandardCharsets.UTF_8);
            ArrayList<ArrayList<String>> getAllItems = new ArrayList<>();
            int i = 0;
            ArrayList<String> items = new ArrayList<String>();
            for(String values : allItems){
                if(i > 1){
                    ArrayList<String> itemsClone = (ArrayList<String>) items.clone();
                    getAllItems.add(itemsClone);
                    i = 0;
                    items.clear();
                }
                items.add(values);
                i++;
            }
            getAllItems.get(index).set(1, value);

            Files.delete(path);
            for(ArrayList<String> x : getAllItems){
                txtFormatation.saveProductData(x.get(0), x.get(1));
            }
            return getAllItems;
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }

//    public void preencheArray(){
//      this.sas =  EscreverTxt.getProductItems();
//    }
    public void listarProduto() {
        ArrayList<String> it = new ArrayList<>();
        ArrayList<String> qt = new ArrayList<>();

        String ret = "";

        int count = 0;

        System.out.println(this.sas);
        for (String value: this.sas) {
            if(count % 2 == 0){
                it.add(value);

            }else{
                qt.add(value);

            }
            count++;
        }
        ret = "";
        for (int i = 0; i < it.size(); i++) {
            ret = ret.concat(String.format("\n%d Produto: %s ................... %s", i+1, it.get(i), qt.get(i)));
        }
        this.sas.clear();
        JOptionPane.showMessageDialog(null, ret);
    }

    public void removerProduto() {
        produtosListados.add(this.sas);
        String retorno = "";
        ArrayList<String> item = new ArrayList<>();
        ArrayList<String> qtd = new ArrayList<>();


        int count = 0;

        System.out.println(this.sas);
        for (String val: this.sas) {
            if(count % 2 == 0){
                item.add(val);

            }else{
                qtd.add(val);

            }
            count++;
        }

        for (int i = 0; i < item.size(); i++) {
            retorno = retorno.concat(String.format("\n%d Produto: %s ................... %s", i+1, item.get(i), qtd.get(i)));

        }

        JOptionPane.showMessageDialog(null, "Os produtos sao: "+retorno);
        int valorAlterado = Integer.parseInt(JOptionPane.showInputDialog(null,
                "Qual produto deseja excluir? \n" + this.sas));
        this.sas.remove(valorAlterado + 1);
        this.sas.remove(valorAlterado);
        System.out.println("SAAAAAAAAS" + this.sas);
        txtFormatation.gravarTxtAux("auxiliar", "produtos", this.sas);
        JOptionPane.showMessageDialog(null, "Valor removido");
        System.out.println(this.sas);
        this.sas.clear();
    }
}
