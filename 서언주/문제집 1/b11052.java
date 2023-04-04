import java.io.IOException;
import java.util.Scanner;
// 카드 i개를 구입하는 방법
//arr[1] = 1, arr[2] = 5, arr[3] = 6, arr[4] = 7

//dp[1] = dp[0] + arr[1] == 1
//dp[2] = dp[0] + arr[2] == 5
//dp[2] = dp[1] + arr[1] = 2
//dp[3] = dp[0] + arr[3] = 6
//dp[3] = dp[1] + arr[2] = 6
//dp[3] = dp[2] + arr[1] == 6
//dp[4] = dp[0] + arr[4] = 7
//dp[4] = dp[1] + arr[3] = 7
//dp[4] = dp[2] + arr[2] == 10
//dp[4] = dp[3] + arr[1] = 7
//dp[i] = dp[i-j]+arr[j]

public class b11052 {
    public static void main(String[] args) throws IOException {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        int[] DP = new int[N+1]; //입력받은 카드 팩을 저장하는 배열
        int[] arr = new int[N+1]; //카드를 갖기 위해 지불해야하는 최대 금액을 저장

        for (int i = 1; i <= N; i++) {
            DP[i] = sc.nextInt();
        }
        for (int i = 1; i <= N; i++) {
            for (int j = 1; j <= i; j++) {
                arr[i]=Math.max(arr[i],arr[i-j]+DP[j]);
            }
        }
        System.out.println(arr[N]);
    }
}