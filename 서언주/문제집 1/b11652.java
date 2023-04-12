import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashMap;

public class b11652 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();
        int N = Integer.parseInt(br.readLine());

        HashMap<Long, Integer> map = new HashMap<>();
        //카드 정보 저장
        for (int i = 0; i < N; i++) {
            long temp = Long.parseLong(br.readLine());
            //이미 있는 카드 값이 들어오면 원래 값에서 +1
            map.put(temp, map.getOrDefault(temp, 0) + 1);
        }
        //Hashmap에서 가장 큰 값을 가진 인덱스 리턴턴
        int max = Integer.MIN_VALUE;
        long answer = 0;
        for (long x : map.keySet()) {
            if (map.get(x) > max) {
                max = map.get(x);
                answer = x;
            } else if (map.get(x) == max) {
                answer = Math.min(answer, x);
            }
        }
        System.out.println(answer);
    }
}