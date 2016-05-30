package com.awesomeproject;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler;


public class BridgeModule extends ReactContextBaseJavaModule{

    public BridgeModule(ReactApplicationContext reactContext) {
        super(reactContext);

    }

    @Override
    public String getName() {
        return "BridgeModule";
    }

    @ReactMethod
    public void startMovieActivity(){
        Intent intent = new Intent(getCurrentActivity(),MovieDetailActivity.class);
        getReactApplicationContext().startActivityForResult(intent,999,new Bundle());
        Log.d("BridgeModule","start activity");
    }
}
