#include<iostream>
#include"sudoku.hpp"

using namespace std;


int main(int argc, const char** argv) {
    int val = 0, x = 0, y = 0, key = 0, errorCnt = 0;
    sudoku sdk;
    sdk.print();
    for (;;) {
        cout << "Please input val(1-9):" << endl;
        cin >> val;
        if (!sdk.val_valid(val)) {
            continue;
        }
        sudokuval sval(val);
        cout << "Please input pos x(1-9)):" << endl; 
        cin >> x;
        if (!sdk.val_valid(x)) {
            continue;
        }
        cout << "Please input pos y(1-9)):" << endl; 
        cin >> y;
        if (!sdk.val_valid(y)) {
            continue;
        }
        key = get_key(x-1, y-1);
        if (sdk.set_val(key, val)) {
            sdk.print();
        } else {
            sdk.print();
            errorCnt++;
            cout << "fill num is error..., left error time:" << 3-errorCnt << endl;
            if (errorCnt >= 3) {
                cout << "error count is up to limit!!!" << endl;
                break;
            }
        }
    }
    
    return 0;
}