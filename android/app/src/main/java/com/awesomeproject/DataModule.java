package com.awesomeproject;

import android.content.Intent;
import android.util.Log;
import android.widget.Toast;

import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.facebook.react.modules.toast.ToastModule;
import com.facebook.react.uimanager.IllegalViewOperationException;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Nullable;

/**
 * Created by umeng on 5/24/16.
 */
public class DataModule extends ReactContextBaseJavaModule {

    private static final String DURATION_SHORT_KEY = "SHORT";
    private static final String DURATION_LONG_KEY = "LONG";

    public DataModule(ReactApplicationContext reactApplicationContext){
        super(reactApplicationContext);
        ContextUtil.reactContext = reactApplicationContext;
        reactApplicationContext.addActivityEventListener(new ActivityEventListener() {
            @Override
            public void onActivityResult(int requestCode, int resultCode, Intent data) {
                Log.d("activity","RequestCode:"+requestCode+" ResultCode:"+requestCode);
            }
        });

    }

    @Override
    public String getName() {
        return "DataModule";
    }

    @Nullable
    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put(DURATION_SHORT_KEY, Toast.LENGTH_SHORT);
        constants.put(DURATION_LONG_KEY, Toast.LENGTH_LONG);
        return super.getConstants();
    }

    @ReactMethod
    public void showData(String message,int duration){
        Log.d("dataModule","making toast");
        Toast.makeText(getReactApplicationContext(),message,duration).show();
        WritableMap map = Arguments.createMap();
        map.putString("data1","mydata");
        map.putString("data2","mydata2");
        sendEvent(getReactApplicationContext(),"keyboardWillShow",map);
//        Log.d("react","sending evernt");
//        Intent intent = new Intent(getReactApplicationContext(),DetailActivity.class);
//        getReactApplicationContext().startActivityForResult(intent,100,null);
    }

    @ReactMethod
    public void measureLayout(int tag, int ancestorTag, Promise callback){
        try {
            WritableMap map = Arguments.createMap();
            map.putInt("data1", 80);
            map.putInt("data2", 99);
            callback.resolve(map);
        }catch(IllegalViewOperationException e){
            callback.reject(e);
        }
    }

    private void sendEvent(ReactContext reactContext,String eventName,WritableMap map){
        reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit(eventName,map);
    }

}
