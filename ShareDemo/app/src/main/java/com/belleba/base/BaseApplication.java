/*
 * Copyright (C) 2015 Belle8
 * 
 * Description of the purpose of this file.
 *
 * @author ZhangZhaohui
 * @version 1.0.0
 */
package com.belleba.base;

import android.app.Application;

import com.belleba.base.umeng.UmengConstant;
import com.umeng.socialize.PlatformConfig;

public class BaseApplication extends Application {

	@Override
	public void onCreate() {
		super.onCreate();
		PlatformConfig.setWeixin(UmengConstant.WEIXIN_APP_ID,
				UmengConstant.WEIXIN_APP_SECRET);
		PlatformConfig.setSinaWeibo(UmengConstant.SINA_APP_KEY,
				UmengConstant.SINA_APP_SECRET);
		PlatformConfig.setQQZone(UmengConstant.QQ_APP_ID,
				UmengConstant.QQ_APP_KEY);
	}

	
}
