#include <iostream>
#include <tchar.h>
#include "CNUMBER.h"

int _tmain(int argc, _TCHAR* argv[])
{

  CNumber *number= new CNumber(1,2,3);

  std::cout<<"Min:"<<number->min()<<std::endl;
  std::cout<<"Max:"<<number->max()<<std::endl;
  std::cout<<"Average:"<<number->avg()<<std::endl;
  std::cout<<"Even numbers:"<<number->even()<<std::endl;
  std::cout<<"Uneven numbers:"<<number->uneven()<<std::endl;

   system("pause");


	number->~CNumber();

  return 0;
}



