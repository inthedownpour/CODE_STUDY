import java.io.IOException;
import java.util.Scanner;

public class b2133 {
    public static void main(String[] args) throws IOException {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        int[] dp = new int[N + 1]; //제곱수의 합 저장
        if (N % 2 != 0) {
            dp[N] = 0;
        } else {
            dp[0] = 1;
            dp[2] = 3;

            for (int i = 4; i <= N; i++) {
                dp[i] = dp[i - 2] * dp[2];
                for (int j = i - 4; j >= 0; j -= 2) {
                    dp[i] += (dp[j] * 2);
                }
            }
        }
        System.out.println(dp[N]);
    }
}
// 3*6
// 3*2 + 3*4
// 3*4 + 3*2
//
// 3*8
// 1) 3*6 + 3*2 = 41*3 = 123

// 중복을 생각해야 함
//가장 마지막 3*2를 A,B,C로 채우면 안됨
// 2) 3*4 + 3*4 = 11*2(3*4를 채우는 특별한 모양 두가지) = 22

//가장 마지막 3*2를 A,B,C로 채우면 안됨
//가장 마지막 3*4를 특별한 모양으로 채우면 안됨
//3*6을 채우는 특별한 모양으로 채움
// 3) 3*2 + 3*6 = 3*2(3*6을 채우는 특별한 모양 두가지) = 6
// 4) 3*8을 채우는 특별한 모양 두가지
//123 + 22 + 6 + 2 = 153
//F[8] = ( F[6] * F[2] ) + ( F[4] * 2 ) + ( F[2] * 2 ) + F[0] * 2
