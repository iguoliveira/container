package calculations;

public class Calculations {

    public double[] calcQuadrado(double area, double perim){
        double[] results = {area*area,perim*4};
        return results;
    }

    public double calcCirculo(double raio){
        return Math.PI * 2 * Math.pow(raio,2);
    }

    public double calcTriangulo(double lado){
        return lado*3;
    }

    public double calcHexagono(double lado){
        return 6*lado;
    }

    public double calcRetangulo(double lado, double base){
        return (base*2) + (lado*2);
    }

    public double[] calcCubo(double aresta){
        double[] results = {Math.pow(aresta,3), 6*Math.pow(aresta,2)};
        return results;
    }

    public double[] calcEsfera(double raio){
        double[] results = {4*Math.PI*Math.pow(raio,2), (4*Math.PI*(raio*raio*raio))/3};
        return results;
    }

    public double[] calcCone(double base, double altura){
        double[] results = {Math.PI * base * (base + (Math.PI * Math.pow(base,2))), (base*altura)/3};
        return results;
    }

    public double[] calcPiramide(double base, double altura){
        double[] results = {4.20, (base*altura)/3};
        return results;
    }

    public double[] calcCilindro(double raio, double altura){
        double[] results = {2 * Math.PI * raio * (raio + altura), Math.PI * Math.pow(raio,2) * altura};
        return results;
    }

    public double[] calcParalelepipedo(double altura, double comprimento){
        double[] results = {(2*4*altura) + (2*4*comprimento) + (2*altura*comprimento), 4*altura*comprimento};
        return results;
    }
}
