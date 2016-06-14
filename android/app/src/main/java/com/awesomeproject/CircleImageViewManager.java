package com.awesomeproject;

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

    @ReactProp(name = "borderRadius", defaultFloat = 0f)
    public void setBorderRadius(CircleImageView view, float borderRadius) {
        view.setBorderWidth((int)borderRadius);
    }

    @Override
    public String getName() {
        return REACT_CLASS;
    }


    @Override
    protected CircleImageView createViewInstance(ThemedReactContext reactContext) {
        return new CircleImageView(reactContext);
    }
}
