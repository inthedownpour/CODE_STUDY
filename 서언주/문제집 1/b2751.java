import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Collections;

//Collections.sort()는 Timesort정렬을 사용
//Timesort정렬은 삽입정렬과 반복합병 알고리즘 2개를 함께 사용하여 최악 시간복잡도 O(nlogn)을 보장
public class b2751 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();
        int N = Integer.parseInt(br.readLine());
        //리스트에 숫자 입력
        ArrayList<Integer> list = new ArrayList<>();
        for (int i = 1; i <= N; i++) {
            list.add(Integer.parseInt(br.readLine()));
        }
        //정렬
        Collections.sort(list);

        for (int value : list) {
            sb.append(value).append('\n');
        }
        System.out.println(sb);
    }
}