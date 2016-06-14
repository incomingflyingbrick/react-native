package com.awesomeproject;

import android.os.Build;
import android.support.annotation.Nullable;

import com.bumptech.glide.Glide;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.uimanager.annotations.ReactProp;



import de.hdodenhof.circleimageview.CircleImageView;


/**
 * Created by umeng on 6/8/16.
 */
public class CircleImageViewManager extends SimpleViewManager<CircleImageView> {
    public static final String REACT_CLASS = "CircleImageView";

    @ReactProp(name = "src")
    public void setSrc(CircleImageView view, @Nullable String src) {
        Glide.with(ContextUtil.context).load(src).centerCrop().placeholder(android.R.mipmap.sym_def_app_icon).into(view);
    }

    @ReactProp(name = "borderRadius", defaultInt = 2)
    public void setBorderRadius(CircleImageView view, int borderRadius) {
        view.setBorderWidth(borderRadius);
    }

    @Override
    public String getName() {
        return REACT_CLASS;
    }


    @Override
    protected CircleImageView createViewInstance(ThemedReactContext reactContext) {
        CircleImageView circleImageView = new CircleImageView(reactContext);
        if(Build.VERSION.SDK_INT>=21){
            circleImageView.setImageDrawable(reactContext.getDrawable(android.R.mipmap.sym_def_app_icon));
        }
        return circleImageView;
    }
}
