package com.belleba.base;

import android.app.Activity;
import android.os.Bundle;
import android.view.View;
import android.view.View.OnClickListener;
import android.widget.Button;

import com.belleba.base.umeng.ShareUtils;
import com.umeng.socialize.media.UMImage;

public class MainActivity extends Activity implements OnClickListener {
private Button mBtnShare;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        mBtnShare = (Button) findViewById(R.id.btn_share);
        mBtnShare.setOnClickListener(this);
    }
	@Override
	public void onClick(View v) {
		String strText= "分享内容测试";
		String strTitle= "分享标题";
		UMImage image= new UMImage(this, "http://www.umeng.com/images/pic/social/integrated_3.png");
		String strUrl= "http://www.baidu.com";
		ShareUtils.openShare(this, strText, strTitle, image, strUrl);
		
	}
}
