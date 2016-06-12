package com.awesomeproject;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;

public class BridgeModule extends ReactContextBaseJavaModule{

    public BridgeModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "BridgeModule";
    }

    @ReactMethod
    public void startMovieActivity(ReadableMap readableMap) {
        Log.d("getData",readableMap.toString());
        Intent intent = new Intent(getCurrentActivity(),MovieDetailActivity.class);
        Bundle bundle = new Bundle();
        bundle.putString("movie",readableMap.toString());
        intent.putExtra("movie",bundle);
        getReactApplicationContext().startActivityForResult(intent,999,null);
    }
}
