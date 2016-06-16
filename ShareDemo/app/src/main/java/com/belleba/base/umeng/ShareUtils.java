/*
 * Copyright (C) 2015 Belle8
 * 
 * Description of the purpose of this file.
 *
 * @author ZhangZhaohui
 * @version 1.0.0
 */
package com.belleba.base.umeng;

import android.app.Activity;
import android.widget.Toast;

import com.belleba.base.R;
import com.umeng.socialize.Config;
import com.umeng.socialize.ShareAction;
import com.umeng.socialize.UMShareListener;
import com.umeng.socialize.bean.SHARE_MEDIA;
import com.umeng.socialize.media.UMImage;
import com.umeng.socialize.utils.Log;

/**
 * 分享集成
 * 
 * @author ZhangZhaohui
 * 
 */
public class ShareUtils {

	private static final int SHARE_SUCCESS = 0;
	private static final int SHARE_CANCEL = 1;
	private static final int SHARE_ERROR = 2;
	private static final int SHARE_SCODE = 3;

	private interface SnsListener {
		public void onComplete(int shareFlag);
	}

	/**
	 * 打开分享面板
	 * 
	 */
	public static void openShare(Activity activity, String strText,
			String strTitle, UMImage image, String strUrl) {
		Config.IsToastTip = false;
		Config.OpenEditor = false;
		Log.LOG = false;
		ShareAction shareAction = new ShareAction(activity);
		shareAction.setDisplayList(SHARE_MEDIA.SINA, SHARE_MEDIA.QQ,
				SHARE_MEDIA.WEIXIN, SHARE_MEDIA.WEIXIN_CIRCLE);
		shareAction.withText(strText);
		shareAction.withTitle(strTitle);
		shareAction.withMedia(image);
		shareAction.withTargetUrl(strUrl);
		SnsListener snsListener = new ShareListener(activity);
		shareAction.setCallback(new UmShareListener(snsListener));
		shareAction.open();
	}

	static class UmShareListener implements UMShareListener {
		private SnsListener mSnsListener;

		public UmShareListener(SnsListener snsListener) {
			this.mSnsListener = snsListener;
		}

		@Override
		public void onCancel(SHARE_MEDIA platform) {
			this.mSnsListener.onComplete(SHARE_CANCEL);

		}

		@Override
		public void onError(SHARE_MEDIA platform, Throwable t) {
			this.mSnsListener.onComplete(SHARE_ERROR);

		}

		@Override
		public void onResult(SHARE_MEDIA platform) {
			mSnsListener.onComplete(SHARE_SUCCESS);

		}
	}

	static class ShareListener implements SnsListener {
		private Activity mActivity;

		public ShareListener(Activity activity) {
			this.mActivity = activity;
		}

		@Override
		public void onComplete(int shareFlag) {
			String mShareMsg = null;
			switch (shareFlag) {
			case ShareUtils.SHARE_SUCCESS:
				mShareMsg = mActivity
						.getString(R.string.umeng_socialize_share_success);
				break;
			case ShareUtils.SHARE_ERROR:
				mShareMsg = mActivity
						.getString(R.string.umeng_socialize_share_error);
				break;
			case ShareUtils.SHARE_CANCEL:
				mShareMsg = mActivity
						.getString(R.string.umeng_socialize_share_cencel);
				break;
			case ShareUtils.SHARE_SCODE:
				mShareMsg = mActivity
						.getString(R.string.everyday_share_success);
				break;
			default:
				mShareMsg = mActivity
						.getString(R.string.umeng_socialize_share_error);
				break;

			}
			Toast.makeText(mActivity, mShareMsg, Toast.LENGTH_LONG).show();
		}

	}

}
