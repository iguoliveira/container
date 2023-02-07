package inventory;

import java.util.ArrayList;

public class Log {
    static ArrayList<String> log_list = new ArrayList<>();

    public static void addToLog(String value){
        Log.log_list.add(value);
        txtFormatation.saveDataInLog(log_list);
    }
}
