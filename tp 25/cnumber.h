#include <iostream>
#include <tchar.h>


class CNumber{

	public:

		int min(){
			   int aux=numbers[0];
			   for(int i = 0; i < 3; i++) {
				   if(numbers[i]<aux) {
						 aux=numbers[i];
				   }
			   }
			   return aux;
		}


		int max(){
			  int aux=numbers[0];
			   for(int i = 0; i < 3; i++) {
				   if(numbers[i]>aux) {
						 aux=numbers[i];
				   }
			   }
			   return aux;
		}
		int avg(){
			  int aux=0;
			   for(int i = 0; i < 3; i++) {
				   aux+=numbers[i];
			   }
			   return aux/3;
		}
		int even(){
				int aux=0;
			   for(int i = 0; i < 3; i++) {
				   if(numbers[i]%2==0) {
						 aux++;
				   }
			   }
			   return aux;
		}

		int uneven(){
				int aux=0;
			   for(int i = 0; i < 3; i++) {
				   if(numbers[i]%2!=0) {
						 aux++;
				   }
			   }
			   return aux;
		}

		CNumber(int a,int b,int c){
			numbers[0]=a;
			numbers[1]=b;
			numbers[2]=c;
		}



	private:

		int numbers[3];

};


