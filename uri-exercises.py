# Problem #1000
print("Hello World!")

# Problem #1001
A = int(input())
B = int(input())
print("X =",A+B)

# Problem #1002
n = 3.14159
R = float(input())
print('A={:.4f}'.format(n*(R*R)))

# Problem #1003
A = int(input())
B = int(input())
print("SOMA =",A+B)

# Problem #1004
a = int(input())
b = int(input())
print("PROD =",a*b)

# Problem #1005
A = float(input())
B = float(input())
print("MEDIA = {:.5f}".format(((A*3.5)+(B*7.5))/(3.5+7.5)))

# Problem #1006
A = float(input())
B = float(input())
C = float(input())
print("MEDIA = {:.1f}".format(((A*2) + (B*3) + (C*5))/(2+3+5)))

# Problem #1007
A = int(input())
B = int(input())
C = int(input())
D = int(input())
print("DIFERENCA =",(A*B)-(C*D))

# Problem #1008
num = int(input())
work = int(input())
amoun = float(input())
print("NUMBER =",num)
print("SALARY = U$ {:.2f}".format(work*amoun))

# Problem #1009
name = input()
sal = float(input())
sold = float(input())
print("TOTAL = R$ {:.2f}".format(sal + ((sold*15)/100)))

# Problem #1010
total = []
for i in range(2):
  code, unit, price = [float(n) for n in input().split()]
  total.append(code)
  total.append(unit)
  total.append(price)
print("VALOR A PAGAR: R$ {:.2f}".format(total[1]*total[2]+total[4]*total[5]))

# Problem #1011
R = float(input())
pi = 3.14159
print("VOLUME = {:.3f}".format((4/3.0)*pi*(R*R*R)))

# Problem #1012
A,B,C = [float(x) for x in input().split()]
pi = 3.14159
print("TRIANGULO: {:.3f}".format((A*C)/2))
print("CIRCULO: {:.3f}".format(pi*(C*C)))
print("TRAPEZIO: {:.3f}".format(((A+B)*C)/2))
print("QUADRADO: {:.3f}".format(B*B))
print("RETANGULO: {:.3f}".format(A*B))

# Problem #1013
a,b,c = [int(x) for x in input().split()]
maior = ((a+b+abs(a-b)))/2
print("{:.0f} eh o maior".format(((maior+c+abs(maior-c)))/2))

# Problem #1014
X = int(input())
Y = float(input())
print("{:.3f} km/l".format(X/Y))

# Problem #1015
import math
x1,y1 = [float(n) for n in input().split()]
x2,y2 = [float(k) for k in input().split()]
dis = pow(x2-x1,2)+pow(y2-y1,2)
print("{:.4f}".format(math.sqrt(dis)))

# Problem #1016
x = int(input())
print(x*2,"minutos")

# Problem #1017
time = int(input())
speed = int(input())
print("{:.3f}".format(time*speed/12))

# Problem #1018
N = int(input())
bn = [100,50,20,10,5,2,1]
print(N)
for i in bn:
  if N>=i:
    x = N//i
    y = N-(x*i)
    N = y
    print("{} nota(s) de R$ {},00".format(x,i))
  else:print("0 nota(s) de R$ {},00".format(i))

# Problem #1019
n = int(input())
time = [3600,60,1]
res = [0,0,0]
for i in range(3):
  if n>=time[i]:
    x = n//time[i]
    n = n-(x*time[i])
    res[i] = x
print("{}:{}:{}".format(res[0],res[1],res[2]))

# Problem #1020
d = int(input())
res = [0,0,0]
time = [365,30,1]
for i in range(3):
  if d>=time[i]:
    x=d//time[i]
    d-=x*time[i]
    res[i] = x
print("{} ano(s)".format(res[0]))
print("{} mes(es)".format(res[1]))
print("{} dia(s)".format(res[2]))

# Problem #1021
notes = [100,50,20,10,5,2]
coins = [1,.5,.25,.1,.05,.01]
n = float(input())
n += 0.001
print("NOTAS:")
for i in notes:
  x = n//i
  n %= i
  print("{} nota(s) de R$ {}.00".format(int(x),i))
print("MOEDAS:")
for i in coins:
  x = n//i
  n %= i
  print("{} moeda(s) de R$ {:.2f}".format(int(x),i))

# Problem #1035
A,B,C,D = [int(x) for x in input().split()]
if B > C and D > A and (C+D) > (A+B) and C > 0 and D > 0 and A%2 == 0:print('Valores aceitos')
else:print('Valores nao aceitos')

# Problem #1036
import math
A,B,C = [float(i) for i in input().split()]
delta = pow(B,2)-(4*A*C)
if delta < 0 or math.sqrt(delta) == B:print('Impossivel calcular')
else:
  bhaskara1 = (-B+math.sqrt(delta))/(2*A)
  bhaskara2 = (-B-math.sqrt(delta))/(2*A)
  print('R1 = {:.5f}'.format(bhaskara1))
  print('R2 = {:.5f}'.format(bhaskara2))

# Problem #1037
x = float(input())
intervalo = [-1,25,50,75,100]
resp = ['Intervalo [0,25]','Intervalo (25,50]','Intervalo (50,75]','Intervalo (75,100]']
if x < 0 or x > 100:print('Fora de intervalo')
else:
  for i in range(4):
    if x > intervalo[i] and x <= intervalo[i+1]:print(resp[i])

# Problem #1038
x,y = [int(i) for i in input().split()]
cd = [1,2,3,4,5]
pc = [4,4.5,5,2,1.5]
for i in range(5):
  if x == cd[i]:res = y*pc[i]
print('Total: R$ {:.2f}'.format(res))

# Problem #1040
n1,n2,n3,n4 = [float(i) for i in input().split()]
med = ((n1*2)+(n2*3)+(n3*4)+(n4*1))/10
print('Media: {:.1f}'.format(med))
if med >= 7:print('Aluno aprovado.')
if med < 5:print('Aluno reprovado.')
if med >=5 and med <= 6.9:
  print('Aluno em exame.')
  n1 = float(input())
  med1 = (med+n1)/2
  print('Nota do exame: {:.1f}'.format(n1))
  if med1 >= 5:print('Aluno aprovado.')
  if med1 < 5:print('Aluno reprovado.')
  print('Media final: {:.1f}'.format(med1))

# Problem #1041
x,y = [float(i) for i in input().split()]
if x == 0 and y == 0:print('Origem')
if x > 0 and y > 0:print('Q1')
if x < 0 and y > 0:print('Q2')
if x < 0 and y < 0:print('Q3')
if x > 0 and y < 0:print('Q4')
if x == 0 and y != 0:print('Eixo Y')
if x != 0 and y == 0:print('Eixo X')

# Problem #1042
x=[int(i) for i in input().split()]
y=[]
for i in x:y.append(i)
y.sort()
for i in y:print(i)
print()
for i in x:print(i)

# Problem #1043
a,b,c=[float(i) for i in input().split()]
if a+b>c and a+c>b and c+b>a:print('Perimetro = {:.1f}'.format(a+b+c))
else:print('Area = {:.1f}'.format(((a+b)*c)/2))

# Problem #1044
a,b=[int(i) for i in input().split()]
if a%b==0 or b%a==0:print('Sao Multiplos')
else:print('Nao sao Multiplos')

# Problem #1045
sides=sorted([float(i) for i in input().split()])
a=sides[2];b=sides[1];c=sides[0]
if a>=b+c:print('NAO FORMA TRIANGULO')
else:
  if pow(a,2)==pow(b,2)+pow(c,2):print('TRIANGULO RETANGULO')
  if pow(a,2)>pow(b,2)+pow(c,2):print('TRIANGULO OBTUSANGULO')
  if pow(a,2)<pow(b,2)+pow(c,2):print('TRIANGULO ACUTANGULO')
  if a==b==c:print('TRIANGULO EQUILATERO')
  if a==b!=c or a==c!=b or b==c!=a:print('TRIANGULO ISOSCELES')