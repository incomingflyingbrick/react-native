package com.awesomeproject;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.widget.Toast;

import com.facebook.react.LifecycleState;
import com.facebook.react.ReactActivity;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactPackage;
import com.facebook.react.ReactRootView;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.facebook.react.shell.MainReactPackage;

import java.util.Arrays;
import java.util.List;

public class MovieDetailActivity extends ReactActivity {


    @Override
    protected boolean getUseDeveloperSupport() {
        return BuildConfig.DEBUG;
    }

    @Override
    protected String getMainComponentName() {
        return "MovieDetail";
    }

    @Override
    protected String getJSMainModuleName() {
        return "movie.detail";
    }

    @Override
    protected List<ReactPackage> getPackages() {
        return Arrays.asList(new ExampleActvityPackage(),new MainReactPackage());
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        sendData(Arguments.fromBundle(getIntent().getBundleExtra("movie")));
    }


    private void sendData(WritableMap map){
        ContextUtil.reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit("data",map);
    }


}
