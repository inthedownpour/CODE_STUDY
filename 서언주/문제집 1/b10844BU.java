import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class b10844BU { // Bottom-Up 방식
    final static long mod = 1000000000;
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        long[][] dp = new long[N+1][10]; //[자릿수][자릿값]
        //첫번째 자릿수는 경우의 수가 각 1개
        for (int i=1; i<10; i++) {
            dp[1][i]=1;
        }
        //두번째 자릿수부터 N번째 자릿수까지 dp[N][j]
        for (int i=2;i<=N; i++) {
            for (int j=0;j<=9; j++) {
                if (j==0) {//자릿값이 0이면 이전 자릿수의 첫번째 자릿수만 가능
                    dp[i][0] = dp[i-1][1] % mod;
                }
                else if(j==9) {//자릿값이 9면 이전 자릿수는 8만 가능
                    dp[i][9]=dp[i-1][8] % mod;
                }
                else{//그 외는 이전 자릿수의 자릿값의 +-1의 합
                    dp[i][j]=(dp[i-1][j-1]+dp[i-1][j+1] % mod);
                }
            }
        }
        long sum=0;
        for(int i=0; i<10; i++) {
            sum+=dp[N][i];
        }
        System.out.println(sum % mod);

        br.close();
    }
}