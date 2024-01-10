nome = input("Digite seu nome: ")
idade = int(input("Digite sua idade: "))
ensinomedio = input("Você concluiu o ensino médio? (sim/não): ")
faculdade = input("Qual faculdade você deseja fazer? ")

if idade >= 18:
    print('Parabéns', nome, 'você tem', idade, 'anos.')
elif ensinomedio == 'sim':
    print('Ótimo! Você pode fazer a faculdade de', faculdade)
else:
    print('Infelizmente você não pode fazer a faculdade desejada:', faculdade)
