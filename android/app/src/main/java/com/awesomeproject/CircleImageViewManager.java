package com.awesomeproject;

import android.support.annotation.Nullable;
import android.util.Log;

import com.bumptech.glide.Glide;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.squareup.picasso.Picasso;


import de.hdodenhof.circleimageview.CircleImageView;


/**
 * Created by umeng on 6/8/16.
 */
public class CircleImageViewManager extends SimpleViewManager<CircleImageView> {
    public static final String REACT_CLASS = "CircleImageView";

    @ReactProp(name = "src")
    public void setSrc(CircleImageView view, @Nullable String src) {
        Picasso.with(ContextUtil.context).load(src).placeholder(android.R.drawable.checkbox_on_background).into(view);
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
        return new CircleImageView(reactContext);
    }
}
