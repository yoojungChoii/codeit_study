// arguments : ������ argument�� ���� ���� �ִ� ��ü
//             ����迭�μ� indexing, .length, for of�� �� ��� ����


//arguments ��ü�� Ȱ���ؼ� �Լ��� ȣ���� �� �����ϴ� �ܾ���� 
//ù ���ڸ� ���� ���Ӹ��� ������ִ� firstWords �Լ��� �ϼ��ϴ� �ڵ�.
function firstWords() {
  let word = '';
  // arguments�� ���̸�ŭ �ݺ��ϴ� �ݺ���
  for(let i = 0; i < arguments.length; i++) {
    //word ������ arguments i��° ������ �ε��� 0�� ���� ���� ����
     word += arguments[i][0]
  }
    console.log(word);  
}

firstWords('����', '����', '�����');
firstWords('�ƴ�', '�ٳ�������', '���Ծ�');
firstWords('����', '������', '�߶�Գ�', '�������ϴ�');
firstWords('�ᱹ', '�ڹٽ�ũ��Ʈ��', '������', '������');
firstWords('������', '��Ȳ��', '�����', '�ʷϻ�', '�Ķ���', '����', '�����');