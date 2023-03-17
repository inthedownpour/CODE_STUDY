import java.io.IOException;
import java.util.Scanner;

public class b9465 {
    public static void main(String[] args) throws IOException {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();

        for (int i = 0; i < T; i++) {
            int N = sc.nextInt();
            int[][] cost = new int [2][N+1]; //배열의 위치마다 값을 저장해야하는 배열
            int[][] dp = new int[2][N+1]; //최대값을 만들기 위한 배열

            for (int j = 0; j < 2; j++) {
                for (int k = 1; k <= N; k++) {
                    cost[j][k] = sc.nextInt();
                }
            }

            //0번째, 1번째 행의 첫번째 열 초기화
            dp[0][1]=cost[0][1];
            dp[1][1]=cost[1][1];
            //n번째 dp값을 채우기 위해선 한 칸 또는 두 칸 뒤의 대각선을 고려해야
            //둘 중 큰 값과 자신의 값을 더한다
            for(int j=2;j<=N;j++) {
                dp[0][j]=Math.max(dp[1][j-1], dp[1][j-2])+cost[0][j];
                dp[1][j]=Math.max(dp[0][j-1], dp[0][j-2])+cost[1][j];
            }

            System.out.println(Math.max(dp[0][N], dp[1][N]));
        }
    }
}