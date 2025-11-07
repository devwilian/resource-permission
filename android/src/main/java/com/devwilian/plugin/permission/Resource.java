package com.devwilian.plugin.permission;

import com.getcapacitor.Logger;

public class Resource {

    public String echo(String value) {
        Logger.info("Echo", value);
        return value;
    }
}
