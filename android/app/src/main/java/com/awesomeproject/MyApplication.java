package com.awesomeproject;

import android.app.Application;

/**
 * Created by umeng on 6/14/16.
 */
public class MyApplication extends Application {
    @Override
    public void onCreate() {
        super.onCreate();
        ContextUtil.context = this;
    }
}
