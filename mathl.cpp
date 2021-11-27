#include <iostream>
#include <cstring>
#include <iostream>
#include <string>
using namespace std;
int main()
{
    int arr[120][12], point;
    cout << "Enter the number of points" << endl;
    cin >> point;
    for (int i = 0; i < point; i++)
    {
        cout << "Enter the x" << i << " y" << i << " : ";
        for (int j = 0; j < 2; j++)
        {
            cin >> arr[i][j];
        }
    }
    for (int i = 0; i < point; i++)
    {
        cout << " x" << i << " y" << i << " : ";
        for (int j = 0; j < 2; j++)
        {
            cout << arr[i][j] << " ";
        }
        cout << endl;
    }
    cout << endl;
    for (int i = 0; i < point; i++)
    {
        cout << "l" << i << " ";
        for (int j = 0; j < point; j++)
        {
            if (i == j)
            {
                continue;
            }
            cout << "x - " << arr[j - 1][0] << "/" << arr[j][0] - arr[j - 1][0];
        }
        // if (i == 0)
        // {
        //     cout << "l0 ";
        //     cout << "x - " << arr[point - 1][0] << "/" << arr[0][0] - arr[point - 1][0];
        // }
        // else
        // {
        //     cout << "l" << i << " " << endl;
        //     cout << "x - " << arr[point - 1][0] << "/" << arr[0][0] - arr[point - 1][0];
        // }
    }

    return 0;
}